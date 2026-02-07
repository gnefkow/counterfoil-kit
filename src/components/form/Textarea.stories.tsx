import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'
import { Stack } from '../primitives/Stack'
import { Text } from '../primitives/Text'

const meta: Meta<typeof Textarea> = {
  title: 'Form/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    rows: {
      control: 'number',
    },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const States: Story = {
  render: () => (
    <Stack gap="lg" className="w-64">
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          Default
        </Text>
        <Textarea placeholder="Enter text..." />
      </div>
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          With Value
        </Text>
        <Textarea defaultValue="Some text content here" />
      </div>
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          Disabled
        </Text>
        <Textarea placeholder="Disabled textarea" disabled />
      </div>
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          Disabled with Value
        </Text>
        <Textarea defaultValue="Disabled content" disabled />
      </div>
    </Stack>
  ),
}

export const Rows: Story = {
  render: () => (
    <Stack gap="lg" className="w-64">
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          2 Rows
        </Text>
        <Textarea rows={2} placeholder="2 rows..." />
      </div>
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          4 Rows (Default)
        </Text>
        <Textarea rows={4} placeholder="4 rows..." />
      </div>
      <div>
        <Text size="body2" hierarchy="secondary" className="mb-2">
          6 Rows
        </Text>
        <Textarea rows={6} placeholder="6 rows..." />
      </div>
    </Stack>
  ),
}
