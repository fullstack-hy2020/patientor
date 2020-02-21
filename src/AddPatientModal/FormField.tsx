import React from 'react';
import { Field, FieldProps } from 'formik';
import { Input, InputProps, Form } from 'semantic-ui-react';

// Describe what types of options are allowed
type OptionValue = string | number;

// structure of a single option (generic - type of value is inferred from T)
export type Option<T extends OptionValue> = {
  value: T;
  label?: string;
};

// props for select field component
interface SelectFieldProps<T extends OptionValue> {
  name: string;
  label?: string;
  options: Option<T>[]; // array of option generic type
  defaultValue?: T;
}

export const SelectField = <T extends OptionValue>({
  name,
  label,
  options,
  defaultValue,
}: SelectFieldProps<T>) => (
  <Form.Field>
    {label && <label>{label}</label>}
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
    {label && <label>{label}</label>}
    <Field name={name} placeholder={placeholder} component={TextInput} />
  </Form.Field>
);
