
export interface FileUploaderProps {
    maxSize?: number;
    allowedTypes?: string[];
    onUpload?: (file: File) => Promise<string>;
    width?: string;
    height?: string;
}