import CheckBoxList from "../ui/CheckBoxList";
import TextAreaField from "../ui/TextAreaField";
import ToggleDiv from "../ui/ToggleDiv";

const HealthcareServices = ({ values, handleChange, diagnosticsOptions }) => (
  <ToggleDiv title="Healthcare Services">
    <TextAreaField
      name="specialities"
      id="specialities"
      value={values.specialities}
      onChange={handleChange}
      label="Specialities Offered"
    />
    <CheckBoxList
      options={diagnosticsOptions}
      values={values}
      onChange={handleChange}
    />
  </ToggleDiv>
);

export default HealthcareServices;
