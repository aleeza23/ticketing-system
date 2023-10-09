import React, { useContext } from "react";
import Dashboard from "../../constant/dashboard/Dashboard";
import {Card} from "antd";
import ProtectedRoutes from "../../../components/protected routes/ProtectedRoutes";
import { AuthContext } from "../../../context/authContext";
import { Outlet } from "react-router-dom";

const AgentDashboard = () => {
  const API = 'http://localhost:9000/api/current-agent'

;

  return (
    <>
    <ProtectedRoutes CURRENT_USER_API={API} CURRENT_USER_ROLE='agent'>
      <Dashboard>
       
       <Outlet />
      </Dashboard>
      </ProtectedRoutes>
    </>
  );
};

export default AgentDashboard;
