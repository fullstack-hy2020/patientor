import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import {PatientWEntries } from "../../types";
import patientService from "../../services/patients";


const ViewPatientPage = () => {
    const [patient, setPatient] = useState<PatientWEntries>();
    const id = useRef({
      id: useParams().id as string
    });

    useEffect(() => {        
        const fetchPatient = async () => {
            try{
                const patientToView = await patientService.getById(id.current.id);
                setPatient(patientToView);
            } catch (e: unknown) {
                if (axios.isAxiosError(e)) {
                  if (e?.response?.data && typeof e?.response?.data === "string") {
                    const message = e.response.data.replace('Something went wrong. Error: ', '');
                    console.error(message);
                  } else {
                    console.error("Unrecognized axios error");
                  }
                } else {
                  console.error("Unknown error", e);
                }
              }
        };
        void fetchPatient();
    },[]);
    return (
        <div>
            <h2>{patient?.name}</h2>
            <p>{patient?.ssn}</p>
            <p>{patient?.occupation}</p>
            <p>{patient?.dateOfBirth}</p>
            <p>{patient?.gender}</p>
        </div>
    );
};

export default ViewPatientPage;