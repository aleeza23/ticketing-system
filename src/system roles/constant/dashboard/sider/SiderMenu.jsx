import {Menu} from "antd";
import React from "react";
import {AiTwotoneHome} from "react-icons/ai";
import {HiUserGroup} from "react-icons/hi";
import {MdOutlineCreate, MdOutlineCategory} from "react-icons/md";
import {useLocation, useNavigate} from "react-router-dom";


const SiderMenu = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  return (
    <>
      <Menu theme='red' className='constant__text'>
        <Menu.Item
          className={
            path === "/admin-dashboard" ? "ant-menu-item-selected" : ""
          }
          key='dashboard'
          icon={<AiTwotoneHome className='fs-5 me-2' />}
          onClick={() => navigate("/admin-dashboard")}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          className={
            path === "/admin-dashboard/all-users"
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
            path === "/admin-dashboard/create-account"
              ? "ant-menu-item-selected"
              : ""
          }
          key='create-account'
          icon={<MdOutlineCreate className='fs-5 me-2' />}
          onClick={() => navigate("create-account")}
        >
          Create Account
        </Menu.Item>
        <Menu.Item
          className={path === "/admin-dashboard/category" ? "ant-menu-item-selected" : ""}
          key='category'
          icon={<MdOutlineCategory className='fs-5 me-2' />}
          onClick={() => navigate("category")}

        >
          Category
        </Menu.Item>
      </Menu>
    </>
  );
};

export default SiderMenu;
