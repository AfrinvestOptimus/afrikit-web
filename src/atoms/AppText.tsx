import { TAppTextProps } from '../types'
import { tv, VariantProps } from 'tailwind-variants'
import { useMemo } from 'react'
import clsx from 'clsx'

const textVariants = tv({
  base: '',
  variants: {
    size: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
    },
    weight: {
      regular: '',
      medium: '',
      semibold: '',
      bold: '',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    color: {
      gray: 'text-light-type-gray-muted dark:text-dark-type-gray-muted',
      error: 'text-light-type-error dark:text-dark-type-error',
      accent: 'text-light-type-accent dark:text-dark-type-accent',
      cyan: 'text-light-type-cyan dark:text-dark-type-cyan',
      info: 'text-light-type-info dark:text-dark-type-info',
      success: 'text-light-type-success dark:text-dark-type-success',
      tomato: 'text-light-type-tomato dark:text-dark-type-tomato',
      violet: 'text-light-type-violet dark:text-dark-type-violet',
      warning: 'text-light-type-warning dark:text-dark-type-warning',
    },
    highContrast: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      color: 'gray',
      highContrast: true,
      class: 'text-light-type-gray dark:text-dark-type-gray',
    },
    {
      color: 'error',
      highContrast: true,
      class: 'text-light-type-error-bold dark:text-dark-type-error-bold',
    },
    {
      color: 'accent',
      highContrast: true,
      class: 'text-light-type-accent-bold dark:text-dark-type-accent-bold',
    },
    {
      color: 'cyan',
      highContrast: true,
      class: 'text-light-type-cyan-bold dark:text-dark-type-cyan-bold',
    },
    {
      color: 'info',
      highContrast: true,
      class: 'text-light-type-info-bold dark:text-dark-type-info-bold',
    },
    {
      color: 'success',
      highContrast: true,
      class: 'text-light-type-success-bold dark:text-dark-type-success-bold',
    },
    {
      color: 'tomato',
      highContrast: true,
      class: 'text-light-type-tomato-bold dark:text-dark-type-tomato-bold',
    },
    {
      color: 'violet',
      highContrast: true,
      className: 'text-light-type-violet-bold dark:text-dark-type-violet-bold',
    },
    {
      color: 'warning',
      highContrast: true,
      className: 'text-light-type-warning-bold dark:text-dark-type-warning-bold',
    },
    {
      size: 1,
      weight: 'regular',
      class: 'type-xs-body',
    },
    {
      size: 1,
      weight: 'medium',
      class: 'type-xs-title',
    },
    {
      size: 1,
      weight: 'semibold',
      class: 'type-xs-head',
    },
    {
      size: 1,
      weight: 'bold',
      class: 'type-xs-bold',
    },
    {
      size: 2,
      weight: 'regular',
      class: 'type-sm-body',
    },
    {
      size: 2,
      weight: 'medium',
      class: 'type-sm-title',
    },
    {
      size: 2,
      weight: 'semibold',
      className: 'type-sm-head',
    },
    {
      size: 2,
      weight: 'bold',
      className: 'type-sm-bold',
    },
    {
      size: 3,
      weight: 'regular',
      className: 'type-base-body',
    },
    {
      size: 3,
      weight: 'medium',
      className: 'type-base-title',
    },
    {
      size: 3,
      weight: 'semibold',
      className: 'type-base-head',
    },
    {
      size: 3,
      weight: 'bold',
      className: 'type-base-bold',
    },
    {
      size: 4,
      weight: 'regular',
      className: 'type-lg-body',
    },
    {
      size: 4,
      weight: 'medium',
      className: 'type-lg-title',
    },
    {
      size: 4,
      weight: 'semibold',
      className: 'type-lg-head',
    },
    {
      size: 4,
      weight: 'bold',
      className: 'type-lg-bold',
    },
    {
      size: 5,
      weight: 'regular',
      className: 'type-xl-body',
    },
    {
      size: 5,
      weight: 'medium',
      className: 'type-xl-title',
    },
    {
      size: 5,
      weight: 'semibold',
      className: 'type-xl-head',
    },
    {
      size: 5,
      weight: 'bold',
      className: 'type-xl-bold',
    },
    {
      size: 6,
      weight: 'regular',
      className: 'type-2xl-body',
    },
    {
      size: 6,
      weight: 'medium',
      className: 'type-2xl-title',
    },
    {
      size: 6,
      weight: 'semibold',
      className: 'type-2xl-head',
    },
    {
      size: 6,
      weight: 'bold',
      className: 'type-2xl-bold',
    },
    {
      size: 7,
      weight: 'regular',
      className: 'type-3xl-body',
    },
    {
      size: 7,
      weight: 'medium',
      className: 'type-3xl-title',
    },
    {
      size: 7,
      weight: 'semibold',
      className: 'type-3xl-head',
    },
    {
      size: 7,
      weight: 'bold',
      className: 'type-3xl-bold',
    },
    {
      size: 8,
      weight: 'regular',
      className: 'type-4xl-body',
    },
    {
      size: 8,
      weight: 'medium',
      className: 'type-4xl-title',
    },
    {
      size: 8,
      weight: 'semibold',
      className: 'type-4xl-head',
    },
    {
      size: 8,
      weight: 'bold',
      className: 'type-4xl-bold',
    },
    {
      size: 9,
      weight: 'regular',
      className: 'type-5xl-body',
    },
    {
      size: 9,
      weight: 'medium',
      className: 'type-5xl-title',
    },
    {
      size: 9,
      weight: 'semibold',
      className: 'type-5xl-head',
    },
    {
      size: 9,
      weight: 'bold',
      className: 'type-5xl-bold',
    },
  ],
  defaultVariants: {
    size: 3,
    weight: 'medium',
    color: 'gray',
    highContrast: false,
    align: 'left',
  },
})

type AppTextVariant = VariantProps<typeof textVariants>

type AppTextProps = TAppTextProps & Omit<AppTextVariant, keyof TAppTextProps>

export default function AppText({
  size = 3,
  color = 'gray',
  weight = 'regular',
  highContrast = false,
  align = 'left',
  children,
  className,
  rest,
}: AppTextProps) {
  const variantClasses = useMemo(
    () => textVariants({ size, weight, align, color, highContrast }),
    [size, weight, align, color, highContrast],
  )
  return (
    <p className={clsx(variantClasses, className, '')} {...rest}>
      {children}
    </p>
  )
}
