import React, { useEffect, useRef } from "react"

/* ======================================================
   Public API
   ====================================================== */

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "link"
  | "destructive-primary"
  | "destructive-secondary"

type ButtonSize = "sm" | "md" | "lg" | "2xl"

type ButtonWidth = "hug" | "fill"

type ButtonProps = {
  children?: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  width?: ButtonWidth
  disabled?: boolean
  onClick?: () => void
  /** Optional icon to display. Can be positioned left or right of text. */
  icon?: React.ReactNode
  /** Position of the icon relative to text. Defaults to 'left'. Ignored if leftIcon or rightIcon are provided. */
  iconPosition?: "left" | "right"
  /** Optional icon to display on the left side of text. Takes precedence over icon + iconPosition. */
  leftIcon?: React.ReactNode
  /** Optional icon to display on the right side of text. Takes precedence over icon + iconPosition. */
  rightIcon?: React.ReactNode
  /** Accessibility label for icon-only buttons */
  "aria-label"?: string
}

/* ======================================================
   Class maps
   ====================================================== */

/**
 * Base button behavior shared by all variants.
 * No colors, no sizes — just interaction and layout.
 */
const baseClasses =
  "inline-flex items-center justify-center gap-[var(--button-icon-gap)] rounded-[var(--button-border-radius)] border-0 " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "transition-colors duration-150"

/* ---------- Variant styles ---------- */

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] " +
    "hover:bg-[var(--button-primary-bg-hover)] " +
    "active:bg-[var(--button-primary-bg-active)] " +
    "focus-visible:ring-button-primary",

  secondary:
    "bg-[var(--button-secondary-bg)] text-[var(--button-secondary-text)] " +
    "!border border-[var(--button-secondary-border)] " +
    "hover:bg-[var(--button-secondary-bg-hover)] " +
    "active:bg-[var(--button-secondary-bg-active)] " +
    "focus-visible:ring-button-secondary",

  tertiary:
    "bg-[var(--button-tertiary-bg)] text-[var(--button-tertiary-text)] " +
    "hover:bg-[var(--button-tertiary-bg-hover)] " +
    "active:bg-[var(--button-tertiary-bg-active)] " +
    "focus-visible:ring-button-tertiary",

  quaternary:
    "bg-[var(--button-quaternary-bg)] text-[var(--button-quaternary-text)] " +
    "hover:bg-[var(--button-quaternary-bg-hover)] " +
    "active:bg-[var(--button-quaternary-bg-active)] " +
    "focus-visible:ring-button-quaternary",

  link:
    "text-[var(--button-link-text)] underline-offset-4 " +
    "hover:underline hover:text-[var(--button-link-text-hover)] " +
    "focus-visible:ring-transparent",

  "destructive-primary":
    "bg-[var(--button-destructive-primary-bg)] text-[var(--button-destructive-primary-text)] " +
    "hover:bg-[var(--button-destructive-primary-bg-hover)] " +
    "active:bg-[var(--button-destructive-primary-bg-active)] " +
    "focus-visible:ring-button-destructive",

  "destructive-secondary":
    "border border-[var(--button-destructive-secondary-border)] " +
    "text-[var(--button-destructive-secondary-text)] " +
    "hover:bg-[var(--button-destructive-secondary-bg-hover)] " +
    "active:bg-[var(--button-destructive-secondary-bg-active)] " +
    "focus-visible:ring-button-destructive",
}

/* ---------- Disabled variant styles ---------- */

const disabledVariantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--button-primary-bg-disabled)] text-[var(--button-primary-text-disabled)]",

  secondary:
    "bg-[var(--button-secondary-bg-disabled)] " +
    "text-[var(--button-secondary-text-disabled)] " +
    "!border border-[var(--button-secondary-border-disabled)]",

  tertiary:
    "bg-[var(--button-tertiary-bg-disabled)] text-[var(--button-tertiary-text-disabled)]",

  quaternary:
    "bg-[var(--button-quaternary-bg-disabled)] text-[var(--button-quaternary-text-disabled)]",

  link: "text-[var(--button-link-text-disabled)] no-underline",

  "destructive-primary":
    "bg-[var(--button-destructive-primary-bg-disabled)] " +
    "text-[var(--button-destructive-primary-text-disabled)]",

  "destructive-secondary":
    "bg-[var(--button-destructive-secondary-bg-disabled)] " +
    "text-[var(--button-destructive-secondary-text-disabled)] " +
    "border-[var(--button-destructive-secondary-border-disabled)]",
}

/* ---------- Size styles ---------- */

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-button-sm px-[var(--button-padding-x-sm)] py-[var(--button-padding-y-sm)]",
  md: "text-button-md px-[var(--button-padding-x-md)] py-[var(--button-padding-y-md)]",
  lg: "text-button-lg px-[var(--button-padding-x-lg)] py-[var(--button-padding-y-lg)]",
  "2xl": "text-button-2xl px-[var(--button-padding-x-2xl)] py-[var(--button-padding-y-2xl)]",
}

/* ---------- Icon-only size styles (circular buttons with equal padding) ---------- */

const iconOnlySizeClasses: Record<ButtonSize, string> = {
  sm: "p-[var(--button-icon-only-padding-sm)] aspect-square",
  md: "p-[var(--button-icon-only-padding-md)] aspect-square",
  lg: "p-[var(--button-icon-only-padding-lg)] aspect-square",
  "2xl": "p-[var(--button-icon-only-padding-2xl)] aspect-square",
}

/* ---------- Width styles ---------- */

const widthClasses: Record<ButtonWidth, string> = {
  hug: "w-auto",
  fill: "w-full",
}

/* ---------- Disabled ---------- */

const disabledClasses = "cursor-not-allowed pointer-events-none"

/* ======================================================
   Component
   ====================================================== */

export function Button({
  children,
  variant = "primary",
  size = "md",
  width = "hug",
  disabled = false,
  onClick,
  icon,
  iconPosition = "left",
  leftIcon,
  rightIcon,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Determine which icons to render
  // leftIcon and rightIcon take precedence over icon + iconPosition
  const leftIconElement = leftIcon ? (
    <span className="inline-flex items-center" aria-hidden="true">
      {leftIcon}
    </span>
  ) : icon && iconPosition === "left" ? (
    <span className="inline-flex items-center" aria-hidden="true">
      {icon}
    </span>
  ) : null

  const rightIconElement = rightIcon ? (
    <span className="inline-flex items-center" aria-hidden="true">
      {rightIcon}
    </span>
  ) : icon && iconPosition === "right" ? (
    <span className="inline-flex items-center" aria-hidden="true">
      {icon}
    </span>
  ) : null

  // Detect if button is icon-only (no children text, only icons)
  const isIconOnly = !children || (typeof children === "string" && children.trim() === "")

  // Use icon-only classes if button is icon-only, otherwise use regular size classes
  const sizeClass = isIconOnly ? iconOnlySizeClasses[size] : sizeClasses[size]

  const finalClassName = [
    baseClasses,
    disabled ? disabledVariantClasses[variant] : variantClasses[variant],
    sizeClass,
    widthClasses[width],
    disabled && disabledClasses,
  ]
    .filter(Boolean)
    .join(" ")

  // Debug logging to help diagnose padding issues
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "development" &&
      buttonRef.current
    ) {
      const paddingXToken = `--button-padding-x-${size}`
      const paddingYToken = `--button-padding-y-${size}`
      const iconOnlyPaddingToken = `--button-icon-only-padding-${size}`
      const paddingXValue = getComputedStyle(document.documentElement)
        .getPropertyValue(paddingXToken)
        .trim()
      const paddingYValue = getComputedStyle(document.documentElement)
        .getPropertyValue(paddingYToken)
        .trim()
      const iconOnlyPaddingValue = getComputedStyle(document.documentElement)
        .getPropertyValue(iconOnlyPaddingToken)
        .trim()

      const computedStyles = window.getComputedStyle(buttonRef.current)
      const computedPaddingTop = computedStyles.paddingTop
      const computedPaddingRight = computedStyles.paddingRight
      const computedPaddingBottom = computedStyles.paddingBottom
      const computedPaddingLeft = computedStyles.paddingLeft

      console.log(`[Button Debug] size=${size}, variant=${variant}, isIconOnly=${isIconOnly}`, {
        className: finalClassName,
        paddingTokens: {
          [`${paddingXToken}`]: paddingXValue || "NOT FOUND",
          [`${paddingYToken}`]: paddingYValue || "NOT FOUND",
          [`${iconOnlyPaddingToken}`]: iconOnlyPaddingValue || "NOT FOUND",
        },
        computedPadding: {
          top: computedPaddingTop,
          right: computedPaddingRight,
          bottom: computedPaddingBottom,
          left: computedPaddingLeft,
        },
        hasPaddingX: finalClassName.includes(`px-[var(--button-padding-x-${size})]`),
        hasPaddingY: finalClassName.includes(`py-[var(--button-padding-y-${size})]`),
        hasIconOnlyPadding: finalClassName.includes(`p-[var(--button-icon-only-padding-${size})]`),
      })
    }
  }, [size, variant, finalClassName, isIconOnly])

  return (
    <button
      ref={buttonRef}
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={finalClassName}
      aria-label={ariaLabel}
    >
      {leftIconElement}
      {children}
      {rightIconElement}
    </button>
  )
}
