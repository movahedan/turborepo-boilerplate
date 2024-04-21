import { action } from '@storybook/addon-actions';

import { Button } from './button';

import type { ButtonProps } from './button';
import type { Meta, StoryObj } from '@storybook/react';

const baseArgs: ButtonProps = {
  children: 'Click Me',
  onClick: action('onClick'),
};

export default {
  component: Button,
  args: baseArgs,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const LongText: Story = {
  args: { children: 'Lorem ipsum' },
};
