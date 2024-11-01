import React, { useState, useRef, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
}

export interface AppFormDropdownProps {
  name: string; // The name of the dropdown for form submission
  itemList: Item[]; // List of items to display in the dropdown
  onItemSelect: (selectedItems: Item) => void; // Callback for item selection
  selectedItem: Item; // Currently selected item
  placeholder: string; // Placeholder text when no items are selected
  error?: string; // Error message to display
  label?: string; // Optional label for the dropdown
}

const AppFormDropdown: React.FC<AppFormDropdownProps> = React.forwardRef<HTMLDivElement, AppFormDropdownProps>(
  (
    {
      name,
      itemList,
      onItemSelect,
      placeholder,
      error,
      selectedItem,
      label,
      ...props
    },
    ref
  ) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleDropdownToggle = () => {
      setShowDropdown((prev) => !prev); // Toggle dropdown visibility
    };

    const toggleItemSelection = (item: Item) => {
      onItemSelect(item); // Call the parent handler with the updated selection
    };

    const filteredItems = itemList.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle clicks outside the dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
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
        {/* Selected item display */}
        <div
          className="flex justify-between h-[56px] rounded rounded-sm cursor-pointer items-center border-0 bg-light-surface-gray px-xl text-light-type-gray outline-none focus:ring-0 dark:bg-dark-surface-gray dark:text-dark-type-gray mb-sm"
          onClick={handleDropdownToggle}
        >
          <p className="font-medium">
            {selectedItem.name || placeholder} {/* Show selected item's name or placeholder */}
          </p>
          <div className="pl-sm">
            <i className="ri-arrow-down-s-line text-xl text-light-type-gray-muted dark:text-dark-type-gray-muted"></i>
          </div>
        </div>

        {/* Dropdown with search */}
        {showDropdown && (
          <div className="absolute z-10 w-full bg-white rounded rounded-sm mt-1 max-h-[300px] overflow-y-auto shadow-lg px-md" style={{
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE 10+
          }}>
            {/* Search bar */}
            <div className="flex items-center space-x-md border-b border-light-neutral4 px-3 py-2 dark:border-dark-neutral4 p-sm">
              <i className="ri-search-line text-light-type-gray-muted dark:text-dark-type-gray-muted mr-2 text-xl"></i>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search items..."
                className="w-full border-none bg-transparent outline-none placeholder-gray-400 text-light-type-gray dark:text-dark-type-gray dark:placeholder-dark-type-gray-muted"
              />
            </div>

            {/* Item List */}
            {filteredItems.length > 0 ? (
             filteredItems.map((item, index) => (
               <div
                 key={`${item.name}-${index}`}
                 className="cursor-pointer py-sm px-4 hover:bg-gray-100 transition-all duration-300 ease-in-out flex items-center justify-between dark:hover:bg-dark-background-neutral-transparent-hover px-md"
                 onClick={() => toggleItemSelection(item)} // Pass the entire item
               >
                 <div className="flex items-center space-x-lg">
                   {/* {selectedItem.id === item.id && ( // Show check icon if this item is selected
                     <i className="ri-check-line text-xl text-light-type-accent dark:text-dark-type-accent mr-2" aria-hidden="true"></i>
                   )} */}
                   <span
                     className={`capitalize text-light-type-gray dark:text-dark-type-gray ${selectedItem.id === item.id ? 'ml-1' : ''}`}
                   >
                     {item.name}
                   </span>
                 </div>
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

export default AppFormDropdown;
