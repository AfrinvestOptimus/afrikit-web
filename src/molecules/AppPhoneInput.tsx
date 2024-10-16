import React, { useState } from 'react'
import DropdownComponent from './AppDropdownMenu'
import NGNFlag from '../assets/ngn-flag.svg'
import 'remixicon/fonts/remixicon.css'
import { AppPhoneInputProps } from '../types'

const items = [
  { label: 'Option 1', subLabel: 'Description 1' },
  { label: 'Option 2', subLabel: 'Description 2' },
  { label: 'Option 3', subLabel: 'Description 3' },
]
const AppPhoneInput = React.forwardRef<HTMLInputElement, AppPhoneInputProps>(
  (
    { name, countryList, placeholder, error, value, label, onChange, onClear, onBlur, ...props },
    ref,
  ) => {
    const [showCountries, setShowCountries] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [selected, setSelected] = useState({
      id: 1,
      name: 'nigeria',
      phone_code: '+234',
      code: 'NG',
      flag: NGNFlag,
    })

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      if (onBlur) {
        onBlur(e)
        setIsFocused(false)
      }
    }

    function handleSelect() {
      setShowCountries(!showCountries)
    }

    const CountrySelection = () => {
      return (
        <div className="relative z-10">
          <div
            className={`z-9 flex h-[56px] cursor-pointer appearance-none items-center rounded-l-sm border-0 bg-light-surface-gray px-sm text-light-type-gray outline-none type-sm-title focus:outline-none focus:ring-0 dark:bg-dark-surface-gray dark:text-dark-type-gray`}
            onClick={handleSelect}>
            <div className="relative flex items-center px-xs">
              <div className="relative mr-xs h-[20px] w-[20px] overflow-hidden rounded-full">
                <img src={selected.flag} alt="Nigeria" />
              </div>
              <p className="font-medium">{selected['phone_code']}</p>
              <div className="pl-sm">
                <i className="ri-arrow-down-s-fill text-xl text-light-type-gray-muted dark:text-dark-type-gray-muted"></i>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="flex space-x-sm">
        {/* {} */}
        <DropdownComponent size="sm" items={items} trigger={CountrySelection()} />
        <div className="relative flex flex-col">
          <div className={`mb-sm flex align-baseline`}>
            <input
              className={` ${
                isFocused && !error
                  ? 'duration-400 rounded-br-[0px] border-b-2 border-solid border-light-edge-accent-strong transition-all dark:border-dark-edge-accent-strong'
                  : isFocused && error !== undefined
                    ? 'rounded-b-[0px] border-b-2 border-solid border-light-type-error dark:border-dark-type-error'
                    : !isFocused && error !== undefined
                      ? 'rounded-r-md !border border-solid border-light-type-error dark:border-dark-type-error'
                      : ''
              } peer h-[56px] w-full min-w-[415px] appearance-none rounded-r-md border-0 bg-light-surface-gray px-md !pt-2xl pb-lg text-light-type-gray outline-none type-sm-head focus:z-10 focus:outline-none focus:ring-0 dark:bg-dark-surface-gray dark:text-dark-type-gray`}
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
              className={`absolute left-[11px] top-[11px] inline-flex pt-sm transition-all duration-200 type-sm-head peer-focus:z-10 peer-focus:origin-top-left peer-focus:translate-x-[0px] peer-focus:translate-y-[-12px] peer-focus:scale-100 peer-focus:transform peer-focus:text-xs peer-focus:ease-[cubic-bezier(0,_0,_0.2,_1)] ${
                value || isFocused || placeholder
                  ? 'z-10 origin-top-left translate-x-[1px] translate-y-[-12px] scale-100 transform text-xs text-light-type-gray-muted transition duration-200 ease-[cubic-bezier(0,_0,_0.2,_1)] dark:text-dark-type-gray-muted'
                  : 'text-light-type-gray-placeholder dark:text-dark-type-gray-placeholder'
              }`}>
              {label}
            </label>
          </div>
          {error && (
            <span className="text-light-type-error type-xs-title dark:text-dark-type-error">
              {error}
            </span>
          )}
        </div>
      </div>
    )
  },
)
export default AppPhoneInput
