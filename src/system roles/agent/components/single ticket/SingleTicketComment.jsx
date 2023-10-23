import {Avatar, Card, List} from "antd";
import React, {useContext} from "react";
import useSingleTicket from "../../../Hook/custom hook/useSingleTicket";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../../context/authContext";

const SingleTicketComment = ({
  children,
  dataSource,
  loading,
  setmodal,
  setcurrentComment,
  deleteFun,
  firstBtn,
  secBtn,
}) => {
  const {auth} = useContext(AuthContext);

  return (
    <>
      <Card className='mt-3 constant__text' title={children}>
        <List
          itemLayout='horizontal'
          dataSource={dataSource}
          loading={loading}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Link
                  key='list-loadmore-edit'
                  onClick={() => {
                    setmodal(true);
                    setcurrentComment(item);
                  }}
                >
                  {firstBtn}
                </Link>,
                item?.createdBy === auth?.user?._id && (
                  <Link
                    key='list-loadmore-delete'
                    className='text-danger text-decoration-none'
                    onClick={() => deleteFun(item._id)}
                  >
                    {secBtn}
                  </Link>
                ),
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  />
                }
                title={<Link>{item?.createdBy}</Link>}
                description={item?.content}
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default SingleTicketComment;
