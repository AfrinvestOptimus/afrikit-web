import React, { useEffect, useRef, useState } from 'react';

export interface FileUploaderProps {
  maxSize?: number;
  allowedTypes?: string[];
  onUpload?: (file: File) => Promise<string>;
  width?: string;
  height?: string;
}

export const AppFileUploader: React.FC<FileUploaderProps> = ({
  maxSize = 800 * 400,
  allowedTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'],
  onUpload,
  width = '512px',
  height = '224', // Change to auto for flexible height
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = async (selectedFile: File | null) => {
    if (selectedFile) {
      if (selectedFile.size > maxSize) {
        setError(`File size exceeds ${maxSize / 1024}KB limit`);
        return;
      }
      if (!allowedTypes.includes(selectedFile.type)) {
        setError('Invalid file type');
        return;
      }
      setFile(selectedFile);
      setError(null);
      await uploadFile(selectedFile);
    }
  };

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => Math.min(prev + 10, 100));
    }, 500);

    try {
      const url = await onUpload(file);
      setUploadedImageUrl(url);
      setUploadProgress(100);
    } catch (err) {
      setError('Upload failed');
    } finally {
      setIsUploading(false);
      clearInterval(interval);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    handleFileChange(droppedFile);
  };

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  return (
    <div
      className={` border border-light-type-gray dark:border-dark-type-gray rounded-lg 
      ${!uploadedImageUrl && !previewUrl ? 'border-dashed py-xl ' : 'border-solid p-xs'} `}
      style={{ width, maxHeight: height, overflow: 'hidden' }} // Set maxHeight and overflow hidden
    >
      <div
        className={`relative flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
          ${isDragging ? 'bg-blue-50 dark:bg-blue-900' : ''}
          ${isUploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900'}`}
        onDrop={handleDrop}
        onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={e => { e.preventDefault(); setIsDragging(false); }}
        onClick={() => !isUploading && fileInputRef.current?.click()}
        style={{ width: '100%', minHeight: height }}
      >
        {uploadedImageUrl || previewUrl ? (
          <div className="relative w-full flex flex-col items-center"> 
            <img
              src={uploadedImageUrl || previewUrl}
              alt="Uploaded file"
              className="w-full h-auto object-cover rounded-lg" 
              style={{ maxHeight: '200px' }} 
            />
            {/* Filename display directly below the image */}
            <div className="bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-xs w-full text-center">
              <p className="text-sm text-light-type-gray dark:text-dark-type-gray truncate">{file?.name}</p>
            </div>
          </div>
        ) : (
          <>
            <i className="ri-file-upload-fill mb-2 text-light-type-gray dark:text-dark-type-gray"></i>
            <p className="text-sm text-center text-light-type-gray dark:text-dark-type-gray">
              <span className="text-light-type-accent dark:text-dark-type-accent font-semibold text-sm">Click to upload</span> or drag and drop
            </p>
            <p className="text-light-type-gray-muted dark:text-dark-type-gray-muted text-xs mt-2">
              SVG, PNG, JPG or GIF (max. {maxSize / 1024}KB)
            </p>
          </>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={e => handleFileChange(e.target.files ? e.target.files[0] : null)}
          accept={allowedTypes.join(',')}
          className="hidden"
          disabled={isUploading}
        />
        {isUploading && (
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200 dark:bg-gray-700">
            <div
              className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        )}
        {error && (
          <p className="absolute bottom-0 left-0 right-0 text-red-500 text-xs text-center p-2 bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default AppFileUploader;
