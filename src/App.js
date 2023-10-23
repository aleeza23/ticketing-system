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
import AdminAllUsers from "./system roles/admin/components/all users/AdminAllUsers";
import AllUsersAgent from "./system roles/admin/components/all users/AllUsersAgent";
import AllUsersAdmin from "./system roles/admin/components/all users/AllUsersAdmin";
import AllUsersManager from "./system roles/admin/components/all users/AllUsersManager";
import AllUsersClient from "./system roles/admin/components/all users/AllUsersClient";
import CreateAccount from "./system roles/admin/components/create account/CreateAccount";
import Category from "./system roles/admin/components/category/Category";
import ClientIndex from "./system roles/client/components/client index/ClientIndex";
import SubmitTicket from "./system roles/client/components/submit ticket/SubmitTicket";
import OpenTicket from "./system roles/client/components/open ticket/OpenTicket";
import AdminIndex from "./system roles/admin/components/admin index/AdminIndex";
import AgentIndex from "./system roles/agent/components/agent index/AgentIndex";
import AllTickets from "./system roles/agent/components/all tickets/AllTickets";
import PickedTicket from "./system roles/agent/components/picked tickets/PickedTicket";
import SingleTicket from "./system roles/agent/components/single ticket/SingleTicket";
import ManagerAllUsers from "./system roles/manager/components/all users/ManagerAllUsers";
import EsclatedTickets from "./system roles/manager/components/esclaated tickets/EsclatedTickets";
import ManagerIndex from "./system roles/manager/components/manager index/ManagerIndex";
import HandoverTickets from "./system roles/agent/components/handover tickets/HandoverTickets";
import AssignTickets from "./system roles/agent/components/assign tickets/AssignTickets";
import ResolvedTickets from "./system roles/agent/components/resolved tickets/ResolvedTickets";
import HandOverSingle from "./system roles/agent/components/handover tickets/HandOverSingle";
import EscalatedSingle from "./system roles/manager/components/esclaated tickets/EscalatedSingle";
import ClientResolvedTickets from "./system roles/client/components/resolved ticket/ClientResolvedTickets";
import ClientResolvedSingle from "./system roles/client/components/resolved ticket/ClientResolvedSingle";
import ClientOpenSingle from "./system roles/client/components/open ticket/ClientOpenSingle";
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
        <Route path='open-ticket/single-ticket/:id' element={<ClientOpenSingle />}/>
        <Route path='resolved-ticket' element={<ClientResolvedTickets />} />          
        <Route path='resolved-ticket/single-ticket/:id' element={<ClientResolvedSingle />}/> 

        </Route>

        {/* agent dashboard routing */}
        <Route path='/agent-dashboard' element={<AgentDashboard />}>
        <Route index element={<AgentIndex />} />
        <Route path="all-ticket" element={<AllTickets />} />
        <Route path='picked-ticket' element={<PickedTicket />}/>
        <Route path='picked-ticket/single-ticket/:id' element={<SingleTicket />}/> 
        <Route path='handover-ticket' element={<HandoverTickets />}/>
        <Route path='handover-ticket/single-ticket/:id' element={<HandOverSingle />}/> 
        <Route path='assign-ticket' element={<AssignTickets />}/>
        <Route path='assign-ticket/single-ticket/:id' element={<HandOverSingle />}/> 
        <Route path='resolved-ticket' element={<ResolvedTickets />}/>


        </Route>

        {/* manager dashboard routing */}
        <Route path='/manager-dashboard' element={<ManagerDashboard />}> 
        <Route index element={<ManagerIndex />} />
        <Route path='escalated-ticket' element={<EsclatedTickets />} />
        <Route path='escalated-ticket/single-ticket/:id' element={<EscalatedSingle />}/>      

        <Route path='all-users' element={<ManagerAllUsers />}>
        <Route index element={<AllUsersAgent />} />
        <Route path='clients' element={<AllUsersClient />} />
        </Route>
        </Route>

        <Route path='/protected-routes' element={<RoleBasedRouting />} />
      </Routes>
    </>
  );
};

export default App;
