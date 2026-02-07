# Architectural Rules and Reasons

This document explains **why** Counterfoil Kit makes specific architectural choices, particularly around styling and CSS processing. Understanding these reasons helps prevent bugs and ensures consistency as the toolkit grows.

## CSS Processing: PostCSS Over Build-Tool Plugins

### Why PostCSS?

Counterfoil Kit uses **PostCSS** (via `postcss.config.cjs`) to process Tailwind CSS, **not** build-tool-specific plugins like `@tailwindcss/vite`.

**Reasons:**

1. **Framework-agnostic**: PostCSS works with Vite, Webpack, Rollup, Parcel, and any build tool that supports PostCSS. This aligns with our philosophy: "Standardness over elegance" and "Keeping Tailwind setup boring and replaceable."

2. **Library portability**: When Counterfoil Kit is used as a library, consumers may use different build tools. PostCSS ensures our CSS processing works regardless of their setup.

3. **Semantic token overrides**: Users override styles via CSS variables (see below). PostCSS processes these overrides correctly in any build environment, while build-tool plugins may not.

4. **Standard protocol**: PostCSS is a well-established standard protocol, not tied to a specific tool. More developers understand it, and it's more likely to be supported long-term.

### What NOT to Do

**Never configure both PostCSS and build-tool plugins simultaneously.** This causes conflicts where Tailwind utilities aren't generated, leading to styles not rendering (e.g., padding utilities like `px-3`, `py-1.5` appearing but not applying).

**Example of the bug:**
- Both `@tailwindcss/vite` in `vite.config.ts` AND `@tailwindcss/postcss` in `postcss.config.cjs`
- Result: Tailwind utilities don't generate, padding/spacing doesn't work
- Fix: Remove the Vite plugin, rely solely on PostCSS

### Configuration Files

- **`postcss.config.cjs`**: Contains PostCSS plugin configuration for Tailwind
- **`vite.config.ts`**: Should NOT include Tailwind plugins (Vite automatically uses PostCSS)
- **`.storybook/main.ts`**: Should NOT include Tailwind plugins (Storybook uses Vite's PostCSS support)

## Style Location: Semantic Tokens in CSS Files

### Where Styles Live

**Design tokens (values):** `src/styles/semanticTokens.css`
- All CSS variables defining design values
- Colors, spacing, typography, component-specific tokens
- Pure CSS, no Tailwind directives

**Tailwind plumbing:** `src/styles/base.css`
- Tailwind directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
- Framework-facing setup only
- References `tailwind.config.cjs` via `@config` directive

**Component styles:** `src/components/**/*.tsx`
- Components use Tailwind utility classes
- Utilities reference semantic tokens via CSS variables
- Example: `bg-[var(--button-primary-bg)]` not `bg-blue-500`

### Why This Structure?

1. **Separation of concerns**: Design values (semanticTokens.css) are separate from framework plumbing (base.css) and component usage (components).

2. **Easy overrides**: Users can override any design value by redefining CSS variables in their own CSS file, without modifying component code.

3. **Framework-agnostic**: CSS variables work everywhere. Users don't need to understand Tailwind internals to customize.

4. **Inspectable**: CSS variables can be inspected in browser DevTools, making debugging easier.

## Semantic Tokens: Making Styles Overrideable

### The Rule

**All component styling values must be semantic tokens (CSS variables), not hardcoded values.**

This includes:
- Colors (already implemented)
- Padding and spacing
- Border radius
- Typography sizes
- Any visual property users might want to customize

### Why?

When Counterfoil Kit is used as a library, users need to customize styles without:
- Modifying component source code
- Forking the library
- Using CSS specificity hacks

Semantic tokens enable clean overrides:

```css
/* User's theme.css */
:root {
  --button-padding-x-md: 2rem;      /* Override medium padding */
  --button-border-radius: 0.5rem;   /* Override border radius */
  --button-primary-bg: #ef4444;      /* Override primary color */
}
```

### Implementation Pattern

**In `semanticTokens.css`:**
```css
--button-padding-x-md: 1rem;
--button-border-radius: 9999px;
```

**In component (`Button.tsx`):**
```tsx
// Use Tailwind arbitrary values with CSS variables
className="px-[var(--button-padding-x-md)] rounded-[var(--button-border-radius)]"
```

**NOT:**
```tsx
// Hardcoded values - can't be overridden
className="px-4 rounded-full"
```

### Common Bug: Hardcoded Values

**Symptom:** Users can't override padding, border-radius, or spacing without modifying component code.

**Cause:** Component uses hardcoded Tailwind utilities (`px-4`, `rounded-full`) instead of semantic tokens.

**Fix:** 
1. Add semantic token to `semanticTokens.css`
2. Update component to use `px-[var(--token-name)]` syntax
3. Document the token for users

## Component Style Patterns

### Pattern: Use Semantic Tokens via Tailwind Arbitrary Values

**Correct:**
```tsx
const baseClasses = "rounded-[var(--button-border-radius)] border-0"
const sizeClasses = {
  md: "px-[var(--button-padding-x-md)] py-[var(--button-padding-y-md)]"
}
```

**Incorrect:**
```tsx
const baseClasses = "rounded-full border-0"  // Hardcoded
const sizeClasses = {
  md: "px-4 py-2"  // Hardcoded
}
```

### Pattern: Keep Base Classes Minimal

Base classes should contain:
- Layout behavior (`inline-flex`, `items-center`)
- Interaction states (`focus:outline-none`)
- Transitions
- Border resets (`border-0`)

Base classes should NOT contain:
- Colors (use variant classes)
- Sizing (use size classes)
- Design-specific values (use semantic tokens)

## Common Bugs and How to Avoid Them

### Bug 1: Tailwind Utilities Not Rendering

**Symptoms:**
- Padding/spacing classes don't apply
- Buttons appear with no padding
- Styles work in one environment but not another

**Causes:**
- Both PostCSS and Vite plugin configured simultaneously
- PostCSS not processing CSS files
- Tailwind config not being read

**Prevention:**
- Use ONLY PostCSS (`postcss.config.cjs`)
- Never add Tailwind plugins to `vite.config.ts` or `.storybook/main.ts`
- Verify `base.css` imports `@tailwind utilities`
- Ensure CSS files are imported in correct order: `semanticTokens.css` then `base.css`

### Bug 2: Styles Can't Be Overridden

**Symptoms:**
- Users try to override padding/border-radius via CSS variables but nothing changes
- Component uses hardcoded Tailwind utilities

**Causes:**
- Component uses hardcoded values (`px-4`, `rounded-full`) instead of semantic tokens
- Semantic token not defined in `semanticTokens.css`

**Prevention:**
- Always use semantic tokens for customizable values
- Use Tailwind arbitrary value syntax: `px-[var(--token-name)]`
- Document all semantic tokens users can override

### Bug 3: CSS Variables Not Loading

**Symptoms:**
- Components render with wrong colors
- CSS variables show as `var(--token-name)` in DevTools instead of actual values

**Causes:**
- `semanticTokens.css` not imported before `base.css`
- CSS import order incorrect
- CSS file not being processed

**Prevention:**
- Always import `semanticTokens.css` before `base.css`
- Verify import order in `main.tsx` and `.storybook/preview.ts`
- Check that PostCSS is processing CSS files

## File Import Order

**Critical:** CSS files must be imported in this order:

1. `semanticTokens.css` - Defines CSS variables
2. `base.css` - Processes Tailwind (may reference variables)

**Correct:**
```tsx
import "./styles/semanticTokens.css"
import "./styles/base.css"
```

**Incorrect:**
```tsx
import "./styles/base.css"
import "./styles/semanticTokens.css"  // Variables not available when Tailwind processes
```

## Checklist for Adding New Component Styles

When adding styling to a new component or modifying existing component styles:

- [ ] Are all design values (colors, spacing, border-radius) using semantic tokens?
- [ ] Are semantic tokens defined in `semanticTokens.css`?
- [ ] Are hardcoded Tailwind utilities replaced with `[var(--token-name)]` syntax?
- [ ] Can users override these values via CSS variables without modifying component code?
- [ ] Are CSS files imported in correct order (semanticTokens.css before base.css)?
- [ ] Is PostCSS configured (not build-tool plugins)?

## Summary

**PostCSS over plugins:** Framework-agnostic, standard protocol, works everywhere.

**Semantic tokens over hardcoded values:** Enables clean overrides, aligns with design philosophy.

**Separation of concerns:** Design values (semanticTokens.css) → Framework plumbing (base.css) → Component usage (components).

**Why this matters:** Makes Counterfoil Kit truly customizable as a library, without requiring users to modify source code or understand internal implementation details.
