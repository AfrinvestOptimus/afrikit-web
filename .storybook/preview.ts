import type { Preview } from '@storybook/react'
import '../src/index.css'

import { withThemeByClassName, withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'Light', // Set your default background
      values: [
        { name: 'Light', value: '#ffffff' },
        { name: 'Dark', value: '#333333' },
      ],
    },
    // controls: {
    //   matchers: {
    //     color: /(background|color)$/i,
    //     date: /Date$/i,
    //   },
    // },
    
  },

  decorators: [withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  }),]
}

export default preview
