import React, { useMemo } from 'react' // Import React and the useMemo hook for performance optimization
import { AppButtonProps } from '../../types/TAppButton' // Import the AppButtonProps interface for TypeScript type checking
import {
  buttonColors,
  buttonSizes,
  buttonStates,
  ButtonVariant,
  highContrastButtonColors,
  highContrastTextColors,
  textColors,
  textSizes,
  textStates,
} from './button' // Import various styles and variants for button customization

const AppButton: React.FC<AppButtonProps> = ({
  size = 2,
  variant = 'solid',
  color = 'accent',
  highContrast = false,
  state = 'default',
  iconStart = true,
  iconEnd = false,
  iconStartName = 'ri-home-line',
  iconEndName = 'ri-home-line',
  text,
  loading = false,
  onClick,
  classname,
  dataTestId,
  accessibilityLabel,
  ...rest
}) => {
  // Get the corresponding styles based on the provided props
  const sizeStyle = buttonSizes[size] // Get size styles
  const textSize = textSizes[size] // Get text size
  const colorVariantStyle = highContrast
    ? highContrastButtonColors[color][variant] // Get high contrast color styles if enabled
    : buttonColors[color][variant] // Otherwise, get standard color styles
  const textStyle = highContrast
    ? highContrastTextColors[color][variant] // Get high contrast text styles if enabled
    : textColors[color][variant] // Otherwise, get standard text styles
  const textStateStyle = textStates[state] // Get styles based on button state

  // Memoize the button state style for performance optimization
  const buttonStateStyle = useMemo(() => {
    if (state === 'disabled') {
      return (buttonStates[state] as Record<ButtonVariant, string>)[variant] // If disabled, get the corresponding state style
    }
    return buttonStates[state] // Otherwise, return the default state style
  }, [state, variant]) // Recompute when state or variant changes

  // Combine button styles into a single string for className
  const combinedButtonStyles = useMemo(
    () => [sizeStyle, colorVariantStyle, buttonStateStyle].join(' '),
    [sizeStyle, colorVariantStyle, buttonStateStyle],
  )

  // Combine text styles into a single string for className
  const combinedTextStyle = useMemo(
    () => [textStyle, textSize, textStateStyle].join(' '),
    [textStyle, textSize, textStateStyle],
  )

  return (
    <button
      type="button"
      {...rest}
      onClick={onClick}
      className={`flex items-center justify-center ${combinedButtonStyles} ${classname}`}
      disabled={state === 'disabled'}
      data-testid={dataTestId ?? 'AppButton'}
      aria-label={accessibilityLabel ?? text}>
      <div className="flex items-center justify-between space-x-lg">
        {iconStart && ( // Conditionally render left icon
          <div>
            <i className={`${iconStartName} ${combinedTextStyle}`}></i>{' '}
          </div>
        )}
        {/* Render the center  text */}
        <p className={`font-semibold ${combinedTextStyle}`}>
          {loading ? (
            <span className="animate-spin">
              <i className="ri-loader-2-line"></i>
            </span>
          ) : (
            text
          )}
        </p>{' '}
        {iconEnd && ( // Conditionally render right icon
          <div>
            <i className={`${iconEndName} ${combinedTextStyle}`}></i> {/* Render the end icon */}
          </div>
        )}
      </div>
    </button>
  )
}

export default AppButton
