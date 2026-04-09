import Header from "../../common/Header";
import EmployeeMain from "../../Component/EmployeeData/main/EmployeeMain";

const EmployeeDetailGetPage: React.FC = () => {
  return(
    <>
     <div className="container-fluid-budgetWrap"> 
       <Header title="Payroll Toolkit" subtitle="Employee Form" />
         <EmployeeMain/></div>
 
    </>

  )
}
export default EmployeeDetailGetPage;
