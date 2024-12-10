import axios from "axios";
import { Patient, PatientFormValues, PatientWEntries } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(
    `${apiBaseUrl}/patients`
  );

  return data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(
    `${apiBaseUrl}/patients`,
    object
  );

  return data;
};

const getById = async (id: string) => {
    const {data} = await axios.get<PatientWEntries>(
      `${apiBaseUrl}/patients/${id}`
    );
    return data;

};

export default {
  getAll, create, getById
};

