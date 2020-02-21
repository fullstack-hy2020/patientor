import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Formik, Form } from 'formik';

import { TextField, SelectField, Option } from './FormField';
import { Gender, Patient } from '../types';

/*
 * use type Patient, but omit id and entries,
 * because those are irrelevant for new patient object.
 */
export type FormValues = Omit<Patient, 'id' | 'entries'>;

interface Props {
  onSubmit: (values: FormValues) => void;
  onCancel: () => void;
}

const genderOptions: Option<Gender>[] = [
  { value: Gender.Male, label: 'Male' },
  { value: Gender.Female, label: 'Female' },
  { value: Gender.Other, label: 'Other' },
];

export const AddPatientForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        ssn: '',
        dateOfBirth: '',
        occupation: '',
        gender: Gender.Other,
      }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {() => (
        <Form className="form ui">
          <TextField label="Name" name="name" placeholder="Name" />
          <TextField
            label="Social Security Number"
            name="ssn"
            placeholder="SSN"
            component={TextField}
          />
          <TextField
            label="Date Of Birth"
            name="dateOfBirth"
            placeholder="YYYY-MM-DD"
            component={TextField}
          />
          <TextField
            label="Occupation"
            name="occupation"
            placeholder="Occupation"
          />
          <SelectField<string>
            label="Gender"
            name="gender"
            defaultValue=""
            options={genderOptions}
          />
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
      )}
    </Formik>
  );
};

export default AddPatientForm;
