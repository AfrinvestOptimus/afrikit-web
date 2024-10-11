import React, { useEffect } from 'react';
import AppButton from '../AppButton'; // Import your reusable button component
import { AppModalProps } from '../../types/AppModal';

const AppModal: React.FC<AppModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  subtitle,
  children,
}) => {
  // Handle Escape key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose(); // Close modal on 'Escape' key press
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent body scroll when modal is open
      window.addEventListener('keydown', handleEsc); // Add escape key listener
    }

    return () => {
      document.body.style.overflow = 'unset'; // Restore body scroll when modal is closed
      window.removeEventListener('keydown', handleEsc); // Cleanup escape key listener
    };
  }, [isOpen, onClose]);

  // Handle background click to close the modal
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close modal when clicking outside content
    }
  };

  if (!isOpen) return null; // Do not render the modal if not open

  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-lg z-50"
      onClick={handleBackgroundClick} // Close on background click
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative p-lg">
        {/* Modal Header */}
        <div className='flex justify-end'>
          <button
            onClick={onClose}
            className="text-light-gray11  hover:text-light-gray11 focus:outline-none"
            aria-label="Close modal"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>
        
        <span className="flex items-center">
          <span>
            <h2 id="modal-title" className="text-xl font-bold">{title}</h2>
            {subtitle && <p className="text-sm text-light-gray11">{subtitle}</p>}
          </span>
        </span>

        {/* Modal Content */}
        <div className='py-2xl'>{children}</div>

        {/* Modal Footer */}
        <div className='py-lg'>
          <AppButton
              color="accent"
              iconStart={false}
              iconEnd={false}
              text="Continue"
              onClick={onConfirm}
              classname="w-full bg-black"
            />
        </div>
          
      </div>
    </div>
  );
};

export default AppModal;
