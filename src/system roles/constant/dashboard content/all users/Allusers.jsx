import React, {useContext, useState} from "react";
import {Avatar, Card, List} from "antd";
import AllUsersButton from "./AllUsersButton";
import {Link, Outlet} from "react-router-dom";
import AppModal from "../AppModal";
import Button from "../../../../partials/Button";
import useHandleUsers from "../../../Hook/custom hook/useHandleUsers";

const Allusers = ({tittle, API}) => {
  const [modal, setmodal] = useState(false);
  const [editCurrentUser, seteditCurrentUser] = useState({});
  const {usersData, loading ,removeUser} = useHandleUsers(API);

  return (
    <>
      <Card title={tittle}>
        {/* buttons */}
        <AllUsersButton />
        <List
          itemLayout='horizontal'
          dataSource={usersData}
          loading={loading}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Link
                  key='list-loadmore-edit'
                  onClick={() => {
                    setmodal(true);
                    seteditCurrentUser(item);
                  }}
                >
                  edit
                </Link>,
                <Link
                  key='list-loadmore-delete'
                  className='text-danger text-decoration-none'
                  onClick={() => removeUser(item._id)}
                >
                  Delete
                </Link>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  />
                }
                title={<Link>{item.name}</Link>}
                description={item.role}
              />
            </List.Item>
          )}
        />
      </Card>

      <AppModal
        title={editCurrentUser.name}
        setmodal={setmodal}
        modal={modal}
        footer={null}
      >
        <label className='fw-bold mb-1'>Role</label>
        <input
          type='text'
          className='form-control'
          value={editCurrentUser.role}
        />
        <Button className='create-account__btn px-4 py-1 fw-bold  mt-3 ms-auto'>
          Edit
        </Button>
      </AppModal>
    </>
  );
};

export default Allusers;
