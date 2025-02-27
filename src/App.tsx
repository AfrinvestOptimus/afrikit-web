import React, { useState } from 'react'
import AppModal from './molecules/AppModal' // Assuming AppModal is properly imported
import { Controller, useForm } from 'react-hook-form'
import {
  AppButton,
  AppCountryDropdown,
  AppInput,
  AppSidebar,
  AppTopbar,
  TSideBarItem,
} from './molecules'
import DropdownComponent from './molecules/AppDropdownMenu'
import AppFileUploader from './molecules/AppFileUpload'
import AppFormDropdown from './molecules/AppFormDropdown'
import { AppListItem } from './organisms'
const countries = [
  { name: 'Nigeria', phone_code: '+234', code: 'NG', flag: 'path_to_nigeria_flag.svg' },
  { name: 'United States', phone_code: '+1', code: 'US', flag: 'path_to_us_flag.svg' },
  { name: 'India', phone_code: '+91', code: 'IN', flag: 'path_to_india_flag.svg' },
  { name: 'Nigeria', phone_code: '+234', code: 'NG', flag: 'path_to_nigeria_flag.svg' },
  { name: 'United States', phone_code: '+1', code: 'US', flag: 'path_to_us_flag.svg' },
  { name: 'India', phone_code: '+91', code: 'IN', flag: 'path_to_india_flag.svg' },
  // Add more countries as needed
]

const itemList = [
  { id: 1, name: 'USA' },
  { id: 2, name: 'Canada' },
  { id: 3, name: 'Mexico' },
  { id: 4, name: 'UK' },
  { id: 5, name: 'Australia' },
]
function App() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState(itemList[0]) // Set initial selected item

  const handleItemSelect = item => {
    setSelectedItem(item) // Update the selected item state
    setError('') // Clear any existing errors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedItems.length === 0) {
      setError('Please select at least one item.')
      return
    }
    // Handle form submission logic
  }

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  // Function to handle confirm action
  const handleConfirm = () => {
    handleCloseModal()
  }

  const {
    control,
    // handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      email: '',
    },
  })

  const dropdownItems = [
    {
      label: 'My profile',
      hasAvatar: true,
      hasIcon: false,
      iconSize: 'sm',
      icon: 'ri-user-6-line',
      state: 'disabled',
      showCheck: true,
    },
    {
      label: 'Themes',
      hasAvatar: false,
      hasIcon: true,
      iconSize: 'sm',
      icon: 'ri-palette-line',
      state: 'active',
    },
    {
      label: 'Settings',
      hasAvatar: false,
      hasIcon: true,
      iconSize: 'sm',
      icon: 'ri-settings-3-line',
      state: 'active',
    },
    {
      label: 'Help',
      hasAvatar: false,
      hasIcon: true,
      iconSize: 'sm',
      icon: 'ri-heart-3-line',
      state: 'active',
    },
    {
      label: 'Logout',
      hasAvatar: false,
      hasIcon: true,
      iconSize: 'sm',
      icon: 'ri-logout-circle-line',
      state: 'active',
    },
  ]

  const links: TSideBarItem[] = [
    {
      id: 'kyc',
      position: 'top',
      text: 'Get started',
      color: 'accent',
      iconOnly: false,
      current: false,
      icon: true,
      iconName: 'ri-map-pin-time-fill',
      linkAction: () => {},
      hasDropdown: false,
      badge: false,
    },
    {
      id: 'home',
      position: 'top',
      text: 'Home',
      color: 'accent',
      iconOnly: false,
      current: false,
      icon: true,
      iconName: 'ri-home-6-fill',
      linkAction: () => {},
      hasDropdown: false,
      badge: false,
    },
    {
      id: 'portfolio',
      position: 'top',
      text: 'Portfolio',
      color: 'accent',
      iconOnly: false,
      current: false,
      icon: true,
      iconName: 'ri-bar-chart-fill',
      linkAction: () => {},
      hasDropdown: false,
      badge: false,
    },
    {
      id: 'invest',
      position: 'top',
      text: 'Invest',
      color: 'neutral',
      iconOnly: false,
      current: false,
      icon: true,
      iconName: 'ri-copper-coin-fill',
      linkAction: () => {},
      hasDropdown: true,
      openDropdown: false,
      dropDownElement: [
        {
          text: 'Nigerian Stocks',
          current: false,
          linkAction: () => {},
        },
        {
          text: 'Treasury Bills',
          current: false,
          linkAction: () => {},
        },
        {
          text: 'Commercial Papers',
          current: false,
          linkAction: () => {},
        },
      ],
      badge: false,
    },
    {
      id: 'wallets',
      position: 'bottom',
      text: 'Wallets',
      color: 'accent',
      iconOnly: false,
      current: false,
      icon: true,
      iconName: 'ri-wallet-fill',
      linkAction: () => {},
      hasDropdown: false,
      badge: false,
    },
    {
      id: 'history',
      position: 'top',
      text: 'History',
      color: 'accent',
      iconOnly: false,
      current: false,
      icon: true,
      iconName: 'ri-file-history-fill',
      linkAction: () => {},
      hasDropdown: false,
      badge: false,
    },
  ]

  const handleClearEmail = () => {
    setValue('email', '') // Clear the email value
  }

  const [selectedCountry, setSelectedCountry] = useState(null)
  const [error, setError] = useState('')

  const handleCountrySelect = country => {
    setSelectedCountry(country)
    setError('') // Clear any previous error when a valid country is selected
  }

  return (
    <div className="bg-white">
      {/* <AppListItem
        size={2}
        variant="1-line"
        title="Custom Suffix Example"
        titleProps={{
          color: 'accent',
          weight: 'semibold',
        }}
        trailing="custom" // Use the custom suffix type
        trailingProps={{
          component: <button className="text-black">Hello</button>,
        }}
      /> */}
      {/* <AppFormDropdown
        name="country" // Name for the dropdown
        itemList={itemList} // List of countries
        onItemSelect={handleItemSelect} // Handler for item selection
        selectedItem={selectedItem} // Currently selected item
        placeholder="Select a country" // Placeholder text
        error={error} // Error message (if any)
        label="Country" // Optional label
      /> */}
      {/* <AppCountryDropdown
        name="country"
        countryList={countries}
        onCountrySelect={handleCountrySelect}
        placeholder="Country/Region"
        error={error} // Display error message below the dropdown if any
        label={'country'}
      />
      
      <AppModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        title="Choose how to verify your BVN"
        subtitle="Are you sure you want to proceed?"
        mainTitle="Choose how to verify your BVN"
        onBack={() => {}}>
        <div className="p-lg">
          <p className="mb-lg">We only need access to your</p>
          <ul className="mb-lg space-y-lg">
            <li className="flex items-center">
              <i className="ri-checkbox-circle-fill text-green-500 mr-md"></i>
              Full name
            </li>
            <li className="flex items-center">
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>
              Phone number
            </li>
            <li className="flex items-center">
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>
              Date of Birth
            </li>
          </ul>
          <div className="mb-lg flex items-center">
            <i className="ri-lock-fill text-gray-500 mr-2"></i>
            <p className="text-gray-600 text-sm">
              Your BVN does not give us access to your bank accounts or transactions.
            </p>
          </div>
        </div>
      </AppModal> */}
      {/* <div className="flex flex-col justify-center items-center min-h-screen bg-light-page-bg2 dark:bg-dark-page-bg2 font-sans antialiased mx-auto">
      {/* Button to trigger modal opening */}
      {/* <button
        onClick={handleOpenModal} 
        className="bg-blue-500 text-white p-3 rounded-lg">
        Open Modal
      </button> */}

      {/* Conditionally render the AppModal based on the state */}

      {/* <form className="max-w-md mx-auto">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <AppInput
                label="Testing"
                // placeholder="meeeee"
                onInput={e => {
                  // Cast EventTarget to HTMLInputElement
                  const input = e.target as HTMLInputElement
                  // Prevent non-numeric input
                  // input.value = input.value.replace(/[^0-9]/g, '')
                  field.onChange(input.value) // Update the form value
                }}
                {...field} // Pass field props which includes value and onChange
                // error={errors.email?.message}
                onClear={handleClearEmail}
              />
            )}
          />
        </form>
        {/* <DropdownComponent items={dropdownItems} separator={true} alignment='right' /> */}

      {/* <AppSidebar links={links} bottomComponent={<BottomComponent />} bottomType="component" /> */}

      <AppTopbar isOnboarding={false} theme="filled" pageTitle="Dashboard" search={false} />

      {/* <AppButton
        size={3}
        text={'Sign in'}
        color="accent"
        variant="solid"
        iconStart={false}
        classname="w-full"
      /> */}

      {/* <AppFileUploader />  */}

      {/* <div className="p-4 w-5/6">
    
      <AppCountryDropdown
          name="country"
          countryList={countries}
          onCountrySelect={handleCountrySelect}
          placeholder="Select a country"
          error={error} // Display error message below the dropdown if any
          label={'country'}      />
    </div>
    </div> */}
    </div>
  )
}

export default App
