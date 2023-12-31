import { Patient } from "./../../types";
import { useMatch } from "react-router-dom";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import { Gender } from "./../../types";
import { useState, useEffect } from "react";
import patientService from "./../../services/patients";

const PatientInformationPage = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatientList = async () => {
      const patients = await patientService.getAllSensitive();
      setPatients(patients);
    };
    void fetchPatientList();
  }, []);

  const match = useMatch("/patients/:id");

  const patient = match
    ? patients.find(patient => patient.id === match.params.id)
    : null;

  if (patient) {
    return (
      <div>
        <h1>
          {patient.name}
          {patient.gender === Gender.Male && <MaleIcon fontSize="large" />}
          {patient.gender === Gender.Female && <FemaleIcon fontSize="large" />}
        </h1>
        <div>ssn: {patient.ssn}</div>
        <div>occupation: {patient.occupation}</div>
      </div>
    );
  }
};

export default PatientInformationPage;
