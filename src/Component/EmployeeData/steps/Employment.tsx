import Field from "../Field";
import "../../../style/Employee.css";
const Employment = ({ formData, handleChange, errors }: any) => {
  return (
    <>
      <Field label="Employment Type" value={formData.employmentType} error={errors.employmentType}
        onChange={(e: any) => handleChange("employmentType", e.target.value)}>
        <select className="form-select form-select-sm">
          <option value="">Select</option>
          <option>Permanent</option>
          <option>Probationary</option>
          <option>Contract</option>
          <option>Intern</option>
        </select>
      </Field>

      <Field label="Designation" value={formData.designation} error={errors.designation}
        onChange={(e: any) => handleChange("designation", e.target.value)}>
        <select className="form-select form-select-sm">
          <option value="">Select</option>
          <option>Teacher</option>
          <option>Officer</option>
        </select>
      </Field>
    </>
  );
};

export default Employment;