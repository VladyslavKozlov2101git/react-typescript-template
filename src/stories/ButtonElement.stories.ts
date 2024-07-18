import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { fn } from '@storybook/test';

import ButtonElement from '@shared/ButtonElement';

type StoryProps = ComponentProps<typeof ButtonElement>;

const meta: Meta<StoryProps> = {
  title: 'shared/ButtonElement',
  component: ButtonElement,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    text: 'Primary',
    onClick: fn(),
  },
};
