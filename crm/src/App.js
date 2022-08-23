import React from 'react'
import { Routes, Route} from "react-router-dom";
import Customer from './pages/Customer';
import Employee from './pages/Employee';
import Employees from './pages/Employees';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Associate from './pages/Associate';
import Associates from './pages/Associates';
import NotFound from './pages/NotFound';
import EmpPayout from './pages/EmpPayout';
import CustomerPayout from './pages/CustomerPayout';
import AsscoiatePayout from './pages/AsscoiatePayout';

export default function App() {
  return (
    <div className='container mt-2'>
       <Routes>
        <Route path="/customer" element={<Customer/>} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/associate" element={<Associate />} />
        <Route path="/associates" element={<Associates />} />
        <Route path="/custpayout" element={<CustomerPayout />} />
        <Route path="/emppayout" element={<EmpPayout />} />
        <Route path="/asspayout" element={<AsscoiatePayout/>} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
       
    </div>
  )
}
