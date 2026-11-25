import type { HTMLAttributes } from 'react'

export interface TAppLoaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: string | string[]
  dataTestId?: string
}