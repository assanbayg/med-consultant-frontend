import GeneralInformation from "./GeneralInformation";
import HealthcareServices from "./HealthcareServices";
import OperationDetails from "./OperationDetails";
import { useEffect } from "react";

import useForm from "../../hooks/useForm";
import useOrganization from "../../hooks/useOrganization";

import ToggleDiv from "../ui/ToggleDiv";

export default function ProfileForm() {
  const {
    organization,
    uploadOrganization,
    getOrganizationById,
    loading,
    error,
  } = useOrganization();
  const { values, handleChange, setValues } = useForm({
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

  useEffect(() => {
    getOrganizationById();
  }, []);

  useEffect(() => {
    if (organization) {
      setValues({
        orgName: organization.orgName || "",
        description: organization.description || "",
        location: organization.location || "",
        staffNumber: organization.staffNumber || 0,
        patientsNumber: organization.patientsNumber || 0,
        affiliation: organization.affiliation || "",
        daysOfOperation: organization.daysOfOperation || "",
        appointmentInstruction: organization.appointmentInstruction || "",
        workflowDescription: organization.workflowDescription || "",
        specialities: organization.specialities || "",
      });
    }
  }, [organization, setValues]);

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
    </ToggleDiv>
  );
}
