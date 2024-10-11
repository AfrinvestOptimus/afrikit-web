export interface AppModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}
