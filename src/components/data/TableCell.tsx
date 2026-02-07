import React from "react"
import { useTableContext } from "./Table"
import { Text } from "../primitives"

/* ======================================================
   Public API
   ====================================================== */

type TableCellProps = {
  children?: React.ReactNode

  /** Horizontal alignment of cell content */
  align?: "left" | "center" | "right"

  /** Whether the cell contains numeric data (affects alignment/typography) */
  numeric?: boolean

  /** Optional click handler (e.g. edit, drilldown) */
  onClick?: () => void
}

/* ======================================================
   Component
   ====================================================== */

/**
 * TableCell
 *
 * Structural wrapper for <td>.
 *
 * Responsibilities:
 * - Apply density-based padding
 * - Apply alignment (including numeric defaults)
 * - Provide a stable container for future editing states
 *
 * Does NOT:
 * - Implement editing logic
 * - Know about column definitions
 * - Depend on a table engine
 */
export function TableCell({
  children,
  align,
  numeric = false,
  onClick,
}: TableCellProps) {
  const { density } = useTableContext()

  const paddingClass = {
    sm: "px-2 py-1",
    md: "px-3 py-2",
    lg: "px-4 py-3",
  }[density]

  const resolvedAlign = align ?? (numeric ? "right" : "left")

  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[resolvedAlign]

  return (
    <td
      onClick={onClick}
      className={[
        paddingClass,
        alignClass,
        "border-b border-border-secondary",
        "!group-hover:text-text-primary",
        onClick ? "cursor-pointer" : null,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children !== undefined && children !== null ? (
        <Text size="body2" hierarchy="secondary">
          {children}
        </Text>
      ) : null}
    </td>
  )
}
