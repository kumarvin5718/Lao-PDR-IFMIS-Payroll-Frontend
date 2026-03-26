import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardLayout from './layout/DashboardLayout'
import Login from './page/Login/LoginPage'

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<DashboardLayout />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
