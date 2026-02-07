import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from './Stack'
import { Card } from './Card'
import { Text } from './Text'

const meta: Meta<typeof Stack> = {
  title: 'Primitives/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: 'select',
      options: ['xs', 'sm', 'm', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Stack>

export const Default: Story = {
  args: {
    children: (
      <>
        <Card>
          <Text>Item 1</Text>
        </Card>
        <Card>
          <Text>Item 2</Text>
        </Card>
        <Card>
          <Text>Item 3</Text>
        </Card>
      </>
    ),
  },
}

export const ExtraSmallGap: Story = {
  args: {
    gap: 'xs',
    children: (
      <>
        <Card>
          <Text>Item 1</Text>
        </Card>
        <Card>
          <Text>Item 2</Text>
        </Card>
        <Card>
          <Text>Item 3</Text>
        </Card>
      </>
    ),
  },
}

export const SmallGap: Story = {
  args: {
    gap: 'sm',
    children: (
      <>
        <Card>
          <Text>Item 1</Text>
        </Card>
        <Card>
          <Text>Item 2</Text>
        </Card>
        <Card>
          <Text>Item 3</Text>
        </Card>
      </>
    ),
  },
}

export const MediumGap: Story = {
  args: {
    gap: 'm',
    children: (
      <>
        <Card>
          <Text>Item 1</Text>
        </Card>
        <Card>
          <Text>Item 2</Text>
        </Card>
        <Card>
          <Text>Item 3</Text>
        </Card>
      </>
    ),
  },
}

export const LargeGap: Story = {
  args: {
    gap: 'lg',
    children: (
      <>
        <Card>
          <Text>Item 1</Text>
        </Card>
        <Card>
          <Text>Item 2</Text>
        </Card>
        <Card>
          <Text>Item 3</Text>
        </Card>
      </>
    ),
  },
}

export const ExtraLargeGap: Story = {
  args: {
    gap: 'xl',
    children: (
      <>
        <Card>
          <Text>Item 1</Text>
        </Card>
        <Card>
          <Text>Item 2</Text>
        </Card>
        <Card>
          <Text>Item 3</Text>
        </Card>
      </>
    ),
  },
}

export const AllGaps: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <Text className="font-heavy mb-2">Extra Small (xs)</Text>
        <Stack gap="xs">
          <Card>
            <Text>Item 1</Text>
          </Card>
          <Card>
            <Text>Item 2</Text>
          </Card>
        </Stack>
      </div>
      <div>
        <Text className="font-heavy mb-2">Small (sm)</Text>
        <Stack gap="sm">
          <Card>
            <Text>Item 1</Text>
          </Card>
          <Card>
            <Text>Item 2</Text>
          </Card>
        </Stack>
      </div>
      <div>
        <Text className="font-heavy mb-2">Medium (m)</Text>
        <Stack gap="m">
          <Card>
            <Text>Item 1</Text>
          </Card>
          <Card>
            <Text>Item 2</Text>
          </Card>
        </Stack>
      </div>
      <div>
        <Text className="font-heavy mb-2">Large (lg)</Text>
        <Stack gap="lg">
          <Card>
            <Text>Item 1</Text>
          </Card>
          <Card>
            <Text>Item 2</Text>
          </Card>
        </Stack>
      </div>
      <div>
        <Text className="font-heavy mb-2">Extra Large (xl)</Text>
        <Stack gap="xl">
          <Card>
            <Text>Item 1</Text>
          </Card>
          <Card>
            <Text>Item 2</Text>
          </Card>
        </Stack>
      </div>
    </div>
  ),
}
