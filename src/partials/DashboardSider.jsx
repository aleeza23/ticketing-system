import {Layout, Menu} from "antd";
import React from "react";
import {AiTwotoneHome} from "react-icons/ai";
import {PiUserSwitchFill} from "react-icons/pi";
import {TbReportAnalytics} from "react-icons/tb";
import {FaEnvelope} from "react-icons/fa";




const DashboardSider = ({toggleMenu}) => {
  const {Sider} = Layout;


  return (
    <>
      <Sider className='dashboard-container__sider py-4' collapsed={toggleMenu}>
        {!toggleMenu && (
          <h4 className='constant__heading constant-white ps-3 pb-4'>
            QuickResolve
          </h4>
        )}

        <Menu
          theme='red'
          items={[
            {
              label: "Dashboard",
              key: "dashboard",
              icon: <AiTwotoneHome className='fs-5 me-2 ' />,
            },
            {
              label: "About",
              key: "about",
              icon: <PiUserSwitchFill className='fs-5 me-2  ' />,
            },
            {
              label: "Analytics",
              key: "analytics",
              icon: <TbReportAnalytics className='fs-5 me-2  ' />,
            },
            {
              label: "Tickets",
              key: "tickets",
              icon: <FaEnvelope className='fs-5 me-2 ' />,
            },
          ]}
          className='constant__text '
        />
      </Sider>
    </>
  );
};

export default DashboardSider;
