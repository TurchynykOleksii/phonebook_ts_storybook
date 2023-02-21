import React from 'react';
import { Button } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import './Button.module.css';

export default {
  title: 'Phonebook/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const ButtonSubmit = Template.bind({});

ButtonSubmit.args = {
  label: 'add contact',
  size: 'small',
};
