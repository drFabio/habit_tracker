import type { Preview } from '@storybook/nextjs-vite'
import '../app/globals.css'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { mswHandlers } from './msw-handlers'

initialize({ onUnhandledRequest: 'bypass' })

const preview: Preview = {
  decorators: [],
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    },

    msw: {
      handlers: mswHandlers,
    },
  },
}

export default preview