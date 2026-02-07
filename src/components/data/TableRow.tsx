import React from "react"
import { useTableContext } from "./Table"

/* ======================================================
   Public API
   ====================================================== */

type TableRowProps = {
  children: React.ReactNode

  /** Whether the row is selected (visual state only) */
  selected?: boolean

  /** Whether the row is interactive (hover affordance) */
  interactive?: boolean

  /** Optional click handler */
  onClick?: () => void
}

/* ======================================================
   Component
   ====================================================== */

/**
 * TableRow
 *
 * Structural wrapper for <tr>.
 *
 * Responsibilities:
 * - Apply density-based spacing via context
 * - Handle hover / selected visual states
 * - Optionally support interaction
 *
 * Does NOT:
 * - Know about data or row identity
 * - Manage selection logic
 * - Depend on a table engine
 */
export function TableRow({
  children,
  selected = false,
  interactive = false,
  onClick,
}: TableRowProps) {
  const { density } = useTableContext()

  const densityClass = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  }[density]

  return (
    <tr
      onClick={onClick}
      className={[
        densityClass,
        "border-b border-border-secondary",
        "bg-bg-primary text-text-secondary",
        "group hover:bg-bg-primary-hover hover:text-text-primary",
        selected ? "bg-bg-secondary" : null,
        interactive ? "cursor-pointer" : null,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </tr>
  )
}
