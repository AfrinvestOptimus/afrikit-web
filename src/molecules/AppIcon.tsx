import clsx from 'clsx'
import { FC } from 'react'

export type AppIconSize = '16' | '20' | '24' | '40' | '48'
export type AppIconProps = {
  iconClassName: string
  size: AppIconSize
}

const AppIcon: FC<AppIconProps> = ({
  iconClassName,
  size,
}) => {

  return (
    <div
      className={clsx(
        Number(size) > 24
          ? 'bg-light-surface-gray dark:bg-dark-surface-gray rounded-sm-max flex justify-center items-center'
          : '',
        size === '40' ? 'w-3xl p-sm' : size === '48' ? 'w-4xl p-md' : '',
      )}>
      <i className={iconClassName}/>
    </div>
  )
}

export default AppIcon
