import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import FormGroup from './FormGroup';
import Label from './Label';
import Input from './Input';
import Box from '../layout/Box';

const story = {
  title: 'Input',
  component: Input,
  argTypes: {
    onFocus: { action: 'focussed' },
    onBlur: { action: 'blurred' },
    onChange: { action: 'changed' },
  },
};
export default story;

const Template: Story = ({ label, ...args }) => {
  return (
    <FormGroup>
      <Label htmlFor={args.id}>{label}</Label>
      <Input {...args} />
    </FormGroup>
  );
};

export const TextInput = Template.bind({});
TextInput.args = {
  label: 'Text',
  id: 'text-input',
  type: 'text',
  placeholder: 'some text',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  label: 'Number',
  id: 'number-input',
  type: 'number',
  placeholder: '100',
};

export const RangeInput = Template.bind({});
RangeInput.args = {
  label: 'Range',
  id: 'range-input',
  type: 'range',
  placeholder: '0 - 100',
};
