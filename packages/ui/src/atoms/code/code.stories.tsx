import { Code } from './code';

import type { CodeProps } from './code';
import type { Meta, StoryObj } from '@storybook/react';

const baseArgs: CodeProps = {
  children: 'Code!',
};

export default {
  component: Code,
  args: baseArgs,
} satisfies Meta<typeof Code>;

type Story = StoryObj<typeof Code>;

export const Default: Story = {};
