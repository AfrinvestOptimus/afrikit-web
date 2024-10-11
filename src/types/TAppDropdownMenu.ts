import React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { dropdownItemStyles } from '../molecules/AppDropdownMenu/DropdownListItem'

// Adjust these types to match your usage
 export interface DropdownItemProps {
  label: string;
  subLabel?: string;
  hasIcon?: boolean;
  hasAvatar?: boolean;
  iconSize?: 'sm' | 'md' | 'lg';
  showCheck?: boolean;
  avatarSrc?: string;
  icon?: string;
  state?: 'active' | 'disabled' | 'default';
  size?: 'sm' | 'md' | 'lg' | null | undefined ;
  variant?: 'default' | 'primary' | 'secondary' | null; // Ensure this matches your usage
  alignment?: "left" | "center" | "right" | null | undefined;
  subContent?: string[]; // Or adjust to the correct type
}


export interface DropdownSubmenuItemProps {
  item: {
    label: string;
    hasAvatar?: boolean;
    avatarSrc?: string;
    hasIcon?: boolean;
    iconSize?: 'sm' | 'md' | 'lg' | null | undefined  ;
    icon?: string;
    subLabel?: string;
    state?: 'active' | 'disabled' | 'default';
    subContent?: string[];
  };
  size?: 'sm' | 'md' | 'lg' | null | undefined ;
  variant?: 'default' | 'primary' | 'secondary' | null;
  alignment?: "left" | "center" | "right" | null | undefined
}


export interface DropdownComponentProps extends VariantProps<typeof dropdownItemStyles> {
  items: DropdownItemProps[]
  trigger?: React.ReactNode
  children?: React.ReactNode // Custom Radix components
  separator?: boolean // Prop to render separator
  subContent?: React.ReactNode[] // List of submenu items
  showArrow?: boolean // Prop to render arrow
}
