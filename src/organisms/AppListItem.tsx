import * as React from 'react'
import ListItemPrefix from '../components/ListItemPrefix'
import { isSupportingTextTrue } from '../types/guards'
import clsx from 'clsx'
import AppText from '../atoms/AppText'
import { TAppListItemProps } from '../types'
import ListItemSuffix from '../components/ListItemSuffix'

export default function AppListItem(props: TAppListItemProps) {
  const {
    size = 2,
    variant = '3-line',
    leading = 'none',
    trailing = 'none',
    supportingText = false,
    overline = false,
    subTrigger = false,
    title = 'list title',
    titleProps
  } = props

  return (
    <div className="flex flex-row space-x-lg cursor-pointer hover:bg-light-surface-gray dark:hover:bg-dark-surface-gray py-md px-md transition-all duration-500">
      {leading !== 'none' && (
        <ListItemPrefix
          leading={leading}
          leadingProps={'leadingProps' in props && props.leadingProps}
        />
      )}
      <div className="flex-1 space-y-xs">
        {overline && <p className="type-xs-body text-light-type-gray-muted dark:text-dark-type-gray-muted">{'overlineText' in props && props.overlineText}</p>}
        <AppText size={3} color="gray" weight="medium" align="left" highContrast {...titleProps}>
          {title}
        </AppText>
        {isSupportingTextTrue(props) && (
          <p
            className={clsx(
              'type-sm-body text-light-type-gray-muted dark:text-dark-type-gray-muted',
              variant === '1-line' ? 'line-clamp-1' : '',
              variant === '2-line' ? 'line-clamp-2' : '',
              variant === '3-line' ? 'line-clamp-3' : '',
            )}>
            {props.subTitle}
          </p>
        )}
      </div>
      {trailing !== 'none' && (
          <ListItemSuffix suffix={trailing} trailingProps={'trailingProps' in props && props.trailingProps} />
      )}
    </div>
  )
}
