import * as React from 'react'
import AppAvatar from '../molecules/AppAvatar'
import { IAppAvatarProps, TListItemPrefixProps } from '../types'
import clsx from 'clsx'

export default function ListItemPrefix({ leading, leadingProps }: TListItemPrefixProps) {
  switch (leading) {
    case 'avatar':
      return <Avatar prop={leadingProps as IAppAvatarProps} />
    case 'brand':
      return <Brand />
    case 'icon':
      return <Icon prop={leadingProps as { iconClass: string }} />
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
  <div className="w-3xl h-3xl rounded-xs-max bg-light-surface dark:bg-dark-surface border border-light-edge-gray dark:border-dark-edge-gray" />
  // TODO: BrandLogos on the way, passing a dummy div for now
)
const Icon = ({ prop }: { prop: { iconClass: string } }) => {
  const { iconClass } = prop
  return (
    <div className="w-3xl h-3xl rounded-sm-max bg-light-surface-gray dark:bg-dark-surface-gray gap-lg justify-center items-center flex">
      <i className={clsx('', iconClass)} />
    </div>
  )
}
const PaymentMethod = ({ prop }: { prop: { imgLink: string } }) => (
  <div className="w-2xl h-xl rounded-xs border border-light-edge-gray-subtle dark:border-dark-edge-gray-subtle object-contain bg-light-surface dark:bg-dark-surface flex items-center justify-center">
    <img
      className="object-cover w-full h-auto"
      src={prop.imgLink || 'https://www.worldometers.info//img/flags/small/tn_cu-flag.gif'}
    />
  </div>
)
const Flag = ({ prop }: { prop: { flagLink: string } }) => (
  <img
    className="w-3xl h-3xl rounded-sm-max"
    src={prop.flagLink || 'https://www.worldometers.info//img/flags/small/tn_cu-flag.gif'}
  />
)
const Radio = () => <div className=""></div>
const TxStatus = () => <div className=""></div>
const Check = () => <div className=""></div>
