import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    error: 'Invalid email address',
    placeholder: 'Enter email',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Input variant="default" placeholder="Default" />
      <Input variant="outlined" placeholder="Outlined" />
      <Input variant="underlined" placeholder="Underlined" />
    </div>
  ),
};