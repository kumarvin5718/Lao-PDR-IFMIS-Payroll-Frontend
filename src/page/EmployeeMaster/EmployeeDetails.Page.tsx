import Header from "../../common/Header";
import EmployeeDetailForm from "../../Component/EmployeeData/EmployeeDetailForm";

const EmployeeDetailPage: React.FC = () => {
  return(
    <>
     <div className="container-fluid-budgetWrap"> 
       <Header title="Payroll Toolkit" subtitle="Employee Form" />
         <EmployeeDetailForm/></div>
 
    </>

  )
}
export default EmployeeDetailPage;
