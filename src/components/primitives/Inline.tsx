import React from "react"

/* ======================================================
   Public API
   ====================================================== */

type InlineGap = "xs" | "sm" | "m" | "lg" | "xl"

type InlineAlign = "start" | "center" | "end" | "baseline"

type InlineProps = {
  children: React.ReactNode
  gap?: InlineGap
  align?: InlineAlign
}

/* ======================================================
   Class maps
   ====================================================== */

const gapClasses: Record<InlineGap, string> = {
  xs: "gap-1",
  sm: "gap-2",
  m: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
}

const alignClasses: Record<InlineAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
}

/* ======================================================
   Component
   ====================================================== */

/**
 * Inline
 *
 * A horizontal layout primitive for arranging items in a row
 * with consistent spacing and alignment.
 *
 * Inline does NOT:
 * - wrap content responsively
 * - manage layout breakpoints
 * - impose sizing or density beyond gap
 *
 * Use Inline to express horizontal relationships,
 * especially for mixed content (text + buttons, icons, etc).
 */
export function Inline({
  children,
  gap = "m",
  align = "center",
}: InlineProps) {
  return (
    <div
      className={[
        "flex flex-row",
        gapClasses[gap],
        alignClasses[align],
      ].join(" ")}
    >
      {children}
    </div>
  )
}
