import React, { useContext } from "react";
import Dashboard from "../../../../partials/Dashboard";
import {Card} from "antd";
import ProtectedRoutes from "../../../../components/protected routes/ProtectedRoutes";
import { AuthContext } from "../../../../context/authContext";

const AdminDashboard = () => {
  const API = 'http://localhost:9000/api/current-admin'
  const {auth} = useContext(AuthContext);
  const userRole = auth.user ? auth.user.role : null;

 
  console.log(userRole);

  return (
    <>
      <ProtectedRoutes CURRENT_USER_API={API} CURRENT_USER_ROLE='admin'>
        <Dashboard userRole='A'>
          <Card title='Admin' bordered={false} style={{width: 300}}>
            <p>Hello this is admin dashboard </p>
          </Card>
        </Dashboard>
      </ProtectedRoutes>
    </>
  );
};

export default AdminDashboard;
