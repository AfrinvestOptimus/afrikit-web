import { useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import SidebarDropdownBaseItem from './SidebarDropdownBaseItem'
import { TSideBarBaseItemProps } from '../types'

// Type guards
function hasIcon(
  props: TSideBarBaseItemProps,
): props is TSideBarBaseItemProps & { icon: true; iconName: string } {
  return props.icon === true
}
function hasDropdown(
  props: TSideBarBaseItemProps,
): props is TSideBarBaseItemProps & { hasDropdown: true; openDropdown: boolean } {
  return props.hasDropdown === true
}

function hasBadge(
  props: TSideBarBaseItemProps,
): props is TSideBarBaseItemProps & { badge: true; badgeText: number | string } {
  return props.badge === true
}

/**
 * SideBarBaseItem component renders a sidebar item with optional dropdown functionality.
 * It supports both icon-only and text-based items, and can indicate the current active item.
 *
 * @component
 * @param {TSideBarBaseItemProps} props - The properties for the SideBarBaseItem component.
 * @param {string} props.text - The text to display for the sidebar item.
 * @param {string} props.color - The color of the sidebar item.
 * @param {boolean} props.iconOnly - Whether the item should display only an icon.
 * @param {boolean} props.dot - Whether to display a dot indicator.
 * @param {boolean} props.current - Whether the item is the current active item.
 * @param {Function} props.linkAction - The action to perform when the item is clicked.
 * @param {string} props.iconName - The name of the icon to display.
 * @param {Array} [props.dropDownElement] - The elements to display in the dropdown.
 *
 * @returns {JSX.Element} The rendered SideBarBaseItem component.
 */

export default function SideBarBaseItem(props: TSideBarBaseItemProps) {
  const [opendrop, setOpendrop] = useState<boolean>(false)
  const { text, color, iconOnly, current, linkAction } = props
  return (
    <Collapsible.Root onOpenChange={openState => setOpendrop(openState)}>
      <div className={clsx('flex-row items-center space-x-md pr-lg', iconOnly ? '' : 'flex')}>
        {current && !iconOnly && (
          <div className="h-lg w-xs rounded-br-xs rounded-tr-xs bg-light-background-accent-base" />
        )}
        <button
          onClick={linkAction}
          className={clsx(
            'group/item box-border flex flex-1 cursor-pointer flex-row items-center space-x-lg rounded-full border-2 border-light-background-neutral-transparent px-md py-sm transition-all duration-500 dark:border-dark-background-neutral-transparent',

            current
              ? 'bg-light-background-accent-light focus:border-light-edge-info-lighter dark:bg-dark-background-accent-light dark:focus:border-dark-edge-info-lighter'
              : 'ml-lg hover:bg-light-background-neutral-transparent-hover focus:border-light-optiblue9 dark:hover:bg-dark-background-neutral-transparent-hover dark:focus:border-dark-optiblue9',
          )}>
          {hasIcon(props) && (
            <div className="icon">
              <i
                className={clsx(
                  props.iconName,
                  'text-xl',
                  current
                    ? 'text-light-type-accent dark:text-dark-type-accent'
                    : 'text-light-type-gray-muted group-hover/item:text-light-type-gray dark:text-dark-type-gray-muted dark:group-hover/item:text-dark-type-gray',
                )}
              />
            </div>
          )}
          {!iconOnly &&
            (hasDropdown(props) ? (
              <div className="flex w-full flex-col items-start justify-start">
                <Collapsible.CollapsibleTrigger asChild>
                  <div
                    className={clsx(
                      'relative flex w-full flex-1 flex-row items-center justify-between',
                      current
                        ? 'text-light-type-accent dark:text-dark-type-accent'
                        : 'text-light-type-gray-muted group-hover/item:text-light-type-gray dark:text-dark-type-gray-muted dark:group-hover/item:text-dark-type-gray',
                    )}>
                    <span className="type-base-head">{text}</span>
                    <i
                      className={clsx(
                        'ri-arrow-down-s-line text-lg transition-all duration-500',
                        opendrop ? 'rotate-180' : '',
                      )}
                    />
                  </div>
                </Collapsible.CollapsibleTrigger>
              </div>
            ) : (
              <div
                className={clsx(
                  'flex flex-1 flex-row items-center justify-between type-base-head',
                  current
                    ? 'text-light-type-accent dark:text-dark-type-accent'
                    : 'text-light-type-gray-muted group-hover/item:text-light-type-gray dark:text-dark-type-gray-muted dark:group-hover/item:text-dark-type-gray',
                )}>
                {text}
              </div>
            ))}
        </button>
      </div>
      {hasDropdown(props) && (
        <div className="">
          <Collapsible.CollapsibleContent asChild className="CollapsibleContent">
            <div className="mx-lg flex flex-col">
              {props.dropDownElement?.map(element => (
                <SidebarDropdownBaseItem
                  key={element.text}
                  text={element.text}
                  current={element.current}
                  linkAction={element.linkAction}
                />
              ))}
            </div>
          </Collapsible.CollapsibleContent>
        </div>
      )}
    </Collapsible.Root>
  )
}
