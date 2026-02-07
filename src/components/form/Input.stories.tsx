import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Stack } from '../primitives/Stack'
import { Text } from '../primitives/Text'

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const Types: Story = {
  render: () => (
    <Stack gap="lg" className="w-64">
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          Text
        </Text>
        <Input type="text" placeholder="Text input" />
      </div>
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          Email
        </Text>
        <Input type="email" placeholder="email@example.com" />
      </div>
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          Password
        </Text>
        <Input type="password" placeholder="Password" />
      </div>
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          Number
        </Text>
        <Input type="number" placeholder="123" />
      </div>
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          Search
        </Text>
        <Input type="search" placeholder="Search..." />
      </div>
    </Stack>
  ),
}

export const States: Story = {
  render: () => (
    <Stack gap="lg" className="w-64">
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          Default
        </Text>
        <Input placeholder="Default input" />
      </div>
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          With Value
        </Text>
        <Input defaultValue="Some value" />
      </div>
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          Disabled
        </Text>
        <Input placeholder="Disabled input" disabled />
      </div>
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          Disabled with Value
        </Text>
        <Input defaultValue="Disabled value" disabled />
      </div>
    </Stack>
  ),
}
