import * as React from 'react'
import { IAppAvatarProps } from '../../types'
import {
  sizeStyles,
  highContrastTextColors,
  textColors,
  highContrastAvatarColors,
  avatarColors,
  textSizes,
  iconSizes,
  getInitials,
} from './avatarUtils'
import clsx from 'clsx'

export default function AppAvatar({
  size = 4,
  variant = 'solid',
  color = 'neutral',
  highContrast = false,
  fallBack = 'initials',
  initials = '',
  imageUrl,
  numberOfInitials = 1,
}: IAppAvatarProps) {
  const avatarSizeStyle = sizeStyles[size]
  const textColor = highContrast
    ? highContrastTextColors[color][variant]
    : textColors[color][variant]
  const avatarColor = highContrast
    ? highContrastAvatarColors[color][variant]
    : avatarColors[color][variant]
  const textSizeStyle = textSizes[size]

  const iconSize = iconSizes[size]

  const renderAvatar = React.useMemo(() => {
    switch (fallBack) {
      case 'image':
        return imageUrl ? (
          <div className={`${avatarSizeStyle}  flex items-center justify-center`}>
            <img src={imageUrl} className={clsx(avatarSizeStyle, 'object-cover')} />
          </div>
        ) : null
      case 'initials':
        return (
          <div className={clsx(avatarSizeStyle, avatarColor, 'flex items-center justify-center')}>
            <span className={clsx(textSizeStyle, textColor)}>
              {getInitials(initials, numberOfInitials)}
            </span>
          </div>
        )
      case 'icon':
        return (
          <div className={clsx(avatarSizeStyle, avatarColor, 'flex items-center justify-center')}>
            <i
              className={clsx(
                'ri-user-6-line text-light-amber1 dark:text-dark-amber1',
                `w-[${iconSize}px] h-[${iconSize}px]`,
              )}></i>
          </div>
        )
      default:
        return null
    }
  }, [fallBack, avatarSizeStyle, avatarColor, textColor, textSizeStyle, imageUrl, initials, numberOfInitials])

  return <>{renderAvatar}</>
}
