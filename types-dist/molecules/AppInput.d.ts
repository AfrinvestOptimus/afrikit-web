import React from 'react';
export interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder?: string;
    type?: string;
    value?: string;
    label: string;
    error?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
}
declare const AppInput: React.ForwardRefExoticComponent<AppInputProps & React.RefAttributes<HTMLInputElement>>;
export default AppInput;
