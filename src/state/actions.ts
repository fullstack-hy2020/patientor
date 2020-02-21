import { Patient } from "../types";

export type ReducerAction =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    };

type Dispatch = (action: ReducerAction) => void;

// Create some action creators, so we don't need to use reducer action types elsewhere
const setPatientList = (dispatch: Dispatch, payload: Patient[]) => {
  dispatch({ type: "SET_PATIENT_LIST", payload });
};

const addPatient = (dispatch: Dispatch, payload: Patient) => {
  dispatch({ type: "ADD_PATIENT", payload });
};

export { setPatientList, addPatient };
