import Address from "./steps/Address";
import BankDetails from "./steps/BankDetails";
import Employment from "./steps/Employment";
import Identity from "./steps/Identity";
import Organisation from "./steps/Organisation";
import PayrollFlags from "./steps/PayrollFlags";
import PersonalInfo from "./steps/PersonalInfo";
import ServiceLocation from "./steps/ServiceLocation";



const StepRenderer = ({ step, formData, handleChange, errors }: any) => {
  switch (step) {
    case 0:
      return <PersonalInfo formData={formData} handleChange={handleChange} errors={errors} />;

    case 1:
      return <Employment formData={formData} handleChange={handleChange} errors={errors} />;

    case 2:
      return <Identity formData={formData} handleChange={handleChange} errors={errors} />;

    case 3:
      return <Organisation formData={formData} handleChange={handleChange} errors={errors} />;

    case 4:
      return <ServiceLocation formData={formData} handleChange={handleChange} errors={errors} />;

    case 5:
      return <Address formData={formData} handleChange={handleChange} errors={errors} />;

    case 6:
      return <BankDetails formData={formData} handleChange={handleChange} errors={errors} />;

    case 7:
      return <PayrollFlags formData={formData} handleChange={handleChange} errors={errors} />;

    default:
      return null;
  }
};

export default StepRenderer;