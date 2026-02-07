import fs from "node:fs/promises"
import path from "node:path"

const repoRoot = process.cwd()
const srcRoot = path.join(repoRoot, "src")

async function pathExists(p) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })

  // Detect casing-collisions within a single folder.
  const byLower = new Map()
  for (const ent of entries) {
    const key = ent.name.toLowerCase()
    if (!byLower.has(key)) byLower.set(key, [])
    byLower.get(key).push(ent.name)
  }

  const collisions = []
  for (const [lower, names] of byLower.entries()) {
    const unique = Array.from(new Set(names))
    if (unique.length > 1) collisions.push({ lower, names: unique })
  }

  const files = []
  const dirs = []
  for (const ent of entries) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) dirs.push(full)
    if (ent.isFile()) files.push(full)
  }

  const nested = []
  for (const d of dirs) nested.push(...(await walk(d)))

  return [{ dir, collisions, files }, ...nested]
}

function findDuplicateNamedExports(sourceText) {
  const re = /export function\s+([A-Za-z0-9_]+)\s*\(/g
  const counts = new Map()
  let match
  while ((match = re.exec(sourceText))) {
    const name = match[1]
    counts.set(name, (counts.get(name) ?? 0) + 1)
  }

  return Array.from(counts.entries())
    .filter(([, count]) => count > 1)
    .map(([name, count]) => ({ name, count }))
}

function countOccurrences(sourceText, needle) {
  return sourceText.split(needle).length - 1
}

async function main() {
  const errors = []

  // 1) Required canonical component files that have repeatedly “vanished”.
  const requiredFiles = [
    "src/components/primitives/Text.tsx",
    "src/components/form/Textarea.tsx",
  ].map((p) => path.join(repoRoot, p))

  for (const f of requiredFiles) {
    if (!(await pathExists(f))) {
      errors.push(
        `Missing required file: ${path.relative(repoRoot, f)} (this will break imports)`,
      )
    }
  }

  // 2) Folder-level casing collisions (e.g. Text.tsx vs text.tsx).
  if (await pathExists(srcRoot)) {
    const walked = await walk(srcRoot)
    for (const node of walked) {
      for (const c of node.collisions) {
        errors.push(
          `Casing collision in ${path.relative(repoRoot, node.dir)}: ${c.names.join(
            " vs ",
          )}`,
        )
      }
    }

    // 3) In-file duplication signatures that caused the “already been declared” crashes.
    for (const node of walked) {
      for (const file of node.files) {
        if (!file.endsWith(".ts") && !file.endsWith(".tsx")) continue

        const text = await fs.readFile(file, "utf8")

        const reactImportCount = Math.max(
          countOccurrences(text, 'import React from "react"'),
          countOccurrences(text, "import React from 'react'"),
        )

        if (reactImportCount > 1) {
          errors.push(
            `Duplicate React import (${reactImportCount}x) in ${path.relative(
              repoRoot,
              file,
            )}`,
          )
        }

        const dupExports = findDuplicateNamedExports(text)
        for (const d of dupExports) {
          errors.push(
            `Duplicate export function "${d.name}" (${d.count}x) in ${path.relative(
              repoRoot,
              file,
            )}`,
          )
        }
      }
    }
  }

  if (errors.length > 0) {
    console.error("\nComponent integrity check failed:\n")
    for (const e of errors) console.error(`- ${e}`)
    console.error(
      "\nFix the above issues (usually casing/duplicate content) and re-run.\n",
    )
    process.exit(1)
  }

  console.log("Component integrity check passed.")
}

main().catch((err) => {
  console.error("Validator crashed:", err)
  process.exit(1)
})

