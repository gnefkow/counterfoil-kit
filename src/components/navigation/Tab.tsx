import React from "react"

/* ======================================================
   Public API
   ====================================================== */

type TabSize = "sm" | "md" | "lg"

type TabProps = {
  label: string
  selected?: boolean
  disabled?: boolean
  size?: TabSize
  icon?: React.ReactNode
  /** Position of the icon relative to text. Defaults to 'left'. Ignored if leftIcon or rightIcon are provided. */
  iconPosition?: "left" | "right"
  /** Optional icon to display on the left side of text. Takes precedence over icon + iconPosition. */
  leftIcon?: React.ReactNode
  /** Optional icon to display on the right side of text. Takes precedence over icon + iconPosition. */
  rightIcon?: React.ReactNode
  onSelect?: () => void
}

/* ======================================================
   Component
   ====================================================== */

/**
 * Tab
 *
 * A single navigation tab.
 * Visual state is controlled by `selected`.
 * Icons are optional and can be swapped out.
 * Typography is component-specific and doesn't inherit from Text component.
 */
export function Tab({
  label,
  selected = false,
  disabled = false,
  size = "md",
  icon,
  iconPosition = "left",
  leftIcon,
  rightIcon,
  onSelect,
}: TabProps) {
  const sizeClasses: Record<TabSize, string> = {
    sm: "text-tab-sm px-[var(--tab-padding-x-sm)] py-[var(--tab-padding-y-sm)]",
    md: "text-tab-md px-[var(--tab-padding-x-md)] py-[var(--tab-padding-y-md)]",
    lg: "text-tab-lg px-[var(--tab-padding-x-lg)] py-[var(--tab-padding-y-lg)]",
  }

  const borderClasses = selected
    ? "border-t-0 border-l-0 border-r-0 border-b border-b-[length:var(--tab-border-width)] border-b-[var(--tab-border-selected)]" // Explicitly set top/left/right to 0, bottom with fg-primary
    : "border-t-0 border-l-0 border-r-0 border-b border-b-[length:var(--tab-border-width)] border-b-[var(--tab-border-default)]" // Explicitly set top/left/right to 0, bottom for unselected

  const textColor = selected
    ? "text-[var(--tab-text-selected)]"
    : "text-[var(--tab-text-default)]"

  const fontWeight = selected
    ? "font-[var(--tab-font-weight-heavy)]"
    : "font-[var(--tab-font-weight-normal)]"

  const iconColor = selected
    ? "text-[var(--tab-icon-selected)]"
    : "text-[var(--tab-icon-default)]"

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onSelect}
      className={[
        "relative",
        "inline-flex items-center gap-[var(--tab-icon-gap)]",
        "font-ui",
        "bg-transparent",
        "border-0", // Reset all borders first
        borderClasses, // Then apply bottom border only
        sizeClasses[size],
        textColor,
        fontWeight,
        "hover:bg-[var(--tab-bg-hover)]",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tab-focus-ring)] focus-visible:ring-offset-2",
        "transition-colors duration-150",
      ].join(" ")}
    >
      {/* Determine which icons to render - leftIcon and rightIcon take precedence */}
      {leftIcon ? (
        <span className={`inline-flex items-center ${iconColor}`} aria-hidden="true">{leftIcon}</span>
      ) : icon && iconPosition === "left" ? (
        <span className={`inline-flex items-center ${iconColor}`} aria-hidden="true">{icon}</span>
      ) : null}
      <span className="inline-flex items-center">{label}</span>
      {rightIcon ? (
        <span className={`inline-flex items-center ${iconColor}`} aria-hidden="true">{rightIcon}</span>
      ) : icon && iconPosition === "right" ? (
        <span className={`inline-flex items-center ${iconColor}`} aria-hidden="true">{icon}</span>
      ) : null}
    </button>
  )
}
