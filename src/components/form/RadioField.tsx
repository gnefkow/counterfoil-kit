import React from "react"

import { Radio } from "./Radio"
import { Inline, Stack, Text } from "../primitives"

/* ======================================================
   Public API
   ====================================================== */

type RadioFieldProps = {
  /** Primary label for the radio option */
  label: string

  /** Optional supporting text shown below the label */
  description?: string

  /** Optional help text (non-error guidance) */
  helpText?: string

  /** Optional error text (validation feedback) */
  errorText?: string

  /** Optional icon shown next to the label */
  icon?: React.ReactNode

  /** Radio control props */
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  name?: string
  value?: string
  size?: "sm" | "md" | "lg"

  /** Change handler */
  onChange?: (checked: boolean, value?: string) => void
}

/* ======================================================
   Component
   ====================================================== */

/**
 * RadioField
 *
 * A form field wrapper that composes a Radio control
 * with label, supporting text, help text, and error text.
 *
 * Responsibilities:
 * - Layout and spacing
 * - Text hierarchy
 * - Accessibility-friendly composition
 *
 * Does NOT:
 * - Manage radio group logic
 * - Enforce mutual exclusivity
 * - Perform validation logic
 */
export function RadioField({
  label,
  description,
  helpText,
  errorText,
  icon,

  checked,
  defaultChecked,
  disabled = false,
  name,
  value,
  size = "md",
  onChange,
}: RadioFieldProps) {
  const hasError = Boolean(errorText)

  return (
    <Stack gap="xs">
      <label
        className={[
          "inline-flex",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
        ].join(" ")}
      >
        <Inline gap="sm" align="start">
          <Radio
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            name={name}
            value={value}
            size={size}
            onChange={onChange}
          />

          <Stack gap="xs">
            <Inline gap="xs" align="center">
              {icon ? <span>{icon}</span> : null}

              <Text
                size="body1"
                hierarchy={disabled ? "tertiary" : "primary"}
                weight="normal"
              >
                {label}
              </Text>
            </Inline>

            {description ? (
              <Text size="body2" hierarchy="secondary">
                {description}
              </Text>
            ) : null}
          </Stack>
        </Inline>
      </label>

      {helpText && !hasError ? (
        <Text size="body2" hierarchy="tertiary">
          {helpText}
        </Text>
      ) : null}

      {hasError ? (
        <Text size="body2" hierarchy="primary">
          {errorText}
        </Text>
      ) : null}
    </Stack>
  )
}
