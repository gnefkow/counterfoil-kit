import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TabBar } from './TabBar'

const meta: Meta<typeof TabBar> = {
  title: 'Navigation/TabBar',
  component: TabBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof TabBar>

const TabBarWrapper = (args: any) => {
  const [selectedId, setSelectedId] = useState(args.selectedId || args.tabs[0]?.id)
  return (
    <TabBar
      {...args}
      selectedId={selectedId}
      onSelect={setSelectedId}
    />
  )
}

export const Default: Story = {
  render: TabBarWrapper,
  args: {
    tabs: [
      { id: 'tab1', label: 'Tab 1' },
      { id: 'tab2', label: 'Tab 2' },
      { id: 'tab3', label: 'Tab 3' },
    ],
    selectedId: 'tab1',
  },
}

export const Sizes: Story = {
  render: () => {
    const [selected1, setSelected1] = useState('tab1')
    const [selected2, setSelected2] = useState('tab1')
    const [selected3, setSelected3] = useState('tab1')
    
    const tabs = [
      { id: 'tab1', label: 'Tab 1' },
      { id: 'tab2', label: 'Tab 2' },
      { id: 'tab3', label: 'Tab 3' },
    ]

    return (
      <div className="flex flex-col gap-8 w-full">
        <div>
          <TabBar
            tabs={tabs}
            selectedId={selected1}
            size="sm"
            onSelect={setSelected1}
          />
        </div>
        <div>
          <TabBar
            tabs={tabs}
            selectedId={selected2}
            size="md"
            onSelect={setSelected2}
          />
        </div>
        <div>
          <TabBar
            tabs={tabs}
            selectedId={selected3}
            size="lg"
            onSelect={setSelected3}
          />
        </div>
      </div>
    )
  },
}

export const WithDisabled: Story = {
  render: TabBarWrapper,
  args: {
    tabs: [
      { id: 'tab1', label: 'Tab 1' },
      { id: 'tab2', label: 'Tab 2', disabled: true },
      { id: 'tab3', label: 'Tab 3' },
    ],
    selectedId: 'tab1',
  },
}
