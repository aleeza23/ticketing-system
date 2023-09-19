import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/authentication/signup/Signup";
import Login from "./components/authentication/signin/Login";
import ForgetPassword from "./components/authentication/forgot-password/ForgetPassword";
import AdminDashboard from "./system roles/admin/components/admin dashboard/AdminDashboard";
import ManagerDashboard from "./system roles/manager/components/ManagerDashboard";
import AgentDashboard from "./system roles/agent/components/agent dashboard/AgentDashboard";
import ClientDashboard from "./system roles/client/components/client dashboard/ClientDashboard";
import RoleBasedRouting from "./components/protected routes/RoleBasedRouting";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/forgot-password' element={<ForgetPassword />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/manager-dashboard' element={<ManagerDashboard />} />
        <Route path='/agent-dashboard' element={<AgentDashboard />} />
        <Route path='/client-dashboard' element={<ClientDashboard />} />
        <Route path='/dashboard' element={<RoleBasedRouting />}></Route> 

      </Routes>
    </>
  );
};

export default App;
