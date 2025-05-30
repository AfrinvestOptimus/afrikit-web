import clsx from 'clsx'
import { FC } from 'react'

export type AppIconSize = '16' | '20' | '24' | '40' | '48' | '98'
export type AppIconProps = {
  iconClassName: string
  size: AppIconSize
  muted?: boolean
  statusBadge?: 'interest' | 'pending' | 'failed' | 'cancelled'
}

const AppIcon: FC<AppIconProps> = ({ iconClassName, size, muted, statusBadge }) => {
  return (
    <div className="relative">
      <div
        className={clsx(
          Number(size) > 24
            ? 'flex items-center justify-center rounded-sm-max bg-light-surface-gray dark:bg-dark-surface-gray'
            : '',
          size === '40'
            ? 'h-3xl w-3xl p-sm'
            : size === '48'
              ? 'h-4xl w-4xl p-md'
              : size === '98'
                ? 'h-[98px] w-[98px]'
                : '',
        )}>
        <i
          className={clsx(
            'text-light-type-gray dark:text-dark-type-gray',
            iconClassName,
            size === '16'
              ? 'text-base'
              : size === '20'
                ? 'text-xl'
                : size === '98'
                  ? 'text-[48px]'
                  : 'text-2xl',
            muted && 'text-light-type-gray-muted dark:text-dark-type-gray-muted',
          )}
        />
      </div>
      {statusBadge && (
        <div
          className={clsx(
            'absolute -bottom-xs -right-xs flex items-center justify-center rounded-xs-max',
            size === '98' ? 'h-xl w-xl' : 'h-lg w-lg',
            statusBadge === 'pending'
              ? 'bg-light-background-warning-base dark:bg-dark-background-warning-base'
              : statusBadge === 'failed' || statusBadge === 'cancelled'
                ? 'bg-light-background-error-base dark:bg-dark-background-error-base'
                : 'bg-light-background-success-base dark:bg-dark-background-success-base',
          )}>
          <i
            className={clsx(
              'text-light-neutral1 dark:text-dark-neutral1',
              size === '98' ? 'text-2xl' : 'text-base',
              statusBadge === 'pending'
                ? 'ri-time-line'
                : statusBadge === 'failed'
                  ? 'ri-error-warning-line'
                  : 'ri-arrow-down-line',
            )}
          />
        </div>
      )}
    </div>
  )
}

export default AppIcon
