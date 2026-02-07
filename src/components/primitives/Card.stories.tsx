import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Stack } from './Stack'
import { Text } from './Text'

const meta: Meta<typeof Card> = {
  title: 'Primitives/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card>
      <Stack>
        <Text>Card content goes here</Text>
        <Text>This is a simple card component</Text>
      </Stack>
    </Card>
  ),
}

export const WithContent: Story = {
  render: () => (
    <Card>
      <Stack gap="lg">
        <Text className="text-h4 font-heavy">Card Title</Text>
        <Text>
          This card contains multiple elements stacked vertically with spacing.
        </Text>
        <Text>
          Cards provide visual containment through background, border, and padding.
        </Text>
      </Stack>
    </Card>
  ),
}

export const MultipleCards: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Card>
        <Stack>
          <Text className="font-heavy">Card 1</Text>
          <Text>Content</Text>
        </Stack>
      </Card>
      <Card>
        <Stack>
          <Text className="font-heavy">Card 2</Text>
          <Text>Content</Text>
        </Stack>
      </Card>
      <Card>
        <Stack>
          <Text className="font-heavy">Card 3</Text>
          <Text>Content</Text>
        </Stack>
      </Card>
    </div>
  ),
}
