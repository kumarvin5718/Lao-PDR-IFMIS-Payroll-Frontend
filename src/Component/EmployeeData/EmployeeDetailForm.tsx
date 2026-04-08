import React, { useState } from "react";
import StepRenderer from "./StepRenderer";
import '../../style/Employee.css';
import { Check2Circle } from "react-bootstrap-icons";
import ConfirmModal from "../../common/ConfirmModal";

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
            if (!formData.mobile) newErrors.mobile = "Required";
            if (!formData.doj) newErrors.doj = "Required";
        }

        if (currentStep === 1) {
            if (!formData.employmentType) newErrors.employmentType = "Required";
            if (!formData.designation) newErrors.designation = "Required";
        }

        if (currentStep === 2) {
            if (!formData.civilId) newErrors.civilId = "Required";
            if (!formData.ssn) newErrors.ssn = "Required";
        }

        if (currentStep === 3) {
            if (!formData.ministry) newErrors.ministry = "Required";
            if (!formData.department) newErrors.department = "Required";
            if (!formData.division) newErrors.division = "Required";
        }

        if (currentStep === 4) {
            if (!formData.serviceCountry) newErrors.serviceCountry = "Required";
            if (!formData.serviceProvince) newErrors.serviceProvince = "Required";
            if (!formData.serviceDistrict) newErrors.serviceDistrict = "Required";
        }

        if (currentStep === 5) {
            if (!formData.houseNo) newErrors.houseNo = "Required";
            if (!formData.street) newErrors.street = "Required";
            if (!formData.area) newErrors.area = "Required";
            if (!formData.province) newErrors.province = "Required";
            if (!formData.pin) newErrors.pin = "Required";
            if (!formData.country) newErrors.country = "Required";
        }

        if (currentStep === 6) {
            if (!formData.bankName) newErrors.bankName = "Required";
            if (!formData.branch) newErrors.branch = "Required";
            if (!formData.accountNo) newErrors.accountNo = "Required";
        }

        if (currentStep === 7) {
            if (!formData.spouse) newErrors.spouse = "Required";
            if (!formData.children) newErrors.children = "Required";
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
    const handleConfirmSubmit = () => {
        setShowConfirm(false);
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