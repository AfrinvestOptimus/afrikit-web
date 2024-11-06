import React from 'react'

export type TAppTopBarProps = {
  theme?: 'filled' | 'ghost'
  className?: string
} & (
  | {
      isOnboarding: true
      onboardLink?: React.ReactNode
      pageTitle?: never
      subtitle?: never
      search?: never
      backBtn?: never
      backBtnAction?: never
      actions?: never
    }
  | ({
      isOnboarding: false
      onboardLink?: never
      pageTitle: string | React.ReactNode
      subtitle?: string
      search?: boolean
      backBtn?: boolean
      backBtnAction?: () => void
    } & (
      | {
          actions: true
          buttonOne?: boolean
          buttonTwo?: boolean
          buttonThree?: boolean
        }
      | {
          actions: false
        }
      | {
          actions?: undefined
        }
    ))
)
