import React from "react"
import { useTableContext } from "./Table"

/* ======================================================
   Public API
   ====================================================== */

type TableFooterProps = {
  children: React.ReactNode
}

/* ======================================================
   Component
   ====================================================== */

/**
 * TableFooter
 *
 * Structural wrapper for <tfoot>.
 *
 * Responsibilities:
 * - Provide a semantic footer section for totals / summaries
 * - Apply consistent border and background treatment
 *
 * Does NOT:
 * - Perform aggregation or math
 * - Know about column definitions or engines
 */
export function TableFooter({ children }: TableFooterProps) {
  const { density } = useTableContext()

  const paddingClass = {
    sm: "text-body-2",
    md: "text-body-2",
    lg: "text-body-1",
  }[density]

  return (
    <tfoot
      className={[
        "border-t border-border-secondary",
        "bg-bg-secondary",
        paddingClass,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </tfoot>
  )
}
