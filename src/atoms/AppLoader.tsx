import * as React from 'react'
import clsx from 'clsx'
import { Loader2 } from 'lucide-react'

export interface IAppLoaderProps {
  className?: string | string[]
}

/**
 * AppLoader component renders a spinning loader icon.
 *
 * @param {IAppLoaderProps} props - The properties for the AppLoader component.
 * @param {string} props.className - Additional class names to apply to the loader.
 *
 * @returns {JSX.Element} The rendered loader component.
 */
export default function AppLoader({ className }: IAppLoaderProps) {
  return (
    <Loader2 className={clsx('w-xl h-xl animate-spin text-black dark:text-white', className)} />
  )
}
