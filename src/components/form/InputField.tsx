import React from "react"

import { Input } from "./Input"
import { Inline, Stack, Text } from "../primitives"

/* ======================================================
   Public API
   ====================================================== */

type InputFieldProps = {
  label: string
  description?: string
  helpText?: string
  errorText?: string
  icon?: React.ReactNode

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
 * InputField
 *
 * Field wrapper for Input.
 * Handles labeling, supporting text, and error messaging.
 */
export function InputField({
  label,
  description,
  helpText,
  errorText,
  icon,

  type,
  value,
  defaultValue,
  placeholder,
  disabled = false,
  name,
  id,
  onChange,
}: InputFieldProps) {
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

      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
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
