import Field from "../Field";
import "../../../style/Employee.css";
const Identity = ({ formData, handleChange, errors }: any) => {
  return (
    <>
      <Field label="Civil ID" value={formData.civilId} error={errors.civilId}
        onChange={(e: any) => handleChange("civilId", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>

      <Field label="Social Security No" value={formData.ssn} error={errors.ssn}
        onChange={(e: any) => handleChange("ssn", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>
    </>
  );
};

export default Identity;