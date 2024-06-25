import useForm from "../hooks/useForm";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import TextAreaField from "../components/TextAreaField";
import ToggleDiv from "../components/ToggleDiv";
import CheckBoxList from "../components/CheckBoxList";

export default function ProfilePage() {
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
    diagnostics: {
      inHouseLab: false,
      imaging: false,
      surgicalProcedures: false,
    },
  });

  function submitForm() {
    console.log("Submit");
    alert("Forms Data: " + JSON.stringify(values, null, 2));
    console.log(values);
  }

  const diagnosticsOptions = {
    "diagnostics.inHouseLab": "In-house Lab Services",
    "diagnostics.imaging": "Imaging",
    "diagnostics.surgicalProcedures": "Surgical Procedures",
  };

  return (
    <>
      <p className="text-4xl font-medium mb-4">Information about the clinic</p>
      <form onSubmit={submitForm}>
        <ToggleDiv title="General Information">
          <InputField
            name="clinicName"
            id="clinicName"
            type="text"
            value={values.clinicName}
            onChange={handleChange}
            placeholder="Clinic Name"
            required
          />
          <InputField
            name="address"
            id="address"
            type="text"
            value={values.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
          <label htmlFor="physiciansNumber" className="block mb-1 text-left">
            Physicians number
          </label>
          <InputField
            name="physiciansNumber"
            id="physiciansNumber"
            type="number"
            value={values.physiciansNumber}
            onChange={handleChange}
            placeholder="Physicians number"
            required
          />
          <label htmlFor="patientsNumber" className="block mb-1 text-left">
            Patients number
          </label>
          <InputField
            name="patientsNumber"
            id="patientsNumber"
            type="number"
            value={values.patientsNumber}
            onChange={handleChange}
            placeholder="Patients number per month"
            required
          />
          <TextAreaField
            name="description"
            id="description"
            value={values.description}
            onChange={handleChange}
            required
            label="Please describe what type of clinic you are (type, focus, and etc.)"
          />
          <SelectField
            name="affiliation"
            id="affiliation"
            value={values.affiliation}
            onChange={handleChange}
            required
            options={["Public", "Private"]}
            label="Affiliation"
          />
        </ToggleDiv>
        <ToggleDiv title="Operation Details">
          <SelectField
            name="daysOfOperation"
            id="daysOfOperation"
            value={values.daysOfOperation}
            onChange={handleChange}
            required
            options={["Monday - Friday", "24/7"]}
            label="Days of Operation"
          />
          <TextAreaField
            name="appointmentManagement"
            id="appointmentManagement"
            value={values.appointmentManagement}
            onChange={handleChange}
            label="Appointment Management (Scheduling methods, average wait times, cancellation policies)"
          />
          <TextAreaField
            name="workflowProcesses"
            id="workflowProcesses"
            value={values.workflowProcesses}
            onChange={handleChange}
            label="Workflow Processes (Patient intake, documentation, billing, follow-ups)"
          />
        </ToggleDiv>
        <ToggleDiv title="Healthcare Services">
          <TextAreaField
            name="specialties"
            id="specialties"
            value={values.specialties}
            onChange={handleChange}
            label="Specialties Offered"
          />
          <CheckBoxList
            options={diagnosticsOptions}
            values={values.diagnostics}
            onChange={handleChange}
          />
        </ToggleDiv>
        <button type="submit" className="w-full primary-btn mt-4">
          Save information
        </button>
      </form>
    </>
  );
}
