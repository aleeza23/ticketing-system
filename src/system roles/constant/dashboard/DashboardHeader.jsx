import {Avatar, Dropdown, Input, Layout} from "antd";
import React, { useContext } from "react";
import {RxHamburgerMenu} from "react-icons/rx";
import {IoLogOutOutline} from "react-icons/io5";
import {BsPersonFillGear} from "react-icons/bs";
import {useState} from "react";
import AppModal from "../dashboard content/AppModal";
import Button from "../../../partials/Button";
import { AuthContext } from "../../../context/authContext";

const DashboardHeader = ({settoggleMenu, toggleMenu}) => {
  const {Header} = Layout;
  const [modal, setmodal] = useState(false);
  const {auth} = useContext(AuthContext);

  const items = [
    {
      key: "1",
      label: <span>Profile</span>,
      icon: <BsPersonFillGear className='icon-header' />,
      onClick: () => setmodal(true),
    },
    {
      key: "2",
      label: <span>Logout</span>,
      icon: <IoLogOutOutline className='icon-header' />,
    },
  ];
  return (
    <>
      <Header className='dashboard-container__header px-3'>
        <div className='header__content'>
          <div className='header-left-side'>
            <RxHamburgerMenu
              className='constant__heading constant-white sider__toggle-btn fs-2'
              onClick={() => settoggleMenu(!toggleMenu)}
            />

          </div>
          <strong className="text-white text-center fs-4 constant__text header-welcome-text">Welcom { auth?.user?.name} </strong>


          <div className='header-right-side'>
            <Dropdown
              menu={{items}}
              placement='bottomRight'
              arrow={{pointAtCenter: true}}
            >
              <Avatar className='bg-light text-dark constant__text' size={40}>
                {auth?.user?.name.charAt(0)}
              </Avatar>
            </Dropdown>
          </div>
        </div>
      </Header>

      <AppModal title='Edit Profile' setmodal={setmodal} modal={modal} footer={null}>
        <input type='file' accept='images/*' className='form-control' />
        <Button className='create-account__btn px-4 py-1 fw-bold  mt-3 ms-auto'>Update</Button>
      </AppModal>
    </>
  );
};

export default DashboardHeader;
