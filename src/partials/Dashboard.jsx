import {Layout} from "antd";
import React, {useState} from "react";
import "../assets/styles/dashboard.css";
import DashboardSider from "./DashboardSider";
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";

const Dashboard = ({children ,userRole}) => {
  const [toggleMenu, settoggleMenu] = useState(false);


  return (
    <>
      <Layout className='dashboard-container'>
        {/* sider  */}
        <DashboardSider toggleMenu={toggleMenu} />

        {/* header and content layout */}
        <Layout>
          <DashboardHeader userRole={userRole} settoggleMenu={settoggleMenu} toggleMenu={toggleMenu}  />
          <DashboardContent>{children}</DashboardContent>          
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
