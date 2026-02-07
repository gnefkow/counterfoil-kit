import React from "react"

/* ======================================================
   Public API
   ====================================================== */

type CheckboxSize = "sm" | "md" | "lg"

type CheckboxProps = {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  size?: CheckboxSize
  name?: string
  value?: string
  onChange?: (checked: boolean, value?: string) => void
}

/* ======================================================
   Component
   ====================================================== */

export function Checkbox({
  checked,
  defaultChecked,
  disabled = false,
  size = "md",
  name,
  value,
  onChange,
}: CheckboxProps) {
  const sizeClass =
    size === "sm"
      ? "h-4 w-4"
      : size === "md"
        ? "h-[18px] w-[18px]"
        : "h-6 w-6"

  const xMarkSizeClass =
    size === "sm"
      ? "before:w-[10px] after:w-[10px] before:h-[2px] after:h-[2px]"
      : size === "md"
        ? "before:w-[11px] after:w-[11px] before:h-[2px] after:h-[2px]"
        : "before:w-[14px] after:w-[14px] before:h-[2px] after:h-[2px]"

  return (
    <input
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={(event) => onChange?.(event.target.checked, value)}
      className={[
        "relative appearance-none rounded border",
        sizeClass,
        "bg-checkbox-bg border-checkbox-border",
        "checked:bg-checkbox-checked-bg checked:border-checkbox-checked-border",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-checkbox focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        // X mark when checked
        "before:content-[''] after:content-['']",
        "before:absolute after:absolute",
        "before:left-1/2 after:left-1/2 before:top-1/2 after:top-1/2",
        "before:-translate-x-1/2 after:-translate-x-1/2 before:-translate-y-1/2 after:-translate-y-1/2",
        "before:rotate-45 after:-rotate-45",
        "before:bg-checkbox-check after:bg-checkbox-check",
        "disabled:before:bg-checkbox-disabled-check disabled:after:bg-checkbox-disabled-check",
        "before:opacity-0 after:opacity-0 checked:before:opacity-100 checked:after:opacity-100",
        xMarkSizeClass,
      ].join(" ")}
    />
  )
}
