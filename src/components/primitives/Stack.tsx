import React from "react"

/* ======================================================
   Public API
   ====================================================== */

type StackGap = "xs" | "sm" | "m" | "lg" | "xl"

type StackProps = {
  children: React.ReactNode
  gap?: StackGap
  className?: string
}

/* ======================================================
   Gap map
   Uses CSS variables so apps can override for denser/looser spacing.
   Defaults defined in semanticTokens.css.
   ====================================================== */

const gapVars: Record<StackGap, string> = {
  xs: "var(--gap-xs)",
  sm: "var(--gap-sm)",
  m: "var(--gap-m)",
  lg: "var(--gap-lg)",
  xl: "var(--gap-xl)",
}

/* ======================================================
   Component
   ====================================================== */

export function Stack({ children, gap = "m", className }: StackProps) {
  return (
    <div
      className={["flex flex-col", className].filter(Boolean).join(" ")}
      style={{ gap: gapVars[gap] }}
    >
      {children}
    </div>
  )
}
