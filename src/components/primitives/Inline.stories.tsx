import type { Meta, StoryObj } from '@storybook/react'
import { Inline } from './Inline'
import { Button } from './Button'
import { Text } from './Text'

const meta: Meta<typeof Inline> = {
  title: 'Primitives/Inline',
  component: Inline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: 'select',
      options: ['xs', 'sm', 'm', 'lg', 'xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'baseline'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Inline>

export const Default: Story = {
  args: {
    children: (
      <>
        <Button>Button</Button>
        <Text>Text content</Text>
        <Button variant="secondary">Another</Button>
      </>
    ),
  },
}

export const WithGaps: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <Text className="font-heavy mb-2">Extra Small (xs)</Text>
        <Inline gap="xs">
          <Button size="sm">Button</Button>
          <Text>Text</Text>
          <Button size="sm" variant="secondary">Button</Button>
        </Inline>
      </div>
      <div>
        <Text className="font-heavy mb-2">Small (sm)</Text>
        <Inline gap="sm">
          <Button size="sm">Button</Button>
          <Text>Text</Text>
          <Button size="sm" variant="secondary">Button</Button>
        </Inline>
      </div>
      <div>
        <Text className="font-heavy mb-2">Medium (m)</Text>
        <Inline gap="m">
          <Button>Button</Button>
          <Text>Text</Text>
          <Button variant="secondary">Button</Button>
        </Inline>
      </div>
      <div>
        <Text className="font-heavy mb-2">Large (lg)</Text>
        <Inline gap="lg">
          <Button>Button</Button>
          <Text>Text</Text>
          <Button variant="secondary">Button</Button>
        </Inline>
      </div>
      <div>
        <Text className="font-heavy mb-2">Extra Large (xl)</Text>
        <Inline gap="xl">
          <Button>Button</Button>
          <Text>Text</Text>
          <Button variant="secondary">Button</Button>
        </Inline>
      </div>
    </div>
  ),
}

export const Alignments: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <Text className="font-heavy mb-2">Start</Text>
        <Inline align="start">
          <Button>Button</Button>
          <Text size="h4">Large Text</Text>
        </Inline>
      </div>
      <div>
        <Text className="font-heavy mb-2">Center</Text>
        <Inline align="center">
          <Button>Button</Button>
          <Text size="h4">Large Text</Text>
        </Inline>
      </div>
      <div>
        <Text className="font-heavy mb-2">End</Text>
        <Inline align="end">
          <Button>Button</Button>
          <Text size="h4">Large Text</Text>
        </Inline>
      </div>
      <div>
        <Text className="font-heavy mb-2">Baseline</Text>
        <Inline align="baseline">
          <Button>Button</Button>
          <Text size="h4">Large Text</Text>
        </Inline>
      </div>
    </div>
  ),
}
