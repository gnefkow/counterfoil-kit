import React from "react"

/* ======================================================
   Public API
   ====================================================== */

type TextHierarchy = "primary" | "secondary" | "tertiary" | "quaternary"

type TextSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2"

type TextWeight = "normal" | "heavy"

type TextElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label" | "div"

type TextProps = {
  children: React.ReactNode
  hierarchy?: TextHierarchy
  size?: TextSize
  weight?: TextWeight
  /** Override the rendered HTML element. Defaults based on size (h1→h1, body1→span, etc.) */
  as?: TextElement
  className?: string
}

/* ======================================================
   Default element map
   Headings render as semantic heading elements.
   Body sizes render as neutral spans (no margin, inline).
   ====================================================== */

const defaultElement: Record<TextSize, TextElement> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "span",
  body2: "span",
}

/* ======================================================
   Component
   ====================================================== */

export function Text({
  children,
  hierarchy = "primary",
  size = "body1",
  weight = "normal",
  as,
  className,
}: TextProps) {
  const Element = as ?? defaultElement[size]

  const hierarchyClass = {
    primary: "text-text-primary",
    secondary: "text-text-secondary",
    tertiary: "text-text-tertiary",
    quaternary: "text-text-quaternary",
  }[hierarchy]

  const sizeClass = {
    h1: "text-h-1",
    h2: "text-h-2",
    h3: "text-h-3",
    h4: "text-h-4",
    h5: "text-h-5",
    h6: "text-h-6",
    body1: "text-body-1",
    body2: "text-body-2",
  }[size]

  const weightClass = weight === "heavy" ? "font-heavy" : "font-normal"

  return (
    <Element className={["m-0", hierarchyClass, sizeClass, weightClass, className].filter(Boolean).join(" ")}>
      {children}
    </Element>
  )
}
