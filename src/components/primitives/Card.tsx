import React from "react"

/* ======================================================
   Public API
   ====================================================== */

type CardProps = {
  children: React.ReactNode
}

/* ======================================================
   Component
   ====================================================== */

/**
 * Card
 *
 * A surface component that provides visual containment
 * via background, border, and padding.
 *
 * Card does NOT:
 * - control internal layout
 * - impose spacing between children
 * - encode content semantics
 *
 * Use Stack (or other layout primitives) inside Card
 * to control rhythm and density.
 */
export function Card({ children }: CardProps) {
  return (
    <div
      className="
        rounded-lg
        border
        border-border-tertiary
        bg-bg-primary
        p-4
      "
    >
      {children}
    </div>
  )
}
