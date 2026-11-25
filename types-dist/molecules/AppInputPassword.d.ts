import React from 'react';
export interface AppPasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder?: string;
    value?: string;
    label: string;
    error?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    dataTestId?: string;
}
declare const AppPasswordInput: React.ForwardRefExoticComponent<AppPasswordInputProps & React.RefAttributes<HTMLInputElement>>;
export default AppPasswordInput;
