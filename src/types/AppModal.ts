export interface AppModalProps {
 isOpen: boolean; // Boolean to control whether modal is open
 onClose: () => void; // Function to close the modal
 onConfirm?: () => void; // Optional function for confirm action
 title: string; // Title of the modal
 subtitle?: string; // Optional subtitle
 children: React.ReactNode; // Modal content
}
