import React, { useState, useRef, useEffect } from 'react';
import { AppPhoneInputProps } from '../../types';
import NGNFlag from '../../assets/ngn-flag.svg';

const AppCountryDropdown = React.forwardRef<HTMLInputElement, AppPhoneInputProps>(
  (
    { name, countryList, onCountrySelect, placeholder, error, value, label, onChange, onClear, onBlur, ...props },
    ref,
  ) => {
    const [showCountries, setShowCountries] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selected, setSelected] = useState({
      name: 'Nigeria', // Set initial display to country name
      phone_code: '+234',
      code: 'NG',
      flag: NGNFlag,
    });

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelect = () => {
      setShowCountries((prev) => !prev); // Toggle dropdown visibility
    };

    const selectCountry = (country) => {
      setSelected(country);
      onCountrySelect(country);
      setShowCountries(false);
    };

    const filteredCountries = countryList.filter((country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCountries(false);
      }
    };

    // Add event listener for clicks outside the dropdown
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
      <div className="relative w-full" ref={dropdownRef}> {/* Set ref on the main container */}
        {/* Selected country display */}
        <div
          className="flex justify-between h-[56px] rounded-sm cursor-pointer items-center border-0 bg-light-surface-gray px-xl text-light-type-gray outline-none focus:ring-0 dark:bg-dark-surface-gray dark:text-dark-type-gray mb-sm"
          onClick={handleSelect}
        >
          <p className="font-medium">{selected.name}</p> {/* Display selected country name only */}
          <div className="pl-sm">
            <i className="ri-arrow-down-s-line text-xl text-light-type-gray-muted dark:text-dark-type-gray-muted"></i>
          </div>
        </div>

        {/* Country dropdown with search */}
        {showCountries && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded rounded-sm mt-1 max-h-60 overflow-y-auto shadow-lg">
            {/* Search bar */}
            <div className="flex items-cente space-x-md border-b border-light-neutral4 px-3 py-2 dark:border-dark-neutral4 py-md px-xl">
              <i className="ri-search-line text-light-type-gray-muted dark:text-dark-type-gray-muted mr-2 text-xl"></i>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country..."
                className="w-full border-none bg-transparent outline-none placeholder-gray-400 text-light-type-gray dark:text-dark-type-gray dark:placeholder-dark-type-gray-muted"
              />
            </div>

            {/* Country List */}
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <div
                  key={`${country.name}-${index}`}
                  className="cursor-pointer py-sm px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out flex justify-between dark:hover:bg-dark-background-neutral-transparent-hover px-xl"
                  onClick={() => selectCountry(country)}
                >
                  <div className="flex items-center space-x-4">
                    {country.flag && (
                      <div className="h-6 w-6 overflow-hidden rounded-full">
                        <img src={country.flag} alt="flag" className="h-full w-full" />
                      </div>
                    )}
                    <div className="flex flex-col ">
                     <span className="capitalize text-light-type-gray dark:text-dark-type-gray">{country.name}</span>
                     <span className="text-light-type-gray dark:text-dark-type-gray text-sm">{country.phone_code}</span>
                    </div>
                  </div>
                  {country.name === selected.name && (
                    <i className="ri-check-line text-xl text-light-type-accent dark:text-dark-type-accent" aria-hidden="true"></i>
                  )}
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">No results found</div>
            )}
          </div>
        )}

        {/* Error message */}
        {error && <div className="mt-1 text-light-type-error dark:text-dark-type-error text-sm">{error}</div>}
      </div>
    );
  }
);

export default AppCountryDropdown;