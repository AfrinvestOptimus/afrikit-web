import React from 'react'
import clsx from 'clsx'
import AppAvatar from '../molecules/AppAvatar'
import { IAppAvatarProps, TListItemPrefixProps } from '../types'
import AppIcon, { AppIconSize } from './../molecules/AppIcon'
import NG from '../assets/NG'

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
      return (
        <Brand
          prop={
            leadingProps as {
              background: boolean
              brandImg: React.ReactNode
            }
          }
        />
      )
    case 'icon':
      return <Icon prop={leadingProps as { iconClass: string; size?: AppIconSize }} />
    case 'paymentMethod':
      return <PaymentMethod prop={leadingProps as { imgLink: string }} />
    case 'flag':
      return <Flag prop={leadingProps as { flagLink: string }} />
    case 'radio':
      return <Radio />
    case 'txStatus':
      return (
        <TxStatus
          prop={
            leadingProps as {
              status: 'money-in' | 'swap' | 'money-out' | 'activity' | 'direct-debit'
              size?: 'default' | 'large'
              badgeStatus?: 'interest' | 'pending' | 'failed'
            }
          }
        />
      )
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
const Brand = ({
  prop,
}: {
  prop: {
    background: boolean
    brandImg: React.ReactNode
  }
}) => {
  const { background, brandImg } = prop
  return (
    <div className="relative">
      <div
        className={clsx('flex h-3xl w-3xl items-center justify-center rounded-xs-max', {
          'border border-light-edge-gray bg-light-surface dark:border-dark-edge-gray dark:bg-dark-surface':
            background,
        })}>
        <div
          className={clsx(background ? 'relative h-xl w-xl overflow-hidden rounded-xs-max' : '')}>
          {brandImg}
        </div>
      </div>
      <div className="absolute -bottom-xs -right-xs flex h-lg w-lg items-center justify-center rounded-xs-max border border-light-neutral6 bg-light-solid dark:border-dark-neutral6 dark:bg-dark-solid">
        <NG />
      </div>
    </div>
    // TODO: BrandLogos on the way, passing a dummy div for now
  )
}
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
const TxStatus = ({
  prop,
}: {
  prop: {
    status: 'money-in' | 'swap' | 'money-out' | 'activity' | 'direct-debit'
    size?: 'default' | 'large'
    badgeStatus?: 'interest' | 'pending' | 'failed'
  }
}) => (
  <div className="relative">
    <AppIcon
      muted
      iconClassName={
        prop.status === 'money-in'
          ? 'ri-add-line'
          : prop.status === 'money-out'
            ? 'ri-arrow-down-line'
            : prop.status === 'swap'
              ? 'ri-arrow-left-right-line'
              : prop.status === 'activity'
                ? 'ri-flashlight-line'
                : 'ri-loop-right-line'
      }
      size={prop.size === 'default' ? '40' : '48'}
      statusBadge={prop.badgeStatus}
    />
  </div>
)
const Check = () => <div className=""></div> // TODO: Check component on the way
