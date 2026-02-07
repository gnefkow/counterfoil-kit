import React from "react"
import { useTableContext } from "./Table"
import { Stack, Text } from "../primitives"

type TableEmptyStateProps = {
  /** Number of columns to span across */
  colSpan: number

  /** Primary empty-state message */
  title: string

  /** Optional supporting message */
  description?: string

  /** Optional icon shown above title */
  icon?: React.ReactNode
}

/**
 * TableEmptyState
 *
 * A semantic empty state row to render inside <TableBody>.
 *
 * Responsibilities:
 * - Provide a single row spanning all columns
 * - Apply density-aware padding
 * - Keep visuals token-driven and table-safe
 */
export function TableEmptyState({
  colSpan,
  title,
  description,
  icon,
}: TableEmptyStateProps) {
  const { density } = useTableContext()

  const paddingClass = {
    sm: "px-2 py-6",
    md: "px-3 py-8",
    lg: "px-4 py-10",
  }[density]

  return (
    <tr className="border-b border-border-secondary">
      <td colSpan={colSpan} className={[paddingClass, "bg-bg-secondary"].join(" ")}>
        <div className="flex justify-center">
          <Stack gap="xs">
            {icon ? <div className="flex justify-center">{icon}</div> : null}
            <Text size="body1" hierarchy="primary" weight="heavy">
              {title}
            </Text>
            {description ? (
              <Text size="body2" hierarchy="tertiary">
                {description}
              </Text>
            ) : null}
          </Stack>
        </div>
      </td>
    </tr>
  )
}
