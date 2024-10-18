import React, { useState } from 'react'
import DropdownComponent from './AppDropdownMenu'
import NGNFlag from '../assets/ngn-flag.svg'
import 'remixicon/fonts/remixicon.css'
import { AppPhoneInputProps } from '../types'
import { CountryList } from '../types/IAppPhoneInputProps'

const items = [
  { label: 'Option 1', subLabel: 'Description 1' },
  { label: 'Option 2', subLabel: 'Description 2' },
  { label: 'Option 3', subLabel: 'Description 3' },
]
const AppPhoneInput = React.forwardRef<HTMLInputElement, AppPhoneInputProps>(
  (
    { name, countryList, onCountrySelect, placeholder, error, value, label, onChange, onClear, onBlur, ...props },
    ref,
  ) => {
    
    const [showCountries, setShowCountries] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [selected, setSelected] = useState({
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

    const selectCountry = (country) => {
      setSelected(country);
      onCountrySelect(country)
      setShowCountries(!showCountries);
    }

    const CountrySelection = () => {
      return (
        <div className="relative z-10">
          <div
            className={`z-9 flex h-[56px] cursor-pointer appearance-none items-center rounded-l-sm border-0 bg-light-surface-gray px-sm text-light-type-gray outline-none type-sm-title focus:outline-none focus:ring-0 dark:bg-dark-surface-gray dark:text-dark-type-gray`}
            onClick={handleSelect}>
            <div className="relative flex items-center px-xs">
              <div className="relative mr-xs h-[20px] w-[20px] overflow-hidden rounded-full">
                <img src={selected.flag} alt="flag" className='h-[20px] w-[20px]'/>
              </div>
              <p className="font-medium">{selected['phone_code']}</p>
              <div className="pl-sm">
                <i className="ri-arrow-down-s-fill text-xl text-light-type-gray-muted dark:text-dark-type-gray-muted"></i>
              </div>
            </div>
          </div>
          {(showCountries) && (
          <div className="absolute shadow-lg bg-light-white-to-dark dark:bg-dark-white-to-dark min-w-[303px] max-w-max text-grey-500 font-medium border border-solid border-light-neutral4 dark:border-dark-neutral4 rounded-sm space-y-2 z-50 max-h-[248px] p-sm overflow-scroll scrollbar-hide">
            {countryList?.map((country, index) => {
              return (
                <div
                  key={`${country.name}-${index}`}
                  className="cursor-pointer py-sm px-md hover:bg-grey-200 transition-all duration-300 ease-in-out flex justify-between hover:rounded-xs hover:bg-light-background-neutral-transparent-hover dark:hover:bg-dark-background-neutral-transparent-hover"
                  onClick={() => selectCountry(country)}
                >
                  <div className="flex items-center space-x-lg relative">
                    {
                      country.flag !== null &&
                      <div className="relative h-[40px] w-[40px] overflow-hidden rounded-full">
                        <img src={country?.flag} alt="flag" className=' h-[40px] w-[40px]'/>
                      </div>
                    }
                    {
                      country?.phone_code === undefined || country?.phone_code === '' ?
                      (
                        <div className='flex flex-col'>
                          <span className="capitalize type-sm-title text-light-type-gray dark:text-dark-type-gray">
                            {country.name}
                          </span>
                        </div>
                      )
                      :
                      (
                        <div className='flex flex-col'>
                          <span className="capitalize type-sm-title text-light-type-gray dark:text-dark-type-gray">
                            {country.name}
                          </span>
                          <span className="type-sm-body text-light-type-gray-muted dark:text-dark-type-gray-muted">
                            {country?.phone_code}
                          </span>
                        </div>
                      )
                    }
                  </div>
                  <div>
                    {country?.name === selected.name && (
                      <i
                        className={`ri-check-line text-xl text-light-type-accent dark:text-dark-type-accent `}
                        aria-hidden="true"></i>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        </div>
      )
    }

    return (
      <div className="w-full">
        <div className="flex space-x-sm">
          {CountrySelection()}
          <div className="relative flex flex-col">
            <div className={`mb-sm flex align-baseline`}>
              <input
                className={` ${isFocused && error === undefined ? 'border-b-2 border-solid border-light-edge-accent-strong dark:border-dark-edge-accent-strong rounded-br-[0px] transition-all duration-400' : 
                  isFocused && error !== undefined ? 'border-b-2 border-solid border-light-type-error rounded-b-[0px] dark:border-dark-type-error' : 
                  !isFocused && error !== undefined ? '!border border-solid border-light-type-error dark:border-dark-type-error rounded-r-md' : ''}
                  bg-light-surface-gray dark:bg-dark-surface-gray text-light-type-gray dark:text-dark-type-gray outline-none rounded-r-md 
                  focus:outline-none focus:z-10 appearance-none w-full h-[56px] px-md pb-lg !pt-2xl border-0 focus:ring-0 type-sm-head
                    peer`}
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
            
          </div>
        </div>
        {error && (
          <span className="text-light-type-error type-xs-title dark:text-dark-type-error">
            {error}
          </span>
        )}
      </div>
    )
  },
)
export default AppPhoneInput
