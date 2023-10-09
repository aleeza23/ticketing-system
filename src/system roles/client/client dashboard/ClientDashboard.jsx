import React from "react";
import Dashboard from "../../constant/dashboard/Dashboard";
import {Card} from "antd";
import ProtectedRoutes from "../../../components/protected routes/ProtectedRoutes";
import { Outlet } from "react-router-dom";

const ClientDashboard = () => {
    const API = 'http://localhost:9000/api/current-client'
  return (
    <>
    <ProtectedRoutes CURRENT_USER_API={API} CURRENT_USER_ROLE='client'  >
      <Dashboard userRole='C'>
       
       <Outlet />
      </Dashboard>
      </ProtectedRoutes>
    </>
  );
};

export default ClientDashboard;
