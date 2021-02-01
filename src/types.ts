export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = 'male',
  TransMale = 'transmale',
  Female = 'female',
  TransFemale = 'transfemale',
  GenderQueer = 'genderqueer',
  Other = 'other',
  Unknown = 'unknown',
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
}
