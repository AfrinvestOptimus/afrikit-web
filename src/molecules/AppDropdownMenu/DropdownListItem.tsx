import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { cva } from 'class-variance-authority'
import React from 'react'
import { DropdownItemProps, DropdownSubmenuItemProps } from '../../types/TAppDropdownMenu'
import { textColors, textSizes } from '../AppButton/button'
import Avatar from '../Avatar'
import SubTrigger from './SubTrigger'

export const dropdownItemStyles = cva(
  ' flex items-center justify-between outline-none cursor-pointer text-light-type-gray-muted dark:text-dark-type-gray-muted hover:rounded-xs px-sm',
  {
    variants: {
      size: {
        sm: textSizes[2],
        md: textSizes[3],
        lg: textSizes[4],
      },
      variant: {
        default:
          'hover:bg-light-background-neutral-transparent-hover focus:bg-light-background-neutral-transparent-hover hover:dark:bg-dark-background-neutral-transparent-hover focus:dark:bg-dark-background-neutral-transparent-hover',
        primary:
          'hover:bg-light-background-accent-light focus:bg-light-background-accent-light dark:hover:bg-dark-background-accent-light dark:focus:bg-dark-background-accent-light',
        secondary:
          'hover:bg-light-background-accent-light focus:bg-light-background-accent-light dark:hover:bg-dark-background-accent-light dark:focus:bg-dark-background-accent-light',
      },
      state: {
        active: 'text-sm font-bold',
        disabled: 'text-sm text-opacity-60 cursor-not-allowed',
        default: '',
      },
      alignment: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      state: 'default',
      alignment: 'left',
    },
  },
)

export const iconStyles = cva(
  'flex-shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center',
  {
    variants: {
      size: {
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
)

export const submenuItemStyles = cva('flex items-center justify-between px-3 py-2 cursor-pointer', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    variant: {
      default:
        'hover:bg-light-background-neutral-transparent-hover focus:bg-light-background-neutral-transparent-hover hover:dark:bg-dark-background-neutral-transparent-hover focus:dark:bg-dark-background-neutral-transparent-hover',
    },
    state: {
      active: 'text-lg',
      disabled: 'opacity-50 cursor-not-allowed',
      default: '',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    state: 'default',
  },
})

export const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  subLabel,
  hasIcon = true,
  hasAvatar = false,
  iconSize = 'lg',
  showCheck = false,
  avatarSrc = 'images/jpg/avatar1.jpeg',
  icon = 'ri-heart-line',
  state = 'disabled',
  size,
  variant = 'default',
  alignment,
}) => (
  <DropdownMenu.Item className={` ${dropdownItemStyles({ size, variant, alignment, state })}`}>
    <div className="flex h-[32px] w-[100%] items-center space-x-sm px-sm py-xl">
      {hasAvatar && <Avatar src={avatarSrc} />}
      {hasIcon && (
        <div className={`${submenuItemStyles({ size: iconSize as 'sm' | 'md' | 'lg' })}`}>
          <i className={`${icon ? icon : ''} ${size ? size : ''} text-xl`} aria-hidden="true"></i>
        </div>
      )}
      <div className={`flex flex-col`}>
        <span>{label}</span>
        {subLabel && <span className="text-xs">{subLabel}</span>}
      </div>
    </div>
    {showCheck && (
      <i
        className={`ri-check-line text-xl ${state === 'disabled' ? 'cursor-not-allowed opacity-50' : ''} ${textColors['accent']['soft']}`}
        aria-hidden="true"></i>
    )}
  </DropdownMenu.Item>
)

export const DropdownSubmenuItem: React.FC<DropdownSubmenuItemProps> = ({
  item,
  size,
  variant,
  alignment,
}) => (
  <>
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger className={dropdownItemStyles({ size, variant, alignment })}>
        <SubTrigger
          label={item?.label}
          hasAvatar={item?.hasAvatar}
          avatarSrc={item?.avatarSrc}
          hasIcon={item?.hasIcon}
          iconSize={item?.iconSize}
          icon={item?.icon}
          subLabel={item?.subLabel}
          state={item?.state}
        />
      </DropdownMenu.SubTrigger>
      <div className=" "></div>
      <DropdownMenu.Portal>
        <DropdownMenu.SubContent className="space-y-1 w-[300px] rounded-sm border-light-neutral4 bg-light-background-neutral-light p-lg shadow-lg dark:border-dark-neutral4 dark:bg-dark-background-neutral-light">
          {item.subContent &&
            item.subContent.length > 0 &&
            item.subContent.map((subItem, index) => (
              <DropdownMenu.Item key={index} className={`${submenuItemStyles()} p-sm`}>
                {subItem}
              </DropdownMenu.Item>
            ))}
          <DropdownMenu.Arrow />
        </DropdownMenu.SubContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Sub>
  </>
)
