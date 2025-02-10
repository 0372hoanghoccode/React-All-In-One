import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Default Card',
    children: 'This is a default card content',
  },
};

export const WithButton: Story = {
  render: () => (
    <Card title="User Profile">
      <p>John Doe</p>
      <p>Software Engineer</p>
      <Button variant="primary">View Profile</Button>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Card variant="default" title="Default Card">
        Default content
      </Card>
      <Card variant="elevated" title="Elevated Card">
        Elevated content
      </Card>
      <Card variant="outlined" title="Outlined Card">
        Outlined content
      </Card>
    </div>
  ),
};