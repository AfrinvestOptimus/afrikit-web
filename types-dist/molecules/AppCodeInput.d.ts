import React from 'react';
interface AppCodeInputProps {
    length?: number;
    errorMessage?: string;
    secureEntry: boolean;
    onChange?: (code: string) => void;
}
declare const AppCodeInput: React.FC<AppCodeInputProps>;
export default AppCodeInput;
