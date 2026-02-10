READ-ME: Instructions for writing The Counterfoild Guide. 
- Assume that the reader has taken a full stack web development bootcamp in the past, but it was a long time ago. They are familiar with the MERN stack, and work daily with software developers, but their understanding of code and coding principles was never deep and is now rusty. 
- Write with a pragmatic, direct tone. This is a technical guide, to not use unecessary rhetorical flair. 
- Before writing a chapter, read the full Outline below to gather an understanding of how that chapter fits in the overall whole. 
- Use examples directly from this codebase when possible
- use markdown to put emphasis where needed
- use code blocks (markdown) when using examples of code
- Work within the page-count as requested, but if it needs +20% for clarity, do it; don’t pad.
- When referencing other chapters, always link like: “(See 2.7 Tailwind CSS.)”
- Use fenced blocks and label with language (ts, tsx, css, bash).
- Keep code snippets short; if long, show the relevant excerpt and say what file it’s from.
- Pick one format for file references, e.g. “From src/components/primitives/Button.tsx:”
- “Don’t add new chapters or reorder the outline.”
- “Don’t include broad history/philosophy unless the outline explicitly calls for it.”
- “Prefer practical reading of Counterfoil code over general web-dev explanation.”

# Understanding Counterfoil: A Designer's Guide to Reading and Building with Code

## Part I: Foundations - Understanding the Tools

### 1.1: The Shallow Overview - 3-4 pages

- The 30,000 foot view:
  - What Counterfoil is "made of" (React, TypeScript).... and why

- Why React?

  - What is React? Two sentence definition. 
  - Component-first thinking aligns with design systems
  - Shared mental model with developers
  - Ecosystem support
  - Path from design kit → production UI
  - Cross-platform thinking (web → mobile)

- Why TypeScript?

  - What is TypeScript? Two sentence definition. 
  - Explicit contracts vs. tribal knowledge

  - Better tooling (autocomplete, error checking)

  - Safer evolution (catch breaking changes)

  - Self-documenting code

  - How types help you understand code without running it

- Why Tailwind?

  - What is Tailwind? Two sentence definition. 

  - Tokens, constraints, systems (not vibes)

  - Honest and inspectable

  - Aligns with how teams build

  - Utility-first enables semantic tokens

  - Why not just write CSS: consistency, constraints, speed

- Why Vite?

  - What is Vite? Two sentence definition. 

  - Fast feedback loops

  - Stays out of the way

  - Understandable, not magical

  - Supports the "thinking environment"

  - Why build tools matter: what they do, why you need one

### 1.2: How They Fit Together 2 - 3 pages

- The complete picture:
  - Design tokens (semanticTokens.css) → defines meaning
  - Tailwind maps tokens to utilities (tailwind.config.cjs) → translation layer
  - Components use utilities (component files) → implementation
  - Vite builds everything (vite.config.ts) → build process
- Data flow: how code becomes a website
- Why each layer matters: what would break without it



### 1.3: Comparisons and Context - 6–8 pages

- Counterfoil vs. Material Design
  - Intro to Material: what it is for, show history
  - Material: opinionated, complete system
    - What it provides: full UI library, design guidelines
    - What it actually is (in terms of code, languages, packages, etc...)
    - Philosophy: Google's Material Design principles
  - How Counterfoil is different (structurally) from Material
  - How Counterfoil is similar to Material.
  - When to use each: decision guide
- Counterfoil vs. Bootstrap
  - Intro to Bootstrap: what it is for, short history
  - Bootstrap: pre-styled components, utility classes
    - What it provides: ready-made components
  - How Counterfoil is different (structurally) from Bootstrap
  - How Counterfoil is similar to Bootstrap.
  - When to use each: decision guide
- Counterfoil vs Other Component Libraries
  - Chakra UI, MUI, etc.: what they share
  - How they're similar to Counterfoil
  - How they're different from Counterfoil
  - When Counterfoil fits vs. doesn't fit



### 1.4: What Counterfoil Is and Isn't — 2 pages

- What it is:
  - A toolkit for building design systems
  - Semantic token system
  - Component primitives
  - Built for understanding
- What it isn't:
  - A complete UI library (you build on top of it)
  - A page builder (you write code)
  - A design tool (it's code, not visual)
- Boundaries and limitations: what it doesn't do
- When to use something else: decision guide



### 1.5 Navigating the Repo

- Folder structure: what is where, and why. 
- 



## Part II What things are, how they work

### 2.1: JavaScript Refresher (for the Rusty) (5 pages)

- Variables: `const`, `let`, `var` (what you need to know)
- Functions: regular functions vs. arrow functions
- Objects: `{ key: value }` syntax
- Arrays: `[item1, item2]` and common methods
- ES6+ concepts you'll see:
  - Arrow functions: `() => {}`
  - Destructuring: `{ variant, size } = props`
  - Template literals: `Hello ${name}`
  - Spread operator: `...items`
- Modules: `import` and `export`

### 2.2: What Are Types and Why Do They Matter? (2 pages)

- The problem types solve: catching mistakes early
- Real-world analogy: types are like labels on boxes
- What happens without types: runtime errors, confusion
- What happens with types: errors before you run code, clarity

### 2.3: Understanding TypeScript - Types in Practice (10 pages)

- What TypeScript is: JavaScript with type annotations
- How TypeScript works: it checks your code, then compiles to JavaScript
- Basic type syntax explained:
  - Primitives: `string`, `number`, `boolean`
    - What each means, examples
  - Arrays: `string[]` vs `Array<string>` (they're the same)
    - How to read: "array of strings"
  - Objects: `{ name: string, age: number }`
    - How to read: "object with name (string) and age (number)"
  - Union types: `"primary" | "secondary"`
    - How to read: "either 'primary' OR 'secondary'"
  - Optional properties: `name?: string`
    - How to read: "name is optional, and if present, it's a string"
  - Functions: `(value: string) => void`
    - How to read: "function that takes a string, returns nothing"
- Type aliases: `type ButtonVariant = "primary" | "secondary"`
  - Why they exist: reusability, clarity
- Reading type definitions: step-by-step breakdown
- Type inference: when TypeScript figures it out for you
- Why Counterfoil uses TypeScript: contracts, tooling, safety

### 2.4: Understanding React - Components, Props, and JSX (8 pages)

- What React is: a library for building UIs
- Component = reusable piece of UI (like a LEGO brick)
- JSX syntax: HTML-like but it's JavaScript
  - How to read: `<Button>` becomes a function call
  - Attributes become props
- Props: passing data to components
  - Like function arguments, but for UI
- Reading component code structure:
  - **Imports section**: what the component needs from other files
  - **Type definitions**: what props the component accepts
  - **Component function**: the actual component code
  - **Return statement**: the JSX that gets rendered
- State basics (`useState`): what it is, when you'll see it
  - State = data that can change
  - When components need to remember things

### 2.5: The Anatomy of a Component - Breaking Down the Code (10 pages)

- The four main sections of a Counterfoil component:
  1. **Imports**: `import React from "react"`
    - What gets imported and why
    - Reading import statements
  2. **Public API (Types)**: `type ButtonProps = { ... }`
    - Type definitions that describe the component's interface
    - How to read them line by line
  3. **Class Maps (Styles)**: `const variantClasses = { ... }`
    - Style definitions as objects
    - How styles map to variants/sizes
  4. **Component Function**: `export function Button({ ... }) { ... }`
    - The actual component code
    - Props destructuring
    - Logic and calculations
    - Return statement with JSX
- Why this structure: clarity, maintainability, separation of concerns
- Walking through a real example: Button.tsx section by section

### 2.6: Understanding CSS and Styling (4 pages)

- CSS basics: selectors, properties, values
  - How CSS rules work: `selector { property: value; }`
- CSS variables (custom properties): `--variable-name: value`
  - Why they exist: reusability, theming
  - How to use them: `var(--variable-name)`
  - Where they're defined: `:root { --bg-primary: #ffffff; }`
- How CSS variables enable theming
- Inline styles vs. classes: when to use each
- Specificity and cascade basics: which styles win

### 2.7: Understanding Tailwind CSS - The Complete Picture (6-7 pages)

- What Tailwind is: utility-first CSS framework
- How it works: classes map to CSS properties
  - `bg-blue-500` → `background-color: #3b82f6`
  - `px-4` → `padding-left: 1rem; padding-right: 1rem`
  - `flex` → `display: flex`
  - `rounded` → `border-radius: 0.25rem`
- Reading Tailwind classes in code:
  - Breaking down class strings
  - Understanding modifiers: `hover:`, `focus:`, `disabled:`
  - Understanding arbitrary values: `bg-[var(--token)]`
- Why utility-first vs. component CSS:
  - Utility: many small classes
  - Component CSS: one class per component
  - Trade-offs of each approach
- How Tailwind fits Counterfoil: tokens, constraints, systems
- Tailwind config: mapping semantic tokens to utilities
  - How the config file works
  - Reading `tailwind.config.cjs`
  - How tokens become utilities
- Tailwind in Counterfoil: what aspects of Tailwind Counterfoil is NOT making uses of. 

### 2.8: Where Tailwind Gets Wired (2–3 pages)

- @tailwind … directives (what they expand into)

- @config … (Tailwind v4 binding)

- how semanticTokens.css is imported/ordered relative to Tailwind layers

- what changes belong here vs in semanticTokens.css vs tailwind.config.cjs



### 2.9 Understanding Storybook (5 pages)

- What Storybook is (structurally)
- Understanding storybook components (story files).

### 2.10: Understanding the Build Pipeline (5 pages)

- What Vite is: build tool and dev server
- How files become a website:
  - TypeScript → JavaScript (compilation)
  - CSS processing (Tailwind, PostCSS)
  - Module bundling (combining files)
- The Counterfoil pipeline:
  - `semanticTokens.css` → defines meaning (CSS variables)
  - `tailwind.config.cjs` → maps tokens to utilities
  - `vite.config.ts` → runs everything
  - Components → use utilities
- What happens when you save a file: the build process



### 2.11: Packaging and Releasing

#### 2.11.1) What “publishing to npm” actually means (first principles)

- npm the registry vs npm the CLI: registry = database of packages; CLI = tool that talks to it

- A package is a contract: name + version + exported entrypoints + included files

- Release = immutable snapshot: once a version is published, you don’t “edit it,” you publish a new version

#### 2.11.2) The moving pieces in a library release

- Source: src/ (TypeScript/React you write)

- Build output: dist/ (JS bundles + .d.ts + CSS you ship)

- Metadata: package.json (how consumers resolve imports)

- Registry: npm (where versions live)

- Consumer: another app’s bundler/TypeScript reading your exports, types, and CSS

#### 2.11.3) package.json as the “public API surface”

- name / version: identity + SemVer

- peerDependencies: why react / react-dom should be peers (avoid bundling React twice)

- exports map: what import paths you officially support (and why this matters)

- types + conditional exports: how TS finds .d.ts for each entrypoint

- files: what actually gets published (prevent shipping src/, scripts, etc.)

#### 2.11.4) Building a publishable artifact

- What bundling is (and why apps don’t consume your raw TS)

- ESM vs CJS vs UMD (which you need, and why)

- Declaration files: why .d.ts are non-negotiable for a TS-first kit

- CSS as part of your API: stable import paths for tokens/base styles

#### 2.11.5) Versioning (SemVer) for a design system

- PATCH: bug fixes, internal refactors, non-breaking style fixes

- MINOR: new components/props/variants, additive tokens

- MAJOR: removed/renamed exports, breaking prop changes, “visual contract” breaks

- Pre-releases: 1.2.0-beta.1 for testing without disrupting latest

#### 2.11.6) npm accounts, permissions, and security basics

- What npm login does

- 2FA: why you want it on

- Access control: maintainers, teams, and “who can publish”

- Provenance/signing (optional mention): why supply-chain trust matters

#### 2.11.7) The release pipeline (a repeatable checklist)

- Sanity: working tree clean, correct branch

- Build: run the library build; confirm dist/ contents

- Verify entrypoints: imports, types, and CSS paths work as documented

- Smoke-test in a fresh consumer: install from local tarball before publishing

- Changelog/release notes: what changed + any migration notes

- Bump version: npm version patch|minor|major

- Publish: npm publish (and when to use --tag next)

- Post-publish: install from npm in a sample app; verify

#### 2.11.8) Common publishing failures (and how to diagnose)

- Missing files because files/.npmignore excluded them

- exports blocks deep imports you relied on

- Types not found because .d.ts weren’t generated or not referenced correctly

- CSS import path broken (export not declared / file not shipped)

- React accidentally bundled (peer deps misconfigured)

#### 2.11.9) Operating the kit over time

- Deprecation strategy: soft transitions instead of sudden breaks

- Release cadence: batching changes vs frequent patches

- Support promises: what you consider stable vs experimental



## Part III: Reading Counterfoil Code

### 3.1: Reading Type Definitions - A Deep Dive (10 pages)

- How to read `ButtonProps` line by line:
  ```typescript
  type ButtonProps = {
    variant?: ButtonVariant  // optional, one of the variant strings
    size?: ButtonSize        // optional, one of the size strings
    disabled?: boolean       // optional, true or false
    onClick?: () => void     // optional function that takes nothing, returns nothing
  }
  ```
  - Breaking down each property
  - What `?` means: optional vs. required
  - What `ButtonVariant` means: it's a type alias
- Understanding type aliases:
  - `type ButtonVariant = "primary" | "secondary" | ...`
  - Why they exist: reusability, single source of truth
  - How to read: "ButtonVariant is one of these strings"
- Understanding `Record<ButtonVariant, string>`:
  - What `Record` means: object type
  - `Record<KeyType, ValueType>` syntax
  - Example: `Record<ButtonVariant, string>` = object with ButtonVariant keys, string values
  - How to read: "an object where keys are ButtonVariant, values are strings"
- Understanding union types: `"sm" | "md" | "lg"`
  - How to read: "one of these specific strings"
  - Why not just `string`: limits what's allowed
- Reading optional vs. required props:
  - `variant?: ButtonVariant` = optional
  - `children: React.ReactNode` = required (no `?`)
- Default values: `variant = "primary"`
  - What happens if you don't provide it
  - How defaults work with optional props
- Function types: `onChange?: (value: string) => void`
  - Breaking down: optional function
  - Parameters: `(value: string)`
  - Return type: `void` (nothing)
- Reading complex types: step-by-step examples

### 3.2: Reading Style Definitions - Class Maps Explained (6 pages)

- What class maps are: objects that map names to CSS class strings
- How class maps work:
  - `variantClasses`: object mapping variant names to Tailwind class strings
  - Example structure: `{ primary: "bg-[var(--button-primary-bg)] ...", secondary: "..." }`
  - Why strings: Tailwind processes them at build time
- Reading Tailwind classes in code:
  - `bg-[var(--button-primary-bg)]`: background using CSS variable
    - Breaking down: `bg-` = background, `[var(...)]` = arbitrary value using CSS variable
  - `hover:bg-[var(--button-primary-bg-hover)]`: hover state
    - Breaking down: `hover:` = modifier, applies on hover
  - `focus-visible:ring-2`: focus ring
    - Breaking down: `focus-visible:` = modifier, `ring-2` = ring width
  - `px-[var(--button-padding-x-md)]`: padding
    - Breaking down: `px-` = padding x-axis, `[var(...)]` = CSS variable
- Understanding conditional classes:
  - `disabled ? disabledVariantClasses[variant] : variantClasses[variant]`
    - How to read: "if disabled, use disabled classes, else use normal classes"
  - Array joining: `[baseClasses, variantClass, sizeClass].join(" ")`
    - How it works: creates array, filters out falsy values, joins with spaces
    - Why: combines multiple class strings into one
- Reading base classes: what's shared across all variants
- Reading variant classes: what's specific to each variant
- Reading size classes: how sizes affect styling

### 3.3: Reading Component Logic - Step by Step (8 pages)

- Props destructuring: `{ variant = "primary", size = "md" }`
  - What it means: extract these properties from props object
  - Default values: what happens if not provided
- Conditional rendering: `{icon ? <span>{icon}</span> : null}`
  - How to read: "if icon exists, render span with icon, else render nothing"
  - Ternary operator: `condition ? ifTrue : ifFalse`
- Variable assignments: `const isIconOnly = !children`
  - How to read: "isIconOnly is true if children is falsy"
  - Logical operators: `!` means "not"
- Array methods: `.filter(Boolean).join(" ")`
  - `.filter(Boolean)`: removes falsy values from array
  - `.join(" ")`: combines array items with spaces
- Reading JSX:
  - Elements: `<button>`, `<span>` - HTML-like tags
  - Props: `disabled={disabled}`, `className={finalClassName}`
    - How to read: prop name = value (can be variable or literal)
  - Children: `{children}`, `{leftIconElement}`
    - How to read: content inside the element
- Understanding refs: `useRef<HTMLButtonElement>(null)`
  - What refs are: reference to DOM element
  - When you'll see them: when component needs direct DOM access
  - How to read: "create ref that can hold HTMLButtonElement"
- Understanding effects: `useEffect` (when you'll see it, what it does)
  - What effects are: side effects (things that happen after render)
  - When you'll see them: logging, DOM manipulation, API calls
  - Basic syntax: `useEffect(() => { ... }, [dependencies])`
- Reading the component flow: top to bottom, what happens when

### 3.4: Reading Semantic Tokens - The Design Language (4 pages)

- How tokens connect to components:
  - Token defined in `semanticTokens.css`: `--button-primary-bg: #000000`
  - Mapped in `tailwind.config.cjs`: `button.primary.bg: "var(--button-primary-bg)"`
  - Used in component via `bg-[var(--button-primary-bg)]` or `bg-button-primary-bg`

### 3.5: Reading Tailwind Config - The Translation Layer (8 pages)

- What `tailwind.config.cjs` does: maps tokens to utilities
- Structure breakdown:
  - `colors`: `bg-primary` → `var(--bg-primary)`
    - How to read: "bg-primary utility uses --bg-primary CSS variable"
  - `fontSize`: `text-h-1` → `var(--font-size-h1)`
    - How to read: "text-h-1 utility uses --font-size-h1 CSS variable"
  - Nested structure: `button.primary.bg`
    - How to read: "button > primary > bg"
- How to read the mapping:
  - Left side: Tailwind utility name (what you write in code)
  - Right side: CSS variable reference (where the value comes from)
- Why this separation: tokens = design, config = translation
  - Designers think in tokens
  - Developers use utilities
  - Config bridges the gap
- Reading nested config structures:
  - `button.primary.bg` becomes `bg-button-primary-bg` utility
  - How nesting works
- How utilities are generated: Tailwind reads config, creates classes

### 3.6: Reading Composite Components - How Components Work Together (8 pages)

- How components compose: `InputField` uses `Input`, `Stack`, `Text`
  - Breaking down the component hierarchy
  - What each component does
- Reading component hierarchies:
  - Parent components vs. child components
  - How to trace: start at the component you're reading, find what it uses
- Understanding prop passing: parent → child
  - How props flow down
  - What gets passed: data, callbacks, configuration
- Field components vs. primitive components:
  - Field components: `InputField`, `CheckboxField` (include labels, help text)
  - Primitive components: `Input`, `Checkbox` (just the control)
  - Why this separation: flexibility, reusability
- Reading composite component code:
  - How to follow the flow
  - What each part does
  - How components communicate



## Part IV: Practical Usage

### 4.1: Setting Up a Project (4 pages)

- Installing Counterfoil
- Importing components: `import { Button } from 'counterfoil-starter-kit'`
- Importing styles: CSS imports and what they do
- Configuring Tailwind: extending the preset
- First component usage: your first Button
- Reading error messages: what they mean, how to fix

### 4.2: Using Components (4 pages)

- Reading component APIs from types:
  - How to know what props a component accepts
  - Using TypeScript/IDE to explore
- Common patterns:
  - Buttons with variants: when to use which
  - Form fields: InputField vs Input
  - Layout primitives: Stack, Inline, when to use each
- Composing components: building larger UIs
- When to use which component: decision guide

### 4.3: Customizing with Tokens (4 pages)

- Overriding semantic tokens: how to change colors, spacing
- When to override vs. extend: decision guide
- Creating custom tokens: adding your own
- Theming strategies: light/dark mode, brand colors
- Reading token overrides: how to see what's changed

### 4.4: Extending Counterfoil (4 pages)

- Adding new components (following the pattern):
  - Using the component structure you learned
  - Where to put new components
  - How to export them
- Modifying existing components safely:
  - What's safe to change
  - What might break things
- Creating your own semantic tokens:
  - Following naming conventions
  - Adding to semanticTokens.css
- Maintaining consistency: keeping the system coherent



## Appendices

### Appendix A: Common Patterns Reference

- Component structure template:
  - Imports section
  - Public API (types) section
  - Class maps section
  - Component function section
- Type definition patterns:
  - Props types
  - Type aliases
  - Record types
  - Union types
- Style definition patterns:
  - Base classes
  - Variant classes
  - Size classes
  - Conditional classes
- Composition patterns:
  - Field components
  - Primitive components
  - Layout components

### Appendix B: Reading Checklist - How to Read Any Component

- Step 1: Read the imports
  - What does this component depend on?
  - What types does it import?
- Step 2: Read the type definitions
  - What props does this component accept?
  - What are the allowed values?
  - What's optional vs. required?
- Step 3: Read the class maps
  - What styles are available?
  - How do variants/sizes map to styles?
- Step 4: Read the component function
  - What logic does it perform?
  - How does it use props?
  - What does it render?
- Questions to ask yourself:
  - What does this component do?
  - What can I customize?
  - How does it work internally?
- Debugging tips:
  - How to trace errors
  - How to inspect styles
  - How to check types

### Appendix C: TypeScript Quick Reference

- Basic types: `string`, `number`, `boolean`
- Arrays: `string[]`, `Array<string>`
- Objects: `{ key: type }`
- Union types: `"a" | "b"`
- Optional: `key?: type`
- Functions: `(param: type) => returnType`
- Type aliases: `type Name = ...`
- Record: `Record<KeyType, ValueType>`
- Common patterns you'll see in Counterfoil

### Appendix D: Tailwind Quick Reference

- Common utilities: `flex`, `grid`, `p-4`, `m-2`
- Spacing: `p-*`, `m-*`, `gap-*`
- Colors: `bg-*`, `text-*`, `border-*`
- Modifiers: `hover:`, `focus:`, `disabled:`
- Arbitrary values: `bg-[var(--token)]`
- How to read Tailwind classes in code

### Appendix E: Glossary

- TypeScript terms: type, interface, union, Record, etc.
- React terms: component, props, JSX, state, etc.
- Tailwind terms: utility, modifier, arbitrary value, etc.
- CSS terms: variable, selector, property, etc.
- Counterfoil-specific terms: semantic token, class map, etc.

### Appendix F: Further Reading

- TypeScript documentation: where to learn more
- React documentation: official resources
- Tailwind documentation: utility reference
- Design system resources: tokens, components, patterns

