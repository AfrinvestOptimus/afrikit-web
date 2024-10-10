import clsx from 'clsx'
import 'remixicon/fonts/remixicon.css'
import { TAppLoaderProps } from '../types'

/**
 * AppLoader component renders a spinning loader icon.
 *
 * @param {IAppLoaderProps} props - The properties for the AppLoader component.
 * @param {string} props.className - Additional class names to apply to the loader.
 *
 * @returns {JSX.Element} The rendered loader component.
 */
export default function AppLoader({ className }: TAppLoaderProps) {
  return (
      <div className="w-xl h-xl animate-spin rounded-xs-max flex items-center justify-center">
        <i className={clsx('text-xl text-black dark:text-white ri-loader-4-line', className)} />
      </div>
  )
}
