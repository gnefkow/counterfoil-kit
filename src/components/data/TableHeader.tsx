import React from "react"
import { useTableContext } from "./Table"

/* ======================================================
   Public API
   ====================================================== */

type TableHeaderProps = {
  children: React.ReactNode
}

/* ======================================================
   Component
   ====================================================== */

/**
 * TableHeader
 *
 * Structural wrapper for <thead>.
 *
 * Responsibilities:
 * - Applies sticky positioning when enabled by Table
 * - Ensures header background covers content beneath
 *
 * Does NOT:
 * - Know about sorting
 * - Render header cells
 * - Depend on a table engine
 */
export function TableHeader({ children }: TableHeaderProps) {
  const { stickyHeader } = useTableContext()

  return (
    <thead
      className={[
        stickyHeader
          ? "sticky top-0 z-10 bg-bg-primary"
          : null,
        "border-b border-border-secondary",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </thead>
  )
}
