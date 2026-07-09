import React from 'react';
import { TSideBarItem } from '../types';
export type AppSidebarProps = {
    links: TSideBarItem[];
    className?: string;
    logo?: React.ReactNode;
    bottomType?: 'links' | 'component';
    bottomComponent?: React.ReactNode;
    linksContainerClass?: string;
};
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
declare const AppSidebar: React.FC<AppSidebarProps>;
export default AppSidebar;
