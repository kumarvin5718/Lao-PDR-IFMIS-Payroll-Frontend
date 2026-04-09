import Field from "../Field";
import { useEffect } from "react";
import { useEmployeeType } from "../../../hooks/EmployeeData/useEmployeeType";
import "../../../style/Employee.css";
import { useEducationLevel } from "../../../hooks/EmployeeData/userEducationLevel";

const Employment = ({ formData, handleChange, errors }: any) => {
  const { data: employmentTypes, isLoading, isError, refetch } = useEmployeeType(true);
  const { data: educationLevels, isLoading: educationLoading, isError: educationError } = useEducationLevel(true);
  // Auto fetch on mount if needed
  useEffect(() => {
    if (isError) {
      refetch();
    }
  }, [isError, refetch]);

  const renderEmploymentOptions = () => {
    if (isLoading) {
      return <option value="">Loading...</option>;
    }

    if (isError) {
      return <option value="">Failed to load</option>;
    }

    if (!Array.isArray(employmentTypes) || employmentTypes.length === 0) {
      return <option value="">No data available</option>;
    }

    return employmentTypes.map((item: any, index: number) => {
      const value =
        typeof item === "string"
          ? item
          : item.code ?? item.id ?? item.name ?? item.label ?? String(index);

      const label =
        typeof item === "string"
          ? item
          : item.name ?? item.label ?? item.code ?? String(item);

      return (
        <option key={`${value}-${index}`} value={value}>
          {label}
        </option>
      );
    });
  };

  return (
    <>
      <Field
        label="Employment Type"
        value={formData.employmentType}
        error={errors.employmentType}
        onChange={(e: any) => handleChange("employmentType", e.target.value)}
      >
        <select
          className="form-select form-select-sm"
          value={formData.employmentType || ""}
          onChange={(e) => handleChange("employmentType", e.target.value)}
          disabled={isLoading}
        >
          <option value="">Select</option>
          {renderEmploymentOptions()}
        </select>
      </Field>

      <Field
        label="Position"
        value={formData.position}
        error={errors.position}
        onChange={(e: any) => handleChange("position", e.target.value)}
      >
        <input
          className="form-control form-control-sm"
          value={formData.position || ""}
          onChange={(e) => handleChange("position", e.target.value)}
        />
      </Field>
      <Field
        label="Education Level"
        value={formData.educationLevelId}
        error={errors.educationLevelId}
      >
        <select
          className="form-select form-select-sm"
          value={formData.educationLevelId || ""}
          onChange={(e) =>
            handleChange("educationLevelId", e.target.value)
          }
          disabled={educationLoading}
        >
          <option value="">Select</option>

          {educationLoading && <option value="">Loading...</option>}

          {educationError && <option value="">Failed to load</option>}

          {Array.isArray(educationLevels) &&
            educationLevels.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.name} {/*  name display hoga */}
              </option>
            ))}
        </select>
      </Field>
      <Field label="Prior Experience" value={formData.priorExperience} error={errors.priorExperience}
        onChange={(e: any) => handleChange("Prior Experience", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>
    </>
  );
};

export default Employment;