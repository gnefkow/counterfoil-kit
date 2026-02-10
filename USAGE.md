# Using Counterfoil Kit as a Component Library

This guide explains how to use Counterfoil Kit in another React/TypeScript/Vite project.

## Quick Setup

### 1. Install the Library

If publishing to npm:
```bash
npm install counterfoil-starter-kit
```

If using locally (e.g., via npm link or file path):
```bash
npm link /path/to/counterfoil-kit
# or in package.json:
# "counterfoil-starter-kit": "file:../counterfoil-kit"
```

### 2. Import Components

```tsx
// Single import from root
import { Button, Card, Input, Stack, TabBar } from 'counterfoil-starter-kit'

// Or import from specific categories
import { Button, Card } from 'counterfoil-starter-kit/components/primitives'
import { Input, Checkbox } from 'counterfoil-starter-kit/components/form'
```

### 3. Import Styles

**For Tailwind v4 (or zero-config setup)**

If you use Tailwind v4 or want to avoid Tailwind configuration, import these two files. No `@source` or content paths needed:

```css
/* src/index.css or src/main.css */
@import 'counterfoil-starter-kit/styles/semanticTokens.css';
@import 'counterfoil-starter-kit/styles/CounterfoilComponents.css';
```

Or in JavaScript/TypeScript:

```tsx
import 'counterfoil-starter-kit/styles/semanticTokens.css'
import 'counterfoil-starter-kit/styles/CounterfoilComponents.css'
```

**Option A: Import combined styles (Tailwind v3)**

```css
/* src/index.css or src/main.css */
@import 'counterfoil-starter-kit/styles';
```

**Option B: Import in your entry point**

```tsx
// src/main.tsx
import 'counterfoil-starter-kit/styles'
import { createRoot } from 'react-dom/client'
// ...
```

### 4. Configure Tailwind (Optional for Tailwind v3)

If you use Tailwind v3 and the combined `styles` import, configure Tailwind to use semantic tokens:

To use semantic tokens with Tailwind utilities in your project:

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

## Customizing Themes

### Override Semantic Tokens

The library uses CSS variables, so you can override any token easily:

```css
/* src/theme.css */
:root {
  /* Change bg-primary from dark to white */
  --bg-primary: #ffffff;
  
  /* Change text-primary from light to dark */
  --text-primary: #000000;
  
  /* Change accent color to red */
  --accent-primary: #ef4444;
  
  /* Override button colors */
  --button-primary-bg: #ef4444;
  --button-primary-text: #ffffff;
  --button-primary-bg-hover: #dc2626;
}
```

Then import your theme **after** the library styles:

```css
/* src/index.css */
@import 'counterfoil-starter-kit/styles';
@import './theme.css';  /* Your overrides */
```

### Complete Example: Red Theme

```css
/* src/theme.css */
:root {
  /* Backgrounds */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;
  --bg-surface: #ffffff;
  
  /* Text */
  --text-primary: #212529;
  --text-secondary: #495057;
  --text-tertiary: #6c757d;
  
  /* Accent - Red theme */
  --accent-primary: #ef4444;
  --accent-hover: #dc2626;
  
  /* Borders */
  --border-primary: #dee2e6;
  --border-secondary: #e9ecef;
  
  /* Buttons - Red theme */
  --button-primary-bg: #ef4444;
  --button-primary-text: #ffffff;
  --button-primary-bg-hover: #dc2626;
  --button-primary-bg-active: #b91c1c;
  
  --button-secondary-text: #ef4444;
  --button-secondary-border: #ef4444;
  --button-secondary-bg-hover: rgba(239, 68, 68, 0.08);
}
```

## Usage Examples

### Basic Component Usage

```tsx
import { Button, Card, Stack } from 'counterfoil-starter-kit'

function App() {
  return (
    <Card>
      <Stack gap="lg">
        <h1>My App</h1>
        <Button variant="primary">Click me</Button>
        <Button variant="secondary">Secondary</Button>
      </Stack>
    </Card>
  )
}
```

### Form with Custom Theme

```tsx
// App.tsx
import { InputField, Button, Stack } from 'counterfoil-starter-kit'
import './styles.css'  // Includes library styles + your theme

function LoginForm() {
  return (
    <div className="bg-bg-primary text-text-primary p-8">
      <Stack gap="lg">
        <InputField
          label="Email"
          type="email"
          placeholder="you@example.com"
        />
        <InputField
          label="Password"
          type="password"
        />
        <Button variant="primary" width="fill">
          Sign In
        </Button>
      </Stack>
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

### Using Semantic Tokens Directly

Since tokens are CSS variables, you can use them directly:

```css
.my-custom-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}

.my-custom-button {
  background-color: var(--button-primary-bg);
  color: var(--button-primary-text);
}

.my-custom-button:hover {
  background-color: var(--button-primary-bg-hover);
}
```

Or with Tailwind utilities (if you've configured the preset):

```tsx
<div className="bg-bg-primary text-text-primary border border-border-primary">
  <button className="bg-button-primary-bg text-button-primary-text hover:bg-button-primary-bg-hover">
    Click me
  </button>
</div>
```

## Benefits of This Approach

1. **Easy Component Import**: Single import from root
   ```tsx
   import { Button, Card } from 'counterfoil-starter-kit'
   ```

2. **Easy Style Override**: Just redefine CSS variables
   ```css
   :root { --bg-primary: #ffffff; }
   ```

3. **Semantic Tokens Preserved**: All components use semantic tokens, so overriding `--bg-primary` affects all components that use it

4. **Type Safety**: Full TypeScript support with exported types

5. **Framework Agnostic**: CSS variables work anywhere, not just React

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

## Troubleshooting

### Styles not loading?

Make sure you import the styles:
```tsx
import 'counterfoil-starter-kit/styles'
```

### Tailwind utilities not working?

**Tailwind v4 / zero-config:** Use the two-file import (`semanticTokens.css` + `CounterfoilComponents.css`). No Tailwind config required.

**Tailwind v3 with preset:** Make sure you:
1. Extended the Tailwind config with the preset
2. Included the library in your `content` paths
3. Have Tailwind configured in your project

### TypeScript errors?

Make sure the library is built and `dist/index.d.ts` exists. Run:
```bash
npm run build:lib
```
