import React from 'react'
import optimusLogo from '../assets/optimusLogo.svg'
import clsx from 'clsx'
import { TAppTopBarProps } from '../types/TAppTopBarProps'
import TopBarRightContent from '../components/TopBarRightContent'
import AppButton from './AppButton'

/**
 * Component representing the top bar of the application.
 *
 * @component
 * @param {TAppTopBarProps} props - The properties for the AppTopbar component.
 * @param {boolean} props.isOnboarding - Indicates if the user is in the onboarding process.
 * @param {string} [props.onboardLink] - The link for onboarding.
 * @param {string} props.pageTitle - The title of the current page.
 * @param {'filled' | 'outlined'} [props.theme='filled'] - The theme of the top bar.
 * @param {boolean} [props.search=true] - Indicates if the search functionality is enabled.
 * @param {string} [props.subtitle] - The subtitle of the current page.
 * @param {boolean} [props.actions] - Indicates if actions are enabled.
 * @param {boolean} [props.backBtn] - Indicates if the back button is enabled.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {React.ReactNode} [props.buttonOne] - The first action button.
 * @param {React.ReactNode} [props.buttonTwo] - The second action button.
 * @param {React.ReactNode} [props.buttonThree] - The third action button.
 * @returns {JSX.Element} The rendered top bar component.
 */
function AppTopbar(props: TAppTopBarProps): React.JSX.Element {
  const {
    isOnboarding,
    onboardLink,
    pageTitle,
    theme = 'filled',
    search = true,
    subtitle,
    actions,
    backBtn,
    backBtnAction,
    className,
  } = props

  // Type guard to check if actions are enabled
  function hasActions(props: TAppTopBarProps): props is TAppTopBarProps & { actions: true } {
    return !props.isOnboarding && props.actions === true
  }

  return (
    <div
      className={clsx(
        'h-16 w-full',
        className,
        theme === 'filled'
          ? 'bg-light-page-bg2 dark:bg-dark-page-bg2'
          : 'border-b border-light-edge-gray-subtle dark:border-dark-edge-gray-subtle',
      )}>
      {isOnboarding ? (
        <div className="flex flex-row items-center justify-between px-3xl">
          <img src={optimusLogo} />

          <div className="hidden cursor-pointer py-lg capitalize text-light-type-accent transition-all duration-300 type-base-head hover:text-light-type-accent-bold md:flex dark:text-dark-type-accent dark:hover:text-dark-type-accent-bold">
            {onboardLink ?? 'Open account'}
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-between px-2xl py-lg">
          <div className="flex flex-row items-end space-x-sm">
            {backBtn && (
              <button onClick={backBtnAction} className="hidden md:inline-block">
                <div className="flex h-3xl w-3xl items-center justify-center rounded-full border border-light-neutralA7 hover:bg-light-neutralA3 dark:border-dark-neutralA7 dark:hover:bg-dark-neutralA3">
                  <i className="ri-arrow-go-back-line text-xl text-light-neutral12 dark:text-dark-neutral12" />
                </div>
              </button>
            )}
            <div className="flex flex-col items-start gap-y-xs">
              <h2 className="text-center text-light-type-gray type-xl-bold dark:text-dark-type-gray">
                {pageTitle}
              </h2>
              <p className="hidden text-light-type-gray-muted type-base-body md:block dark:text-dark-type-gray-muted">
                {subtitle}
              </p>
            </div>
          </div>

          <TopBarRightContent
            search={search}
            actions={actions}
            {...(hasActions(props) && 'buttonOne' in props
              ? {
                  buttonOne: props?.buttonOne,
                  buttonTwo: props?.buttonTwo,
                  buttonThree: props?.buttonThree,
                }
              : {})}
          />
        </div>
      )}
    </div>
  )
}

export default AppTopbar
