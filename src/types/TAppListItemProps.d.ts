import { IAppAvatarProps } from './TAppAvatar'
import { TAppTextProps } from './TAppTextProps'
import { AppIconSize } from './../molecules/AppIcon'
import React from 'react'

type LeadingType =
  | 'none'
  | 'avatar'
  | 'brand'
  | 'icon'
  | 'paymentMethod'
  | 'flag'
  | 'radio'
  | 'txStatus'
  | 'check'

type SuffixType = 'none' | 'textContent' | 'text' | 'link' | 'icon' | 'button' | 'switch'

type LeadingProps = {
  avatar?: IAppAvatarProps
  brand?: {}
  icon?: { iconClass: string; size?: AppIconSize }
  paymentMethod?: { imgLink: string }
  flag?: { flagLink: string }
  radio?: {}
  txStatus?: {
    status: 'money-in' | 'swap' | 'money-out' | 'activity' | 'direct-debit'
    size?: 'default' | 'large'
    badgeStatus?: 'interest' | 'pending' | 'failed'
  }
  check?: {}
  none?: never
}

type SuffixProps = {
  textContent: {
    text: string
    content: string
  }
  text: {
    text: string | React.ReactNode
    textProps?: TAppTextProps
  }
  link: {
    link: string
    linkProps?: TAppTextProps
  }
  icon: {
    iconClass: string
  }
  switch?: {
    checked: boolean
  }
  none?: never
}

type LeadingPropTypes = {
  [K in LeadingType]: { leading?: K } & (K extends 'none' ? {} : { leadingProps: LeadingProps[K] })
}

type TrailingPropTypes = {
  [K in SuffixType]: { trailing?: K } & (K extends 'none' ? {} : { trailingProps: SuffixProps[K] })
}

type subTriggered =
  | {
      subTrigger?: true
      trailing?: 'none'
    }
  | {
      subTrigger?: false
    }

type overlined =
  | {
      overline?: true
      overlineText: string
    }
  | {
      overline?: false
      overlineText?: never
    }

type subTitleProps =
  | {
      supportingText?: true
      subTitle: string | React.ReactNode
    }
  | {
      supportingText?: false
      subTitle?: never
    }

export type TAppListItemProps = {
  size?: 1 | 2
  variant?: '1-line' | '2-line' | '3-line'
  leading?: LeadingType
  trailing?: SuffixType
  supportingText?: boolean
  overline?: boolean
  subTrigger?: boolean
  title: string
  titleProps?: TAppTextProps
} & subTriggered &
  overlined &
  subTitleProps &
  Partial<LeadingPropTypes[LeadingType]> &
  Partial<TrailingPropTypes[SuffixType]>

export type TListItemPrefixProps = {
  leading: Exclude<LeadingType, 'none'>
  leadingProps: LeadingProps[Exclude<LeadingType, 'none'>]
}

export type TListItemSuffixProps = {
  suffix: Exclude<SuffixType, 'none'>
  trailingProps: SuffixProps[Exclude<SuffixType, 'none'>]
}
