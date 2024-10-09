import type { Meta, StoryObj } from '@storybook/react'
import 'remixicon/fonts/remixicon.css'
import AppLoader from '../atoms/AppLoader'

const meta: Meta<typeof AppLoader> = {
  title: 'AppLoader',
  component: AppLoader,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof AppLoader>

// Default Loader
export const Default: Story = {
  args: {
    className: '',
  },
}

// Loader with Custom Class
export const WithCustomClass: Story = {
  args: {
    className: 'text-light-accent9',
  },
}

// Customizable Playground
const Template = (args: { className?: string | string[] }) => <AppLoader {...args} />

export const Playground: Story = {
  render: args => <Template {...args} />,
}

Playground.args = {
    className: 'w-16 h-16 text-blue-500',
  }