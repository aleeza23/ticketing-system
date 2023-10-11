import {Menu} from "antd";
import React from "react";
import {AiTwotoneHome} from "react-icons/ai";
import {HiUserGroup} from "react-icons/hi";
import {useLocation, useNavigate} from "react-router-dom";


const AgentSideNavs = ({path}) => {
  const navigate = useNavigate();

  return <>
     <Menu theme='red' className='constant__text'> 
      <Menu.Item
        className={
          path === "/agent-dashboard" ? "ant-menu-item-selected" : ""
        }
        key='admin-dashboard'
        icon={<AiTwotoneHome className='fs-5 me-2' />}
        onClick={() => navigate("/agent-dashboard")}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item
        className={
          path === "/agent-dashboard/picked-ticket"
            ? "ant-menu-item-selected"
            : ""
        }
        key='picked-ticket '
        icon={<HiUserGroup className='fs-5 me-2' />}
        onClick={() => navigate("picked-ticket")}
      >
       Picked Tickets
      </Menu.Item>
      </Menu>
  </>;
};

export default AgentSideNavs;
