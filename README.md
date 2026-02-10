# Counterfoil Kit

A modular React component library with semantic design tokens, built with TypeScript and Tailwind CSS.

## Features

- 🎨 **Semantic Design Tokens** - CSS variables for easy theming
- 🧩 **Modular Components** - Small, composable components
- 📦 **TypeScript** - Full type safety
- 🎯 **Tailwind CSS** - Utility-first styling with semantic tokens
- 🔧 **Easy Customization** - Override tokens without touching component code

## Installation

```bash
npm install counterfoil-starter-kit
# or
yarn add counterfoil-starter-kit
# or
pnpm add counterfoil-starter-kit
```

## Quick Start

### 1. Import Components

```tsx
import { Button, Card, Input, Stack } from 'counterfoil-starter-kit'
```

### 2. Import Styles

**Option A: Tailwind v4 or zero-config (recommended for new projects)**

Import two files. No Tailwind config required. Works with Tailwind v4, which does not scan `node_modules`:

```css
@import 'counterfoil-starter-kit/styles/semanticTokens.css';
@import 'counterfoil-starter-kit/styles/CounterfoilComponents.css';
```

**Option B: Import semantic tokens only (use with Tailwind preset)**

```css
/* Import semantic tokens (pure CSS, ready to use) */
@import 'counterfoil-starter-kit/styles/semanticTokens.css';
```

**Option C: Import combined styles (includes Tailwind directives)**

```css
/* Import combined styles - base.css will be processed by your Tailwind setup */
@import 'counterfoil-starter-kit/styles';
```

Or in JavaScript/TypeScript:

```tsx
// Option A: Tailwind v4 / zero-config
import 'counterfoil-starter-kit/styles/semanticTokens.css'
import 'counterfoil-starter-kit/styles/CounterfoilComponents.css'

// Option B: Semantic tokens only
import 'counterfoil-starter-kit/styles/semanticTokens.css'

// Option C: Combined (includes Tailwind directives)
import 'counterfoil-starter-kit/styles'
```

### 3. Configure Tailwind (Required for Options B and C)

To use semantic tokens with Tailwind utilities, extend your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  presets: [require('counterfoil-starter-kit/tailwind-preset')],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/counterfoil-starter-kit/dist/**/*.{js,jsx,ts,tsx}',
  ],
}
```

Then import the base CSS in your main CSS file (after Tailwind processes it):

```css
/* Your main CSS file */
@import 'counterfoil-starter-kit/styles/semanticTokens.css';
/* Tailwind will process base.css if you import it, or use your own Tailwind setup */
```

## Customizing Themes

The library uses CSS variables for all design tokens, making it easy to override them in your application.

### Override Semantic Tokens

Create a CSS file in your project (e.g., `src/theme.css`):

```css
:root {
  /* Override background colors */
  --bg-primary: #ffffff;  /* Change from dark to white */
  
  /* Override text colors */
  --text-primary: #000000;
  
  /* Override accent colors */
  --accent-primary: #ef4444;  /* Change to red */
  
  /* Override button colors */
  --button-primary-bg: #ef4444;
  --button-primary-text: #ffffff;
  
  /* ... override any other tokens as needed */
}
```

Then import your theme **after** the library styles:

```css
/* In your main CSS file */
@import 'counterfoil-starter-kit/styles';
@import './theme.css';  /* Your overrides */
```

### Example: Complete Theme Override

```css
/* src/theme.css */
:root {
  /* Light theme */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;
  --bg-surface: #ffffff;
  
  --text-primary: #212529;
  --text-secondary: #495057;
  --text-tertiary: #6c757d;
  --text-quaternary: #adb5bd;
  
  --accent-primary: #ef4444;  /* Red accent */
  --accent-hover: #dc2626;
  
  --border-primary: #dee2e6;
  --border-secondary: #e9ecef;
  --border-tertiary: #f1f3f5;
  --border-quaternary: #f8f9fa;
  
  /* Button overrides */
  --button-primary-bg: #ef4444;
  --button-primary-text: #ffffff;
  --button-primary-bg-hover: #dc2626;
  --button-primary-bg-active: #b91c1c;
}
```

## Available Components

### Primitives

- `Button` - Multiple variants (primary, secondary, tertiary, link, destructive)
- `Card` - Container component
- `Stack` - Vertical layout primitive
- `Inline` - Horizontal layout primitive
- `Text` - Typography component

### Form Components

- `Input` / `InputField` - Text input with label
- `Textarea` / `TextareaField` - Textarea with label
- `Checkbox` / `CheckboxField` - Checkbox with label
- `Radio` / `RadioField` - Radio button with label

### Data Components

- `Table` - Table container
- `TableHeader` / `TableHeaderCell` - Table header
- `TableBody` / `TableRow` / `TableCell` - Table body
- `TableFooter` - Table footer
- `TableEmptyState` - Empty state for tables

### Navigation

- `Tab` - Single tab component
- `TabBar` - Tab navigation container

## Icons

Counterfoil Kit includes icons via [lucide-react](https://lucide.dev/) for convenience. Icons are ready-to-use out of the box, but components accept any `ReactNode`, making it easy to swap in your preferred icon library.

### Using Icons

Import icons from the main package:

```tsx
import { Button, Tab, Home, User, Settings, Plus } from 'counterfoil-starter-kit'

function App() {
  return (
    <Button icon={<Plus size={16} />}>Add Item</Button>
  )
}
```

### Available Icons

Common icons are exported from `counterfoil-starter-kit`. Examples include:

**Navigation & UI**: `Home`, `Menu`, `Close`, `ChevronRight`, `ChevronLeft`, `Search`, `Settings`, `User`, `Bell`, `Mail`

**Actions**: `Plus`, `Minus`, `Edit`, `Trash`, `Save`, `Download`, `Upload`, `Copy`, `Check`, `AlertCircle`, `Info`

**Content**: `Image`, `File`, `Folder`, `Link`, `ExternalLink`, `Eye`, `Lock`

See `src/icons/index.ts` for the complete list, or import directly from `lucide-react`:

```tsx
import { AnyIcon } from 'lucide-react'
```

### Overriding Icons

Since components accept `ReactNode` for icons, you can easily swap in any icon library:

```tsx
// Option 1: Use react-icons
import { FaHome, FaUser } from 'react-icons/fa'
import { Button, Tab } from 'counterfoil-starter-kit'

function App() {
  return (
    <>
      <Button icon={<FaHome />}>Home</Button>
      <Tab label="Profile" icon={<FaUser />} />
    </>
  )
}

// Option 2: Use heroicons
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline'
import { Button, Tab } from 'counterfoil-starter-kit'

function App() {
  return (
    <>
      <Button icon={<HomeIcon className="w-4 h-4" />}>Home</Button>
      <Tab label="Profile" icon={<UserIcon className="w-4 h-4" />} />
    </>
  )
}

// Option 3: Use custom SVG components
function CustomIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      {/* Your SVG path */}
    </svg>
  )
}

function App() {
  return <Button icon={<CustomIcon />}>Custom</Button>
}
```

### Icon Sizing

Icons inherit color from their parent component's text color. For sizing, pass the `size` prop to lucide-react icons:

```tsx
import { Plus } from 'counterfoil-starter-kit'

// Small button - use 16px icon
<Button size="sm" icon={<Plus size={16} />}>Add</Button>

// Large button - use 20px icon  
<Button size="lg" icon={<Plus size={20} />}>Add</Button>
```

## Usage Examples

### Basic Button

```tsx
import { Button } from 'counterfoil-starter-kit'

function App() {
  return (
    <Button variant="primary" size="md" onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  )
}
```

### Button with Icon

```tsx
import { Button, Plus, ArrowRight } from 'counterfoil-starter-kit'

function App() {
  return (
    <>
      <Button icon={<Plus size={16} />}>Add Item</Button>
      <Button icon={<ArrowRight size={16} />} iconPosition="right">
        Continue
      </Button>
    </>
  )
}
```

### Tab with Icon

```tsx
import { Tab, Home, User, Settings } from 'counterfoil-starter-kit'

function App() {
  return (
    <>
      <Tab label="Home" icon={<Home size={16} />} />
      <Tab label="Profile" icon={<User size={16} />} selected />
      <Tab label="Settings" icon={<Settings size={16} />} />
    </>
  )
}
```

### Form with Input

```tsx
import { InputField, Button, Stack } from 'counterfoil-starter-kit'

function LoginForm() {
  return (
    <Stack gap="lg">
      <InputField
        label="Email"
        type="email"
        placeholder="you@example.com"
      />
      <InputField
        label="Password"
        type="password"
        placeholder="••••••••"
      />
      <Button variant="primary" width="fill">
        Sign In
      </Button>
    </Stack>
  )
}
```

### Custom Theme Example

```tsx
// App.tsx
import { Button } from 'counterfoil-starter-kit'
import './styles.css'  // Your theme overrides

function App() {
  return (
    <div className="bg-bg-primary text-text-primary p-8">
      <h1>My App</h1>
      <Button variant="primary">Themed Button</Button>
    </div>
  )
}
```

```css
/* styles.css */
@import 'counterfoil-starter-kit/styles';

:root {
  --bg-primary: #ffffff;
  --text-primary: #000000;
  --button-primary-bg: #ef4444;
}
```

## Semantic Tokens Reference

All design tokens are CSS variables. Here are the main categories:

### Backgrounds
- `--bg-primary`
- `--bg-secondary`
- `--bg-tertiary`
- `--bg-surface`

### Text
- `--text-primary`
- `--text-secondary`
- `--text-tertiary`
- `--text-quaternary`

### Accents
- `--accent-primary`
- `--accent-hover`

### Borders
- `--border-primary`
- `--border-secondary`
- `--border-tertiary`
- `--border-quaternary`

### Typography
- `--font-ui`
- `--font-size-h1` through `--font-size-h6`
- `--font-size-body-1`, `--font-size-body-2`
- `--line-height-*` (corresponding to font sizes)
- `--font-weight-normal`, `--font-weight-heavy`

See `src/styles/semanticTokens.css` for the complete list.

## Building the Library

To build the library for distribution:

```bash
npm run build:lib
```

This creates:
- `dist/counterfoil-kit.es.js` - ES module build
- `dist/counterfoil-kit.umd.js` - UMD build  
- `dist/index.d.ts` - TypeScript declarations
- `dist/styles.css` - Combined CSS with semantic tokens
- `dist/semanticTokens.css` - Design tokens only
- `dist/CounterfoilComponents.css` - Pre-built utilities for Tailwind v4

## Development

```bash
# Run development server
npm run dev

# Validate components
npm run validate

# Build library
npm run build:lib
```

## License

ISC
