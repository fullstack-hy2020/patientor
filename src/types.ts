export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface Entry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnoseCodes?: Array<Diagnose["code"]>;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "DiagnosedCondition" = 3
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Patient {
  id: string;
  name: string;
  ssn: string;
  dateOfBirth: string;
  occupation: string;
  gender: Gender;
  entries: Entry[];
}
