import React from 'react'
import colors from 'afrikit-shared/dist/colors'

export type TAppTextProps = {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  color?: keyof typeof colors.dark.type
  trim?: 'normal' | 'start' | 'end' | 'both'
  weight?: 'regular' | 'medium' | 'semibold' | 'bold'
  highContrast?: boolean
  align?: 'left' | 'center' | 'right'
  className?: string | string[]
  children?: string | React.ReactHTMLElement
  rest?: React.HTMLAttributes<HTMLParagraphElement>
}
