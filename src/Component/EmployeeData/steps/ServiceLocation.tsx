import Field from "../Field";
import "../../../style/Employee.css";
const ServiceLocation = ({ formData, handleChange, errors }: any) => {
  return (
    <>
      <Field label="Country" value={formData.serviceCountry} error={errors.serviceCountry}
        onChange={(e: any) => handleChange("serviceCountry", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>

      <Field label="Province" value={formData.serviceProvince} error={errors.serviceProvince}
        onChange={(e: any) => handleChange("serviceProvince", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>

      <Field label="District" value={formData.serviceDistrict} error={errors.serviceDistrict}
        onChange={(e: any) => handleChange("serviceDistrict", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>
    </>
  );
};

export default ServiceLocation;