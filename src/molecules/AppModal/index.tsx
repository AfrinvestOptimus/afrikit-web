import React, { useEffect } from 'react'
import AppButton from '../AppButton'
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
  mainTitle,
  mainTitleClass = '',
  mainTitleAlign = 'center', // 'left' or 'center' for alignment
  onBack, // Optional onBack function for the back button
  ovelayShoudClose,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose && ovelayShoudClose ? onClose() : null
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEsc)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose, ovelayShoudClose])

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose && ovelayShoudClose ? onClose() : null
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={clsx(
        'inset-0 fixed z-50 flex items-center justify-center bg-light-token-overlay dark:bg-dark-token-overlay overflow-auto',
        className,
      )}
      onClick={handleBackgroundClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title">
      <div
        className={clsx(
          'relative w-full max-w-md rounded-xl bg-light-page-bg2 p-lg shadow-light-neutral3 dark:bg-dark-page-bg2 dark:shadow-dark-neutral3',
          modalClassName,
        )}>
        {/* Modal Header */}
        <div className="flex items-center justify-between">
          {onBack && (
            <button
              onClick={onBack}
              className="text-light-gray11 hover:text-light-gray11 focus:outline-none dark:text-dark-gray11 dark:hover:text-light-gray11"
              aria-label="Back">
              <i className="ri-arrow-left-wide-line text-lg"></i>
            </button>
          )}
          {mainTitle && (
            <h2
              id="modal-title"
              className={clsx(
                `text-light-type-gray type-xl-bold dark:text-dark-type-gray ${mainTitleClass}`,
                mainTitleAlign === 'center' ? 'flex-1 text-center' : 'text-left',
              )}>
              {mainTitle}
            </h2>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="ml-auto text-light-gray11 hover:text-light-gray11 focus:outline-none dark:text-dark-gray11 dark:hover:text-light-gray11"
              aria-label="Close modal">
              <i className="ri-close-line text-2xl"></i>
            </button>
          )}
        </div>
        {title && !mainTitle && (
          <h2
            id="modal-title"
            className={clsx('text-light-type-gray type-xl-bold dark:text-dark-type-gray')}>
            {title}
          </h2>
        )}
        {/* Subtitle */}
        {subtitle && !mainTitle && (
          <p className="mb-lg text-light-type-gray type-sm-body dark:text-dark-type-gray">
            {subtitle}
          </p>
        )}

        {/* Modal Content */}
        <div>{children}</div>

        {/* Modal Footer */}
        {showButton && (
          <div className="py-xl">
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
