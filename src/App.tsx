import { Route, Routes } from 'react-router-dom'
import './App.css'
import EmployeeDetailPage from './page/EmployeeMaster/EmployeeDetails.Page'
import EmployeeDetailGetPage from './page/EmployeeMaster/EmployeeDetailGetPage'

function App() {

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<DashboardLayout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/employee" element={<EmployeeMasterPage />} />
      </Routes> */}

      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="employee" element={<EmployeeMasterPage />} />
        </Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<EmployeeDetailPage />} />
        <Route path="/employee/detail" element={<EmployeeDetailGetPage />} />
      </Routes>

    </>
  )
}

export default App
