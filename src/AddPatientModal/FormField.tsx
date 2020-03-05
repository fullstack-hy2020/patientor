import React from 'react';
import { Field, FieldProps } from 'formik';
import { Input, InputProps, Form, Label } from 'semantic-ui-react';
import { Gender } from '../types';

// structure of a single option
export type GenderOption = {
  value: Gender;
  label: string;
};

// props for select field component
type SelectFieldProps = {
  name: string;
  label: string;
  options: GenderOption[];
  defaultValue?: Gender;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  name,
  label,
  options,
  defaultValue,
}: SelectFieldProps) => (
  <Form.Field>
    <label>{label}</label>
    <Field as="select" name={name} className="ui dropdown">
      {!defaultValue && <option value={defaultValue}>{defaultValue}</option>}
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label || option.value}
        </option>
      ))}
    </Field>
  </Form.Field>
);

const TextInput: React.FC<FieldProps & InputProps> = ({
  placeholder,
  field,
}) => <Input placeholder={placeholder} {...field} />;

export const TextField: React.FC<InputProps & {
  label: string;
  errorMessage?: string;
}> = ({ name, label, placeholder, errorMessage }) => (
  <Form.Field>
    <label>{label}</label>
    <Field name={name} placeholder={placeholder} component={TextInput} />
    {errorMessage && <Label color="red">{errorMessage}</Label>}
  </Form.Field>
);
