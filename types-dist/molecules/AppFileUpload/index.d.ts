import React from 'react';
export interface FileUploaderProps {
    maxSize?: number;
    allowedTypes?: string[];
    onUpload: (file: File) => Promise<string>;
    width?: string;
    height?: string;
}
export declare const AppFileUploader: React.FC<FileUploaderProps>;
export default AppFileUploader;
