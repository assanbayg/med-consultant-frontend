import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import TextAreaField from "../ui/TextAreaField";
import ToggleDiv from "../ui/ToggleDiv";

const GeneralInformation = ({ values, handleChange }) => (
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
    <label htmlFor="physiciansNumber" className="mb-1 block text-left">
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
    <label htmlFor="patientsNumber" className="mb-1 block text-left">
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
);

export default GeneralInformation;
