import { Menu } from "antd";
import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ManagerSideNavs = ({path}) => {
  const navigate = useNavigate();

    return (
        <>
        <Menu theme='red' className='constant__text'> 
          <Menu.Item
            className={
              path === "/manager-dashboard" ? "ant-menu-item-selected" : ""
            }
            key='manager-dashboard'
            icon={<AiTwotoneHome className='fs-5 me-2' />}
            onClick={() => navigate("/manager-dashboard")}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            className={
              path === "/manager-dashboard/all-users"
                ? "ant-menu-item-selected"
                : ""
            }
            key='all-users'
            icon={<HiUserGroup className='fs-5 me-2' />}
            onClick={() => navigate("all-users")}
          >
            All Users
          </Menu.Item>
          <Menu.Item
            className={
              path === "/manager-dashboard/escalated-ticket"
                ? "ant-menu-item-selected"
                : ""
            }
            key='escalated-ticket'
            icon={<HiUserGroup className='fs-5 me-2' />}
            onClick={() => navigate("escalated-ticket")}
          >
            Escalate Tickets
          </Menu.Item>
          
          </Menu> 
        </>
      );
};

export default ManagerSideNavs;
