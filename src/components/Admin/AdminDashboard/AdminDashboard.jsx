import React from 'react'
import {AdminDashboardcontainer} from "./AdminDashboard.styled";
import AdminSidebar from "../AdminSidebar";
import {Route, Routes} from "react-router-dom";
import User from "./../../../pages/Admin/User";
import Footer from "../../Footer";

const AdminDashboard = () => {
    return (
        <React.Fragment>
            <AdminDashboardcontainer>
                <div>
                    <div className='background'>
                        <div className='glass-bg'>
                            <AdminSidebar/>
                            <Routes>
                                <Route path="test" element={<div>test</div>}/>
                                <Route path="User" element={<User></User>}/>
                            </Routes>

                        </div>
                    </div>
                </div>
            </AdminDashboardcontainer>
            <Footer/>
        </React.Fragment>
    )
}

export default AdminDashboard
