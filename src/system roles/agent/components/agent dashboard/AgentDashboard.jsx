import React from "react";
import Dashboard from "../../../../partials/Dashboard";
import {Card} from "antd";

const AgentDashboard = () => {

  const API = 'http://localhost:9000/api/current-agent'
    
  return (
    <>
      <Dashboard userRole='A'>
        <Card title='Agent' bordered={false} style={{width: 300}}>
          <p>Hello! this is agent dashboard </p>
        </Card>
      </Dashboard>
    </>
  );
};

export default AgentDashboard;
