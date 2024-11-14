import React, { useState } from 'react'

export interface AppPasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder?: string
  value?: string // Accept current value
  label: string
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AppPasswordInput = React.forwardRef<HTMLInputElement, AppPasswordInputProps>(
  ({ name, placeholder, error, value, label, onChange, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    const [passwordVisible, setPasswordVisible] = useState(false)
    const handleToggle = () => {
      setPasswordVisible(!passwordVisible)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      if (onBlur) {
        onBlur(e)
        setIsFocused(false)
      }
    }

    const VisibilityIcon = () => {
      return (
        <div onClick={handleToggle} className="cursor-pointer">
          {passwordVisible ? (
            <i className="ri-eye-line text-xl text-light-type-gray dark:text-dark-type-gray"></i>
          ) : (
            <i className="ri-eye-close-line text-xl text-light-type-gray dark:text-dark-type-gray"></i>
          )}
        </div>
      )
    }

    return (
      <div className="flex flex-col relative">
        <div className={`flex align-baseline mb-sm`}>
          <input
            className={` ${isFocused && error === undefined ? 'border-b-2 border-solid border-light-edge-accent-strong dark:border-dark-edge-accent-strong rounded-b-[0px] transition-all duration-400' : 
              isFocused && error !== undefined ? 'border-b-2 border-solid border-light-type-error rounded-b-[0px] dark:border-dark-type-error' : 
              !isFocused && error !== undefined ? '!border border-solid border-light-type-error dark:border-dark-type-error rounded-md' : ''}
              bg-light-surface-gray dark:bg-dark-surface-gray text-light-type-gray dark:text-dark-type-gray outline-none rounded-md 
              focus:outline-none focus:z-10 appearance-none w-full h-[56px] px-md pb-lg !pt-2xl border-0 focus:ring-0 type-sm-head
                peer`}
            type={passwordVisible ? 'text' : 'password'}
            placeholder={placeholder}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            onChange={onChange}
            ref={ref}
            {...props}
            autoComplete="off"
          />
          <label
            className={`absolute inline-flex left-[11px] top-[11px] transition-all duration-200 pt-sm type-sm-head
              peer-focus:transform 
              peer-focus:origin-top-left 
              peer-focus:translate-x-[0px] 
              peer-focus:translate-y-[-12px] 
              peer-focus:scale-100 
              peer-focus:ease-[cubic-bezier(0,_0,_0.2,_1)]
              peer-focus:text-xs 
              peer-focus:z-10
              ${
                value || isFocused || placeholder
                  ? 'transform origin-top-left translate-x-[1px] translate-y-[-12px] scale-100 transition duration-200 ease-[cubic-bezier(0,_0,_0.2,_1)] text-xs z-10 text-light-type-gray-muted dark:text-dark-type-gray-muted '
                  : 'text-light-type-gray-placeholder dark:text-dark-type-gray-placeholder '
              }`}>
            {label}
          </label>
          <div className="absolute right-sm top-[48%] transform -translate-y-1/2 z-10">
            {VisibilityIcon()}
          </div>
        </div>
        {error && <span className="text-light-type-error text-left dark:text-dark-type-error type-xs-title">{error}</span>}
      </div>
    )
  },
)

export default AppPasswordInput
