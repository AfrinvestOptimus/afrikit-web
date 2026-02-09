import type { HTMLAttributes } from 'react'

export interface FileUploaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  maxSize?: number
  allowedTypes?: string[]
  onUpload?: (file: File) => Promise<string>
  width?: string
  height?: string
  dataTestId?: string
}