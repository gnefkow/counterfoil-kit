# **Component Details**
*Here are the components in Counterfoil and how to use them.*

------------------------------------------------------------------------------------------

## **Primitives**

### Button

```tsx
import { Button } from 'counterfoil-starter-kit'

<Button variant="primary" size="md" onClick={() => console.log('Clicked!')}>
  Click Me
</Button>
```

**Variants:** `primary`, `secondary`, `tertiary`, `quaternary`, `link`, `destructive-primary`, `destructive-secondary`  
**Sizes:** `sm`, `md`, `lg`, `2xl`  
**Width:** `hug` (auto width) or `fill` (full width)

### Card

```tsx
import { Card } from 'counterfoil-starter-kit'

<Card>
  <p>Content goes here</p>
</Card>
```

### Text

Use `Text` when you want semantic typography and hierarchy instead of raw HTML text styling.

```tsx
import { Text, Stack } from 'counterfoil-starter-kit'

<Stack gap="sm">
  <Text size="h3" weight="heavy">Section title</Text>
  <Text size="body1" hierarchy="secondary">
    Supporting copy goes here.
  </Text>
</Stack>
```

**Semantic defaults:** The rendered HTML element is inferred from `size`. Heading sizes (`h1`–`h6`) render as their corresponding heading elements. Body sizes (`body1`, `body2`) render as `<span>`. You can override this with the `as` prop:

```tsx
<Text size="h3" as="p">Visually large, semantically a paragraph</Text>
<Text size="body1" as="label">Body-sized label element</Text>
```

**Text props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | — | **Required.** Content rendered inside the text element. |
| `hierarchy` | `"primary"` \| `"secondary"` \| `"tertiary"` \| `"quaternary"` | `"primary"` | Semantic text color / emphasis level. |
| `size` | `"h1"` \| `"h2"` \| `"h3"` \| `"h4"` \| `"h5"` \| `"h6"` \| `"body1"` \| `"body2"` | `"body1"` | Typography scale to apply. |
| `weight` | `"normal"` \| `"heavy"` | `"normal"` | Font weight. |
| `as` | `"h1"` \| `"h2"` \| `"h3"` \| `"h4"` \| `"h5"` \| `"h6"` \| `"p"` \| `"span"` \| `"label"` \| `"div"` | Inferred from `size` | Override the rendered HTML element. |
| `className` | `string` | — | Optional additional classes. |

### Stack

```tsx
import { Stack } from 'counterfoil-starter-kit'

<Stack gap="lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

**Gap options:** `xs`, `sm`, `m`, `lg`, `xl`

### Inline

```tsx
import { Inline, Button } from 'counterfoil-starter-kit'

<Inline gap="m" align="center">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</Inline>
```

**Gap options:** `xs`, `sm`, `m`, `lg`, `xl`  
**Align options:** `start`, `center`, `end`, `baseline`

------------------------------------------------------------------------------------------

## **Form Components**

### Input and InputField

```tsx
import { Input, InputField } from 'counterfoil-starter-kit'

// Just the input
<Input type="text" placeholder="Enter text..." />

// Input with label
<InputField
  label="Email"
  type="email"
  placeholder="you@example.com"
/>
```

### Checkbox

Use `Checkbox` when you need the bare control without the label/help wrapper. Use `CheckboxField` when you want the labeled field version.

```tsx
import { Checkbox } from 'counterfoil-starter-kit'

<Checkbox
  name="terms"
  value="agreed"
  size="md"
  onChange={(checked, value) => console.log({ checked, value })}
/>
```

**Checkbox props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Controlled checked state. |
| `defaultChecked` | `boolean` | — | Initial checked state for uncontrolled usage. |
| `disabled` | `boolean` | `false` | Disables interaction and applies disabled styling. |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Visual size of the control. |
| `name` | `string` | — | Native checkbox `name` attribute. |
| `value` | `string` | — | Native checkbox `value` attribute; also passed to `onChange`. |
| `onChange` | `(checked: boolean, value?: string) => void` | — | Called with the new checked state and the checkbox value. |

### CheckboxField

```tsx
import { CheckboxField } from 'counterfoil-starter-kit'

<CheckboxField label="I agree to terms" />
```

Use this when you want the checkbox plus surrounding field labeling/help text.

### Radio

Use `Radio` when you need the bare radio control. Use `RadioField` when you want the labeled field version.

```tsx
import { Radio } from 'counterfoil-starter-kit'

<Radio
  name="plan"
  value="pro"
  size="md"
  onChange={(checked, value) => console.log({ checked, value })}
/>
```

**Radio props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Controlled checked state. |
| `defaultChecked` | `boolean` | — | Initial checked state for uncontrolled usage. |
| `disabled` | `boolean` | `false` | Disables interaction and applies disabled styling. |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Visual size of the control. |
| `name` | `string` | — | Native radio `name` attribute; radios in the same group should share a name. |
| `value` | `string` | — | Native radio `value` attribute; also passed to `onChange`. |
| `onChange` | `(checked: boolean, value?: string) => void` | — | Called with the new checked state and the radio value. |

### RadioField

```tsx
import { RadioField } from 'counterfoil-starter-kit'

<RadioField label="Option 1" name="choice" value="1" />
```

Use this when you want the radio plus surrounding field labeling/help text.

### Textarea

Use `Textarea` when you need the bare multiline input. Use `TextareaField` when you want the labeled field version.

```tsx
import { Textarea } from 'counterfoil-starter-kit'

<Textarea
  id="message"
  name="message"
  rows={6}
  placeholder="Enter your message..."
  onChange={(value) => console.log(value)}
/>
```

**Textarea props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value. |
| `defaultValue` | `string` | — | Initial value for uncontrolled usage. |
| `placeholder` | `string` | — | Placeholder text. |
| `disabled` | `boolean` | `false` | Disables interaction and applies disabled styling. |
| `name` | `string` | — | Native textarea `name` attribute. |
| `id` | `string` | — | Native textarea `id` attribute. |
| `rows` | `number` | `4` | Number of visible text rows. |
| `onChange` | `(value: string) => void` | — | Called with the current textarea value. |

### TextareaField

```tsx
import { TextareaField } from 'counterfoil-starter-kit'

<TextareaField label="Message" placeholder="Enter your message..." />
```

Use this when you want the textarea plus surrounding field labeling/help text.

------------------------------------------------------------------------------------------

## **Data Components**

Counterfoil's table components are composable. `Table` is the root and provides context such as density and sticky-header behavior to the child table parts.

```tsx
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableEmptyState,
} from 'counterfoil-starter-kit'

<Table stickyHeader density="md" maxHeight={240}>
  <TableHeader>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Email</TableHeaderCell>
      <TableHeaderCell align="right">Status</TableHeaderCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow interactive onClick={() => console.log('row clicked')}>
      <TableCell>Jane Smith</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell align="right">Active</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Table

`Table` is the structural root. It creates the table container, optionally adds scrolling, and supplies context used by child components such as `TableHeader`, `TableRow`, and `TableCell`.

**Table props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `stickyHeader` | `boolean` | `false` | Makes the header sticky when the table is in a scroll container. |
| `density` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Controls row and cell spacing throughout the table. |
| `maxHeight` | `number` \| `string` | — | Enables vertical scrolling when the table exceeds this height. |
| `children` | `React.ReactNode` | — | **Required.** Table content such as `TableHeader`, `TableBody`, and `TableFooter`. |

### TableHeader

`TableHeader` is the semantic `<thead>` wrapper. When `stickyHeader` is enabled on `Table`, this section becomes sticky.

**TableHeader props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | — | **Required.** Usually one or more `TableRow` elements containing `TableHeaderCell` children. |

### TableBody

`TableBody` is the semantic `<tbody>` wrapper for your rows.

**TableBody props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | — | **Required.** Usually `TableRow` or `TableEmptyState`. |

### TableRow

`TableRow` is the semantic `<tr>` wrapper. It supports optional visual selection and interaction states.

**TableRow props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | — | **Required.** Typically `TableHeaderCell` or `TableCell` children. |
| `selected` | `boolean` | `false` | Applies the selected visual state. This is visual only; you manage selection state yourself. |
| `interactive` | `boolean` | `false` | Adds hover/cursor affordances for clickable rows. |
| `onClick` | `() => void` | — | Optional click handler for the row. |

### TableHeaderCell

`TableHeaderCell` is the semantic `<th>` wrapper. It handles alignment, density-aware padding, and sortable visual affordances.

**TableHeaderCell props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | — | **Required.** Header cell content. |
| `align` | `"left"` \| `"center"` \| `"right"` | `"left"` | Horizontal alignment of the header content. |
| `sortable` | `boolean` | `false` | Adds sortable visual affordance only; you provide the sorting logic. |
| `onClick` | `() => void` | — | Optional click handler, typically used to toggle sort state. |

### TableCell

`TableCell` is the semantic `<td>` wrapper. It handles density-aware padding, alignment, and a numeric-data convenience mode.

**TableCell props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | — | Cell content. Plain strings and numbers are wrapped in `Text` automatically. |
| `align` | `"left"` \| `"center"` \| `"right"` | — | Optional explicit alignment override. |
| `numeric` | `boolean` | `false` | If `true`, the default alignment becomes right-aligned unless `align` is explicitly provided. |
| `onClick` | `() => void` | — | Optional click handler for interactive cells. |

### TableFooter

`TableFooter` is the semantic `<tfoot>` wrapper for totals, summaries, or metadata rows.

**TableFooter props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | — | **Required.** Footer row content. |

### TableEmptyState

`TableEmptyState` renders a single empty-state row that spans the table's columns. Use it inside `TableBody` when you have no data to render.

```tsx
import { TableEmptyState } from 'counterfoil-starter-kit'

<TableEmptyState
  colSpan={4}
  title="No data available"
  description="When you have data, it will appear here."
/>
```

**TableEmptyState props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `colSpan` | `number` | — | **Required.** Number of columns the empty state should span. |
| `title` | `string` | — | **Required.** Primary empty-state message. |
| `description` | `string` | — | Optional supporting copy. |
| `icon` | `React.ReactNode` | — | Optional icon displayed above the title. |

------------------------------------------------------------------------------------------

## **Navigation**

Use **Tab** for a single tab button and **TabBar** when you have a list of tabs and want selection state and layout handled for you.

### Tab

A single navigation tab. You control whether it's selected via the `selected` prop; click is handled by `onSelect`.

```tsx
import { Tab } from 'counterfoil-starter-kit'

<Tab
  label="Settings"
  selected={activeTab === 'settings'}
  onSelect={() => setActiveTab('settings')}
/>
```

**Tab props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | **Required.** Text shown in the tab. |
| `selected` | `boolean` | `false` | Whether this tab is the active one. |
| `disabled` | `boolean` | `false` | When true, the tab is non-interactive. |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Controls padding and typography size. |
| `icon` | `React.ReactNode` | — | Optional icon; use with `iconPosition` to place it left or right. |
| `iconPosition` | `"left"` \| `"right"` | `"left"` | Position of `icon`. Ignored if `leftIcon` or `rightIcon` are set. |
| `leftIcon` | `React.ReactNode` | — | Icon on the left. Overrides `icon` + `iconPosition`. |
| `rightIcon` | `React.ReactNode` | — | Icon on the right. Overrides `icon` + `iconPosition`. |
| `onSelect` | `() => void` | — | Called when the tab is clicked; not called when disabled. |

**Example with icon:**

```tsx
import { Tab, Settings } from 'counterfoil-starter-kit'

<Tab
  label="Settings"
  icon={<Settings size={16} />}
  iconPosition="left"
  selected={activeTab === 'settings'}
  onSelect={() => setActiveTab('settings')}
/>
```

### TabBar

`TabBar` renders a horizontal row of tabs with a bottom border, wires selection to a `selectedId`, and forwards size and icon props to each `Tab`.

```tsx
import { TabBar } from 'counterfoil-starter-kit'

const [selectedId, setSelectedId] = useState('home')

<TabBar
  tabs={[
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'settings', label: 'Settings', disabled: true },
  ]}
  selectedId={selectedId}
  onSelect={(id) => setSelectedId(id)}
/>
```

**TabBar props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `TabBarTab[]` | — | **Required.** Array of tab configs. |
| `selectedId` | `string` | — | **Required.** The `id` of the currently selected tab. |
| `onSelect` | `(id: string) => void` | — | **Required.** Called with the selected tab's `id`. |
| `size` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Size applied to all tabs. |

Each item in `tabs` is an object with:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | Yes | Unique id used for selection and `onSelect`. |
| `label` | `string` | Yes | Tab label text. |
| `disabled` | `boolean` | No | When true, that tab is disabled. |
| `icon` | `React.ReactNode` | No | Optional icon; use with `iconPosition`. |
| `iconPosition` | `"left"` \| `"right"` | No | Position of `icon`. |
| `leftIcon` | `React.ReactNode` | No | Icon on the left. |
| `rightIcon` | `React.ReactNode` | No | Icon on the right. |

**Example with icons:**

```tsx
import { TabBar, Home, User, Settings } from 'counterfoil-starter-kit'

<TabBar
  tabs={[
    { id: 'home', label: 'Home', leftIcon: <Home size={16} /> },
    { id: 'profile', label: 'Profile', leftIcon: <User size={16} /> },
    { id: 'settings', label: 'Settings', leftIcon: <Settings size={16} /> },
  ]}
  selectedId={selectedId}
  onSelect={setSelectedId}
  size="md"
/>
```

Selection is controlled: you keep `selectedId` in state and pass it to `selectedId`; when the user clicks a tab, `onSelect(id)` runs and you update that state.