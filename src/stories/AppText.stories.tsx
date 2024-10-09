import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import AppText from '../atoms/AppText'
import { TAppTextProps } from '../types'

const meta: Meta<typeof AppText> = {
  title: 'Atoms/AppText',
  component: AppText,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    color: {
      control: { type: 'select' },
      options: ['gray', 'error', 'accent', 'cyan', 'info', 'success', 'tomato', 'violet', 'warning'],
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    highContrast: { control: 'boolean' },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    trim: {
      control: { type: 'select' },
      options: ['normal', 'start', 'end', 'both'],
    },
  },
}

export default meta
type Story = StoryObj<typeof AppText>

// Default Story
export const Default: Story = {
  args: {
    children: 'This is a default AppText component',
  },
}

// Size Variations
export const SizeVariations: Story = {
  render: () => (
    <div className="space-y-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((size) => (
        <AppText key={size} size={size as TAppTextProps['size']}>
          Size {size} Text
        </AppText>
      ))}
    </div>
  ),
}

// Color Variations
export const ColorVariations: Story = {
  render: () => (
    <div className="space-y-2">
      {['gray', 'error', 'accent', 'cyan', 'info', 'success', 'tomato', 'violet', 'warning'].map((color) => (
        <AppText key={color} color={color as TAppTextProps['color']}>
          {color.charAt(0).toUpperCase() + color.slice(1)} Text
        </AppText>
      ))}
    </div>
  ),
}

// Weight Variations
export const WeightVariations: Story = {
  render: () => (
    <div className="space-y-2">
      {['regular', 'medium', 'semibold', 'bold'].map((weight) => (
        <AppText key={weight} weight={weight as TAppTextProps['weight']}>
          {weight.charAt(0).toUpperCase() + weight.slice(1)} Weight
        </AppText>
      ))}
    </div>
  ),
}

// High Contrast
export const HighContrast: Story = {
  render: () => (
    <div className="space-y-2">
      <AppText highContrast={false}>Normal Contrast</AppText>
      <AppText highContrast={true}>High Contrast</AppText>
    </div>
  ),
}

// Alignment
export const Alignment: Story = {
  render: () => (
    <div className="space-y-2">
      <AppText align="left">Left Aligned</AppText>
      <AppText align="center">Center Aligned</AppText>
      <AppText align="right">Right Aligned</AppText>
    </div>
  ),
}

// Trim
export const Trim: Story = {
  render: () => (
    <div className="space-y-2">
      <AppText trim="normal">Normal Trim</AppText>
      <AppText trim="start">Start Trim</AppText>
      <AppText trim="end">End Trim</AppText>
      <AppText trim="both">Both Trim</AppText>
    </div>
  ),
}

// Complex Example
export const ComplexExample: Story = {
  args: {
    size: 4,
    color: 'accent',
    weight: 'semibold',
    highContrast: true,
    align: 'center',
    children: 'This is a complex AppText example',
  },
}

// Playground
export const Playground: Story = {
  args: {
    size: 3,
    color: 'gray',
    weight: 'regular',
    highContrast: false,
    align: 'left',
    trim: 'normal',
    children: 'Customize this text in the controls',
  },
}