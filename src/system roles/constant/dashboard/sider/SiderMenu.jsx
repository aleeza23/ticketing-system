import {Menu} from "antd";
import React, {useContext} from "react";
import {AuthContext} from "../../../../context/authContext";
import AdminSideNavs from "./AdminSideNavs";
import ClientSideNavs from "./ClientSideNavs";
import { useLocation, useNavigate } from "react-router-dom";
import AgentSideNavs from "./AgentSideNavs";
import ManagerSideNavs from "./ManagerSideNavs";


const SiderMenu = () => {
  const {auth} = useContext(AuthContext);
  const path = useLocation().pathname;

  return (
    <>
    {/* admin side menu */}
        {auth && auth?.user && auth?.user?.role === "admin" && (
          <>
            <AdminSideNavs path={path}/>
          </>
        )}

        {/* client side menu */}
        {auth && auth?.user && auth?.user?.role === "client" && (
          <>
            <ClientSideNavs path={path} />
          </>
        )}

         {/* agent side menu */}
         {auth && auth?.user && auth?.user?.role === "agent" && (
          <>
            <AgentSideNavs path={path} />
          </>
        )}

          {/* manager side menu */}
          {auth && auth?.user && auth?.user?.role === "manager" && (
          <>
            <ManagerSideNavs path={path} />
          </>
        )}
      
    </>
  );
};

export default SiderMenu;
