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
   Gap map
   Uses CSS variables so apps can override for denser/looser spacing.
   Defaults defined in semanticTokens.css.
   ====================================================== */

const gapVars: Record<InlineGap, string> = {
  xs: "var(--gap-xs)",
  sm: "var(--gap-sm)",
  m: "var(--gap-m)",
  lg: "var(--gap-lg)",
  xl: "var(--gap-xl)",
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
      className={["flex flex-row", alignClasses[align]].join(" ")}
      style={{ gap: gapVars[gap] }}
    >
      {children}
    </div>
  )
}
