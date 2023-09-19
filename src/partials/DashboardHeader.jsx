import {Avatar, Input, Layout} from "antd";
import React from "react";
import {RxHamburgerMenu} from "react-icons/rx";

const DashboardHeader = ({settoggleMenu, toggleMenu,userRole}) => {
  const {Header} = Layout;

  return (
    <>
      <Header className='dashboard-container__header px-3'>
        <div className='header__content'>
        <div className="header-left-side">
        <RxHamburgerMenu
            className='constant__heading constant-white sider__toggle-btn fs-2'
            onClick={() => settoggleMenu(!toggleMenu)}
          />
          {/* <h3 className="constant__heading constant-white d-inline">Dashboard</h3> */}

        </div>  


          <div className="header-right-side">
          <Avatar className="bg-light text-dark constant__text" size={40}>{userRole}</Avatar>  
          </div>
        </div>
      </Header>
    </>
  );
};

export default DashboardHeader;
