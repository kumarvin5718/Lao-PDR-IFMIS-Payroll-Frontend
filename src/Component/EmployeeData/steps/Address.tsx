import Field from "../Field";
import "../../../style/Employee.css";
const Address = ({ formData, handleChange, errors }: any) => {
  return (
    <>
      <Field label="House No" value={formData.houseNo} error={errors.houseNo}
        onChange={(e: any) => handleChange("houseNo", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>

      <Field label="Street" value={formData.street} error={errors.street}
        onChange={(e: any) => handleChange("street", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>

      <Field label="Area" value={formData.area} error={errors.area}
        onChange={(e: any) => handleChange("area", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>

      <Field label="Province" value={formData.provinceOfResidence} error={errors.provinceOfResidence}
        onChange={(e: any) => handleChange("provinceOfResidence", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>

      <Field label="PIN Code" value={formData.pinCode} error={errors.pinCode}
        onChange={(e: any) => handleChange("pinCode", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>

      <Field label="Country" value={formData.country} error={errors.country}
        onChange={(e: any) => handleChange("country", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>
    </>
  );
};

export default Address;