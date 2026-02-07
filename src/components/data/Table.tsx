import React, { createContext, useContext } from "react"

/* ======================================================
   Context
   ====================================================== */

type TableContextValue = {
  stickyHeader: boolean
  density: "sm" | "md" | "lg"
}

const TableContext = createContext<TableContextValue | null>(null)

export function useTableContext() {
  const ctx = useContext(TableContext)
  if (!ctx) {
    throw new Error("Table components must be used inside <Table>")
  }
  return ctx
}

/* ======================================================
   Public API
   ====================================================== */

type TableProps = {
  /** Enables sticky table header */
  stickyHeader?: boolean

  /** Controls row/cell density */
  density?: "sm" | "md" | "lg"

  /** Enables vertical scrolling when content exceeds this height */
  maxHeight?: number | string

  /** Children should be TableHeader / TableBody / etc */
  children: React.ReactNode
}

/* ======================================================
   Component
   ====================================================== */

/**
 * Table
 *
 * Structural root for tabular data.
 *
 * Responsibilities:
 * - Provides scroll container (optional)
 * - Enables sticky header behavior
 * - Defines table density
 * - Supplies context to child components
 *
 * Does NOT:
 * - Know about data
 * - Perform sorting/filtering
 * - Depend on any table engine
 */
export function Table({
  stickyHeader = false,
  density = "md",
  maxHeight,
  children,
}: TableProps) {
  const contextValue: TableContextValue = {
    stickyHeader,
    density,
  }

  const containerStyle =
    maxHeight !== undefined
      ? { maxHeight, overflowY: "auto" as const }
      : undefined

  return (
    <TableContext.Provider value={contextValue}>
      <div
        style={containerStyle}
        className={[
          "w-full",
          maxHeight ? "overflow-y-auto" : null,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <table
          className={[
            "w-full",
            "border-collapse",
            "text-body-2 text-text-primary",
          ].join(" ")}
        >
          {children}
        </table>
      </div>
    </TableContext.Provider>
  )
}
