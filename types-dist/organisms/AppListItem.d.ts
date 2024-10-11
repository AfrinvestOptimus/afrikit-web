import { TAppListItemProps } from '../types';
/**
 * AppListItem Component
 *
 * This component renders a list item with optional leading and trailing elements, overline text, and supporting text.
 *
 * @param {TAppListItemProps} props - The properties for the AppListItem component.
 * @param {number} [props.size=2] - The size of the list item.
 * @param {string} [props.variant='3-line'] - The variant of the list item, e.g., '1-line', '2-line', or '3-line'.
 * @param {string} [props.leading='none'] - The type of leading element to render.
 * @param {string} [props.trailing='none'] - The type of trailing element to render.
 * @param {boolean} [props.supportingText=false] - Whether to display supporting text.
 * @param {boolean} [props.overline=false] - Whether to display overline text.
 * @param {boolean} [props.subTrigger=false] - Whether the item is a sub-trigger.
 * @param {string} [props.title='list title'] - The title of the list item.
 * @param {object} [props.titleProps] - Additional properties for the title.
 *
 * Child Components:
 * - ListItemPrefix: Renders the leading element based on the `leading` prop.
 * - ListItemSuffix: Renders the trailing element based on the `trailing` prop.
 * - AppText: Renders the title and supporting text.
 *
 * @example
 * // Example usage of AppListItem
 * <AppListItem
 *   size={3}
 *   variant="2-line"
 *   leading="icon"
 *   trailing="text"
 *   supportingText={true}
 *   overline={true}
 *   title="Example List Item"
 *   titleProps={{ color: 'primary' }}
 *   leadingProps={{ iconName: 'ri-home-line' }}
 *   trailingProps={{ text: 'Details' }}
 *   subTitle="This is a supporting text"
 *   overlineText="Overline Text"
 * />
 */
export default function AppListItem(props: TAppListItemProps): import("react/jsx-runtime").JSX.Element;
