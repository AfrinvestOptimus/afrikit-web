import React, { useEffect } from 'react'
import AppButton from '../AppButton' // Import your reusable button component
import { AppModalProps } from '../../types/AppModal'
import clsx from 'clsx'

const AppModal: React.FC<AppModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  subtitle,
  children,
  className,
  showButton = false,
  buttonText,
  modalClassName,
}) => {
  // Handle Escape key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose() // Close modal on 'Escape' key press
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden' // Prevent body scroll when modal is open
      window.addEventListener('keydown', handleEsc) // Add escape key listener
    }

    return () => {
      document.body.style.overflow = 'unset' // Restore body scroll when modal is closed
      window.removeEventListener('keydown', handleEsc) // Cleanup escape key listener
    }
  }, [isOpen, onClose])

  // Handle background click to close the modal
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose() // Close modal when clicking outside content
    }
  }

  if (!isOpen) return null // Do not render the modal if not open

  return (
    <div
      className={clsx(
        'inset-0 fixed z-50 flex items-center justify-center bg-[#00082F46] px-xl dark:bg-[#000000BF]',
        className,
      )}
      onClick={handleBackgroundClick} // Close on background click
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title">
      <div
        className={clsx(
          'relative w-full max-w-md rounded-xl bg-light-page-bg2 p-lg shadow-light-neutral3 dark:bg-dark-page-bg2 dark:shadow-dark-neutral3',
          modalClassName,
        )}>
        {/* Modal Header */}
        <div className="relative">
          <button
            onClick={onClose}
            className="text-light-gray11 hover:text-light-gray11 focus:outline-none absolute top-lg right-lg"
            aria-label="Close modal">
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        {title && (
          <span className="flex items-center">
            <span>
              <h2 id="modal-title" className="text-xl font-bold">
                {title}
              </h2>
              {subtitle && <p className="text-sm text-light-gray11">{subtitle}</p>}
            </span>
          </span>
        )}

        {/* Modal Content */}
        <div>{children}</div>

        {/* Modal Footer */}
        {showButton && (
          <div className="py-lg">
            <AppButton
              size={3}
              text={buttonText || 'Continue'}
              color="neutral"
              highContrast
              variant="solid"
              iconStart={false}
              classname="w-full"
              onClick={onConfirm}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default AppModal