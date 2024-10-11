import React from 'react';
import { DropdownItemProps, DropdownSubmenuItemProps } from '../../types/TAppDropdownMenu';
export declare const dropdownItemStyles: (props?: {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "primary" | "secondary";
    state?: "default" | "active" | "disabled";
    alignment?: "left" | "center" | "right";
} & import("class-variance-authority/dist/types").ClassProp) => string;
export declare const iconStyles: (props?: {
    size?: "sm" | "md" | "lg";
} & import("class-variance-authority/dist/types").ClassProp) => string;
export declare const submenuItemStyles: (props?: {
    size?: "sm" | "md" | "lg";
    variant?: "default";
    state?: "default" | "active" | "disabled";
} & import("class-variance-authority/dist/types").ClassProp) => string;
export declare const DropdownItem: React.FC<DropdownItemProps>;
export declare const DropdownSubmenuItem: React.FC<DropdownSubmenuItemProps>;
