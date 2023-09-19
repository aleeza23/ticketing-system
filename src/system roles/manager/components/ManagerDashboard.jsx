import React from "react";
import Dashboard from "../../../partials/Dashboard";
import {Card} from "antd";
import ProtectedRoutes from "../../../components/protected routes/ProtectedRoutes";

const ManagerDashboard = () => {
  const API = 'http://localhost:9000/api/current-manager'


  return (
    <>
    <ProtectedRoutes CURRENT_USER_API={API} CURRENT_USER_ROLE='manager'>
      <Dashboard userRole='M'>
        <Card title='Manager' bordered={false} style={{width: 300}}>
          <p>Hello this is manager dashboard </p>
        </Card>
      </Dashboard>
      </ProtectedRoutes>
    </>
  );
};

export default ManagerDashboard;
