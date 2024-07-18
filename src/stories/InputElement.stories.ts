import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import InputElement from '@shared/InputElement';

type StoryProps = ComponentProps<typeof InputElement>;

const meta: Meta<StoryProps> = {
  title: 'shared/InputElement',
  component: InputElement,
  argTypes: {
    type: {
      options: ['text', 'password', 'email', 'number', 'tel', 'file', 'checkbox'],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Test input',
    withLabel: true,
    label: 'Test label',
  },
};
