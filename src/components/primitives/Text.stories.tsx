import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'
import { Stack } from './Stack'

const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    hierarchy: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
    },
    size: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'heavy'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'Default text content',
  },
}

export const Sizes: Story = {
  render: () => (
    <Stack gap="lg">
      <Text size="h1">Heading 1</Text>
      <Text size="h2">Heading 2</Text>
      <Text size="h3">Heading 3</Text>
      <Text size="h4">Heading 4</Text>
      <Text size="h5">Heading 5</Text>
      <Text size="h6">Heading 6</Text>
      <Text size="body1">Body 1 text</Text>
      <Text size="body2">Body 2 text</Text>
    </Stack>
  ),
}

export const Hierarchies: Story = {
  render: () => (
    <Stack gap="lg">
      <Text hierarchy="primary">Primary text hierarchy</Text>
      <Text hierarchy="secondary">Secondary text hierarchy</Text>
      <Text hierarchy="tertiary">Tertiary text hierarchy</Text>
      <Text hierarchy="quaternary">Quaternary text hierarchy</Text>
    </Stack>
  ),
}

export const Weights: Story = {
  render: () => (
    <Stack gap="lg">
      <Text weight="normal">Normal weight text</Text>
      <Text weight="heavy">Heavy weight text</Text>
      <Text size="h4" weight="normal">Normal heading</Text>
      <Text size="h4" weight="heavy">Heavy heading</Text>
    </Stack>
  ),
}

export const Combinations: Story = {
  render: () => (
    <Stack gap="xl">
      <div>
        <Text size="h1" weight="heavy">Main Title</Text>
        <Text size="body1" hierarchy="secondary">
          Supporting description text
        </Text>
      </div>
      <div>
        <Text size="h3" weight="heavy">Section Title</Text>
        <Text size="body1" hierarchy="tertiary">
          Section description with tertiary hierarchy
        </Text>
      </div>
    </Stack>
  ),
}
