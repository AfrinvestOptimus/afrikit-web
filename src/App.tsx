import React, { useState } from 'react';
import AppModal from './molecules/AppModal'; // Assuming AppModal is properly imported
import { Controller, useForm } from 'react-hook-form';
import { AppInput } from './molecules';
import DropdownComponent from './molecules/AppDropdownMenu';
import AppFileUploader from './molecules/AppFileUpload';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle confirm action
  const handleConfirm = () => {
    console.log('Confirm button clicked!');
    handleCloseModal(); 
  };

  const {
    control,
    handleSubmit,
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
      showCheck: true
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
    }
  ]

  const handleClearEmail = () => {
    setValue('email', '') // Clear the email value
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-light-page-bg2 dark:bg-dark-page-bg2 font-sans antialiased mx-auto">
      {/* Button to trigger modal opening */}
      {/* <button
        onClick={handleOpenModal} 
        className="bg-blue-500 text-white p-3 rounded-lg">
        Open Modal
      </button> */}

      {/* Conditionally render the AppModal based on the state */}
     
        {/* <AppModal
          isOpen={isModalOpen} 
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
          title="Choose how to verify your BVN"
          subtitle="Are you sure you want to proceed?"
        >
          <div className="p-4">
            <p className="mb-4">We only need access to your</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>
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
            <div className="flex items-center mb-4">
              <i className="ri-lock-fill text-gray-500 mr-2"></i>
              <p className="text-sm text-gray-600">Your BVN does not give us access to your bank accounts or transactions.</p>
            </div>
          </div>
        </AppModal> */}
        <form className="max-w-md mx-auto">
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

        <AppFileUploader />
    </div>
  )
}

export default App;
