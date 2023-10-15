import React from "react";
import Dashboard from "../../constant/dashboard/Dashboard";
import {Card} from "antd";
import ProtectedRoutes from "../../../components/protected routes/ProtectedRoutes";
import { Outlet } from "react-router-dom";

const ManagerDashboard = () => {
  const API = 'http://localhost:9000/api/current-manager'


  return (
    <>
    <ProtectedRoutes CURRENT_USER_API={API} CURRENT_USER_ROLE='manager'>
      <Dashboard userRole='M'>
      
        <Outlet />
      </Dashboard>
      </ProtectedRoutes>
    </>
  );
};

export default ManagerDashboard;
