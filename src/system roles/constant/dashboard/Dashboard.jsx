import {Layout} from "antd";
import React, {useState} from "react";
import "../../../assets/styles/dashboard.css";
import DashboardSider from "./sider/DashboardSider";
import DashboardHeader from "./header/DashboardHeader";
import DashboardContent from "./content/DashboardContent";

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
