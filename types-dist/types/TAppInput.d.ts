import { Control, RegisterOptions } from 'react-hook-form';
export interface AppInputProps {
    control: Control<HTMLFormControlsCollection>;
    name: string;
    rules?: RegisterOptions;
    placeholder?: string;
    type?: string;
    value?: string;
    label: string;
    error?: string;
    onClear?: () => void;
}
