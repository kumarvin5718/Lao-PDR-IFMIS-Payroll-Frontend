import Field from "../Field";
import "../../../style/Employee.css";
const PayrollFlags = ({ formData, handleChange, errors }: any) => {
  return (
    <>
      <Field label="Has Spouse" value={formData.hasSpouse} error={errors.hasSpouse}
        onChange={(e: any) => handleChange("hasSpouse", e.target.value)}>
        <select className="form-select form-select-sm">
          <option value="">Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </Field>

      <Field label="No. of Children" value={formData.noOfEligibleChildren} error={errors.noOfEligibleChildren}
        onChange={(e: any) => handleChange("noOfEligibleChildren", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>
    </>
  );
};

export default PayrollFlags;