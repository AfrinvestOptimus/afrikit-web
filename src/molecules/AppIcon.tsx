import clsx from 'clsx'
import { FC } from 'react'

export type AppIconSize = '16' | '20' | '24' | '40' | '48'
export type AppIconProps = {
  iconClassName: string
  size: AppIconSize
}

const AppIcon: FC<AppIconProps> = ({ iconClassName, size }) => {
  return (
    <div
      className={clsx(
        Number(size) > 24
          ? 'flex items-center justify-center rounded-sm-max bg-light-surface-gray dark:bg-dark-surface-gray'
          : '',
        size === '40' ? 'h-3xl w-3xl p-sm' : size === '48' ? 'h-4xl w-4xl p-md' : '',
      )}>
      <i
        className={clsx(
          iconClassName,
          size === '16' ? 'text-base' : size === '20' ? 'text-xl' : 'text-2xl',
        )}
      />
    </div>
  )
}

export default AppIcon
