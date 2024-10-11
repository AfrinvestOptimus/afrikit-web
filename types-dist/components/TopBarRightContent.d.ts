import React from 'react';
export interface ITopBarContentProps {
    search?: boolean;
    actions: boolean | undefined;
    buttonOne?: boolean;
    buttonTwo?: boolean;
    buttonThree?: boolean;
}
/**
 * Component that renders the right content of the top bar, including action buttons, a search button, a notification
 * button, and a user item.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.search - Determines if the search button should be displayed.
 * @param {boolean} props.actions - Determines if the action buttons should be displayed.
 * @param {boolean} [props.buttonOne=true] - Determines if the first action button should be displayed. Defaults to
 *   true.
 * @param {boolean} [props.buttonTwo=false] - Determines if the second action button should be displayed. Defaults to
 *   false.
 * @param {boolean} [props.buttonThree=false] - Determines if the third action button should be displayed. Defaults to
 *   false.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <TopBarRightContent
 *   search={true}
 *   actions={true}
 *   buttonOne={true}
 *   buttonTwo={false}
 *   buttonThree={true}
 * />
 *
 * The above example will render the top bar right content with the search button, the first and third action buttons,
 *   and the notification button, along with the user item.
 */
declare function TopBarRightContent({ search, actions, buttonOne, buttonThree, buttonTwo, }: ITopBarContentProps): React.JSX.Element;
export default TopBarRightContent;
