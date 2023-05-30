import React from 'react'
import {Outlet} from 'react-router-dom';
import AdminDashboard from '../../components/Admin/AdminDashboard/AdminDashboard';

export default function index() {
    return (
        <div>
            <h1>Admin sdhja</h1>
            <AdminDashboard/>


            {/* This element will render either <AdminMessages> when the URL is
              "/messages", <AdminTasks> at "/tasks", or null if it is "/"
          */}
            <Outlet/>
        </div>
    );
}
