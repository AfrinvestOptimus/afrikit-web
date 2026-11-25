export type AvatarSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type AvatarVariant = 'solid' | 'soft'
export type AvatarColor = 'accent' | 'neutral' | 'success' | 'error' | 'warning' | 'info'
export type AvatarFallback = 'image' | 'initials' | 'icon'
export type NumberOfInitials = 1 | 2

import type { HTMLAttributes } from 'react'

export interface IAppAvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  size?: AvatarSize
  variant?: AvatarVariant
  color?: AvatarColor
  highContrast?: boolean
  fallBack?: AvatarFallback
  status?: boolean
  initials?: string
  imageUrl?: string
  icon?: React.ReactNode
  numberOfInitials?: NumberOfInitials
  dataTestId?: string
}
