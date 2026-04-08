import Field from "../Field";
import "../../../style/Employee.css";
const PayrollFlags = ({ formData, handleChange, errors }: any) => {
  return (
    <>
      <Field label="Has Spouse" value={formData.spouse} error={errors.spouse}
        onChange={(e: any) => handleChange("spouse", e.target.value)}>
        <select className="form-select form-select-sm">
          <option value="">Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </Field>

      <Field label="No. of Children" value={formData.children} error={errors.children}
        onChange={(e: any) => handleChange("children", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>
    </>
  );
};

export default PayrollFlags;