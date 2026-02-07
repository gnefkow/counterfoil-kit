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
   Class map
   "gap" comes from tailwindcss. It's a utility class that sets the gap between items.
   gap-1 is 4px, or .25rem, gap-2 is 8px, or .5rem, gap-4 is 16px(1rem), or 1rem, gap-6 is 24px, or 1.5rem, gap-8 is 32px, or 2rem.
   ====================================================== */

const gapClasses: Record<StackGap, string> = {
  xs: "gap-1",
  sm: "gap-2",
  m: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
}

/* ======================================================
   Component
   ====================================================== */

export function Stack({ children, gap = "m", className }: StackProps) {
  return (
    <div className={[`flex flex-col ${gapClasses[gap]}`, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  )
}
