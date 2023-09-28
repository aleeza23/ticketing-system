import React, {useContext} from "react";
import Dashboard from "../../constant/dashboard/Dashboard";
import {Card} from "antd";
import ProtectedRoutes from "../../../components/protected routes/ProtectedRoutes";
import {AuthContext} from "../../../context/authContext";
import AdminAllUsers from "../components/AdminAllUsers";
import {Outlet} from "react-router-dom";

const AdminDashboard = () => {
  const API = "http://localhost:9000/api/current-admin";
  const {auth} = useContext(AuthContext);
  const userRole = auth.user ? auth.user.role : null;

  console.log(userRole);

  return (
    <>
      <ProtectedRoutes CURRENT_USER_API={API} CURRENT_USER_ROLE='admin'>
        <Dashboard userRole='A'>
          

          <Outlet />
        </Dashboard>
      </ProtectedRoutes>
    </>
  );
};

export default AdminDashboard;
