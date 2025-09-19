import React from 'react'
import clsx from 'clsx'
import AppButton from '../molecules/AppButton'
export interface ITopBarContentProps {
  search?: boolean
  actions: boolean | undefined
  buttonOne?: boolean
  buttonTwo?: boolean
  buttonThree?: boolean
  notification?: boolean
  profile?: boolean
  searchComponent?: React.ReactNode
  notificationComponent?: React.ReactNode
  profileComponent?: React.ReactNode
  searchAction?: () => void
  notificationAction?: () => void
  profileAction?: () => void
}

/**
 * UserItem component renders a clickable user item with a rounded background and an arrow icon.
 *
 * @param {Object} props - The properties for the UserItem component.
 * @param {() => void} props.profileAction - The action to be performed when the user item is clicked.
 *
 * @returns {JSX.Element} A JSX element representing the user item.
 *
 * @remarks
 * The component uses Tailwind CSS classes for styling and includes responsive design adjustments.
 * It supports both light and dark themes.
 *
 * @example
 * ```tsx
 * <UserItem profileAction={handleProfileAction} />
 * ```
 */
const UserItem = ({ profileAction }: { profileAction?: () => void }): React.JSX.Element => (
  <div
    className="flex cursor-pointer flex-row items-center space-x-xs rounded-full bg-light-background-neutral-base/5 p-xs transition-all duration-500 hover:bg-light-background-neutral-base/20 md:space-x-sm md:px-lg md:py-sm dark:bg-dark-background-neutral-base/5 dark:hover:bg-dark-background-neutral-base/20"
    onClick={profileAction}>
    <div className="h-xl w-xl rounded-full bg-dark-tomato5" />
    <i className="ri-arrow-down-s-line text-2xl text-light-type-gray dark:text-dark-type-gray" />
  </div>
)

/**
 * A component that renders a set of action buttons based on the provided boolean flags.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.buttonOne - Determines if the "Create new" button should be displayed.
 * @param {boolean} props.buttonTwo - Determines if the "Export" button should be displayed.
 * @param {boolean} props.buttonThree - Determines if the "More" button should be displayed.
 *
 * @returns {JSX.Element} A JSX element containing the action buttons.
 */
const ActionButtons = ({
  buttonOne,
  buttonTwo,
  buttonThree,
}: {
  buttonOne: boolean
  buttonTwo: boolean
  buttonThree: boolean
}): React.JSX.Element => (
  <div className="hidden flex-row items-center space-x-lg md:flex">
    {buttonThree && (
      <AppButton
        variant="surface"
        color="neutral"
        iconStart={false}
        iconEnd={false}
        text=""
        iconName="ri-more-line"
        size={3}
        highContrast={true}
      />
    )}
    {buttonTwo && (
      <AppButton
        text={'Export'}
        variant="surface"
        color="neutral"
        iconStart={false}
        iconEnd={false}
        size={3}
        highContrast={true}
      />
    )}
    {buttonOne && (
      <AppButton
        text={'Create new'}
        variant="solid"
        color="neutral"
        iconStart={false}
        iconEnd={false}
        size={3}
        highContrast={true}
      />
    )}
  </div>
)

/**
 * BtnIcon component renders a button with an icon.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.icon - The icon class name to be applied to the <i> element.
 * @param {string} [props.className] - Optional additional class names to be applied to the <button> element.
 * @param {() => void} [props.onClick] - The action to be performed when the button is clicked. This is an optional parameter.
 * @returns {JSX.Element} The rendered button with an icon.
 */

function BtnIcon({
  icon,
  className,
  onClick,
}: {
  icon: string
  className?: string
  onClick?: () => void
}): React.JSX.Element {
  return (
    <button className={clsx('cursor-pointer px-md py-sm', className)} onClick={onClick}>
      <i className={clsx('text-2xl text-light-type-gray dark:text-dark-type-gray', icon)} />
    </button>
  )
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
function TopBarRightContent({
  search,
  actions,
  notification,
  buttonOne = true,
  buttonThree = false,
  buttonTwo = false,
  profile,
  searchComponent,
  notificationComponent,
  profileComponent,
  searchAction,
  notificationAction,
  profileAction,
}: ITopBarContentProps): React.JSX.Element {
  return (
    <div className="flex flex-row items-center">
      {actions && (
        <ActionButtons buttonOne={buttonOne} buttonTwo={buttonTwo} buttonThree={buttonThree} />
      )}
      {search &&
        (searchComponent ? (
          searchComponent
        ) : (
          <BtnIcon
            icon="ri-search-line lg:text-2xl text-lg"
            className="inline-block"
            onClick={searchAction}
          />
        ))}
      {notification &&
        (notificationComponent ? (
          notificationComponent
        ) : (
          <BtnIcon
            icon="ri-notification-line lg:text-2xl text-lg"
            className="inline-block"
            onClick={notificationAction}
          />
        ))}
      {profile &&
        (profileComponent ? profileComponent : <UserItem profileAction={profileAction} />)}
    </div>
  )
}

export default TopBarRightContent
