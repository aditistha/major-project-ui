import React from 'react'
import { AdminDashboardcontainer } from "./AdminDashboard.styled";
import AdminSidebar from "../AdminSidebar";
const AdminDashboard = () => {
  return (
    <AdminDashboardcontainer>
    <div>
       <div className='background'>
      <div className='glass-bg'>
       <AdminSidebar/>
       
      </div>
    </div>
    </div>
    </AdminDashboardcontainer>
  )
}

export default AdminDashboard
