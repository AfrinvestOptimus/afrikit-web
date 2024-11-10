import * as React from 'react'
import AppAvatar from '../molecules/AppAvatar'
import { IAppAvatarProps, TListItemPrefixProps } from '../types'
import AppIcon, { AppIconSize } from './../molecules/AppIcon'
import clsx from 'clsx'

/**
 * ListItemPrefix Component
 *
 * This component renders different types of leading elements based on the `leading` prop.
 * The `leadingProps` prop provides the necessary properties for the specific leading element.
 *
 * @param {TListItemPrefixProps} props - The properties for the ListItemPrefix component.
 * @param {Exclude<LeadingType, 'none'>} props.leading - The type of leading element to render.
 *    It can be one of the following:
 *    - 'avatar': Renders an avatar using the AppAvatar component.
 *    - 'brand': Renders a brand placeholder.
 *    - 'icon': Renders an icon.
 *    - 'paymentMethod': Renders a payment method image.
 *    - 'flag': Renders a flag image.
 *    - 'radio': Renders a radio button.
 *    - 'txStatus': Renders a transaction status indicator.
 *    - 'check': Renders a check mark.
 * @param {LeadingProps[Exclude<LeadingType, 'none'>]} props.leadingProps - The properties for the specific leading element.
 *    The structure of this object depends on the value of the `leading` prop.
 *
 * @returns {JSX.Element | null} The rendered leading element or null if the `leading` prop is 'none'.
 */
export default function ListItemPrefix({ leading, leadingProps }: TListItemPrefixProps) {
  switch (leading) {
    case 'avatar':
      return <Avatar prop={leadingProps as IAppAvatarProps} />
    case 'brand':
      return <Brand />
    case 'icon':
      return <Icon prop={leadingProps as { iconClass: string; size?: AppIconSize }} />
    case 'paymentMethod':
      return <PaymentMethod prop={leadingProps as { imgLink: string }} />
    case 'flag':
      return <Flag prop={leadingProps as { flagLink: string }} />
    case 'radio':
      return <Radio />
    case 'txStatus':
      return <TxStatus />
    case 'check':
      return <Check />
    default:
      return null
  }
}

const Avatar = ({ prop }: { prop: IAppAvatarProps }) => (
  <AppAvatar
    size={3}
    color="accent"
    highContrast={false}
    fallBack="initials"
    initials="AD"
    status={false}
    variant="solid"
    {...prop}
  />
)
const Brand = () => (
  <div className="h-3xl w-3xl rounded-xs-max border border-light-edge-gray bg-light-surface dark:border-dark-edge-gray dark:bg-dark-surface" />
  // TODO: BrandLogos on the way, passing a dummy div for now
)
const Icon = ({ prop }: { prop: { iconClass: string; size?: AppIconSize } }) => {
  const { iconClass, size } = prop
  return <AppIcon iconClassName={iconClass} size={size ?? '16'} />
}
const PaymentMethod = ({ prop }: { prop: { imgLink: string } }) => (
  <div className="flex h-xl w-2xl items-center justify-center rounded-xs border border-light-edge-gray-subtle bg-light-surface object-contain dark:border-dark-edge-gray-subtle dark:bg-dark-surface">
    <img
      className="h-auto w-full object-cover"
      src={prop.imgLink || 'https://www.worldometers.info//img/flags/small/tn_cu-flag.gif'}
    />
  </div>
)
const Flag = ({ prop }: { prop: { flagLink: string } }) => (
  <img
    className="h-3xl w-3xl rounded-sm-max"
    src={prop.flagLink || 'https://www.worldometers.info//img/flags/small/tn_cu-flag.gif'}
  />
)
const Radio = () => <div className=""></div> // TODO: Radio component on the way
const TxStatus = () => <div className=""></div> // TODO: TxStatus component on the way
const Check = () => <div className=""></div> // TODO: Check component on the way
