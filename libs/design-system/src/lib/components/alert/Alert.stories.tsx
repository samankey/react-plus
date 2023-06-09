import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const Story: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export default Story;
type Story = StoryObj<typeof Story>;

export const Primary: Story = {
  args: {
    title: '타이틀이 들어갑니다.',
    content:
      '워딩영역워딩역영워딩영역워딩역영워딩영역워딩역영워딩영역워딩역영워딩영역워딩역영워딩',
    confirm: '확인/수락',
    cancel: '닫기/취소',
  },
};
