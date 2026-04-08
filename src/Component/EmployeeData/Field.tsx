// components/employee/Field.tsx
import React from "react";

const Field = ({ label, value, error, onChange, children }: any) => (
  <div className="row mb-3 align-items-center">
    <label className="col-md-3 col-form-label">
      {label} <span className="text-danger">*</span>
    </label>
    <div className="col-md-6">
      {React.cloneElement(children, {
        value: value || "",
        onChange
      })}
      {error && <small className="text-danger">{error}</small>}
    </div>
  </div>
);

export default Field;