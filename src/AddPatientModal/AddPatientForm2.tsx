import { PatientFormValues } from "../types";

interface Props {
  modalOpen?: boolean;
  onCancel: () => void;
  onSubmit: (values: PatientFormValues) => void;
  error?: string;
}

const AddPatientForm = ({ modalOpen, onCancel, onSubmit, error }: Props) => {
  console.log(modalOpen, onCancel, onSubmit, error);
  return (
    <div>
      xxx
    </div>
  );
};

export default AddPatientForm;
