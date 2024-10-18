import React, { useState } from 'react';
import AppModal from './molecules/AppModal'; // Assuming AppModal is properly imported
import { Controller, useForm } from 'react-hook-form';
import { AppInput } from './molecules';
import AppPhoneInput from './molecules/AppPhoneInput';
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

  const mockOnUpload = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      // Simulate a delay for file upload
      setTimeout(() => {
        // Simulate a successful upload 80% of the time, and failure 20% of the time
        const success = Math.random() < 0.8;
  
        if (success) {
          // Return a mock URL representing the uploaded file location
          const mockUrl = `https://example.com/uploads/${file.name}`;
          resolve(mockUrl);
        } else {
          reject('Upload failed due to server error.');
        }
      }, 2000); // Simulate a 2-second upload time
    });
  };

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
        <form className="max-w-md mx-auto p-4">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <AppPhoneInput
                label="Testing"
                // placeholder="meeeee"
                onInput={e => {
                  // Cast EventTarget to HTMLInputElement
                  const input = e.target as HTMLInputElement
                  // Prevent non-numeric input
                  field.onChange(input.value) // Update the form value
                }}
                {...field} // Pass field props which includes value and onChange
                // error={errors.email?.message}
                countryList={
                  [
                    {
                      "name": "AFGHANISTAN",
                      "code": "AF",
                      "phone_code": "+93",
                      "flag": "https://new-optimus-production.s3.amazonaws.com/countries-flags/af.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDs%2B8T4FwLgaky%2FzKv9%2BEXGkxzX8qvt9Ubax45vqks7nAIgIlKO2MJV%2FvvxsFTgBhwgD%2FSof%2Fznx1JBp5HLMLodHtAqiAMITxAFGgwwODg5NjM3MzY5MjAiDJl5A0xYDx%2BVPPxZyirlAnZmevr2kyFzev%2BkUJi8vX1AnE1vVXoZNk7Z9mxhzT2QKpP19tWfFcIRk6JP3BNcCIYaWfDUtBZZGMLnWtfJbGvJxAxnI%2BL7qDloGxMWEiwCmdX3CeftgB4ylNSC6wQlJw6jWiD01m5UpgnW%2B%2BC0v8q0Uttqw5bCvw%2FxAlGLDyJ%2FRW8tYbakTs9nQ77tz3spq6KixLa6DWasKPQkl1LCKX7x0cZAuBgV39GxGjNkRNbNZa0T1rt0zwu6rMvR9flXOvYV%2F0pJTWwSlrf3ndsYW%2BIC2CTA1l%2BlFxMFNwhaHD2vw8eFYoLrG0HCmbJp20xMEhJoLhreETHNh59ZEZZX6MBHCn0SfiSd8hJgQatxF4K5NLphyW6qRKevc3U4%2BM7K2o93xDS8Zs7bh%2Be38A9PgEqxDGFKT9MsBLp5LKWNhMY99m79LxgraIcZXBf1l1yNYwTDNwu17oDlGcvZg%2FGF5w5pAanSuTCAp8u4BjqeARn01S%2FYc06az7GShuCBgD0ljXZ0RrO2ObyFQaIJ%2B6PPmcRDDsX1YgD%2FATydtuS9jgEJe3QeZ7aj7MI7L9tO%2B1h5XdaM6foCkmL2VgsVJQVZv4Urvg7CUj7AaEacPwDxqVq7e1Y1DAcD2a7ph92xTABNRtaNriJGE8cByTu6aGR%2B2g9A4WH062AsLF1EzxYn1W5mjzOvJQdBr0MxxoxI&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIARJNVG4VMAVOA6F2Y%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241018T221147Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=4cbbd264ed38ed0b35465d65070f3febcc65ad42b4d99c88c466852967395ccc",
                    },
                    {
                      "name": "ALAND ISLANDS",
                      "code": "AX",
                      "phone_code": "+358",
                      "flag": "https://new-optimus-staging.s3.amazonaws.com/countries-flags/ax.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDyD78tL1wJDHtVJnhF0VH8uBUej3QvAfEbz2tJgBWSbgIgPs9LgqY2tI4jnwErN%2B%2FLgHXcRRpjBUSds5eCBZkKKAkqggMITxAFGgwwODg5NjM3MzY5MjAiDJvEJU0JvJskPkjHrCrfAg%2BcQqd1RBwDDwemYN3WfHr5m%2FbwqF6FVQDSdHZTXNWSGuc8tBfZrZbTaeT0awS%2FedQex38LUKofo0JuJyfUX51ElkDf4amkPkxgz7Z4fd0uF25Yal9qPzscFbAAiZgn9YksmCFQ1wU%2FDU3fC5ABfTUi7iTzUa5h1mZ701IXPQoAwgm8qqFQshFlGM%2FVACtSjl%2Fp75Ak%2BnqHz0ND70E5k0FDknNpB0ODUha4oVdeyifoXNWFwIfXFoWkWBzuJo8EBdNzUWkVUo6f6R9nbLHtSoYzbEXJHkYgKUHHil6kd9eaawy8vcTZYjRMqsVWZF11idgIJ%2B4a%2Fc2lbFYPXIbndbd8EGsBkhvRU7GcbAJPmAUzsDhpTd8IVO0mhHmxOWf7TcIPLhfTFXNSg7hLIfSx6m2lx2%2FCG7GNwhZE2H1UqHqNQVVqZlQebEMbUIivJgZnCuORdCKE03x385TZOcqFczDrusu4BjqeAUgE5NwcQ8axR5dPSvBuhZufYfHr3HQueKB1fDjsJl8fyv00rTTvJvWqYmfLiL%2B0USFS01CaMOVw%2F2ufkSp2FeHkhgBkuPvocJqb2LptH0q5c7yHzb5yx69s%2BZh8uPBy%2BPJRFA8EmCjAxhZMJ3r3PtyT07CGJq2UgK5NdUg79%2B8AR525iNhdTR%2FBLM07IZh6jv8TpOtYTfGmm%2FBDHOOg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIARJNVG4VMKCICMM5H%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241018T222217Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=c538339998791dd43b1da26c460abb4dc2f6d3e6c5ccecff23004b64b7d0a390",
                    },
                    {
                      "name": "ALBANIA",
                      "code": "AL",
                      "phone_code": "+355",
                      "flag": "https://new-optimus-production.s3.amazonaws.com/countries-flags/al.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDs%2B8T4FwLgaky%2FzKv9%2BEXGkxzX8qvt9Ubax45vqks7nAIgIlKO2MJV%2FvvxsFTgBhwgD%2FSof%2Fznx1JBp5HLMLodHtAqiAMITxAFGgwwODg5NjM3MzY5MjAiDJl5A0xYDx%2BVPPxZyirlAnZmevr2kyFzev%2BkUJi8vX1AnE1vVXoZNk7Z9mxhzT2QKpP19tWfFcIRk6JP3BNcCIYaWfDUtBZZGMLnWtfJbGvJxAxnI%2BL7qDloGxMWEiwCmdX3CeftgB4ylNSC6wQlJw6jWiD01m5UpgnW%2B%2BC0v8q0Uttqw5bCvw%2FxAlGLDyJ%2FRW8tYbakTs9nQ77tz3spq6KixLa6DWasKPQkl1LCKX7x0cZAuBgV39GxGjNkRNbNZa0T1rt0zwu6rMvR9flXOvYV%2F0pJTWwSlrf3ndsYW%2BIC2CTA1l%2BlFxMFNwhaHD2vw8eFYoLrG0HCmbJp20xMEhJoLhreETHNh59ZEZZX6MBHCn0SfiSd8hJgQatxF4K5NLphyW6qRKevc3U4%2BM7K2o93xDS8Zs7bh%2Be38A9PgEqxDGFKT9MsBLp5LKWNhMY99m79LxgraIcZXBf1l1yNYwTDNwu17oDlGcvZg%2FGF5w5pAanSuTCAp8u4BjqeARn01S%2FYc06az7GShuCBgD0ljXZ0RrO2ObyFQaIJ%2B6PPmcRDDsX1YgD%2FATydtuS9jgEJe3QeZ7aj7MI7L9tO%2B1h5XdaM6foCkmL2VgsVJQVZv4Urvg7CUj7AaEacPwDxqVq7e1Y1DAcD2a7ph92xTABNRtaNriJGE8cByTu6aGR%2B2g9A4WH062AsLF1EzxYn1W5mjzOvJQdBr0MxxoxI&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIARJNVG4VMAVOA6F2Y%2F20241018%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241018T221147Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=93568d702c00f7bfa69faffa86f0581f396c5e4e0cf1761cafb54ede14fab75d",
                  }
                  ]
                }
              />
            )}
          />
        </form>
        {/* <DropdownComponent items={dropdownItems} separator={true} alignment='right' /> */}

        {/* <AppFileUploader /> */}
        {/* <AppFileUploader onUpload={mockOnUpload} /> */}
    </div>
  )
}

export default App;
