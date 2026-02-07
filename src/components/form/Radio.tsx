import React from "react"

/* ======================================================
   Public API
   ====================================================== */

type RadioSize = "sm" | "md" | "lg"

type RadioProps = {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  size?: RadioSize
  name?: string
  value?: string
  onChange?: (checked: boolean, value?: string) => void
}

/* ======================================================
   Component
   ====================================================== */

export function Radio({
  checked,
  defaultChecked,
  disabled = false,
  size = "md",
  name,
  value,
  onChange,
}: RadioProps) {
  const sizeClass =
    size === "sm"
      ? "h-4 w-4"
      : size === "md"
        ? "h-[18px] w-[18px]"
        : "h-6 w-6"

  const dotSizeClass =
    size === "sm"
      ? "before:h-[8px] before:w-[8px]"
      : size === "md"
        ? "before:h-[9px] before:w-[9px]"
        : "before:h-[12px] before:w-[12px]"

  return (
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={(event) => onChange?.(event.target.checked, value)}
      className={[
        "relative appearance-none rounded-full border",
        sizeClass,
        "bg-radio-bg border-radio-border",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-radio focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        // dot when checked
        "before:content-[''] before:absolute",
        "before:left-1/2 before:top-1/2",
        "before:-translate-x-1/2 before:-translate-y-1/2",
        "before:rounded-full",
        "before:bg-radio-dot",
        "before:opacity-0 checked:before:opacity-100",
        "disabled:before:bg-radio-disabled-dot",
        "disabled:bg-radio-disabled-bg disabled:border-radio-disabled-border",
        dotSizeClass,
      ].join(" ")}
    />
  )
}

