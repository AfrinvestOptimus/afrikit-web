import React from 'react';
export interface ITopBarContentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
    search?: boolean;
    actions: boolean | undefined;
    buttonOne?: boolean;
    buttonTwo?: boolean;
    buttonThree?: boolean;
    notification?: boolean;
    profile?: boolean;
    searchComponent?: React.ReactNode;
    notificationComponent?: React.ReactNode;
    profileComponent?: React.ReactNode;
    searchAction?: () => void;
    notificationAction?: () => void;
    profileAction?: () => void;
    dataTestId?: string;
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
 * @param {React.ReactNode} [props.profile] - The user profile item. This is an optional parameter.
 * @param {React.ReactNode} [props.searchComponent] - The custom search component. This is an optional parameter.
 * @param {React.ReactNode} [props.notificationComponent] - The custom notification component. This is an optional parameter.
 * @param {React.ReactNode} [props.profileComponent] - The custom profile component. This is an optional parameter.
 * @param {() => void} [props.searchAction] - The action to be performed when the search button is clicked. This is an optional parameter.
 * @param {() => void} [props.notificationAction] - The action to be performed when the notification button is clicked. This is an optional parameter.
 * @param {() => void} [props.profileAction] - The action to be performed when the profile item is clicked. This is an optional parameter.
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
 *   profile={<UserItem />}
 *   searchComponent={<CustomSearchComponent />}
 *   notificationComponent={<CustomNotificationComponent />}
 *   profileComponent={<CustomProfileComponent />}
 *   searchAction={handleSearch}
 *   notificationAction={handleNotification}
 *   profileAction={handleProfile}
 * />
 *
 * The above example will render the top bar right content with the search button, the first and third action buttons,
 *   and the notification button, along with the user item.
 *
 * @remarks
 * The component uses the UserItem, ActionButtons, and BtnIcon components for rendering. The UserItem component is a
 *   clickable user item with a rounded background and an arrow icon. The ActionButtons component renders a set of
 *   action buttons based on the provided boolean flags. The BtnIcon component renders a button with an icon.
 */
declare function TopBarRightContent({ search, actions, notification, buttonOne, buttonThree, buttonTwo, profile, searchComponent, notificationComponent, profileComponent, searchAction, notificationAction, profileAction, dataTestId, ...rest }: ITopBarContentProps): React.JSX.Element;
export default TopBarRightContent;
