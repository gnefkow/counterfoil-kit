import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio'
import { Stack } from '../primitives/Stack'
import { Text } from '../primitives/Text'
import { Inline } from '../primitives/Inline'

const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Sizes: Story = {
  render: () => (
    <Stack gap="lg">
      <Inline align="center" gap="m">
        <Radio name="size-demo" size="sm" />
        <Text>Small radio</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Radio name="size-demo" size="md" />
        <Text>Medium radio</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Radio name="size-demo" size="lg" />
        <Text>Large radio</Text>
      </Inline>
    </Stack>
  ),
}

export const States: Story = {
  render: () => (
    <Stack gap="lg">
      <Inline align="center" gap="m">
        <Radio name="states-demo" />
        <Text>Unchecked</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Radio name="states-demo" checked />
        <Text>Checked</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Radio name="states-demo" disabled />
        <Text>Disabled</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Radio name="states-demo" checked disabled />
        <Text>Checked & Disabled</Text>
      </Inline>
    </Stack>
  ),
}

export const Group: Story = {
  render: () => (
    <Stack gap="m">
      <Inline align="center" gap="m">
        <Radio name="options" value="option1" />
        <Text>Option 1</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Radio name="options" value="option2" defaultChecked />
        <Text>Option 2</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Radio name="options" value="option3" />
        <Text>Option 3</Text>
      </Inline>
    </Stack>
  ),
}
