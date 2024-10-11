import { ButtonColor, ButtonSize, ButtonState, ButtonVariant } from '../molecules/AppButton/button';
export interface AppButtonProps {
    size?: ButtonSize;
    variant?: ButtonVariant;
    color?: ButtonColor;
    highContrast?: boolean;
    state?: ButtonState;
    iconStart?: boolean;
    iconEnd?: boolean;
    iconName?: string;
    className?: string;
    text: string;
    onClick?: () => void;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    iconStartName?: string;
    iconEndName?: string;
    classname?: string;
}
