import {Layout, Menu} from "antd";
import React from "react";
import SiderMenu from "./SiderMenu";

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

        <SiderMenu />
      </Sider>
    </>
  );
};

export default DashboardSider;
