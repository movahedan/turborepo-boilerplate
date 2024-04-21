import { baseStorybookTheme } from '@repo/config-storybook/theme';
import { create } from '@storybook/theming';

export const theme = create({
  ...baseStorybookTheme,
  brandTitle: `Web`,
});
