import Field from "../Field";
import "../../../style/Employee.css";
const Organisation = ({ formData, handleChange, errors }: any) => {
  return (
    <>
      <Field label="Ministry" value={formData.ministry} error={errors.ministry}
        onChange={(e: any) => handleChange("ministry", e.target.value)}>
        <select className="form-select form-select-sm">
          <option value="">Select</option>
          <option>Ministry Of Finance</option>
          <option>Ministry Of Health</option>
        </select>
      </Field>

      <Field label="Department" value={formData.department} error={errors.department}
        onChange={(e: any) => handleChange("department", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>

      <Field label="Division" value={formData.division} error={errors.division}
        onChange={(e: any) => handleChange("division", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>
    </>
  );
};

export default Organisation;