import React from "react"

/* ======================================================
   Public API
   ====================================================== */

type InputProps = {
  type?: "text" | "email" | "password" | "number" | "search"
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  name?: string
  id?: string

  onChange?: (value: string) => void
}

/* ======================================================
   Component
   ====================================================== */

/**
 * Input
 *
 * Low-level text input control.
 * Handles visuals, focus, disabled state.
 *
 * Does NOT:
 * - Render labels
 * - Render help or error text
 * - Manage layout
 */
export function Input({
  type = "text",
  value,
  defaultValue,
  placeholder,
  disabled = false,
  name,
  id,
  onChange,
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
      className={[
        "w-full rounded",
        "bg-input-bg border border-input-border",
        "px-3 py-2",
        "text-body-1 text-text-primary",
        "placeholder:text-input-placeholder",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-input focus-visible:ring-offset-2",
        "disabled:opacity-60 disabled:cursor-not-allowed",
      ].join(" ")}
    />
  )
}
