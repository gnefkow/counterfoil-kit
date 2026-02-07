import React from "react"

type TextareaProps = {
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  name?: string
  id?: string
  rows?: number

  onChange?: (value: string) => void
}

export function Textarea({
  value,
  defaultValue,
  placeholder,
  disabled = false,
  name,
  id,
  rows = 4,
  onChange,
}: TextareaProps) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      rows={rows}
      onChange={(e) => onChange?.(e.target.value)}
      className={[
        "w-full rounded",
        "bg-input-bg border border-input-border",
        "px-3 py-2",
        "text-body-1 text-text-primary",
        "placeholder:text-input-placeholder",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-input focus-visible:ring-offset-2",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        "resize-y",
      ].join(" ")}
    />
  )
}
