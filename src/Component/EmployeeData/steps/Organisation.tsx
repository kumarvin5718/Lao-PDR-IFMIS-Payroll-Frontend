import Field from "../Field";
import { useDepartment } from "../../../hooks/EmployeeData/useDepartment";
import { useMinistry } from "../../../hooks/EmployeeData/userMinistry";
import "../../../style/Employee.css";
const Organisation = ({ formData, handleChange, errors }: any) => {
  const { data: ministries, isLoading: ministryLoading, isError: ministryError, refetch: refetchMinistries } = useMinistry(false);
  const { data: departments, isLoading: departmentLoading, isError: departmentError, refetch: refetchDepartments } = useDepartment(false);

  const handleMinistryClick = () => {
    if ((!ministries || ministries.length === 0) && !ministryLoading) {
      refetchMinistries();
    }
    if (ministryError) {
      refetchMinistries();
    }
  };

  const handleDepartmentClick = () => {
    if ((!departments || departments.length === 0) && !departmentLoading) {
      refetchDepartments();
    }
    if (departmentError) {
      refetchDepartments();
    }
  };

  const renderMinistryOptions = () => {
    if (ministryLoading) {
      return <option value="">Loading...</option>;
    }

    if (ministryError) {
      return <option value="">Failed to load</option>;
    }

    if (!Array.isArray(ministries) || ministries.length === 0) {
      return null;
    }

    return ministries.map((item: any) => (
      <option key={item.ministryKey ?? item.id ?? item.name} value={item.ministryKey ?? item.id ?? item.name}>
        {item.name ?? item.label ?? item.ministryKey}
      </option>
    ));
  };

  const renderDepartmentOptions = () => {
    if (departmentLoading) {
      return <option value="">Loading...</option>;
    }

    if (departmentError) {
      return <option value="">Failed to load</option>;
    }

    if (!Array.isArray(departments) || departments.length === 0) {
      return null;
    }

    return departments.map((item: any) => (
      <option key={item.departmentKey ?? item.id ?? item.name} value={item.departmentKey ?? item.id ?? item.name}>
        {item.name ?? item.label ?? item.departmentKey}
      </option>
    ));
  };

  return (
    <>
      <Field label="Ministry" value={formData.ministry} error={errors.ministry}
        onChange={(e: any) => handleChange("ministry", e.target.value)}>
        <select className="form-select form-select-sm" onClick={handleMinistryClick} disabled={ministryLoading}>
          <option value="">Select</option>
          {renderMinistryOptions()}
        </select>
      </Field>

      <Field label="Department" value={formData.department} error={errors.department}
        onChange={(e: any) => handleChange("department", e.target.value)}>
        <select className="form-select form-select-sm" onClick={handleDepartmentClick} disabled={departmentLoading}>
          <option value="">Select</option>
          {renderDepartmentOptions()}
        </select>
      </Field>

      <Field label="Division" value={formData.division} error={errors.division}
        onChange={(e: any) => handleChange("division", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>
    </>
  );
};

export default Organisation;