import React from "react"

type TextHierarchy = "primary" | "secondary" | "tertiary" | "quaternary"

type TextSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2"

type TextWeight = "normal" | "heavy"

type TextProps = {
  children: React.ReactNode
  hierarchy?: TextHierarchy
  size?: TextSize
  weight?: TextWeight
  className?: string
}

export function Text({
  children,
  hierarchy = "primary",
  size = "body1",
  weight = "normal",
  className,
}: TextProps) {
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
    <p className={[hierarchyClass, sizeClass, weightClass, className].filter(Boolean).join(" ")}>
      {children}
    </p>
  )
}
