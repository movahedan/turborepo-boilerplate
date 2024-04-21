import { baseNextJsStorybookConfig } from '@repo/config-storybook';

export default {
  ...baseNextJsStorybookConfig,
  stories: ['../app/**/*.stories.tsx'],
};
