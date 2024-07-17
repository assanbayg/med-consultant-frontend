import SelectField from "../ui/SelectField";
import TextAreaField from "../ui/TextAreaField";
import ToggleDiv from "../ui/ToggleDiv";

const OperationDetails = ({ values, handleChange }) => (
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
      name="appointmentInstruction"
      id="appointmentInstruction"
      value={values.appointmentInstruction}
      onChange={handleChange}
      label="Appointment Instruction (Scheduling methods, average wait times, cancellation policies)"
    />
    <TextAreaField
      name="workflowDescription"
      id="workflowDescription"
      value={values.workflowDescription}
      onChange={handleChange}
      label="Workflow Processes (Patient intake, documentation, billing, follow-ups)"
    />
  </ToggleDiv>
);

export default OperationDetails;
