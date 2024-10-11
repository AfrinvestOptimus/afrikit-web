import React from 'react';
export interface AppPhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder?: string;
    value?: string;
    label: string;
    error?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
}
declare const AppPhoneInput: React.ForwardRefExoticComponent<AppPhoneInputProps & React.RefAttributes<HTMLInputElement>>;
export default AppPhoneInput;
