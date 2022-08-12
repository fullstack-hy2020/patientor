import React from "react";
import axios from "axios";
import { Patient } from "../types";
// import { apiBaseUrl } from "../constants";
import { useStateValue } from "../state";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../constants";
import { displayOnePatient } from "../state";

const PatientSingleView = () => {
  const [{ patient }, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    const fetchPatient = async () => {
      try {
        if(!id){
          console.error("there was a mistake");
        } else {
          const { data: displayPatient } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch(displayOnePatient(displayPatient));
        }
        
      } catch (e) {
        console.error(e);
      }
    };
    void fetchPatient();
  }, [dispatch]);

    return (
        <>
        {
          Array.isArray(patient) &&
          patient.map((p:Patient) =>(
            <div key={p.id}>
              <h3>{p.name}</h3>
              <p>occupation: {p.occupation}</p>
              <p>ssn: {p.ssn}</p>
              <p>gender: {p.gender}</p>
            </div>
          ))
        }
        
        
        </>
    );
};

export default PatientSingleView;
