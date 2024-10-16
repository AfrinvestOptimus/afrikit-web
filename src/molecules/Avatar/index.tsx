import React from 'react'

interface AvatarProps {
  src?: string // URL of the avatar image
  alt?: string // Alt text for the image
  size?: 'sm' | 'md' | 'lg' // Optional sizes for the avatar
  fallback?: string // Fallback text (e.g., initials) if the image fails to load
  className?: string // Additional custom styles (optional)
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'Avatar', size, fallback, className }) => {
  const [imageError, setImageError] = React.useState(false)

  const handleError = () => {
    setImageError(true) // If image fails to load, set the error state
  }

  return (
    <div
      className={`bg-gray-200 flex h-2xl w-2xl items-center justify-center overflow-hidden rounded-full text-center ${className} `}>
      {src && !imageError ? (
        <img src={src} alt={alt} className="h-2xl w-2xl object-cover" onError={handleError} />
      ) : (
        // Fallback (initials or placeholder)
        <span className="text-gray-600 font-bold type-lg-head">
          {fallback ? fallback.substring(0, 2).toUpperCase() : 'N/A'}
        </span>
      )}
    </div>
  )
}

export default Avatar
