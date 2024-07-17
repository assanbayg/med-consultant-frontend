import GeneralInformation from "./GeneralInformation";
import HealthcareServices from "./HealthcareServices";
import OperationDetails from "./OperationDetails";

import useForm from "../../hooks/useForm";
import useOrganization from "../../hooks/useOrganization";

import ToggleDiv from "../ui/ToggleDiv";

export default function ProfileForm() {
  const { organization, uploadOrganization, loading, error } =
    useOrganization();
  const { values, handleChange } = useForm({
    orgName: "",
    description: "",
    location: "",
    staffNumber: 0,
    patientsNumber: 0,
    affiliation: "",
    daysOfOperation: "",
    appointmentInstruction: "",
    workflowDescription: "",
    specialities: "",
  });

  const saveChanges = async (e) => {
    e.preventDefault();
    const id = await uploadOrganization(values);
    if (id) {
      alert("Uploaded organization with ID:", id);
    }
  };

  const diagnosticsOptions = {
    inHouseLab: "In-house Lab Services",
    imaging: "Imaging",
    surgicalProcedures: "Surgical Procedures",
  };

  return (
    <ToggleDiv title="Information about the Clinic" isTitle="true">
      <form onSubmit={saveChanges}>
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
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {organization && (
        <div>
          <h2>Organization Details</h2>
          <pre>{JSON.stringify(organization, null, 2)}</pre>
        </div>
      )}
    </ToggleDiv>
  );
}
