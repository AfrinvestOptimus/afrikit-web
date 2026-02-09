import { type VariantProps } from 'class-variance-authority';
import React from 'react';
declare const subTriggerStyles: (props?: {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "primary" | "secondary";
    state?: "default" | "active" | "disabled";
    alignment?: "center" | "left" | "right";
} & import("class-variance-authority/dist/types").ClassProp) => string;
interface SubTriggerProps extends VariantProps<typeof subTriggerStyles>, React.HTMLAttributes<HTMLDivElement> {
    label: string;
    showArrow?: boolean;
    hasAvatar?: boolean;
    hasIcon?: boolean;
    iconSize?: 'sm' | 'md' | 'lg';
    avatarSrc?: string;
    icon?: string;
    subLabel?: string;
    dataTestId?: string;
}
declare const SubTrigger: React.FC<SubTriggerProps>;
export default SubTrigger;
