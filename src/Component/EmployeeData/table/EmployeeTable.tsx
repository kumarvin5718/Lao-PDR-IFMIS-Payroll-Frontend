import React, { useState } from "react";
import { useEmployeeDetails } from "../../../hooks/EmployeeData/useEmployeementDetails";
import type { TableHeaderColumn } from "../../../common/TableHeader";
import type { TableColumn } from "../../../common/TableBody";
import type { EmployeeType } from "../../../type/EmployeeType";
import TableHeader from "../../../common/TableHeader";
import TableBody from "../../../common/TableBody";
import Pagination from "../../../common/Pagination";
import { CheckCircleFill, XCircleFill } from "react-bootstrap-icons";
import "../../../style/EmployeeTable.css";
const EmployeeTable: React.FC = () => {
    /* ---------------- Pagination ---------------- */
    const [page, setPage] = useState<number>(0);
    const [size, setSize] = useState<number>(10);
    const { data, isLoading, error } = useEmployeeDetails(page, size,);

    const renderGreenText = (value: any) => (
        <span style={{ color: "green", fontWeight: 500 }}>
            {value ?? "-"}
        </span>
    );

    const renderBooleanIcon = (value: boolean) =>
        value ? (
            <CheckCircleFill color="green" />
        ) : (
            <XCircleFill color="red" />
        );

    const headerColumns: TableHeaderColumn[] = [
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
        { label: "Education Qualification", accessor: " educationLevelName" },
        { label: "Prior Experience (Yrs before Govt)", accessor: "priorExperience" },

        { label: "Grade", accessor: "grade" },
        { label: "Step", accessor: "step" },
        { label: "Civil Service Card ID", accessor: "civilServiceCardId" },
        { label: "Social Security No.", accessor: "socialSecurityNumber" },

        { label: "Ministry / Province / Central Org", accessor: "ministryName" },
        { label: "Department", accessor: "departmentName" },
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


    ];
    // /* ---------------- Body Config ---------------- */
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
        {
            header: "Years of Service",
            render: (row) => renderGreenText(row.yearsOfService),
        },
        {
            header: "Date of Retirement",
            render: (row) => renderGreenText(row.dateOfRetirement),
        },
        { header: "Employment Type", accessor: "employmentType" },
        { header: "Position / Designation", accessor: "position" },
        { header: "Education Qualification", accessor: "educationLevelName" },
        { header: "Prior Experience (Yrs before Govt)", accessor: "priorExperience" },

        {
            header: "Grade",
            render: (row) => renderGreenText(row.grade),
        },
        {
            header: "Step",
            render: (row) => renderGreenText(row.step),
        },
        { header: "Civil Service Card ID", accessor: "civilServiceCardId" },
        { header: "Social Security No.", accessor: "socialSecurityNumber" },

        { header: "Ministry / Province / Central Org", accessor: "ministryName" },
        { header: "Department", accessor: "departmentName" },
        { header: "Division", accessor: "division" },

        { header: "Service Country", accessor: "countryName" },
        { header: "Service Province / Posting", accessor: "provinceName" },
        { header: "Service District", accessor: "districtName" },

        {
            header: "Profession Category",
            render: (row) => renderGreenText(row.professionCategory),
        },
        {
            header: "Is Remote Area",
            render: (row) => renderBooleanIcon(row.isRemoteArea),
        },
        {
            header: "Is Foreign Posting",
            render: (row) => renderBooleanIcon(row.isForeignPosting),
        },
        {
            header: "Is Hazardous Area",
            render: (row) => renderBooleanIcon(row.isHazardousArea),
        },
        { header: "House No.", accessor: "houseNo" },
        { header: "Street", accessor: "street" },
        { header: "Area / Baan", accessor: "area" },
        { header: "Province of Residence", accessor: "residenceProvince" },
        { header: "PIN Code", accessor: "pinCode" },
        { header: "Country", accessor: "countryName" },
        { header: "Bank Name", accessor: "bankName" },
        {
            header: "Bank Branch Code",
            render: (row) => renderGreenText(row.branchCode),
        },
        { header: "Bank Branch Code", accessor: "branchCode" },
        { header: "Bank Account No.", accessor: "bankAccountNo" },
        {
            header: "SWIFT / BIC Code",
            render: (row) => renderGreenText(row.swiftCode),
        },

        { header: "Has Spouse", accessor: "hasSpouse" },
        { header: "No. of Eligible Children (max 3)", accessor: "noOfEligibleChildren" },

        {
            header: "Position Level (for Allowance)",
            render: (row) => renderGreenText(row.positionLevel),
        },
        {
            header: "Is NA Member",
            render: (row) => renderBooleanIcon(row.isNaMember || false),
        },
        {
            header: "Field Allowance Type",
            render: (row) => renderGreenText(row.fieldAllowanceType),
        },
    ];

    /* ---------------- Mapping Here ---------------- */
    const tableData = (data?.content ?? []).map((item: any) => ({
        ...item,

        houseNo: item.address?.houseNo || "-",
        street: item.address?.street || "-",
        area: item.address?.area || "-",


        residenceProvince: item.address?.provinceOfResidence || "-",

        pinCode: item.address?.pinCode || "-",
        country: item.address?.country || "-",
        //  Fix mapping
        bankAccountNo: item.accountNumber,
    }));

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
                <div className="table-responsive custom-table-wrapper">
                    <table className="table table-bordered table-hover align-middle mb-0">
                        <TableHeader
                            columns={headerColumns}
                            headerClassName="custom-header"

                        />
                        {isLoading ? (
                            <tbody>
                                <tr>
                                    <td colSpan={headerColumns.length} className="text-center p-4">
                                        <div className="spinner-border text-primary" />
                                    </td>
                                </tr>
                            </tbody>
                        ) : (
                            <TableBody
                                data={tableData}
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

