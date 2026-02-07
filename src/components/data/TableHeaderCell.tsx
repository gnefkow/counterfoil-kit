import React from "react"
import { useTableContext } from "./Table"
import { Text } from "../primitives"

/* ======================================================
   Public API
   ====================================================== */

type TableHeaderCellProps = {
  children: React.ReactNode

  /** Horizontal alignment of cell content */
  align?: "left" | "center" | "right"

  /** Whether this column is sortable (visual affordance only) */
  sortable?: boolean

  /** Optional click handler (e.g. sort toggle) */
  onClick?: () => void
}

/* ======================================================
   Component
   ====================================================== */

/**
 * TableHeaderCell
 *
 * Structural wrapper for <th>.
 *
 * Responsibilities:
 * - Apply alignment
 * - Apply density-based padding
 * - Provide visual affordance for sortable columns
 *
 * Does NOT:
 * - Implement sorting logic
 * - Know about sort state
 * - Depend on a table engine
 */
export function TableHeaderCell({
  children,
  align = "left",
  sortable = false,
  onClick,
}: TableHeaderCellProps) {
  const { density } = useTableContext()

  const paddingClass = {
    sm: "px-2 py-1",
    md: "px-3 py-2",
    lg: "px-4 py-3",
  }[density]

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align]

  return (
    <th
      scope="col"
      onClick={onClick}
      className={[
        paddingClass,
        alignClass,
        "font-normal",
        "border-b border-border-secondary",
        sortable ? "cursor-pointer select-none" : null,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Text size="body2" hierarchy="secondary" weight="heavy">
        {children}
      </Text>
    </th>
  )
}
