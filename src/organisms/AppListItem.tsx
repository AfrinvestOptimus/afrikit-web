import * as React from 'react'
import ListItemPrefix from '../components/ListItemPrefix'
import { isSupportingTextTrue } from '../types/guards'
import clsx from 'clsx'
import AppText from '../atoms/AppText'
import { TAppListItemProps } from '../types'
import ListItemSuffix from '../components/ListItemSuffix'

/**
 * AppListItem Component
 *
 * This component renders a list item with optional leading and trailing elements, overline text, and supporting text.
 *
 * @param {TAppListItemProps} props - The properties for the AppListItem component.
 * @param {number} [props.size=2] - The size of the list item.
 * @param {string} [props.variant='3-line'] - The variant of the list item, e.g., '1-line', '2-line', or '3-line'.
 * @param {string} [props.leading='none'] - The type of leading element to render.
 * @param {string} [props.trailing='none'] - The type of trailing element to render.
 * @param {boolean} [props.supportingText=false] - Whether to display supporting text.
 * @param {boolean} [props.overline=false] - Whether to display overline text.
 * @param {boolean} [props.subTrigger=false] - Whether the item is a sub-trigger.
 * @param {string} [props.title='list title'] - The title of the list item.
 * @param {object} [props.titleProps] - Additional properties for the title.
 *
 * Child Components:
 * - ListItemPrefix: Renders the leading element based on the `leading` prop.
 * - ListItemSuffix: Renders the trailing element based on the `trailing` prop.
 * - AppText: Renders the title and supporting text.
 *
 * @example
 * // Example usage of AppListItem
 * <AppListItem
 *   size={3}
 *   variant="2-line"
 *   leading="icon"
 *   trailing="text"
 *   supportingText={true}
 *   overline={true}
 *   title="Example List Item"
 *   titleProps={{ color: 'primary' }}
 *   leadingProps={{ iconName: 'ri-home-line' }}
 *   trailingProps={{ text: 'Details' }}
 *   subTitle="This is a supporting text"
 *   overlineText="Overline Text"
 * />
 */
export default function AppListItem(props: TAppListItemProps) {
  const {
    size = 2,
    variant = '3-line',
    leading = 'none',
    trailing = 'none',
    supportingText = false,
    overline = false,
    spacing = 'default',
    subTrigger = false,
    title = 'list title',
    titleProps,
    isLink
  } = props

  return (
    <div
      className={clsx(
        'flex flex-row items-center space-x-lg transition-all duration-500',
        isLink && 'hover:bg-light-surface-gray dark:hover:bg-dark-surface-gray cursor-pointer',
        spacing === 'compact'
          ? 'px-md py-md'
          : spacing === 'extra-relaxed'
            ? 'px-xl py-xl'
            : 'px-lg py-lg',
      )}>
      {leading !== 'none' && (
        <ListItemPrefix
          leading={leading}
          leadingProps={'leadingProps' in props && props.leadingProps}
        />
      )}
      <div className="flex-1 space-y-xs">
        {overline && (
          <p className="text-light-type-gray-muted type-xs-body dark:text-dark-type-gray-muted">
            {'overlineText' in props && props.overlineText}
          </p>
        )}
        <AppText size={3} color="gray" weight="medium" align="left" highContrast {...titleProps}>
          {title}
        </AppText>
        {isSupportingTextTrue(props) && (
          <p
            className={clsx(
              'text-light-type-gray-muted type-sm-body dark:text-dark-type-gray-muted',
              variant === '1-line' ? 'line-clamp-1' : '',
              variant === '2-line' ? 'line-clamp-2' : '',
              variant === '3-line' ? 'line-clamp-3' : '',
            )}>
            {props.subTitle}
          </p>
        )}
      </div>
      {trailing !== 'none' && (
        <ListItemSuffix
          suffix={trailing}
          trailingProps={'trailingProps' in props && props.trailingProps}
        />
      )}
      {subTrigger && (
        <i className="ri-arrow-right-wide-line self-center text-lg text-light-type-gray dark:text-dark-type-gray" />
      )}
    </div>
  )
}
