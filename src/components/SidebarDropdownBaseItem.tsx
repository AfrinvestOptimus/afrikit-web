import React from 'react'
import clsx from 'clsx'
import { TSidebarDropdownBaseItemProps } from '../types'

/**
 * SidebarDropdownBaseItem is a functional component that renders a button
 * with various styles and behaviors based on the provided props.
 *
 * @param {TSidebarDropdownBaseItemProps} props - The properties passed to the component.
 * @param {string} props.text - The text to display inside the button.
 * @param {boolean} props.current - A flag indicating whether the item is currently active.
 * @param {() => void} props.linkAction - The function to call when the button is clicked.
 *
 * @returns {JSX.Element} A styled button element representing a sidebar dropdown item.
 */
export default function SidebarDropdownBaseItem(props: TSidebarDropdownBaseItemProps) {
  const { text, current, linkAction } = props
  return (
    <button
      onClick={linkAction}
      className={clsx(
        'group/dropdownItem box-border flex w-full flex-1 cursor-pointer flex-row items-center space-x-[22px] rounded-full border-2 border-light-background-neutral-transparent px-md py-sm pl-[18px] transition-all duration-500 dark:border-dark-background-neutral-transparent',
        current
          ? 'hover:bg-light-background-neutral-light dark:hover:bg-dark-background-neutral-light'
          : 'hover:bg-light-background-neutral-transparent-hover focus:border-light-edge-info-light dark:hover:bg-dark-background-neutral-transparent-hover dark:focus:border-dark-edge-info-light',
      )}>
      <div className="relative flex flex-col items-center justify-end">
        <div
          className={clsx(
            'absolute -top-[30px] z-10 h-[34px] w-[1px]',
            current
              ? 'bg-light-type-accent dark:bg-dark-type-accent'
              : 'bg-light-neutral4 dark:bg-dark-neutral4',
          )}
        />
        <div
          className={clsx(
            'h-sm w-sm rounded-full',
            current
              ? 'bg-light-type-accent dark:bg-dark-type-accent'
              : 'bg-light-neutral4 dark:bg-dark-neutral4',
          )}
        />
      </div>
      <div className="w-full">
        <p
          className={clsx(
            'text-left type-sm-title',
            current
              ? 'text-light-type-accent dark:text-dark-type-accent'
              : 'text-light-type-gray-muted group-hover/dropdownItem:text-light-type-gray group-focus:text-light-type-gray-muted dark:text-dark-type-gray-muted dark:group-hover/dropdownItem:text-dark-type-gray dark:group-focus:text-dark-type-gray-muted',
          )}>
          {text}
        </p>
      </div>
    </button>
  )
}
