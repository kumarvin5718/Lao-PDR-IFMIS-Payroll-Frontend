import Field from "../Field";
import "../../../style/Employee.css";
import { useBankBranch } from "../../../hooks/EmployeeData/useBankBranch";
import { useBank } from "../../../hooks/EmployeeData/useBank";

const BankDetails = ({ formData, handleChange, errors }: any) => {

  //  Bank API
  const {
    data: banks,
    isLoading: bankLoading,
    isError: bankError,
    refetch: refetchBanks,
  } = useBank(false);

  // Branch API (depends on bankId)
  const {
    data: bankBranches,
    isLoading: bankBranchLoading,
    isError: bankBranchError,
    refetch: refetchBankBranches,
  } = useBankBranch(formData.bank, false);

  //  Load banks on click
  const handleBankClick = () => {
    if ((!banks || banks.length === 0) && !bankLoading) {
      refetchBanks();
    }
    if (bankError) {
      refetchBanks();
    }
  };

  //  Load branches on click
  const handleBankBranchClick = () => {
    if (!formData.bank) return;

    if ((!bankBranches || bankBranches.length === 0) && !bankBranchLoading) {
      refetchBankBranches();
    }
    if (bankBranchError) {
      refetchBankBranches();
    }
  };

  //  When bank changes → reset branch
  const handleBankChange = (value: string) => {
    handleChange("bank", value);
    handleChange("branch", "");
  };

  //  Bank Options
  const renderBankOptions = () => {
    if (bankLoading) return <option value="">Loading...</option>;
    if (bankError) return <option value="">Failed to load</option>;
    if (!Array.isArray(banks) || banks.length === 0) return null;

    return banks.map((item: any) => (
      <option key={item.id} value={item.id}>
        {item.bankName}
      </option>
    ));
  };

  //  Branch Options (filtered automatically by API using bankId)
  const renderBankBranchOptions = () => {
    if (!formData.bank) {
      return <option value="">Select bank first</option>;
    }

    if (bankBranchLoading) return <option value="">Loading...</option>;
    if (bankBranchError) return <option value="">Failed to load</option>;
    if (!Array.isArray(bankBranches) || bankBranches.length === 0) {
      return <option value="">No branches found</option>;
    }

    return bankBranches.map((item: any) => (
      <option key={item.id} value={item.id}>
        {item.branchName}
      </option>
    ));
  };

  return (
    <>
      {/*  Bank Dropdown */}
      <Field
        label="Bank Name"
        value={formData.bank}
        error={errors.bank}
        onChange={(e: any) => handleBankChange(e.target.value)}
      >
        <select
          className="form-select form-select-sm"
          onClick={handleBankClick}
          disabled={bankLoading}
        >
          <option value="">Select</option>
          {renderBankOptions()}
        </select>
      </Field>

      {/*  Branch Dropdown */}
      <Field
        label="Branch"
        value={formData.accountNumber}
        error={errors.accountNumber}
        onChange={(e: any) =>
          handleChange("accountNumber", e.target.value)
        }
      >
        <select
          className="form-select form-select-sm"
          onClick={handleBankBranchClick}
          disabled={bankBranchLoading || !formData.bank}
        >
          <option value="">Select</option>
          {renderBankBranchOptions()}
        </select>
      </Field>

      {/*  Account Number */}
      <Field
        label="Account No"
        value={formData.accountNumber}
        error={errors.accountNumber}
        onChange={(e: any) =>
          handleChange("accountNumber", e.target.value)
        }
      >
        <input className="form-control form-control-sm" />
      </Field>
    </>
  );
};

export default BankDetails;