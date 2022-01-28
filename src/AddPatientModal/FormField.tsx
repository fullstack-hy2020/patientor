import React from "react";
import { ErrorMessage, Field, FieldProps, FormikProps } from "formik";
import {
  Select,
  FormControl,
  MenuItem,
  TextField as TextFieldMUI,
  Typography,
} from "@material-ui/core";
import { Diagnosis, Gender } from "../types";
import { InputLabel } from "@material-ui/core";

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

export const SelectField = ({ name, label, options }: SelectFieldProps) => (
  <>
    <InputLabel>{label}</InputLabel>
    <Field
      fullWidth
      style={{ marginBottom: "0.5em" }}
      label={"test"}
      component={Select}
      name={name}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label || option.value}
        </MenuItem>
      ))}
    </Field>
  </>
);

interface TextProps extends FieldProps {
  label: string;
  placeholder: string;
}

export const TextField = ({ field, label, placeholder }: TextProps) => (
  <div style={{ marginBottom: "1em" }}>
    <TextFieldMUI
      fullWidth
      label={label}
      placeholder={placeholder}
      {...field}
    />
    <Typography variant="subtitle2" style={{ color: "red" }}>
      <ErrorMessage name={field.name} />
    </Typography>
  </div>
);

/*
  for exercises 9.24.-
*/
interface NumberProps extends FieldProps {
  label: string;
  errorMessage?: string;
  min: number;
  max: number;
}

export const NumberField = ({ field, label, min, max }: NumberProps) => (
  <FormControl>
    <label>{label}</label>
    <Field {...field} type="number" min={min} max={max} />

    <div style={{ color: "red" }}>
      <ErrorMessage name={field.name} />
    </div>
  </FormControl>
);

export const DiagnosisSelection = ({
  diagnoses,
  setFieldValue,
  setFieldTouched,
}: {
  diagnoses: Diagnosis[];
  setFieldValue: FormikProps<{ diagnosisCodes: string[] }>["setFieldValue"];
  setFieldTouched: FormikProps<{ diagnosisCodes: string[] }>["setFieldTouched"];
}) => {
  const field = "diagnosisCodes";
  const onChange = (data: string) => {
    setFieldTouched(field, true);
    setFieldValue(field, data);
  };

  const stateOptions = diagnoses.map((diagnosis) => ({
    key: diagnosis.code,
    text: `${diagnosis.name} (${diagnosis.code})`,
    value: diagnosis.code,
  }));

  return (
    <FormControl>
      <InputLabel>Diagnoses</InputLabel>
      <Select multiple onChange={(e) => onChange(e.target.value as string)}>
        {stateOptions.map((option) => (
          <MenuItem key={option.key} value={option.value}>
            {option.text}
          </MenuItem>
        ))}
      </Select>
      <ErrorMessage name={field} />
    </FormControl>
  );
};
