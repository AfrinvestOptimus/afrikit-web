import React, { ReactNode } from 'react'
import clsx from 'clsx'
import AppText from '../atoms/AppText'
import { AppButtonProps, TAppTextProps, TListItemSuffixProps } from '../types'
import { AppButton } from '../molecules'

/**
 * ListItemSuffix Component
 *
 * This component renders different types of trailing elements based on the `suffix` prop.
 * The `trailingProps` prop provides the necessary properties for the specific trailing element.
 *
 * @param {TListItemSuffixProps} props - The properties for the ListItemSuffix component.
 * @param {Exclude<SuffixType, 'none'>} props.suffix - The type of trailing element to render.
 *    It can be one of the following:
 *    - 'textContent': Renders a text content block.
 *    - 'text': Renders a text element.
 *    - 'link': Renders a link element.
 *    - 'icon': Renders an icon.
 * @param {SuffixProps[Exclude<SuffixType, 'none'>]} props.trailingProps - The properties for the specific trailing element.
 *    The structure of this object depends on the value of the `suffix` prop.
 *
 * @returns {JSX.Element | null} The rendered trailing element or null if the `suffix` prop is 'none'.
 */
const ListItemSuffix = ({ suffix, trailingProps }: TListItemSuffixProps) => {
  switch (suffix) {
    case 'textContent':
      return (
        <TextContent
          {...(trailingProps as {
            text: string | React.ReactNode
            content: string | React.ReactNode
          })}
        />
      )
    case 'text':
      return (
        <Text
          {...(trailingProps as {
            text: string | React.ReactNode
            textProps?: TAppTextProps
          })}
        />
      )
    case 'link':
      return (
        <Link
          {...(trailingProps as {
            link: string
            linkProps?: TAppTextProps
          })}
        />
      )
    case 'icon':
      return (
        <Icon
          {...(trailingProps as {
            iconClass: string
          })}
        />
      )
    case 'button':
      return (
        <Button
          {...(trailingProps as {
            btnProps: AppButtonProps
          })}
        />
      )
    case 'custom':
      const { component } = trailingProps as unknown as { component: ReactNode }
      return <>{component}</>
    default:
      return null
  }
}

export default ListItemSuffix

const TextContent = (props: { text: string | ReactNode; content: string | ReactNode }) => {
  const { text, content } = props
  return (
    <div className="flex flex-col items-end space-y-xs text-right">
      <p className="text-light-type-gray type-sm-head dark:text-dark-type-gray">{text}</p>
      <p className="line-clamp-1 text-light-type-gray-muted type-xs-body dark:text-dark-type-gray-muted">
        {content}
      </p>
    </div>
  )
}

const Text = (props: { text: string | React.ReactNode; textProps?: TAppTextProps }) => {
  const { text, textProps } = props
  return (
    <AppText {...textProps} className="self-center">
      {text}
    </AppText>
  )
}

const Link = (props: { link: string; linkProps?: TAppTextProps }) => {
  const { link, linkProps } = props
  return (
    <AppText
      size={2}
      color="accent"
      weight="regular"
      className="flex cursor-pointer items-center self-stretch"
      {...linkProps}>
      {link}
    </AppText> // TODO: Switch to AppLink component when available
  )
}

const Icon = (props: { iconClass: string }) => {
  const { iconClass } = props
  return (
    <div className="flex h-3xl w-3xl items-center justify-center gap-lg rounded-sm-max bg-light-surface-gray shadow-inner dark:bg-dark-surface-gray">
      <i className={clsx('text-xl', iconClass)} />
    </div> // TODO: To be replaced with AppIcon component when available
  )
}

const Button = (props: { btnProps: AppButtonProps }) => {
  const { btnProps } = props
  return <AppButton {...btnProps} />
}
