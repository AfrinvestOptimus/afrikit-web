export interface AppModalProps {
  isOpen: boolean // Boolean to control whether modal is open
  onClose: () => void // Function to close the modal
  onConfirm?: () => void // Optional function for confirm action
  title?: string // Title of the modal
  subtitle?: string // Optional subtitle
  className?: string | string[] // Additional classes for the modal
  children: React.ReactNode // Modal content
  showButton?: boolean
  buttonText?: string // Text for the confirm button
  modalClassName?: string | string[] // Additional classes for the modal content
  overlayColor?: string
}
