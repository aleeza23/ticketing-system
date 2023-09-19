import React, { useContext } from "react";
import Dashboard from "../../../../partials/Dashboard";
import {Card} from "antd";
import { AuthContext } from "../../../../context/authContext";

const AdminDashboard = () => {
  const API = 'http://localhost:9000/api/current-admin'
  const {auth} = useContext(AuthContext);
  console.log(auth.user.role);

  return (
    <>
        <Dashboard userRole='A'>
          <Card title='Admin' bordered={false} style={{width: 300}}>
            <p>Hello this is admin dashboard </p>
          </Card>
        </Dashboard>
    </>
  );
};

export default AdminDashboard;
