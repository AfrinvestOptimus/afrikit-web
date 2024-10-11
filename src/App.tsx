import React, { useState } from 'react';
import AppModal from './molecules/AppModal'; // Assuming AppModal is properly imported

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

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-light-page-bg2 dark:bg-dark-page-bg2 font-sans antialiased mx-auto">
      {/* Button to trigger modal opening */}
      <button
        onClick={handleOpenModal} 
        className="bg-blue-500 text-white p-3 rounded-lg">
        Open Modal
      </button>

      {/* Conditionally render the AppModal based on the state */}
     
        <AppModal
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
        </AppModal>
      
    </div>
  )
}

export default App;
