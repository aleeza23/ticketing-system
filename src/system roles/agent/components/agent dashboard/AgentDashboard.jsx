import React, { useContext } from "react";
import Dashboard from "../../../../partials/Dashboard";
import {Card} from "antd";
import ProtectedRoutes from "../../../../components/protected routes/ProtectedRoutes";
import { AuthContext } from "../../../../context/authContext";

const AgentDashboard = () => {
  const API = 'http://localhost:9000/api/current-agent'

;

  return (
    <>
    <ProtectedRoutes CURRENT_USER_API={API} CURRENT_USER_ROLE='agent'>
      <Dashboard userRole='A'>
        <Card title='Agent' bordered={false} style={{width: 300}}>
          <p>Hello! this is agent dashboard </p>
        </Card>
      </Dashboard>
      </ProtectedRoutes>
    </>
  );
};

export default AgentDashboard;
