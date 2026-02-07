import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { Stack } from '../primitives/Stack'
import { Text } from '../primitives/Text'
import { Inline } from '../primitives/Inline'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
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
type Story = StoryObj<typeof Checkbox>

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
        <Checkbox size="sm" />
        <Text>Small checkbox</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Checkbox size="md" />
        <Text>Medium checkbox</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Checkbox size="lg" />
        <Text>Large checkbox</Text>
      </Inline>
    </Stack>
  ),
}

export const States: Story = {
  render: () => (
    <Stack gap="lg">
      <Inline align="center" gap="m">
        <Checkbox />
        <Text>Unchecked</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Checkbox checked />
        <Text>Checked</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Checkbox disabled />
        <Text>Disabled</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Checkbox checked disabled />
        <Text>Checked & Disabled</Text>
      </Inline>
    </Stack>
  ),
}

export const Group: Story = {
  render: () => (
    <Stack gap="m">
      <Inline align="center" gap="m">
        <Checkbox name="options" value="option1" />
        <Text>Option 1</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Checkbox name="options" value="option2" defaultChecked />
        <Text>Option 2</Text>
      </Inline>
      <Inline align="center" gap="m">
        <Checkbox name="options" value="option3" />
        <Text>Option 3</Text>
      </Inline>
    </Stack>
  ),
}
