import React from 'react';
import { TAppTopBarProps } from '../types/TAppTopBarProps';
/**
 * Component representing the top bar of the application.
 *
 * @component
 * @param {TAppTopBarProps} props - The properties for the AppTopbar component.
 * @param {boolean} props.isOnboarding - Indicates if the user is in the onboarding process.
 * @param {string} props.pageTitle - The title of the current page.
 * @param {'filled' | 'outlined'} [props.theme='filled'] - The theme of the top bar.
 * @param {boolean} [props.search=true] - Indicates if the search functionality is enabled.
 * @param {string} [props.subtitle] - The subtitle of the current page.
 * @param {boolean} [props.actions] - Indicates if actions are enabled.
 * @param {boolean} [props.backBtn] - Indicates if the back button is enabled.
 * @param {React.ReactNode} [props.buttonOne] - The first action button.
 * @param {React.ReactNode} [props.buttonTwo] - The second action button.
 * @param {React.ReactNode} [props.buttonThree] - The third action button.
 * @returns {JSX.Element} The rendered top bar component.
 */
declare function AppTopbar(props: TAppTopBarProps): React.JSX.Element;
export default AppTopbar;
