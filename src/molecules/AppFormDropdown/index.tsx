import React, { useState, useRef, useEffect } from 'react'

interface Item {
  id: number
  name: string
}

export interface AppFormDropdownProps {
  name: string // The name of the dropdown for form submission
  itemList: Item[] // List of items to display in the dropdown
  onItemSelect: (selectedItems: Item) => void // Callback for item selection
  selectedItem?: Item // Currently selected item
  placeholder: string // Placeholder text when no items are selected
  error?: string // Error message to display
  label?: string // Optional label for the dropdown
}

const AppFormDropdown: React.FC<AppFormDropdownProps> = React.forwardRef<
  HTMLDivElement,
  AppFormDropdownProps
>(({ name, itemList, onItemSelect, placeholder, error, selectedItem, label, ...props }, ref) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDropdownToggle = () => {
    setShowDropdown(prev => !prev) // Toggle dropdown visibility
  }

  const toggleItemSelection = (item: Item) => {
    onItemSelect(item) // Call the parent handler with the updated selection
  }

  const filteredItems = itemList.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Handle clicks outside the dropdown
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false)
    }
  }

  // Add event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {' '}
      {/* Set ref on the main container */}
      {/* Selected item display */}
      <div
        className="rounded mb-sm flex h-[56px] cursor-pointer items-center justify-between rounded-sm border-0 bg-light-surface-gray px-xl text-light-type-gray outline-none focus:ring-0 dark:bg-dark-surface-gray dark:text-dark-type-gray"
        onClick={handleDropdownToggle}>
        <p className="font-medium">
          {selectedItem?.name || placeholder} {/* Show selected item's name or placeholder */}
        </p>
        <div className="pl-sm">
          <i className="ri-arrow-down-s-line text-xl text-light-type-gray-muted dark:text-dark-type-gray-muted"></i>
        </div>
      </div>
      {/* Dropdown with search */}
      {showDropdown && (
        <div
          className="rounded mt-1 absolute z-10 max-h-[300px] w-full overflow-y-auto rounded-sm bg-light-solid px-md shadow-lg dark:bg-dark-solid"
          style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE 10+
          }}>
          {/* Search bar */}
          <div className="px-3 py-2 flex items-center space-x-md border-b border-light-neutral4 p-sm dark:border-dark-neutral4">
            <i className="ri-search-line mr-2 text-xl text-light-type-gray-muted dark:text-dark-type-gray-muted"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search items..."
              className="w-full border-none bg-dark-panel/0 text-light-type-gray placeholder-light-type-gray-muted outline-none dark:text-dark-type-gray dark:placeholder-dark-type-gray-muted"
            />
          </div>

          {/* Item List */}
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div
                key={`${item?.name}-${index}`}
                className="px-4 flex cursor-pointer items-center justify-between px-md py-sm transition-all duration-300 ease-in-out hover:bg-light-background-neutral-transparent-hover dark:hover:bg-dark-background-neutral-transparent-hover"
                onClick={() => toggleItemSelection(item)} // Pass the entire item
              >
                <div className="flex items-center space-x-lg">
                  <i
                    className={`ri-check-line mr-2 text-xl text-light-type-accent dark:text-dark-type-accent ${
                      selectedItem?.id === item?.id ? 'visible' : 'invisible'
                    }`}
                    aria-hidden="true"></i>
                  <span
                    className={`capitalize text-light-type-gray dark:text-dark-type-gray ${selectedItem?.id === item?.id ? 'ml-1' : ''}`}>
                    {item?.name}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-light-type-gray-muted dark:text-dark-type-gray-muted">
              No results found
            </div>
          )}
        </div>
      )}
      {/* Error message */}
      {error && (
        <div className="mt-1 text-sm text-light-type-error dark:text-dark-type-error">{error}</div>
      )}
    </div>
  )
})

export default AppFormDropdown
