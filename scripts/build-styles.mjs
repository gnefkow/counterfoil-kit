#!/usr/bin/env node

/**
 * Build script to copy CSS files to dist
 * This ensures styles are available for library consumers
 * 
 * Note: semanticTokens.css is pure CSS and can be used directly.
 * base.css contains Tailwind directives and should be processed
 * by the consuming application's Tailwind setup.
 */

import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const repoRoot = join(__dirname, "..")

// Ensure dist directory exists
const distDir = join(repoRoot, "dist")
mkdirSync(distDir, { recursive: true })

// Copy semantic tokens (pure CSS, ready to use)
copyFileSync(
  join(repoRoot, "src/styles/semanticTokens.css"),
  join(distDir, "semanticTokens.css")
)

// Copy base.css (contains Tailwind directives - needs processing by consuming app)
copyFileSync(
  join(repoRoot, "src/styles/base.css"),
  join(distDir, "base.css")
)

// Create a combined file that includes semantic tokens
// Note: base.css will need Tailwind processing in the consuming app
const semanticTokens = readFileSync(
  join(repoRoot, "src/styles/semanticTokens.css"),
  "utf-8"
)
const base = readFileSync(join(repoRoot, "src/styles/base.css"), "utf-8")

// Combined file (for convenience, but base.css still needs Tailwind processing)
const combinedStyles = semanticTokens + "\n\n" + base
writeFileSync(join(distDir, "styles.css"), combinedStyles)

console.log("✓ Built CSS files:")
console.log("  - dist/semanticTokens.css (ready to use)")
console.log("  - dist/base.css (needs Tailwind processing)")
console.log("  - dist/styles.css (combined, base.css still needs Tailwind)")
