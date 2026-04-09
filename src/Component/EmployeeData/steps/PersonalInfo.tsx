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
          <option value="MR">Mr</option>
          <option value="MS">Ms</option>
          <option value="MRS">Mrs</option>
          <option value="DR">Dr</option>
          <option value="PROF">Prof</option>
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
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
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
        label="Date of Birth"
        value={formData.dateOfBirth}
        error={errors.dateOfBirth}
        onChange={(e: any) => handleChange("dateOfBirth", e.target.value)}
      >
        <input type="date" className="form-control form-control-sm" />
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
        value={formData.mobileNumber}
        error={errors.mobileNumber}
        onChange={(e: any) => handleChange("mobileNumber", e.target.value)}
      >
        <input className="form-control form-control-sm" />
      </Field>

      <Field
        label="Date of Joining"
        value={formData.dateOfJoining}
        error={errors.dateOfJoining}
        onChange={(e: any) => handleChange("dateOfJoining", e.target.value)}
      >
        <input type="date" className="form-control form-control-sm" />
      </Field>
    </>
  );
};

export default PersonalInfo;