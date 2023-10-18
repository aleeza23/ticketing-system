import {Menu} from "antd";
import React from "react";
import {AiTwotoneHome} from "react-icons/ai";
import {HiUserGroup} from "react-icons/hi";
import {MdOutlineCreate, MdOutlineCategory} from "react-icons/md";
import {useLocation, useNavigate} from "react-router-dom";

const ClientSideNavs = ({path}) => {
  const navigate = useNavigate();


  return (
    <>
     <Menu theme='red' className='constant__text'>        
        <Menu.Item
        className={path === "/client-dashboard" ? "ant-menu-item-selected" : ""}
        key='client-dashboard'
        icon={<AiTwotoneHome className='fs-5 me-2' />}
        onClick={() => navigate("/client-dashboard")}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item
        className={
          path === "/client-dashboard/submit-ticket"
            ? "ant-menu-item-selected"
            : ""
        }
        key='submit-ticket'
        icon={<HiUserGroup className='fs-5 me-2' />}
        onClick={() => navigate("submit-ticket")}
      >
        Submit Ticket
      </Menu.Item>
      <Menu.Item
        className={
          path === "/client-dashboard/open-ticket"
            ? "ant-menu-item-selected"
            : ""
        }
        key='open-ticket'
        icon={<MdOutlineCreate className='fs-5 me-2' />}
        onClick={() => navigate("open-ticket")}
      >
        Open Ticket
      </Menu.Item>
      <Menu.Item
        className={
          path === "/client-dashboard/resolved-ticket"
            ? "ant-menu-item-selected"
            : ""
        }
        key='resolved-ticket '
        icon={<HiUserGroup className='fs-5 me-1' />}
        onClick={() => navigate("resolved-ticket")}
      >
       Resolved Tickets
      </Menu.Item>
      </Menu>
    </>
  );
};

export default ClientSideNavs;
