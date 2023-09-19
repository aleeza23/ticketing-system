import React, {useContext} from "react";
import {AuthContext} from "../../context/authContext";
import AdminDashboard from "../../system roles/admin/components/admin dashboard/AdminDashboard";
import AgentDashboard from "../../system roles/agent/components/agent dashboard/AgentDashboard";
import ManagerDashboard from "../../system roles/manager/components/ManagerDashboard";
import ClientDashboard from "../../system roles/client/components/client dashboard/ClientDashboard";


const RoleBasedRouting = () => {
    const {auth} = useContext(AuthContext);
    console.log(auth.user.role);

    //conditions to check the role of user
    if (!auth && !auth.user) {
      return <h1>erorrrrrrrr</h1>
    }
    if (auth.user.role === "admin") {
      return <AdminDashboard /> 
    }
    if (auth.user.role === "agent") {
      return <AgentDashboard />
    } 
     if (auth.user.role === "manager") {
      return <ManagerDashboard />;
    } 
     if (auth.user.role === "client") {
     return <ClientDashboard />;
    }
  
    return <></>
};

export default RoleBasedRouting;
