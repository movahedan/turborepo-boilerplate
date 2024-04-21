import React from 'react';
import { Preview } from '@storybook/react';

export const baseStorybookPreview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      // Description toggle
      // expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const baseStorybookPreviewMui: Preview = {
  ...baseStorybookPreview,
  decorators: [
    (Story) => <Story />,
  ],
};
