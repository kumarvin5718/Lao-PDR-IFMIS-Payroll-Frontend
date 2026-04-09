import Field from "../Field";
import "../../../style/Employee.css";
const Identity = ({ formData, handleChange, errors }: any) => {
  return (
    <>
      <Field label="Civil ID" value={formData.civilServiceCardId} error={errors.civilServiceCardId}
        onChange={(e: any) => handleChange("civilServiceCardId", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>

      <Field label="Social Security No" value={formData.socialSecurityNumber} error={errors.socialSecurityNumber}
        onChange={(e: any) => handleChange("socialSecurityNumber", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>
    </>
  );
};

export default Identity;