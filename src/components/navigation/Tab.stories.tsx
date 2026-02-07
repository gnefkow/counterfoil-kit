import type { Meta, StoryObj } from '@storybook/react'
import { Tab } from './Tab'
import { Home, User, Settings, Mail } from '../../icons'

const meta: Meta<typeof Tab> = {
  title: 'Navigation/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    selected: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tab>

export const Default: Story = {
  args: {
    label: 'Tab',
  },
}

export const Selected: Story = {
  args: {
    label: 'Tab',
    selected: true,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 border-b border-border-secondary">
      <div className="flex">
        <Tab label="Small" size="sm" />
        <Tab label="Small" size="sm" selected />
      </div>
      <div className="flex">
        <Tab label="Medium" size="md" />
        <Tab label="Medium" size="md" selected />
      </div>
      <div className="flex">
        <Tab label="Large" size="lg" />
        <Tab label="Large" size="lg" selected />
      </div>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex gap-4 border-b border-border-secondary">
      <Tab label="Unselected" />
      <Tab label="Selected" selected />
      <Tab label="Disabled" disabled />
      <Tab label="Selected & Disabled" selected disabled />
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-4 border-b border-border-secondary">
      <Tab label="Home" icon={<Home size={16} />} />
      <Tab label="Profile" icon={<User size={16} />} selected />
      <Tab label="Settings" icon={<Settings size={16} />} />
      <Tab label="Messages" icon={<Mail size={16} />} />
    </div>
  ),
}
