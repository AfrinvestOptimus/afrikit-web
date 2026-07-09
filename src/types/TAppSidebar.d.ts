import type { HTMLAttributes } from 'react'

export type TSidebarDropdownBaseItemProps = {
  current?: boolean
  linkAction?: () => void
  text: string
  dataTestId?: string
} & Omit<HTMLAttributes<HTMLButtonElement>, 'className'>

export type TSideBarBaseItemProps = {
  color: 'accent' | 'neutral'
  iconOnly?: boolean
  text: string
  current?: boolean
  linkAction?: () => void
  dataTestId?: string
  rest?: HTMLAttributes<HTMLDivElement>
} & (
  | {
      icon: true
      iconName: string
    }
  | {
      icon: false
      iconName?: never
    }
) &
  (
    | {
        hasDropdown: true
        openDropdown: boolean
        dropDownElement: TSidebarDropdownBaseItemProps[]
      }
    | {
        hasDropdown: false
        openDropdown?: never
      }
  ) &
  (
    | {
        badge: true
        badgeText: number | string
      }
    | {
        badge: false
        badgeText?: never
      }
  )

export type TSideBarItem = TSideBarBaseItemProps & {
  position: 'top' | 'bottom'
  id: string
}
