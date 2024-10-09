import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import AppAvatar from '../molecules/AppAvatar'
import { IAppAvatarProps } from '../types'

const meta: Meta<typeof AppAvatar> = {
  title: 'Molecules/AppAvatar',
  component: AppAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    variant: {
      control: { type: 'radio' },
      options: ['solid', 'soft'],
    },
    color: {
      control: { type: 'select' },
      options: ['accent', 'neutral', 'success', 'error', 'warning', 'info'],
    },
    highContrast: { control: 'boolean' },
    fallBack: {
      control: { type: 'select' },
      options: ['image', 'initials', 'icon'],
    },
    initials: { control: 'text' },
    imageUrl: { control: 'text' },
    numberOfInitials: {
      control: { type: 'radio' },
      options: [1, 2],
    },
  },
}

export default meta
type Story = StoryObj<typeof AppAvatar>

// Default Story
export const Default: Story = {
  args: {
    size: 4,
    variant: 'solid',
    color: 'neutral',
    fallBack: 'initials',
    initials: 'JD',
  },
}

// Size Variations
export const SizeVariations: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((size) => (
        <AppAvatar key={size} size={size as IAppAvatarProps['size']} initials="JD" />
      ))}
    </div>
  ),
}

// Color Variations
export const ColorVariations: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {['accent', 'neutral', 'success', 'error', 'warning', 'info'].map((color) => (
        <AppAvatar key={color} color={color as IAppAvatarProps['color']} initials="JD" />
      ))}
    </div>
  ),
}

// Variant Comparison
export const VariantComparison: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <AppAvatar variant="solid" initials="JD" />
      <AppAvatar variant="soft" initials="JD" />
    </div>
  ),
}

// High Contrast
export const HighContrast: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <AppAvatar highContrast={false} initials="JD" />
      <AppAvatar highContrast={true} initials="JD" />
    </div>
  ),
}

// Fallback Types
export const FallbackTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <AppAvatar fallBack="initials" initials="JD" />
      <AppAvatar fallBack="image" imageUrl="https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <AppAvatar fallBack="icon" />
    </div>
  ),
}

// Number of Initials
export const NumberOfInitials: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <AppAvatar numberOfInitials={1} initials="John Doe" />
      <AppAvatar numberOfInitials={2} initials="John Doe" />
    </div>
  ),
}

// Complex Examples
export const ComplexExamples: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <AppAvatar
        size={5}
        color="accent"
        variant="soft"
        highContrast={true}
        fallBack="initials"
        initials="AD"
        numberOfInitials={2}
      />
      <AppAvatar
        size={6}
        color="success"
        variant="solid"
        fallBack="image"
        imageUrl="https://images.unsplash.com/photo-1728155235425-d6053d68c8de?q=80&w=3230&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <AppAvatar
        size={4}
        color="warning"
        variant="soft"
        fallBack="icon"
      />
    </div>
  ),
}

// Playground
export const Playground: Story = {
  args: {
    size: 4,
    variant: 'solid',
    color: 'neutral',
    highContrast: false,
    fallBack: 'initials',
    initials: 'JD',
    numberOfInitials: 1,
  },
}