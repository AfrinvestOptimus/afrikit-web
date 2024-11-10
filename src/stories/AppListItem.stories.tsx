import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import AppListItem from '../organisms/AppListItem'
import { TAppListItemProps } from '../types'
import 'remixicon/fonts/remixicon.css'

const meta: Meta<typeof AppListItem> = {
  title: 'Organisms/AppListItem',
  component: AppListItem,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: [1, 2] },
    variant: { control: 'radio', options: ['1-line', '2-line', '3-line'] },
    leading: {
      control: 'select',
      options: [
        'none',
        'avatar',
        'brand',
        'icon',
        'paymentMethod',
        'flag',
        'radio',
        'txStatus',
        'check',
      ],
    },
    trailing: {
      control: 'select',
      options: ['none', 'textContent', 'text', 'link', 'icon', 'button', 'switch'],
    },
    supportingText: { control: 'boolean' },
    overline: { control: 'boolean' },
    subTrigger: { control: 'boolean' },
    title: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof AppListItem>

// Default Story: Basic list item without leading or trailing elements
export const Default: Story = {
  args: {
    title: 'Default List Item',
    size: 2,
    variant: '1-line',
  },
}

// All Leading Elements
export const AllLeadingElements: Story = {
  render: () => (
    <div className="space-y-4">
      <AppListItem
        title="Avatar"
        leading="avatar"
        leadingProps={{
          size: 5,
          variant: 'solid',
          color: 'accent',
          initials: 'AB',
        }}
      />
      <AppListItem title="Brand" leading="brand" leadingProps={{}} />
      <AppListItem
        title="Icon"
        leading="icon"
        leadingProps={{
          iconClass: 'ri-star-line text-light-type-gray dark:text-light-type-gray',
          size: '48',
        }}
      />
      <AppListItem
        title="Payment Method"
        leading="paymentMethod"
        leadingProps={{ imgLink: 'https://www.worldometers.info//img/flags/small/tn_cu-flag.gif' }}
      />
      <AppListItem
        title="Flag"
        leading="flag"
        leadingProps={{ flagLink: 'https://www.worldometers.info//img/flags/small/tn_cu-flag.gif' }}
      />
      <AppListItem title="Radio" leading="radio" leadingProps={{}} />
      <AppListItem title="Transaction Status" leading="txStatus" leadingProps={{}} />
      <AppListItem title="Check" leading="check" leadingProps={{}} />
    </div>
  ),
}

// All Trailing Elements
export const AllTrailingElements: Story = {
  render: () => (
    <div className="space-y-4">
      <AppListItem
        title="Text Content"
        trailing="textContent"
        trailingProps={{ text: 'Header', content: 'Content' }}
      />
      <AppListItem title="Text" trailing="text" trailingProps={{ text: 'Details' }} />
      <AppListItem title="Link" trailing="link" trailingProps={{ link: 'View More' }} />
      <AppListItem
        title="Icon"
        trailing="icon"
        trailingProps={{ iconClass: 'ri-arrow-right-s-line' }}
      />
      <AppListItem title="Button" trailing="button" trailingProps={{}} />
      <AppListItem title="Switch" trailing="switch" trailingProps={{ checked: false }} />
    </div>
  ),
}

// With Overline
export const WithOverline: Story = {
  args: {
    title: 'Overline Example',
    overline: true,
    overlineText: 'Category',
    supportingText: true,
    subTitle: 'This item has an overline',
  },
}

// With Supporting Text
export const WithSupportingText: Story = {
  args: {
    title: 'Main Title',
    supportingText: true,
    subTitle: 'This is the supporting text',
    variant: '2-line',
  },
}

// Combination of Features
export const CombinationExample: Story = {
  args: {
    title: 'Complex List Item',
    size: 2,
    variant: '3-line',
    leading: 'avatar',
    leadingProps: { size: 5, variant: 'solid', color: 'accent', initials: 'AB' },
    trailing: 'switch',
    trailingProps: { checked: true },
    supportingText: true,
    subTitle: 'This item combines multiple features',
    overline: true,
    overlineText: 'Featured',
  },
}

// Sub-Trigger Example
export const SubTriggerExample: Story = {
  args: {
    title: 'Expandable Item',
    subTrigger: true,
    leading: 'icon',
    leadingProps: { iconClass: 'ri-folder-line' },
    supportingText: true,
    subTitle: 'Click to expand',
    trailing: 'none',
  },
}

// With Trailing Text: List item with trailing text content
export const WithTrailingText: Story = {
  args: {
    title: 'Account Balance',
    size: 2,
    variant: '2-line',
    leading: 'icon',
    leadingProps: {
      iconClass: 'ri-wallet-3-line',
    },
    trailing: 'textContent',
    trailingProps: {
      text: '$1,234.56',
      content: 'Available',
    },
    supportingText: true,
    subTitle: 'Last updated: Today',
  },
}

// With Payment Method: List item with a payment method as the leading element
export const WithPaymentMethod: Story = {
  args: {
    title: 'Credit Card',
    size: 2,
    variant: '2-line',
    leading: 'paymentMethod',
    leadingProps: {
      imgLink: 'https://www.worldometers.info//img/flags/small/tn_cu-flag.gif',
    },
    supportingText: true,
    subTitle: '**** **** **** 1234',
    trailing: 'icon',
    trailingProps: {
      iconClass: 'ri-more-2-fill',
    },
  },
}

// Different Sizes
export const SizeComparison: Story = {
  render: () => (
    <div className="space-y-4">
      <AppListItem
        title="Size 1"
        size={1}
        leading="icon"
        leadingProps={{ iconClass: 'ri-information-line' }}
      />
      <AppListItem
        title="Size 2"
        size={2}
        leading="icon"
        leadingProps={{ iconClass: 'ri-information-line' }}
      />
    </div>
  ),
}

// Different Variants
export const VariantComparison: Story = {
  render: () => (
    <div className="space-y-4 w-3xl">
      <AppListItem
        title="1-line Variant"
        variant="1-line"
        supportingText={true}
        subTitle="This text will be truncated"
      />
      <AppListItem
        title="2-line Variant"
        variant="2-line"
        supportingText={true}
        subTitle="This text will show two lines before truncating"
      />
      <AppListItem
        title="3-line Variant"
        variant="3-line"
        supportingText={true}
        subTitle="This text can span up to three lines before it gets truncated. It allows for more detailed descriptions."
      />
    </div>
  ),
}

// Playground: Allows full customization of the props in Storybook's UI
const Template = (args: TAppListItemProps) => <AppListItem {...args} />

export const Playground: Story = {
  render: Template,
  args: {
    title: 'Customizable List Item',
    size: 2,
    variant: '2-line',
    leading: 'icon',
    leadingProps: { iconClass: 'ri-star-line' },
    trailing: 'text',
    trailingProps: { text: 'Details', textProps: { color: 'accent', weight: 'medium' } },
    supportingText: true,
    subTitle: 'Customize this list item in the controls',
    overline: false,
    subTrigger: false,
  },
}
