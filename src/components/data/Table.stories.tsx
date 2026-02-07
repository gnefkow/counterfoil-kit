import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableEmptyState,
} from './index'

const meta: Meta<typeof Table> = {
  title: 'Data/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    density: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    stickyHeader: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

const sampleData = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
]

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell align="right">Status</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}

export const Densities: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-full max-w-4xl">
      <div>
        <h3 className="mb-2 text-body-1 font-heavy">Small Density</h3>
        <Table density="sm">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.slice(0, 2).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <h3 className="mb-2 text-body-1 font-heavy">Medium Density (Default)</h3>
        <Table density="md">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.slice(0, 2).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <h3 className="mb-2 text-body-1 font-heavy">Large Density</h3>
        <Table density="lg">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.slice(0, 2).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell align="right">Status</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row, idx) => (
            <TableRow
              key={row.id}
              interactive
              selected={idx === 0}
              onClick={() => console.log('Row clicked:', row.id)}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}

export const EmptyState: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell align="right">Status</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableEmptyState
            colSpan={4}
            title="No data available"
            description="When you have data, it will appear here."
            icon={<span className="text-4xl">📋</span>}
          />
        </TableBody>
      </Table>
    </div>
  ),
}

export const Scrollable: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Table maxHeight={200} stickyHeader>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell align="right">Status</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...sampleData, ...sampleData, ...sampleData].map((row, idx) => (
            <TableRow key={`${row.id}-${idx}`}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}
