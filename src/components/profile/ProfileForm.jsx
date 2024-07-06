import useForm from "../../hooks/useForm";
import GeneralInformation from "./GeneralInformation";
import OperationDetails from "./OperationDetails";
import HealthcareServices from "./HealthcareServices";
import ToggleDiv from "../ui/ToggleDiv";

export default function ProfileForm() {
  const { values, handleChange } = useForm({
    clinicName: "",
    description: "",
    address: "",
    physiciansNumber: 0,
    patientsNumber: 0,
    affiliation: "",
    daysOfOperation: "",
    appointmentManagement: "",
    workflowProcesses: "",
    specialties: "",
    inHouseLab: false,
    imaging: false,
    surgicalProcedures: false,
  });

  function submitForm() {
    console.log("Submit");
    alert("Forms Data: " + JSON.stringify(values, null, 2));
    console.log(values);
  }

  const diagnosticsOptions = {
    inHouseLab: "In-house Lab Services",
    imaging: "Imaging",
    surgicalProcedures: "Surgical Procedures",
  };

  return (
    <ToggleDiv title="Information about the Clinic" isTitle="true">
      <form onSubmit={submitForm}>
        <GeneralInformation values={values} handleChange={handleChange} />
        <OperationDetails values={values} handleChange={handleChange} />
        <HealthcareServices
          values={values}
          handleChange={handleChange}
          diagnosticsOptions={diagnosticsOptions}
        />
        <button type="submit" className="primary-btn mt-4 w-full">
          Save information
        </button>
      </form>
    </ToggleDiv>
  );
}
