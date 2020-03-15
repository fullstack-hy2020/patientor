import React from "react";
import { ErrorMessage, Field, FieldProps, FormikProps } from "formik";
import { Input, Form, Label, Segment, Button } from "semantic-ui-react";
import { Gender } from "../types";

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
};

export const SelectField: React.FC<SelectFieldProps> = ({
  name,
  label,
  options
}: SelectFieldProps) => (
  <Form.Field>
    <label>{label}</label>
    <Field as="select" name={name} className="ui dropdown">
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label || option.value}
        </option>
      ))}
    </Field>
  </Form.Field>
);

interface Props extends FieldProps {
  label: string;
  placeholder: string;
}

export const TextField: React.FC<Props> = ({ field, label, placeholder }) => (
  <Form.Field>
    <label htmlFor={field.name}>
      <label>{label}</label>
      <Field placeholder={placeholder} {...field} />
      <ErrorMessage name={field.name} />
    </label>
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
  setFieldValue: FormikProps<{ diagnosisCodes: string[] }>["setFieldValue"];
  errorMessage?: string;
}> = ({ selectedValues, label, placeholder, setFieldValue, errorMessage }) => {
  const [code, setCode] = React.useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCode(event.target.value);

  const onClick = () => {
    if (code.length > 0) {
      setFieldValue("diagnosisCodes", [...selectedValues, code]);
      setCode("");
    }
  };

  return (
    <Form.Field>
      <label>{label}</label>
      <Segment>
        <em>
          {selectedValues.length > 0 ? selectedValues.join(", ") : "None"}
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
