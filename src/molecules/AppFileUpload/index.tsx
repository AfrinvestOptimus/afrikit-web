import React, { useRef, useState } from 'react';

export interface FileUploaderProps {
  maxSize?: number; // in bytes
  allowedTypes?: string[];
  onUpload?: (file: File) => Promise<string>; // Function to handle file upload, returns image URL
  width?: string;
  height?: string;
}

export const AppFileUploader: React.FC<FileUploaderProps> = ({
  maxSize = 800 * 400,
  allowedTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'],
  onUpload,
  width = '400px',
  height = '160px',
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

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
    progressIntervalRef.current = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressIntervalRef.current!);
          return 100;
        }
        return Math.min(prev + 10, 100); // Increment progress
      });
    }, 500); // Adjust the speed of progress increment

    try {
      const url = await onUpload(file); // Simulate actual upload
      setUploadedImageUrl(url);
      setUploadProgress(100); // Complete progress
    } catch (err) {
      setError('Upload failed');
    } finally {
      setIsUploading(false);
      clearInterval(progressIntervalRef.current!); // Clean up interval
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent default behavior
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    handleFileChange(droppedFile);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent default behavior
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent default behavior
    setIsDragging(false);
  };

  return (
    <div
      className={`bg-dark-background-neutral-light dark:bg-dark-background-neutral-light border border-dashed border-light-type-gray dark:border-dark-type-gray rounded-xl p-4 flex flex-col items-center justify-center transition-colors
        ${isDragging || isHovering ? 'border-light-blue8 bg-blue-50' : 'border-gray-300'}
        ${isUploading ? 'bg-light-gray6 opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-blue-500 hover:bg-blue-50'}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ width, height }}
      onClick={() => !isUploading && fileInputRef.current?.click()}>
      {uploadedImageUrl ? (
        <div className="w-full h-full relative">
          <img
            src={uploadedImageUrl}
            alt="Uploaded file"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full flex items-center justify-between p-xs bg-white bg-opacity-75 px-lg">
            <i className="ri-file-line text-gray-500 text-xl mr-2" />
            <span className="text-center text-sm truncate">{file?.name}</span>
            <i className="ri-checkbox-circle-fill text-light-green10 text-xl ml-2" />
          </div>
        </div>
      ) : file ? (
        <div className="flex flex-col items-center">
          <i className="ri-file-line text-2xl mb-2"></i>
          <span className="text-sm truncate">{file.name}</span>
          {isUploading && (
            <div className="w-full mt-2">
              <div className="bg-light-blue8 h-1" style={{ width: `${uploadProgress}%` }}></div>
              <p className="text-xs mt-1">{uploadProgress}%</p>
            </div>
          )}
        </div>
      ) : (
        <>
          <i className="ri-file-upload-fill mb-2 text-light-type-gray dark:text-dark-type-gray"></i>
          <p className="text-sm text-center"><span className='text-light-blue10 font-semibold text-sm'>Click to upload </span>or drag and drop</p>
          <p className="text-sm text-light-gray10 text-center">SVG, PNG, JPG or GIF (max. 800x400px)</p>
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
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
};

export default AppFileUploader;
