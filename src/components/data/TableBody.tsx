import React from "react"

/* ======================================================
   Public API
   ====================================================== */

type TableBodyProps = {
  children: React.ReactNode
}

/* ======================================================
   Component
   ====================================================== */

/**
 * TableBody
 *
 * Structural wrapper for <tbody>.
 *
 * Responsibilities:
 * - Provide a clear semantic boundary for table rows
 *
 * Does NOT:
 * - Apply layout or styling decisions
 * - Know about data, state, or engines
 */
export function TableBody({ children }: TableBodyProps) {
  return <tbody>{children}</tbody>
}
