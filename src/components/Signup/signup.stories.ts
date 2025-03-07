import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SignupModal from './signupModal'; // Adjust the import path as necessary

const meta: Meta<typeof SignupModal> = {
  title: 'Modals/SignupModal',
  component: SignupModal,
  tags: ['autodocs'],
// parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj<typeof SignupModal>;


export const Default: Story = {

  args: {
    onLogin: (username, password) => {
      alert(`Logged in with:\nUsername: ${username}\nPassword: ${password}`);
    },
    onGuestLogin: () => {
      alert('Continuing as Guest');
    },
  },
};