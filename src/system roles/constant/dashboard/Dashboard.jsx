import {Drawer, Grid, Layout} from "antd";
import React, {useState} from "react";
import "../../../assets/styles/dashboard.css";
import DashboardSider from "./sider/DashboardSider";
import DashboardHeader from "./header/DashboardHeader";
import DashboardContent from "./content/DashboardContent";
import {SiderContext} from "antd/es/layout/Sider";
import SiderMenu from "./sider/SiderMenu";

const Dashboard = ({children, userRole}) => {
  const [toggleMenu, settoggleMenu] = useState(false);
  const {useBreakpoint} = Grid;
  const breakpoints = useBreakpoint();
  const onClose = () => settoggleMenu(false);
  return (
    <>
      <Layout className='dashboard-container'>
        {/* sider  */}
        {breakpoints.md && <DashboardSider  toggleMenu={toggleMenu} />}
        {/* sider for small screen */}
        {!breakpoints.md && (
            <Drawer
              title='QuickResolve'
              placement='left'
              onClose={onClose}
              open={toggleMenu}
              closable={true}
              style={{width: "290px"}}
            >
              <SiderMenu toggleMenu={toggleMenu} />
            </Drawer>
          )}
        {/* header and content layout */}
        <Layout>
          <DashboardHeader
            userRole={userRole}
            settoggleMenu={settoggleMenu}
            toggleMenu={toggleMenu}
          />          
          <DashboardContent  >{children}</DashboardContent>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
