import React, { useState } from 'react'
import SideBarBaseItem from '../components/SideBarBaseItem'
import optimusLogo from '../assets/optimusLogo.svg'
import { TSideBarItem } from '../types'
import clsx from 'clsx'

type AppSidebarProps = {
  links: TSideBarItem[]
  className?: string
  logo?: React.ReactNode
}

/**
 * AppSidebar component renders a sidebar with a logo and categorized links.
 *
 * @component
 * @param {AppSidebarProps} props - The props for the AppSidebar component.
 * @param {Array} props.links - An array of link objects to be displayed in the sidebar.
 *
 * The `SideBarBaseItem` component accepts the following props:
 * @param {string} text - The text to display for the sidebar item.
 * @param {string} color - The color of the sidebar item.
 * @param {boolean} iconOnly - Whether the item should display only an icon.
 * @param {boolean} current - Whether the item is the current active item.
 * @param {Function} linkAction - The action to perform when the item is clicked.
 * @param {string} iconName - The name of the icon to display.
 * @param {Array} [dropDownElement] - The elements to display in the dropdown.
 *
 * @example
 * // Example usage of AppSidebar
 * const links = [
 *   { id: 1, position: 'top', text: 'Home', color: 'blue', iconOnly: false, dot: false, current: true, linkAction: () => {}, iconName: 'ri-account-circle-line', dropDownElement: [] },
 *   { id: 2, position: 'bottom', text: 'Settings', color: 'gray', iconOnly: true, dot: true, current: false, linkAction: () => {}, iconName: 'ri-24-hours-fill', dropDownElement: [] }
 * ];
 *
 * <AppSidebar links={links} />
 */
const AppSidebar: React.FC<AppSidebarProps> = ({ links, className, logo }) => {
  return (
    <div
      className={clsx(
        'mr-auto flex h-screen max-w-[18rem] flex-col bg-light-page-bg py-xl dark:bg-dark-page-bg',
        className,
      )}>
      <div className="px-lg pb-3xl pt-xl">
        {logo ? logo : <img src={optimusLogo} className="" />}
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col space-y-lg">
          {links
            .filter(link => link.position === 'top')
            .map(link => (
              <SideBarBaseItem key={link.id} {...link} />
            ))}
        </div>

        <div className="flex flex-col space-y-sm">
          {links
            .filter(link => link.position === 'bottom')
            .map(link => (
              <SideBarBaseItem key={link.id} {...link} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default AppSidebar
