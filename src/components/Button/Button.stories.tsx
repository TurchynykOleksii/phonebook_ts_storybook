import React from 'react';
import { Button } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import './Button.module.css';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const ButtonSubmit = Template.bind({});
export const ButtonSubmitBig = Template.bind({});

ButtonSubmit.args = {
  children: 'add contact',
};

ButtonSubmitBig.args = {
  children: 'press me',
};
