import React, { useEffect, useRef, useState } from 'react'
import { FileUploaderProps } from '../../types'

export const AppFileUploader: React.FC<FileUploaderProps> = ({
  maxSize = 5242880,
  allowedTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'],
  onUpload,
  width = '512px',
  height = '224', // Change to auto for flexible height
}) => {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = async (selectedFile: File | null) => {
    if (selectedFile) {
      if (selectedFile.size > maxSize) {
        setError(`File size exceeds ${Math.round(maxSize / 1024 / 1024)} MB limit`);
        return
      }
      if (!allowedTypes.includes(selectedFile.type)) {
        setError('Invalid file type')
        return
      }
      setFile(selectedFile)
      setError(null)

      await uploadFile(selectedFile)
    }
  }

  const uploadFile = async (file: File) => {
    setError('')
    setIsUploading(true)
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress(prev => Math.min(prev + 10, 100))
    }, 500)

    try {
      const url = await onUpload(file)
      setUploadedImageUrl(url)
      setUploadProgress(100)
    } catch (err) {
      setError('Upload failed')
    } finally {
      setIsUploading(false)
      clearInterval(interval)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    handleFileChange(droppedFile)
  }

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file)
      setPreviewUrl(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
    }
  }, [file])

  return (
    <div
      className={`rounded-lg border border-light-edge-gray dark:border-dark-edge-gray ${!uploadedImageUrl && !previewUrl ? 'border-dashed py-xl' : 'border-solid p-xs'} `}
      style={{ width, maxHeight: height, overflow: 'hidden' }} // Set maxHeight and overflow hidden
    >
      <div
        className={`relative flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${isDragging ? 'bg-blue-50 dark:bg-blue-900' : ''} ${isUploading ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-50 dark:hover:bg-blue-900 cursor-pointer'}`}
        onDrop={handleDrop}
        onDragOver={e => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={e => {
          e.preventDefault()
          setIsDragging(false)
        }}
        onClick={() => !isUploading && fileInputRef.current?.click()}
        style={{ width: '100%', minHeight: height }}>
        {uploadedImageUrl || previewUrl ? (
          <div className="relative flex w-full flex-col items-center justify-center">
            <img
              src={uploadedImageUrl || previewUrl}
              alt="Uploaded file"
              className={`h-auto w-full rounded-lg object-cover ${uploadedImageUrl || previewUrl ? 'rounded-b-[0px]' : 'rounded-lg'}`}
              style={{ maxHeight: '200px' }}
            />
            <div className="dark:bg-gray-800 flex w-full justify-between bg-light-type-gray-inverse bg-opacity-75 p-xs text-center dark:bg-dark-type-gray-inverse dark:bg-opacity-75">
              {!isUploading ? (
                <i className="ri-file-line text-lg text-light-type-accent dark:text-dark-type-accent"></i>
              ) : (
                <i className="ri-loader-4-line animate-spin text-lg text-light-type-accent dark:text-dark-type-accent"></i>
              )}
              <p className="truncate text-light-type-gray type-sm-title dark:text-dark-type-gray">
                {file?.name}
              </p>
              <p className="text-light-type-accent dark:text-dark-type-accent">{uploadProgress}%</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-sm">
            <div className="rounded flex h-3xl w-3xl items-center justify-center rounded-xs-max border border-light-edge-gray-subtle dark:border-dark-edge-gray-subtle">
              <i className="ri-file-upload-fill text-light-type-gray dark:text-dark-type-gray" />
            </div>
            <p className="text-center text-light-type-gray type-sm-title dark:text-dark-type-gray">
              <span className="text-light-type-accent dark:text-dark-type-accent">
                Click to upload
              </span>{' '}
              or drag and drop
            </p>
            <p className="mt-xs text-light-type-gray-muted type-xs-body dark:text-dark-type-gray-muted">
            PDF, PNG, or JPG  (max. 5mb)
            </p>
          </div>
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
          <div className="bottom-0 left-0 right-0 h-2 bg-gray-200 dark:bg-gray-700 absolute">
            <div
              className="bg-blue-500 h-full transition-all duration-300 ease-in-out"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        )}
        {error && (
          <p className="bottom-0 left-0 right-0 absolute bg-light-type-gray-inverse bg-opacity-75 p-sm text-center text-light-type-error type-xs-body dark:bg-light-type-gray-inverse dark:bg-opacity-75 dark:text-dark-type-error">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}

export default AppFileUploader
