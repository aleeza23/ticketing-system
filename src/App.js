import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/authentication/signup/Signup";
import Login from "./components/authentication/signin/Login";
import ForgetPassword from "./components/authentication/forgot-password/ForgetPassword";
import AdminDashboard from "./system roles/admin/admin dashboard/AdminDashboard";
import ManagerDashboard from "./system roles/manager/manager dashboard/ManagerDashboard";
import AgentDashboard from "./system roles/agent/agent dashboard/AgentDashboard";
import ClientDashboard from "./system roles/client/client dashboard/ClientDashboard";
import RoleBasedRouting from "./components/protected routes/RoleBasedRouting";
import AdminAllUsers from "./system roles/admin/components/AdminAllUsers";
import Dashboard from "./system roles/constant/dashboard content/admin content/AdminIndex";
import AllUsersAgent from "./system roles/constant/dashboard content/admin content/all users/AllUsersAgent";
import AllUsersAdmin from "./system roles/constant/dashboard content/admin content/all users/AllUsersAdmin";
import AllUsersManager from "./system roles/constant/dashboard content/admin content/all users/AllUsersManager";
import AllUsersClient from "./system roles/constant/dashboard content/admin content/all users/AllUsersClient";
import CreateAccount from "./system roles/constant/dashboard content/admin content/create account/CreateAccount";
import Category from "./system roles/constant/dashboard content/admin content/category/Category.jsx";
import ClientIndex from "./system roles/constant/dashboard content/client content/ClientIndex";
import SubmitTicket from "./system roles/constant/dashboard content/client content/submit ticket/SubmitTicket";
import OpenTicket from "./system roles/constant/dashboard content/client content/open ticket/OpenTicket";
import AdminIndex from "./system roles/constant/dashboard content/admin content/AdminIndex";
import AgentIndex from "./system roles/constant/dashboard content/agent content/AgentIndex";
import AllTickets from "./system roles/constant/dashboard content/agent content/all tickets/AllTickets";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/forgot-password' element={<ForgetPassword />} />

        {/* admin dashboard routing */}
        <Route path='/admin-dashboard' element={<AdminDashboard />}>
          <Route index element={<AdminIndex />} />
          <Route path='create-account' element={<CreateAccount />} />
          <Route path='category' element={<Category />} />

          {/* all users routing */}
          <Route path='all-users' element={<AdminAllUsers />}>
            <Route index element={<AllUsersAgent />} />
            <Route path='clients' element={<AllUsersClient />} />
            <Route path='admins' element={<AllUsersAdmin />} />
            <Route path='managers' element={<AllUsersManager />} />
          </Route>

        </Route>

        {/* client dashboard routing */}
        <Route path='/client-dashboard' element={<ClientDashboard />}>
        <Route index element={<ClientIndex />} />
        <Route path='submit-ticket' element={<SubmitTicket />} />
        <Route path='open-ticket' element={<OpenTicket />} />          
        </Route>

        {/* agent dashboard routing */}
        <Route path='/agent-dashboard' element={<AgentDashboard />}>
        <Route index element={<AgentIndex />} />
        <Route path='all-ticket' element={<AllTickets />} />

        </Route>


        <Route path='/manager-dashboard' element={<ManagerDashboard />} />
        <Route path='/protected-routes' element={<RoleBasedRouting />} />
      </Routes>
    </>
  );
};

export default App;
