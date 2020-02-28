import React from 'react';
import { Field, FieldProps } from 'formik';
import { Input, InputProps, Form } from 'semantic-ui-react';
import { Gender } from '../types';

// structure of a single option (generic - type of value is inferred from T)
export type Option<T extends string> = {
  value: T;
  label: string;
};

// props for select field component
interface SelectFieldProps<T extends string> {
  name: string;
  label: string;
  options: Option<T>[]; // array of option generic type
  defaultValue?: T;
}

export const SelectField: React.FC<SelectFieldProps<Gender>> = ({
  name,
  label,
  options,
  defaultValue,
}: SelectFieldProps<Gender>) => (
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

export const TextField: React.FC<InputProps & { label?: string }> = ({
  name,
  label,
  placeholder,
}) => (
  <Form.Field>
    <label>{label}</label>
    <Field name={name} placeholder={placeholder} component={TextInput} />
  </Form.Field>
);
