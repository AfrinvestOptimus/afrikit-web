import { TSideBarBaseItemProps } from '../types';
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
export default function SideBarBaseItem(props: TSideBarBaseItemProps): import("react/jsx-runtime").JSX.Element;
