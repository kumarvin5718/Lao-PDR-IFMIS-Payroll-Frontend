import React, { useState } from "react";
import StepRenderer from "./StepRenderer";
import '../../style/Employee.css';
import { Check2Circle } from "react-bootstrap-icons";
import ConfirmModal from "../../common/ConfirmModal";
import { useCreateEmployee } from "../../hooks/EmployeeData/useEmployee";

const steps = [
    "Personal Information",
    "Employment & Grade",
    "Identity Cards",
    "Organisation",
    "Service Location",
    "Residential Address",
    "Bank Details",
    "Payroll Flags"
];

const EmployeeDetailForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [showConfirm, setShowConfirm] = useState(false);
    const [formData, setFormData] = useState<any>({});
    const [errors, setErrors] = useState<any>({});
    const [completedSteps, setCompletedSteps] = useState<boolean[]>(
        Array(steps.length).fill(false)
    );
    const { mutate, isPending } = useCreateEmployee();

    const handleChange = (field: string, value: any) => {
        setFormData((prev: any) => ({ ...prev, [field]: value }));
    };

    // VALIDATION
    const validateStep = () => {
        const newErrors: any = {};

        if (currentStep === 0) {
            if (!formData.employeeCode) newErrors.employeeCode = "Required";
            if (!formData.title) newErrors.title = "Required";
            if (!formData.gender) newErrors.gender = "Required";
            if (!formData.firstName) newErrors.firstName = "Required";
            if (!formData.lastName) newErrors.lastName = "Required";
            if (!formData.email) newErrors.email = "Required";
            if (!formData.mobileNumber) newErrors.mobileNumber = "Required";
            if (!formData.dateOfJoining) newErrors.dateOfJoining = "Required";
            if (!formData.dateOfBirth) newErrors.dateOfBirth = "Required";
        }

        if (currentStep === 1) {
            if (!formData.employmentType) newErrors.employmentType = "Required";
            if (!formData.position) newErrors.position = "Required";
            if (!formData.educationLevelId) newErrors.educationLevelId = "Required";
            if (!formData.priorExperience) newErrors.priorExperience = "Required";
        }

        if (currentStep === 2) {
            if (!formData.civilServiceCardId) newErrors.civilServiceCardId = "Required";
            if (!formData.socialSecurityNumber) newErrors.socialSecurityNumber = "Required";
        }

        if (currentStep === 3) {
            if (!formData.ministryId) newErrors.ministryId = "Required";
            if (!formData.departmentId) newErrors.departmentId = "Required";
            if (!formData.division) newErrors.division = "Required";
        }

        if (currentStep === 4) {
            if (!formData.countryKey) newErrors.countryKey = "Required";
            if (!formData.provinceKey) newErrors.provinceKey = "Required";
            if (!formData.districtKey) newErrors.districtKey = "Required";
        }

        if (currentStep === 5) {
            if (!formData.houseNo) newErrors.houseNo = "Required";
            if (!formData.street) newErrors.street = "Required";
            if (!formData.area) newErrors.area = "Required";
            if (!formData.provinceOfResidence) newErrors.provinceOfResidence = "Required";
            if (!formData.pinCode) newErrors.pinCode = "Required";
            if (!formData.country) newErrors.country = "Required";
        }

        if (currentStep === 6) {
            if (!formData.bank) newErrors.bank = "Required";
            if (!formData.branch) newErrors.branch = "Required";
            if (!formData.accountNumber) newErrors.accountNumber = "Required";
        }

        if (currentStep === 7) {
            if (!formData.hasSpouse) newErrors.hasSpouse = "Required";
            if (!formData.noOfEligibleChildren) newErrors.noOfEligibleChildren = "Required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    //  NEXT STEP WITH VALIDATION
    const nextStep = () => {
        const isValid = validateStep();
        if (!isValid) return;

        setCompletedSteps((prev) => {
            const updated = [...prev];
            updated[currentStep] = true;
            return updated;
        });

        //  LAST STEP => OPEN MODAL
        if (currentStep === steps.length - 1) {
            setShowConfirm(true);
            return;
        }

        setCurrentStep((prev) => prev + 1);
    };
    const prevStep = () => {
        if (currentStep > 0) setCurrentStep((prev) => prev - 1);
    };
    // const handleConfirmSubmit = () => {
    //     setShowConfirm(false);
    //     console.log("Form submitted with data:", formData);
    // };

    const handleConfirmSubmit = () => {
        setShowConfirm(false);

        // 🔥 Transform frontend data → backend DTO
        const payload = {
            ...formData,

            // Fix types
            priorExperience: Number(formData.priorExperience),
            noOfEligibleChildren: Number(formData.noOfEligibleChildren),

            hasSpouse: formData.hasSpouse === "Yes" || formData.hasSpouse === true,

            // Address mapping
            address: {
                houseNo: formData.houseNo,
                street: formData.street,
                area: formData.area,
                provinceOfResidence: formData.provinceOfResidence,
                pinCode: formData.pinCode,
                country: formData.country,
            },

            // Correct field mapping
            branchId: formData.branch,

            // Remove unwanted fields
            serviceProvince: undefined,
            serviceDistrict: undefined,
        };

        mutate(payload);
    };
    return (
        <div className="gov-container">
            <div className="container mt-2">
                {/* Progress Bar */}
                <div className="progress mb-3">
                    <div
                        className="progress-bar"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    />
                </div>
                {/* Step Tabs */}
                <ul className="nav nav-tabs mt-3">
                    {steps.map((step, i) => (
                        <li className="nav-item" key={i}>
                            <button
                                className={`nav-link 
                                    ${i === currentStep ? "active" : ""} 
                                    ${completedSteps[i] ? "text-success" : ""}`}
                                onClick={() => setCurrentStep(i)}
                            >
                                {step}{" "}
                                {completedSteps[i] && <Check2Circle />}
                            </button>
                        </li>
                    ))}
                </ul>


                <div className="card mt-3 gov-card">
                    <div className="card-header fw-semibold">
                        {steps[currentStep]}
                    </div>
                    <div className="card-header fw-semibold">
                        <StepRenderer
                            step={currentStep}
                            formData={formData}
                            handleChange={handleChange}
                            errors={errors}
                        />

                        <div className="text-end mt-4">
                            <button
                                className="btn btn-secondary btn-sm me-2"
                                onClick={prevStep}
                                disabled={currentStep === 0}
                            >
                                Back
                            </button>

                            <button
                                className="btn btn-primary btn-sm"
                                onClick={nextStep}
                            >
                                {currentStep === steps.length - 1
                                    ? "Submit"
                                    : "Next"}
                            </button>
                        </div>

                    </div>
                    <ConfirmModal
                        show={showConfirm}
                        message="Are you sure you want to submit?<br/><strong>After submit you cannot update.</strong>"
                        onCancel={() => setShowConfirm(false)}
                        onConfirm={handleConfirmSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetailForm;