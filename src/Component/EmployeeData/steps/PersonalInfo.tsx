import Field from "../Field";
import "../../../style/Employee.css";

const PersonalInfo = ({ formData, handleChange, errors }: any) => {
  return (
    <>
      <Field
        label="Employee Code"
        value={formData.employeeCode}
        error={errors.employeeCode}
        onChange={(e: any) => handleChange("employeeCode", e.target.value)}
      >
        <input className="form-control form-control-sm" />
      </Field>

      <Field
        label="Title"
        value={formData.title}
        error={errors.title}
        onChange={(e: any) => handleChange("title", e.target.value)}
      >
        <select className="form-select form-select-sm">
          <option value="">Select</option>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
        </select>
      </Field>

      <Field
        label="Gender"
        value={formData.gender}
        error={errors.gender}
        onChange={(e: any) => handleChange("gender", e.target.value)}
      >
        <select className="form-select form-select-sm">
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </Field>

      <Field
        label="First Name"
        value={formData.firstName}
        error={errors.firstName}
        onChange={(e: any) => handleChange("firstName", e.target.value)}
      >
        <input className="form-control form-control-sm" />
      </Field>

      <Field
        label="Last Name"
        value={formData.lastName}
        error={errors.lastName}
        onChange={(e: any) => handleChange("lastName", e.target.value)}
      >
        <input className="form-control form-control-sm" />
      </Field>

      <Field
        label="Email"
        value={formData.email}
        error={errors.email}
        onChange={(e: any) => handleChange("email", e.target.value)}
      >
        <input type="email" className="form-control form-control-sm" />
      </Field>

      <Field
        label="Mobile No"
        value={formData.mobile}
        error={errors.mobile}
        onChange={(e: any) => handleChange("mobile", e.target.value)}
      >
        <input className="form-control form-control-sm" />
      </Field>

      <Field
        label="Date of Joining"
        value={formData.doj}
        error={errors.doj}
        onChange={(e: any) => handleChange("doj", e.target.value)}
      >
        <input type="date" className="form-control form-control-sm" />
      </Field>
    </>
  );
};

export default PersonalInfo;