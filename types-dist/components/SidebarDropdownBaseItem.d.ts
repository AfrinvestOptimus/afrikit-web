import { TSidebarDropdownBaseItemProps } from '../types';
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
export default function SidebarDropdownBaseItem(props: TSidebarDropdownBaseItemProps): import("react/jsx-runtime").JSX.Element;
