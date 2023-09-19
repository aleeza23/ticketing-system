import React from "react";
import Dashboard from "../../../../partials/Dashboard";
import {Card} from "antd";
import ProtectedRoutes from "../../../../components/protected routes/ProtectedRoutes";

const ClientDashboard = () => {
    const API = 'http://localhost:9000/api/current-client'
  return (
    <>
    <ProtectedRoutes CURRENT_USER_API={API} CURRENT_USER_ROLE='client'  >
      <Dashboard userRole='C'>
        <Card title='Client' bordered={false} style={{width: 300}}>
          <p>Hello! this is client dashboard </p>
        </Card>
      </Dashboard>
      </ProtectedRoutes>
    </>
  );
};

export default ClientDashboard;
