/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
import afrikitConfig from 'afrikit-shared/dist'

const getAfrikitColors = () => ({
  colors: {
    accent: {
      light: {
        accent1: 'var(--afrikit-accent-1)',
        accent2: 'var(--afrikit-accent-2)',
        accent3: 'var(--afrikit-accent-3)',
        accent4: 'var(--afrikit-accent-4)',
        accent5: 'var(--afrikit-accent-5)',
        accent6: 'var(--afrikit-accent-6)',
        accent7: 'var(--afrikit-accent-7)',
        accent8: 'var(--afrikit-accent-8)',
        accent9: 'var(--afrikit-accent-9)',
        accent10: 'var(--afrikit-accent-10)',
        accent11: 'var(--afrikit-accent-11)',
        accent12: 'var(--afrikit-accent-12)',
      },
      dark: {
        accent1: 'var(--afrikit-dark-accent-1)',
        accent2: 'var(--afrikit-dark-accent-2)',
        accent3: 'var(--afrikit-dark-accent-3)',
        accent4: 'var(--afrikit-dark-accent-4)',
        accent5: 'var(--afrikit-dark-accent-5)',
        accent6: 'var(--afrikit-dark-accent-6)',
        accent7: 'var(--afrikit-dark-accent-7)',
        accent8: 'var(--afrikit-dark-accent-8)',
        accent9: 'var(--afrikit-dark-accent-9)',
        accent10: 'var(--afrikit-dark-accent-10)',
        accent11: 'var(--afrikit-dark-accent-11)',
        accent12: 'var(--afrikit-dark-accent-12)',
      },
      alphaLight: {
        accentA1: 'var(--afrikit-accent-a-1)',
        accentA2: 'var(--afrikit-accent-a-2)',
        accentA3: 'var(--afrikit-accent-a-3)',
        accentA4: 'var(--afrikit-accent-a-4)',
        accentA5: 'var(--afrikit-accent-a-5)',
        accentA6: 'var(--afrikit-accent-a-6)',
        accentA7: 'var(--afrikit-accent-a-7)',
        accentA8: 'var(--afrikit-accent-a-8)',
        accentA9: 'var(--afrikit-accent-a-9)',
        accentA10: 'var(--afrikit-accent-a-10)',
        accentA11: 'var(--afrikit-accent-a-11)',
        accentA12: 'var(--afrikit-accent-a-12)',
      },
      alphaDark: {
        accentA1: 'var(--afrikit-dark-accent-a-1)',
        accentA2: 'var(--afrikit-dark-accent-a-2)',
        accentA3: 'var(--afrikit-dark-accent-a-3)',
        accentA4: 'var(--afrikit-dark-accent-a-4)',
        accentA5: 'var(--afrikit-dark-accent-a-5)',
        accentA6: 'var(--afrikit-dark-accent-a-6)',
        accentA7: 'var(--afrikit-dark-accent-a-7)',
        accentA8: 'var(--afrikit-dark-accent-a-8)',
        accentA9: 'var(--afrikit-dark-accent-a-9)',
        accentA10: 'var(--afrikit-dark-accent-a-10)',
        accentA11: 'var(--afrikit-dark-accent-a-11)',
        accentA12: 'var(--afrikit-dark-accent-a-12)',
      },
      colorName: { base: 'accent', alpha: 'accentA' },
    },
  },
})

const afrikitSharedConfig = afrikitConfig(getAfrikitColors())

export default {
  darkMode: 'selector',
  content: [
    './src/**/*.{js,ts,tsx,jsx}',
    './stories/**/*.{js,ts,tsx,jsx}',
    './.storybook/**/*.{js,ts,tsx,jsx}',
    './atoms/**/*.{js,ts,tsx,jsx}',
    './molecules/**/*.{js,ts,tsx,jsx}',
    './organisms/**/*.{js,ts,tsx,jsx}',
    './templates/**/*.{js,ts,tsx,jsx}',
  ],
  presets: [afrikitSharedConfig],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 28,
      '4xl': 35,
      '5xl': 60,
    },
    lineHeight: {
      xs: 1.33, // 16 / 12
      sm: 1.43, // 20 / 14
      base: 1.5, // 24 / 16
      lg: 1.44, // 26 / 18
      xl: 1.4, // 28 / 20
      '2xl': 1.25, // 30 / 24
      '3xl': 1.29, // 36 / 28
      '4xl': 1.26, // 44 / 35
      '5xl': 1, // 60 / 60
    },
    letterSpacing: {
      xs: '0.04px',
      sm: '0',
      base: '0.5px',
      lg: '-0.04px',
      xl: '-0.08px',
      '2xl': '-0.1px',
      '3xl': '-0.12px',
      '4xl': '-0.16px',
      '5xl': '-0.4px',
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {}
      const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
      const styles = ['body', 'title', 'head', 'bold']

      const styleFontWeightMap = {
        body: 'regular',
        title: 'medium',
        head: 'semibold',
        bold: 'bold',
      }

      sizes.forEach(size => {
        styles.forEach(style => {
          newUtilities[`.type-${size}-${style}`] = {
            fontSize: theme(`fontSize.${size}`),
            lineHeight: theme(`lineHeight.${size}`),
            fontWeight: theme(`fontWeight.${styleFontWeightMap[style]}`),
            letterSpacing: theme(`letterSpacing.${size}`),
          }
        })
      })

      addUtilities(newUtilities)
    }),
  ],
}
