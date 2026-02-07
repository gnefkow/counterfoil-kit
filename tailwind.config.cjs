module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          surface: "var(--bg-surface)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          quaternary: "var(--text-quaternary)",
        },
        accent: {
          primary: "var(--accent-primary)",
          hover: "var(--accent-hover)",
        },
        fg: {
          primary: "var(--fg-primary)",
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          tertiary: "var(--border-tertiary)",
          quaternary: "var(--border-quaternary)",
        },
        button: {
          primary: {
            bg: "var(--button-primary-bg)",
            text: "var(--button-primary-text)",
            bgHover: "var(--button-primary-bg-hover)",
            bgActive: "var(--button-primary-bg-active)",
            bgDisabled: "var(--button-primary-bg-disabled)",
            textDisabled: "var(--button-primary-text-disabled)",
          },
          secondary: {
            bg: "var(--button-secondary-bg)",
            text: "var(--button-secondary-text)",
            border: "var(--button-secondary-border)",
            bgHover: "var(--button-secondary-bg-hover)",
            bgActive: "var(--button-secondary-bg-active)",
            bgDisabled: "var(--button-secondary-bg-disabled)",
            textDisabled: "var(--button-secondary-text-disabled)",
            borderDisabled: "var(--button-secondary-border-disabled)",
          },
          tertiary: {
            bg: "var(--button-tertiary-bg)",
            text: "var(--button-tertiary-text)",
            bgHover: "var(--button-tertiary-bg-hover)",
            bgActive: "var(--button-tertiary-bg-active)",
            textDisabled: "var(--button-tertiary-text-disabled)",
            bgDisabled: "var(--button-tertiary-bg-disabled)",
          },
          quaternary: {
            bg: "var(--button-quaternary-bg)",
            text: "var(--button-quaternary-text)",
            bgHover: "var(--button-quaternary-bg-hover)",
            bgActive: "var(--button-quaternary-bg-active)",
            textDisabled: "var(--button-quaternary-text-disabled)",
            bgDisabled: "var(--button-quaternary-bg-disabled)",
          },
          link: {
            text: "var(--button-link-text)",
            textHover: "var(--button-link-text-hover)",
            textDisabled: "var(--button-link-text-disabled)",
          },
          destructive: {
            primary: {
              bg: "var(--button-destructive-primary-bg)",
              text: "var(--button-destructive-primary-text)",
              bgHover: "var(--button-destructive-primary-bg-hover)",
              bgActive: "var(--button-destructive-primary-bg-active)",
              bgDisabled: "var(--button-destructive-primary-bg-disabled)",
              textDisabled: "var(--button-destructive-primary-text-disabled)",
            },
            secondary: {
              text: "var(--button-destructive-secondary-text)",
              border: "var(--button-destructive-secondary-border)",
              bgHover: "var(--button-destructive-secondary-bg-hover)",
              bgActive: "var(--button-destructive-secondary-bg-active)",
              bgDisabled: "var(--button-destructive-secondary-bg-disabled)",
              textDisabled: "var(--button-destructive-secondary-text-disabled)",
              borderDisabled: "var(--button-destructive-secondary-border-disabled)",
            },
          },
        },
        checkbox: {
          bg: "var(--checkbox-bg)",
          border: "var(--checkbox-border)",
          "hover-bg": "var(--checkbox-hover-bg)",
          "hover-border": "var(--checkbox-hover-border)",
          "checked-bg": "var(--checkbox-checked-bg)",
          "checked-border": "var(--checkbox-checked-border)",
          check: "var(--checkbox-check)",
          "disabled-bg": "var(--checkbox-disabled-bg)",
          "disabled-border": "var(--checkbox-disabled-border)",
          "disabled-check": "var(--checkbox-disabled-check)",
        },
        radio: {
          bg: "var(--radio-bg)",
          border: "var(--radio-border)",
          dot: "var(--radio-dot)",
          "disabled-bg": "var(--radio-disabled-bg)",
          "disabled-border": "var(--radio-disabled-border)",
          "disabled-dot": "var(--radio-disabled-dot)",
        },
        input: {
          bg: "var(--input-bg)",
          border: "var(--input-border)",
          placeholder: "var(--input-placeholder)",
        },
      },
      ringColor: {
        "button-primary": "var(--button-primary-focus-ring)",
        "button-secondary": "var(--button-secondary-focus-ring)",
        "button-tertiary": "var(--button-tertiary-focus-ring)",
        "button-quaternary": "var(--button-quaternary-focus-ring)",
        "button-destructive": "var(--button-destructive-focus-ring)",
        checkbox: "var(--checkbox-focus-ring)",
        radio: "var(--radio-focus-ring)",
        input: "var(--input-focus-ring)",
      },
      fontFamily: {
        ui: "var(--font-ui)",
      },
      fontSize: {
        "h-1": ["var(--font-size-h1)", { lineHeight: "var(--line-height-h1)" }],
        "h-2": ["var(--font-size-h2)", { lineHeight: "var(--line-height-h2)" }],
        "h-3": ["var(--font-size-h3)", { lineHeight: "var(--line-height-h3)" }],
        "h-4": ["var(--font-size-h4)", { lineHeight: "var(--line-height-h4)" }],
        "h-5": ["var(--font-size-h5)", { lineHeight: "var(--line-height-h5)" }],
        "h-6": ["var(--font-size-h6)", { lineHeight: "var(--line-height-h6)" }],
        "body-1": ["var(--font-size-body-1)", { lineHeight: "var(--line-height-body-1)" }],
        "body-2": ["var(--font-size-body-2)", { lineHeight: "var(--line-height-body-2)" }],
        "button-sm": ["var(--font-size-button-sm)", { lineHeight: "var(--line-height-button)" }],
        "button-md": ["var(--font-size-button-md)", { lineHeight: "var(--line-height-button)" }],
        "button-lg": ["var(--font-size-button-lg)", { lineHeight: "var(--line-height-button)" }],
        "button-2xl": ["var(--font-size-button-2xl)", { lineHeight: "var(--line-height-button)" }],
        "tab-sm": ["var(--tab-font-size-sm)", { lineHeight: "var(--tab-line-height)" }],
        "tab-md": ["var(--tab-font-size-md)", { lineHeight: "var(--tab-line-height)" }],
        "tab-lg": ["var(--tab-font-size-lg)", { lineHeight: "var(--tab-line-height)" }],
      },
      fontWeight: {
        normal: "var(--font-weight-normal)",
        heavy: "var(--font-weight-heavy)",
      },
    },
  },
  plugins: [],
}

/*
  tailwind.config
  ----------------
  This file defines the **mapping layer** between semantic design tokens
  and Tailwind utility classes.

  Its role is to:
  - Translate design meaning (primary, secondary, surface, etc.)
    into ergonomic Tailwind utilities
  - Extend Tailwind in a way that preserves semantic intent
  - Act as the single place where Tailwind “learns” the project’s design language

  This file does NOT define design values themselves.

  Design values (colors, themes, modes) live in:
  - semanticTokens.css (as CSS variables)

  This config only maps those variables into Tailwind’s utility system,
  e.g.:
    bg-bg-primary  -> var(--bg-primary)
    text-text-muted -> var(--text-muted)

  This separation is intentional:
  - semanticTokens.css = meaning and values
  - tailwind.config   = semantic → utility translation
  - base.css          = framework plumbing
  - components        = usage

  Why this matters:
  - It keeps Tailwind replaceable
  - It prevents design meaning from being buried in config magic
  - It allows the design system to be reasoned about without reading components

  Notes on Tailwind v4:
  - Tailwind v4 does not automatically read this file unless it is explicitly
    bound via an @config directive in the input CSS.
  - That binding occurs in base.css, not here.
  - This file assumes it will be loaded explicitly, not implicitly.

  If you are changing:
  - naming ergonomics of utilities → this file
  - actual colors or themes       → semanticTokens.css
  - how Tailwind is wired         → base.css

  Avoid adding clever logic here.
  Prefer explicit mappings and boring structure.
*/
