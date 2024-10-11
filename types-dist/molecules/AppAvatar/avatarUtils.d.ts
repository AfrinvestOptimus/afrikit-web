import { AvatarColor, AvatarSize, AvatarVariant } from '../../types';
export declare const sizeStyles: Record<AvatarSize, string>;
export declare const textSizes: Record<AvatarSize, string>;
export declare const iconSizes: Record<AvatarSize, number>;
export declare const avatarColors: Record<AvatarColor, Record<AvatarVariant, string>>;
export declare const textColors: Record<AvatarColor, Record<AvatarVariant, string>>;
export declare const highContrastAvatarColors: Record<AvatarColor, Record<AvatarVariant, string>>;
export declare const highContrastTextColors: Record<AvatarColor, Record<AvatarVariant, string>>;
/**
 * Extracts initials from a given string.
 *
 * @param {string} initials - The input string from which to extract initials.
 * @param {number} numberOfInitials - The number of initials to extract.
 * @returns {string} The extracted initials in uppercase.
 */
export declare const getInitials: (initials?: string, numberOfInitials?: number) => string;
