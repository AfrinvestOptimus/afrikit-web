import { IAppAvatarProps } from '../../types';
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
export default function AppAvatar({ size, variant, color, highContrast, fallBack, initials, imageUrl, numberOfInitials, }: IAppAvatarProps): import("react/jsx-runtime").JSX.Element;
