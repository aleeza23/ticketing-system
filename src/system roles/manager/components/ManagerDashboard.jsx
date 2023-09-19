import React from "react";
import Dashboard from "../../../partials/Dashboard";
import {Card} from "antd";

const ManagerDashboard = () => {
  const API = 'http://localhost:9000/api/current-manager'


  return (
    <>
      <Dashboard userRole='M'>
        <Card title='Manager' bordered={false} style={{width: 300}}>
          <p>Hello this is manager dashboard </p>
        </Card>
      </Dashboard>
    </>
  );
};

export default ManagerDashboard;
