import React from 'react';
import { Field, FieldProps, FormikProps } from 'formik';
import { Input, InputProps, Form, Label, Segment, Button } from 'semantic-ui-react';
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
};

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

/*
  for exercises 9.24.-
*/
export const ArrayField: React.FC<{
  label: string;
  placeholder: string;
  selectedValues: string[];
  /** you can use FormikProps<FormValues>['setFieldValue']; when FormValues contains diagnosisCodes */
  setFieldValue: FormikProps<{ diagnosisCodes: string[] }>['setFieldValue'];
  errorMessage?: string;
}> = ({ selectedValues, label, placeholder, setFieldValue, errorMessage }) => {
  const [code, setCode] = React.useState('M24.2');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCode(event.target.value);

  const onClick = () => {
    if (code.length > 0) {
      setFieldValue('diagnosisCodes', [...selectedValues, code]);
      setCode('');
    }
  };

  return (
    <Form.Field>
      <label>{label}</label>
      <Segment>
        <em>
          {selectedValues.length > 0 ? selectedValues.join(', ') : 'None'}
        </em>
      </Segment>
      <Input value={code} onChange={onChange} placeholder={placeholder} />
      <Button type="button" onClick={onClick}>
        add
      </Button>
      {errorMessage && <Label color="red">{errorMessage}</Label>}
    </Form.Field>
  );
};
