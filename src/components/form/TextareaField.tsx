import React from "react"

import { Textarea } from "./Textarea"
import { Inline, Stack, Text } from "../primitives"

/* ======================================================
   Public API
   ====================================================== */

type TextareaFieldProps = {
  label: string
  description?: string
  helpText?: string
  errorText?: string
  icon?: React.ReactNode

  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  name?: string
  id?: string
  rows?: number

  onChange?: (value: string) => void
}

/* ======================================================
   Component
   ====================================================== */

/**
 * TextareaField
 *
 * Field wrapper for Textarea.
 */
export function TextareaField({
  label,
  description,
  helpText,
  errorText,
  icon,

  value,
  defaultValue,
  placeholder,
  disabled = false,
  name,
  id,
  rows,
  onChange,
}: TextareaFieldProps) {
  const hasError = Boolean(errorText)

  return (
    <Stack gap="xs">
      <Stack gap="xs">
        <Inline gap="xs" align="center">
          {icon ? <span>{icon}</span> : null}

          <Text size="body1" hierarchy={disabled ? "tertiary" : "primary"}>
            {label}
          </Text>
        </Inline>

        {description ? (
          <Text size="body2" hierarchy="secondary">
            {description}
          </Text>
        ) : null}
      </Stack>

      <Textarea
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        onChange={onChange}
      />

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
