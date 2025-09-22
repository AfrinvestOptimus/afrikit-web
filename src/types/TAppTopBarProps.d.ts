import React from 'react'

export type TAppTopBarProps = {
  theme?: 'filled' | 'ghost'
  className?: string
  logo?: React.ReactNode
} & (
  | {
      isOnboarding: true
      onboardLink?: React.ReactNode
      pageTitle?: string | React.ReactNode
      subtitle?: never
      onClickMenu?: () => void
      search?: boolean
      backBtn?: never
      backBtnAction?: never
      actions?: never
      notification?: never
      profile?: never
      searchComponent?: never
      notificationComponent?: never
      profileComponent?: never
      searchAction?: never
      notificationAction?: never
      profileAction?: never
    }
  | ({
      isOnboarding: false
      onboardLink?: never
      pageTitle: string | React.ReactNode
      subtitle?: string
      search?: boolean
      backBtn?: boolean
      backBtnAction?: () => void
      onClickMenu?: () => void
      notification?: boolean
      profile?: boolean
      searchComponent?: React.ReactNode
      notificationComponent?: React.ReactNode
      profileComponent?: React.ReactNode
      searchAction?: () => void
      notificationAction?: () => void
      profileAction?: () => void
    } & (
      | {
          actions: true
          buttonOne?: boolean
          buttonTwo?: boolean
          buttonThree?: boolean
        }
      | {
          actions: false
          buttonOne?: never
          buttonTwo?: never
          buttonThree?: never
        }
      | {
          actions?: undefined
          buttonOne?: never
          buttonTwo?: never
          buttonThree?: never
        }
    ))
)
