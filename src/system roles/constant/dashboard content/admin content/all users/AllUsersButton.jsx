import React from "react";
import UserButton from "./UserButton";
import {Space} from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const AllUsersButton = () => {
  const navigate = useNavigate()
  const path = useLocation().pathname;
  
  return (
    <>
      <Space wrap>
        <UserButton onClick={() => navigate('/admin-dashboard/all-users')} className={path === '/admin-dashboard/all-users' ? 'user-btn-Active mb-3' : 'users-btn mb-3'} >All Agents</UserButton>
        <UserButton onClick={() => navigate('/admin-dashboard/all-users/clients')} className={path === '/admin-dashboard/all-users/clients' ? 'user-btn-Active mb-3' : 'users-btn mb-3'}>All Clients</UserButton>
        <UserButton onClick={() => navigate('/admin-dashboard/all-users/admins')} className={path === '/admin-dashboard/all-users/admins' ? 'user-btn-Active mb-3' : 'users-btn mb-3'}>All Admins</UserButton>
        <UserButton onClick={() => navigate('/admin-dashboard/all-users/managers')} className={path === '/admin-dashboard/all-users/managers' ? 'user-btn-Active mb-3' : 'users-btn mb-3'}>All Managers</UserButton>

      </Space>
    </>
  );
};

export default AllUsersButton;
