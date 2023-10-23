import {Menu} from "antd";
import React from "react";
import {AiTwotoneHome} from "react-icons/ai";
import { BsFolderSymlink, BsFolderSymlinkFill } from "react-icons/bs";
import {BiFolderPlus} from "react-icons/bi";
import {HiUserGroup} from "react-icons/hi";
import {LuFolderInput, LuFolderOutput} from "react-icons/lu";
import { MdCollectionsBookmark } from "react-icons/md";
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
        icon={<AiTwotoneHome className='fs-5 me-1' />}
        onClick={() => navigate("/agent-dashboard")}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item
        className={
          path === "/agent-dashboard/all-ticket"
            ? "ant-menu-item-selected"
            : ""
        }
        key='all-ticket '
        icon={<MdCollectionsBookmark className='fs-5 me-1' />}
        onClick={() => navigate("all-ticket")}
      >
       All Tickets
      </Menu.Item>
      <Menu.Item
        className={
          path === "/agent-dashboard/picked-ticket"
            ? "ant-menu-item-selected"
            : ""
        }
        key='picked-ticket '
        icon={<BiFolderPlus className='fs-5 me-1' />}
        onClick={() => navigate("picked-ticket")}
      >
       Picked Tickets
      </Menu.Item>
      <Menu.Item
        className={
          path === "/agent-dashboard/handover-ticket"
            ? "ant-menu-item-selected"
            : ""
        }
        key='handover-ticket '
        icon={<BsFolderSymlink className='fs-5 me-1' />}
        onClick={() => navigate("handover-ticket")}
      >
       Handover Tickets
      </Menu.Item>
      <Menu.Item
        className={
          path === "/agent-dashboard/assign-ticket"
            ? "ant-menu-item-selected"
            : ""
        }
        key='assign-ticket '
        icon={<LuFolderInput className='fs-5 me-1' />}
        onClick={() => navigate("assign-ticket")}
      >
       Assign Tickets
      </Menu.Item>
      <Menu.Item
        className={
          path === "/agent-dashboard/resolved-ticket"
            ? "ant-menu-item-selected"
            : ""
        }
        key='resolved-ticket '
        icon={<LuFolderOutput className='fs-5 me-1' />}
        onClick={() => navigate("resolved-ticket")}
      >
       Resolved Tickets
      </Menu.Item>
    
      </Menu>
  </>;
};

export default AgentSideNavs;
