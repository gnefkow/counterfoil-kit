import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Plus, Download, ArrowRight, Settings, Trash } from '../../icons'

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'link',
        'destructive-primary',
        'destructive-secondary',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', '2xl'],
    },
    width: {
      control: 'select',
      options: ['hug', 'fill'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
  },
}

export const Quaternary: Story = {
  args: {
    children: 'Button',
    variant: 'quaternary',
  },
}

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
}

export const DestructivePrimary: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive-primary',
  },
}

export const DestructiveSecondary: Story = {
  args: {
    children: 'Cancel',
    variant: 'destructive-secondary',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="2xl">2XL</Button>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button width="fill">Full Width</Button>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 flex-wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="quaternary">Quaternary</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <Button variant="destructive-primary">Destructive Primary</Button>
        <Button variant="destructive-secondary">Destructive Secondary</Button>
      </div>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 flex-wrap">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
        <Button variant="primary" size="2xl">2XL</Button>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <Button variant="secondary" size="sm">Small</Button>
        <Button variant="secondary" size="md">Medium</Button>
        <Button variant="secondary" size="lg">Large</Button>
        <Button variant="secondary" size="2xl">2XL</Button>
      </div>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 flex-wrap">
        <Button icon={<Plus size={16} />}>Add Item</Button>
        <Button variant="secondary" icon={<Download size={16} />}>Download</Button>
        <Button variant="tertiary" icon={<Settings size={16} />}>Settings</Button>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <Button icon={<ArrowRight size={16} />} iconPosition="right">Continue</Button>
        <Button variant="destructive-primary" icon={<Trash size={16} />}>Delete</Button>
        <Button variant="link" icon={<ArrowRight size={16} />} iconPosition="right">Learn More</Button>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <Button icon={<Plus size={16} />} size="sm">Small</Button>
        <Button icon={<Plus size={16} />} size="md">Medium</Button>
        <Button icon={<Plus size={16} />} size="lg">Large</Button>
        <Button icon={<Plus size={20} />} size="2xl">2XL</Button>
      </div>
    </div>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <Button icon={<Settings size={16} />} aria-label="Settings" />
      <Button variant="secondary" icon={<Download size={16} />} aria-label="Download" />
      <Button variant="tertiary" icon={<Plus size={16} />} aria-label="Add" />
      <Button variant="destructive-primary" icon={<Trash size={16} />} aria-label="Delete" />
    </div>
  ),
}
