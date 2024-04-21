import { Card } from './card';

import type { CardProps } from './card';
import type { Meta, StoryObj } from '@storybook/react';

const baseArgs: CardProps = {
  href: 'https://google.com',
  children: 'Card!',
};

export default {
  component: Card,
  args: baseArgs,
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
