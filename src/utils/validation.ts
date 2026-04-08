// utils/validation.ts
export const validateStep = (step: number, data: any) => {
  const errors: any = {};

  if (step === 0) {
    if (!data.employeeCode) errors.employeeCode = "Required";
    if (!data.firstName) errors.firstName = "Required";
    if (!data.lastName) errors.lastName = "Required";
    if (!data.email) errors.email = "Required";
  }

  if (step === 1) {
    if (!data.employmentType) errors.employmentType = "Required";
    if (!data.designation) errors.designation = "Required";
  }

  // Add remaining step validations similarly...

  return errors;
};