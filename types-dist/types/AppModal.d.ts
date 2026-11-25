import type { HTMLAttributes } from 'react';
export interface AppModalProps {
    isOpen: boolean;
    onClose?: () => void;
    onConfirm?: () => void;
    title?: string;
    subtitle?: string;
    className?: string | string[];
    children: React.ReactNode;
    showButton?: boolean;
    buttonText?: string;
    modalClassName?: string | string[];
    mainTitleClass?: string;
    overlayColor?: string;
    mainTitle?: string;
    mainTitleAlign?: string;
    onBack?: () => void;
    ovelayShoudClose?: boolean;
    dataTestId?: string;
    rest?: HTMLAttributes<HTMLDivElement>;
}
