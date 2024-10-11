import { TListItemPrefixProps } from '../types';
/**
 * ListItemPrefix Component
 *
 * This component renders different types of leading elements based on the `leading` prop.
 * The `leadingProps` prop provides the necessary properties for the specific leading element.
 *
 * @param {TListItemPrefixProps} props - The properties for the ListItemPrefix component.
 * @param {Exclude<LeadingType, 'none'>} props.leading - The type of leading element to render.
 *    It can be one of the following:
 *    - 'avatar': Renders an avatar using the AppAvatar component.
 *    - 'brand': Renders a brand placeholder.
 *    - 'icon': Renders an icon.
 *    - 'paymentMethod': Renders a payment method image.
 *    - 'flag': Renders a flag image.
 *    - 'radio': Renders a radio button.
 *    - 'txStatus': Renders a transaction status indicator.
 *    - 'check': Renders a check mark.
 * @param {LeadingProps[Exclude<LeadingType, 'none'>]} props.leadingProps - The properties for the specific leading element.
 *    The structure of this object depends on the value of the `leading` prop.
 *
 * @returns {JSX.Element | null} The rendered leading element or null if the `leading` prop is 'none'.
 */
export default function ListItemPrefix({ leading, leadingProps }: TListItemPrefixProps): import("react/jsx-runtime").JSX.Element;
