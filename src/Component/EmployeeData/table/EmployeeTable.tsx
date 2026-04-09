import React, { useState } from "react";
import { useEmployeeDetails } from "../../../hooks/EmployeeData/useEmployeementDetails";
import type { TableHeaderColumn } from "../../../common/TableHeader";
import type { TableColumn } from "../../../common/TableBody";
import type { EmployeeType } from "../../../type/EmployeeType";
import TableHeader from "../../../common/TableHeader";
import TableBody from "../../../common/TableBody";
import Pagination from "../../../common/Pagination";


const EmployeeTable: React.FC = () => {
    /* ---------------- Pagination ---------------- */
    const [page, setPage] = useState<number>(0);
    const [size, setSize] = useState<number>(10);

    /* ---------------- Sorting ---------------- */
    const [sortBy, setSortBy] = useState<string>("");
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

    const { data, isLoading, error } = useEmployeeDetails(
        page,
        size,
        sortBy,
        sortDir
    );

    const handleSort = (field: string) => {
        if (sortBy !== field) {
            setSortBy(field);
            setSortDir("asc");
        } else {
            setSortDir(sortDir === "asc" ? "desc" : "asc");
        }
        setPage(0);
    };


const headerColumns: TableHeaderColumn[] = [
  { label: "Sr. No.", accessor: "srNo" },
  { label: "Employee Code", accessor: "employeeCode" },
  { label: "Title", accessor: "title" },
  { label: "First Name", accessor: "firstName" },
  { label: "Last Name", accessor: "lastName" },
  { label: "Gender", accessor: "gender" },
  { label: "Date of Birth", accessor: "dateOfBirth" },
  { label: "Email Address", accessor: "email" },
  { label: "Mobile Number", accessor: "mobileNumber" },
  { label: "Date of Joining", accessor: "dateOfJoining" },
  { label: "Years of Service", accessor: "yearsOfService" },
  { label: "Date of Retirement", accessor: "dateOfRetirement" },

  { label: "Employment Type", accessor: "employmentType" },
  { label: "Position / Designation", accessor: "position" },
  { label: "Education Qualification", accessor: "educationQualification" },
  { label: "Prior Experience (Yrs before Govt)", accessor: "priorExperience" },

  { label: "Grade", accessor: "grade" },
  { label: "Step", accessor: "step" },
  { label: "Civil Service Card ID", accessor: "civilServiceCardId" },
  { label: "Social Security No.", accessor: "socialSecurityNo" },

  { label: "Ministry / Province / Central Org", accessor: "organization" },
  { label: "Department", accessor: "department" },
  { label: "Division", accessor: "division" },

  { label: "Service Country", accessor: "serviceCountry" },
  { label: "Service Province / Posting", accessor: "serviceProvince" },
  { label: "Service District", accessor: "serviceDistrict" },

  { label: "Profession Category", accessor: "professionCategory" },
  { label: "Is Remote Area", accessor: "isRemoteArea" },
  { label: "Is Foreign Posting", accessor: "isForeignPosting" },
  { label: "Is Hazardous Area", accessor: "isHazardousArea" },

  { label: "House No.", accessor: "houseNo" },
  { label: "Street", accessor: "street" },
  { label: "Area / Baan", accessor: "area" },
  { label: "Province of Residence", accessor: "residenceProvince" },
  { label: "PIN Code", accessor: "pinCode" },
  { label: "Country", accessor: "country" },

  { label: "Bank Name", accessor: "bankName" },
  { label: "Bank Branch", accessor: "bankBranch" },
  { label: "Bank Branch Code", accessor: "bankBranchCode" },
  { label: "Bank Account No.", accessor: "bankAccountNo" },
  { label: "SWIFT / BIC Code", accessor: "swiftCode" },

  { label: "Has Spouse", accessor: "hasSpouse" },
  { label: "No. of Eligible Children (max 3)", accessor: "childrenCount" },

  { label: "Position Level (for Allowance)", accessor: "positionLevel" },
  { label: "Is NA Member", accessor: "isNaMember" },
  { label: "Field Allowance Type", accessor: "fieldAllowanceType" },

  { label: "Effective From (Record Active Date)", accessor: "effectiveFrom" },
  { label: "Effective To (Superseded Date)", accessor: "effectiveTo" },

  { label: "Record Created (Date)", accessor: "createdDate" },
  { label: "Last Updated (Date)", accessor: "updatedDate" },
  { label: "Last Updated By (Name / Code)", accessor: "updatedBy" },

  { label: "Change Remarks", accessor: "changeRemarks" }
];
   /* ---------------- Body Config ---------------- */
    const bodyColumns: TableColumn<EmployeeType>[] = [
  { header: "Employee Code", accessor: "employeeCode" },
  { header: "Title", accessor: "title" },
  { header: "First Name", accessor: "firstName" },
  { header: "Last Name", accessor: "lastName" },
  { header: "Gender", accessor: "gender" },
  { header: "Date of Birth", accessor: "dateOfBirth" },
  { header: "Email Address", accessor: "email" },
  { header: "Mobile Number", accessor: "mobileNumber" },
  { header: "Date of Joining", accessor: "dateOfJoining" },
  { header: "Years of Service", accessor: "yearsOfService" },
  { header: "Date of Retirement", accessor: "dateOfRetirement" },

  { header: "Employment Type", accessor: "employmentType" },
  { header: "Position / Designation", accessor: "position" },
  { header: "Education Qualification", accessor: "educationQualification" },
  { header: "Prior Experience (Yrs before Govt)", accessor: "priorExperience" },

  { header: "Grade", accessor: "grade" },
  { header: "Step", accessor: "step" },
  { header: "Civil Service Card ID", accessor: "civilServiceCardId" },
  { header: "Social Security No.", accessor: "socialSecurityNo" },

  { header: "Ministry / Province / Central Org", accessor: "organization" },
  { header: "Department", accessor: "department" },
  { header: "Division", accessor: "division" },

  { header: "Service Country", accessor: "serviceCountry" },
  { header: "Service Province / Posting", accessor: "serviceProvince" },
  { header: "Service District", accessor: "serviceDistrict" },

  { header: "Profession Category", accessor: "professionCategory" },
  { header: "Is Remote Area", accessor: "isRemoteArea" },
  { header: "Is Foreign Posting", accessor: "isForeignPosting" },
  { header: "Is Hazardous Area", accessor: "isHazardousArea" },

  { header: "House No.", accessor: "houseNo" },
  { header: "Street", accessor: "street" },
  { header: "Area / Baan", accessor: "area" },
  { header: "Province of Residence", accessor: "residenceProvince" },
  { header: "PIN Code", accessor: "pinCode" },
  { header: "Country", accessor: "country" },

  { header: "Bank Name", accessor: "bankName" },
  { header: "Bank Branch", accessor: "bankBranch" },
  { header: "Bank Branch Code", accessor: "bankBranchCode" },
  { header: "Bank Account No.", accessor: "bankAccountNo" },
  { header: "SWIFT / BIC Code", accessor: "swiftCode" },

  { header: "Has Spouse", accessor: "hasSpouse" },
  { header: "No. of Eligible Children (max 3)", accessor: "childrenCount" },

  { header: "Position Level (for Allowance)", accessor: "positionLevel" },
  { header: "Is NA Member", accessor: "isNaMember" },
  // { header: "Field Allowance Type", accessor: "fieldAllowanceType" },

  // { header: "Effective From (Record Active Date)", accessor: "effectiveFrom" },
  // { header: "Effective To (Superseded Date)", accessor: "effectiveTo" },

  // { header: "Record Created (Date)", accessor: "createdDate" },
  // { header: "Last Updated (Date)", accessor: "updatedDate" },
  // { header: "Last Updated By (Name / Code)", accessor: "updatedBy" },

  // { header: "Change Remarks", accessor: "changeRemarks" }
    ];

    if (error) {
        return (
            <div className="alert alert-danger mt-4">
                {error.message}
            </div>
        );
    }

    return (
        <div className="card shadow-sm mt-2">
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover align-middle mb-0 table-fixed">
                        <TableHeader
                            columns={headerColumns}
                            headerClassName="table-light"
                            sortBy={sortBy}
                            sortDir={sortDir}
                            onSort={handleSort}
                        />

                        {isLoading ? (
                            <tbody>
                                <tr>
                                    <td colSpan={headerColumns.length} className="text-center py-4">
                                        <div className="spinner-border text-primary" />
                                    </td>
                                </tr>
                            </tbody>
                        ) : (
                            <TableBody
                                data={data?.data ?? []}
                                columns={bodyColumns}
                                page={page}
                                size={size}
                            />
                        )}
                    </table>
                </div>
            </div>

            {data && (
                <div className="px-2">
                    <Pagination
                        page={page}
                        size={size}
                        totalPages={data.totalPages}
                        totalElements={data.totalElements}
                        onPageChange={setPage}
                        onSizeChange={setSize}
                    />
                </div>
            )}
        </div>
    );
};

export default EmployeeTable;