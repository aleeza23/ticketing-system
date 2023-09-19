import React from "react";
import Dashboard from "../../../../partials/Dashboard";
import {Card} from "antd";

const ClientDashboard = () => {
    const API = 'http://localhost:9000/api/current-client'
  return (
    <>
      <Dashboard userRole='C'>
        <Card title='Client' bordered={false} style={{width: 300}}>
          <p>Hello! this is client dashboard </p>
        </Card>
      </Dashboard>
    </>
  );
};

export default ClientDashboard;
