import React from 'react'
import BRAND_COLORS from './utils/brandColors'
interface BrandContextType {
  brand?: 'afrinvest' | null
  children: React.ReactNode
}

export const BrandProvider: React.FC<BrandContextType> = ({ brand, children }) => {
  const colors = brand === 'afrinvest' ? BRAND_COLORS.afrinvest : BRAND_COLORS.default

  const cssVariables = {
    '--afrikit-accent-1': colors.light.accent1,
    '--afrikit-accent-2': colors.light.accent2,
    '--afrikit-accent-3': colors.light.accent3,
    '--afrikit-accent-4': colors.light.accent4,
    '--afrikit-accent-5': colors.light.accent5,
    '--afrikit-accent-6': colors.light.accent6,
    '--afrikit-accent-7': colors.light.accent7,
    '--afrikit-accent-8': colors.light.accent8,
    '--afrikit-accent-9': colors.light.accent9,
    '--afrikit-accent-10': colors.light.accent10,
    '--afrikit-accent-11': colors.light.accent11,
    '--afrikit-accent-12': colors.light.accent12,
    '--afrikit-dark-accent-1': colors.dark.accent1,
    '--afrikit-dark-accent-2': colors.dark.accent2,
    '--afrikit-dark-accent-3': colors.dark.accent3,
    '--afrikit-dark-accent-4': colors.dark.accent4,
    '--afrikit-dark-accent-5': colors.dark.accent5,
    '--afrikit-dark-accent-6': colors.dark.accent6,
    '--afrikit-dark-accent-7': colors.dark.accent7,
    '--afrikit-dark-accent-8': colors.dark.accent8,
    '--afrikit-dark-accent-9': colors.dark.accent9,
    '--afrikit-dark-accent-10': colors.dark.accent10,
    '--afrikit-dark-accent-11': colors.dark.accent11,
    '--afrikit-dark-accent-12': colors.dark.accent12,
    '--afrikit-accent-a-1': colors.alphaLight.accentA1,
    '--afrikit-accent-a-2': colors.alphaLight.accentA2,
    '--afrikit-accent-a-3': colors.alphaLight.accentA3,
    '--afrikit-accent-a-4': colors.alphaLight.accentA4,
    '--afrikit-accent-a-5': colors.alphaLight.accentA5,
    '--afrikit-accent-a-6': colors.alphaLight.accentA6,
    '--afrikit-accent-a-7': colors.alphaLight.accentA7,
    '--afrikit-accent-a-8': colors.alphaLight.accentA8,
    '--afrikit-accent-a-9': colors.alphaLight.accentA9,
    '--afrikit-accent-a-10': colors.alphaLight.accentA10,
    '--afrikit-accent-a-11': colors.alphaLight.accentA11,
    '--afrikit-accent-a-12': colors.alphaLight.accentA12,
    '--afrikit-dark-accent-a-1': colors.alphaDark.accentA1,
    '--afrikit-dark-accent-a-2': colors.alphaDark.accentA2,
    '--afrikit-dark-accent-a-3': colors.alphaDark.accentA3,
    '--afrikit-dark-accent-a-4': colors.alphaDark.accentA4,
    '--afrikit-dark-accent-a-5': colors.alphaDark.accentA5,
    '--afrikit-dark-accent-a-6': colors.alphaDark.accentA6,
    '--afrikit-dark-accent-a-7': colors.alphaDark.accentA7,
    '--afrikit-dark-accent-a-8': colors.alphaDark.accentA8,
    '--afrikit-dark-accent-a-9': colors.alphaDark.accentA9,
    '--afrikit-dark-accent-a-10': colors.alphaDark.accentA10,
    '--afrikit-dark-accent-a-11': colors.alphaDark.accentA11,
    '--afrikit-dark-accent-a-12': colors.alphaDark.accentA12,
  }

  return <div style={cssVariables as React.CSSProperties}>{children}</div>
}
