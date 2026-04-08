import Field from "../Field";
import "../../../style/Employee.css";
const BankDetails = ({ formData, handleChange, errors }: any) => {
  return (
    <>
      <Field label="Bank Name" value={formData.bankName} error={errors.bankName}
        onChange={(e: any) => handleChange("bankName", e.target.value)}>
        <select className="form-select form-select-sm">
          <option value="">Select</option>
          <option>BIC Bank Laos</option>
          <option>APB</option>
        </select>
      </Field>

      <Field label="Branch" value={formData.branch} error={errors.branch}
        onChange={(e: any) => handleChange("branch", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>

      <Field label="Account No" value={formData.accountNo} error={errors.accountNo}
        onChange={(e: any) => handleChange("accountNo", e.target.value)}>
        <input className="form-control form-control-sm" />
      </Field>
    </>
  );
};

export default BankDetails;