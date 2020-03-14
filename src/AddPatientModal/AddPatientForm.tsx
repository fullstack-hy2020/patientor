import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Formik, Form } from "formik";

import { TextField, SelectField, GenderOption } from "./FormField";
import { Gender, Patient } from "../types";

/*
 * use type Patient, but omit id and entries,
 * because those are irrelevant for new patient object.
 */
export type FormValues = Omit<Patient, "id" | "entries">;

interface Props {
  onSubmit: (values: FormValues) => void;
  onCancel: () => void;
}

const genderOptions: GenderOption[] = [
  { value: Gender.Male, label: "Male" },
  { value: Gender.Female, label: "Female" },
  { value: Gender.Other, label: "Other" }
];

export const AddPatientForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        ssn: "",
        dateOfBirth: "",
        occupation: "",
        gender: Gender.Other
      }}
      onSubmit={onSubmit}
      validate={values => {
        const requiredError = "Field is required";
        const errors: { [field: string]: string } = {};
        if (!values.name) {
          errors.name = requiredError;
        }
        if (!values.ssn) {
          errors.ssn = requiredError;
        }
        if (!values.dateOfBirth) {
          errors.dateOfBirth = requiredError;
        }
        if (!values.occupation) {
          errors.occupation = requiredError;
        }
        return errors;
      }}
    >
      {({ errors, touched }) => {
        /**
         * Check if the given field contains an error and return it in that case.
         * also require field to have been touched,
         * so that no all fields won't display errors by default.
         * If no error, return undefined (return type is inferred)
         */
        const getFieldErrorMessage = (fieldName: keyof FormValues) =>
          touched[fieldName] && errors[fieldName]
            ? errors[fieldName]
            : undefined;
        return (
          <Form className="form ui">
            <TextField
              label="Name"
              name="name"
              placeholder="Name"
              errorMessage={getFieldErrorMessage("name")}
            />
            <TextField
              label="Social Security Number"
              name="ssn"
              placeholder="SSN"
              errorMessage={getFieldErrorMessage("ssn")}
            />
            <TextField
              label="Date Of Birth"
              name="dateOfBirth"
              placeholder="YYYY-MM-DD"
              errorMessage={getFieldErrorMessage("dateOfBirth")}
            />
            <TextField
              label="Occupation"
              name="occupation"
              placeholder="Occupation"
              errorMessage={getFieldErrorMessage("occupation")}
            />
            <SelectField label="Gender" name="gender" options={genderOptions} />
            <Grid>
              <Grid.Column floated="left" width={5}>
                <Button type="button" onClick={onCancel} color="red">
                  Cancel
                </Button>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Button type="submit" floated="right" color="green">
                  Add
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddPatientForm;
