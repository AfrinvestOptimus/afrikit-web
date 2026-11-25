import React from 'react';
interface AppCodeInputProps {
    length?: number;
    errorMessage?: string;
    secureEntry: boolean;
    boxWidth?: number;
    boxHeight?: number;
    value?: string;
    onChange?: (code: string) => void;
    dataTestId?: string;
}
declare const AppCodeInput: React.FC<AppCodeInputProps>;
export default AppCodeInput;
