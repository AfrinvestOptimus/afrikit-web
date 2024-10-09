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


/**
 * AppAvatar Component
 * 
 * This component renders an avatar with different fallback options such as image, initials, or icon.
 * 
 * @param {IAppAvatarProps} props - The properties for the AppAvatar component.
 * @param {number} [props.size=4] - The size of the avatar.
 * @param {string} [props.variant='solid'] - The variant of the avatar, e.g., 'solid'.
 * @param {string} [props.color='neutral'] - The color of the avatar.
 * @param {boolean} [props.highContrast=false] - Whether to use high contrast colors.
 * @param {string} [props.fallBack='initials'] - The fallback type for the avatar, e.g., 'initials', 'image', or 'icon'.
 * @param {string} [props.initials=''] - The initials to display if the fallback is 'initials'.
 * @param {string} [props.imageUrl] - The URL of the image to display if the fallback is 'image'.
 * @param {number} [props.numberOfInitials=1] - The number of initials to display.
 * 
 * @returns {JSX.Element} The rendered avatar component.
 * 
 * @example
 * // Example usage with initials fallback
 * <AppAvatar size={3} color="primary" initials="JD" />
 * 
 * @example
 * // Example usage with image fallback
 * <AppAvatar size={4} variant="outline" imageUrl="https://example.com/avatar.jpg" />
 * 
 * @example
 * // Example usage with icon fallback
 * <AppAvatar size={5} fallBack="icon" />
 */
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
