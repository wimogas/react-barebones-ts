import React from 'react';
import Input, {InputProps} from '../index';

export default {
    title: 'COMPONENTS/Input',
    component: Input,
    argTypes: {
        onChange: {type: {required: true}, control: 'Event'},
        disabled: {control: 'boolean'},
        name: {control: 'text'},
        label: {control: 'text'},
        error: {control: 'boolean'},
        type: {control: 'text'}
    }
};

const Template: React.FC<InputProps> = (args) => {

    const [value, setValue] = React.useState<string>('');

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
        <Input
            value={value}
            name={args.name}
            onChange={handleChangeValue}
            label={args.label}
            error={args.error}
            type={args.type}
            disabled={args.disabled}/>
    )
}


export const Simple = Template.bind({});
Simple.args = {
    value: '',
    name: 'email',
    error: false,
    onChange: () => {},
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    value: '',
    name: 'email',
    label: 'Email',
    error: false,
    type: 'email',
    onChange: () => {},
};

export const WithError = Template.bind({});
WithError.args = {
    value: '',
    name: 'email',
    label: 'Email',
    error: true,
    onChange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
    value: '',
    name: 'email',
    label: 'Change Field',
    error: false,
    disabled: true,
    onChange: () => {},
};

