import React, { useState } from 'react'
import SideBarBaseItem from '../components/SideBarBaseItem'
import optimusLogo from '../assets/optimusLogo.svg'
import { TSideBarItem } from '../types'
import clsx from 'clsx'

export type AppSidebarProps = {
  links: TSideBarItem[]
  className?: string
  logo?: React.ReactNode
  bottomType?: 'links' | 'component'
  bottomComponent?: React.ReactNode,
  linksContainerClass?: string
}

/**
 * AppSidebar component renders a sidebar with a logo, links, and a bottom component.
 *
 * @param {Object} props - The properties object.
 * @param {TSideBarItem[]} props.links - The list of sidebar items.
 * @param {string} [props.className] - Optional additional class names to be applied to the sidebar.
 * @param {React.ReactNode} [props.logo] - The logo to be displayed in the sidebar. This is an optional parameter.
 * @param {'links' | 'component'} [props.bottomType] - The type of the bottom section of the sidebar. This is an optional parameter.
 * @param {React.ReactNode} [props.bottomComponent] - The custom bottom component. This is an optional parameter.
 * @returns {JSX.Element} The rendered sidebar.
 */
const AppSidebar: React.FC<AppSidebarProps> = ({
  links,
  className,
  logo,
  bottomType,
  bottomComponent,
  linksContainerClass,
}) => {
  return (
    <div
      className={clsx(
        'mr-auto flex h-screen max-w-[18rem] flex-col bg-light-page-bg py-xl dark:bg-dark-page-bg',
        className,
      )}>
      <div className="px-lg pb-3xl pt-xl">
        {logo ? logo : <img src={optimusLogo} className="" />}
      </div>
      <div className={`flex flex-1 flex-col justify-between ${linksContainerClass}`}>
        <div className="flex flex-col space-y-lg">
          {links
            .filter(link => link.position === 'top')
            .map(link => (
              <SideBarBaseItem key={link.id} {...link} />
            ))}
        </div>

        {bottomType === 'links' && (
          <div className="flex flex-col space-y-sm">
            {links
              .filter(link => link.position === 'bottom')
              .map(link => (
                <SideBarBaseItem key={link.id} {...link} />
              ))}
          </div>
        )}
        {bottomType === 'component' && (
          <div className="flex flex-col space-y-sm">{bottomComponent}</div>
        )}
      </div>
    </div>
  )
}

export default AppSidebar
