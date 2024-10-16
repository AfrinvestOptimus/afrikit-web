import React, { useState } from 'react'
import DropdownComponent from './AppDropdownMenu'
import NGNFlag from '../assets/ngn-flag.svg'
import 'remixicon/fonts/remixicon.css'

export interface AppPhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  countryList?: any[]
  placeholder?: string
  value?: string
  label: string
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
}

const items = [
  { label: 'Option 1', subLabel: 'Description 1' },
  { label: 'Option 2', subLabel: 'Description 2'},
  { label: 'Option 3', subLabel: 'Description 3'},
]
const AppPhoneInput = React.forwardRef<HTMLInputElement, AppPhoneInputProps>(
  ({ name, countryList, placeholder, error, value, label, onChange, onClear, onBlur, ...props }, ref) => {
    const [showCountries, setShowCountries] = useState(false);
    const [isFocused, setIsFocused] = useState(false)
    const [selected, setSelected] = useState({
      id: 1,
      name: 'nigeria',
      'phone_code': '+234',
      code: 'NG',
      flag: NGNFlag,
    });

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      if (onBlur) {
        onBlur(e)
        setIsFocused(false)
      }
    }

    function handleSelect() {
      setShowCountries(!showCountries);
    }

    const CountrySelection = () => {

      return (
        <div className="relative z-10">
          <div
            className={`flex items-center bg-light-surface-gray dark:bg-dark-surface-gray text-light-type-gray dark:text-dark-type-gray h-[56px] type-sm-title px-sm z-9 rounded-l-sm outline-none focus:outline-none border-0 focus:ring-0 appearance-none cursor-pointer`}
            onClick={handleSelect}
          >
            
            <div className="flex items-center px-xs relative">
              <div className="w-[20px] h-[20px] mr-xs rounded-full overflow-hidden relative">
                <img
                  src={selected.flag}
                  alt="Nigeria"
                  />
              </div>
              <p className="font-medium">{selected['phone_code']}</p>
              <div className="pl-sm">
                <i className="ri-arrow-down-s-fill text-light-type-gray-muted dark:text-dark-type-gray-muted text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="flex space-x-sm">
        {/* {} */}
        <DropdownComponent size='sm' items={items} trigger={CountrySelection()}/>
        <div className="flex flex-col relative">
          <div className={`flex align-baseline mb-sm`}>
            <input
              className={` ${isFocused && !error ? 'border-b-2 border-solid border-light-edge-accent-strong dark:border-dark-edge-accent-strong rounded-br-[0px] transition-all duration-400' : 
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
          </div>
          {error && <span className="text-light-type-error dark:text-dark-type-error type-xs-title">{error}</span>}
        </div>
      </div>
    )
  },
)
export default AppPhoneInput
