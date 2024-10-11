import { TListItemSuffixProps } from "../types";
/**
 * ListItemSuffix Component
 *
 * This component renders different types of trailing elements based on the `suffix` prop.
 * The `trailingProps` prop provides the necessary properties for the specific trailing element.
 *
 * @param {TListItemSuffixProps} props - The properties for the ListItemSuffix component.
 * @param {Exclude<SuffixType, 'none'>} props.suffix - The type of trailing element to render.
 *    It can be one of the following:
 *    - 'textContent': Renders a text content block.
 *    - 'text': Renders a text element.
 *    - 'link': Renders a link element.
 *    - 'icon': Renders an icon.
 * @param {SuffixProps[Exclude<SuffixType, 'none'>]} props.trailingProps - The properties for the specific trailing element.
 *    The structure of this object depends on the value of the `suffix` prop.
 *
 * @returns {JSX.Element | null} The rendered trailing element or null if the `suffix` prop is 'none'.
 */
declare const ListItemSuffix: ({ suffix, trailingProps }: TListItemSuffixProps) => import("react/jsx-runtime").JSX.Element;
export default ListItemSuffix;
