import React from "react";
import useClientTickets from "../../../Hook/custom hook/useClientTickets";
import {Avatar, Card, List} from "antd";
import {Link} from "react-router-dom";
import BreadCrumbs from "../../../constant/reuseable components/BreadCrumbs";
import {IoCreate, IoHome} from "react-icons/io5";

const ClientResolvedTickets = () => {
  const {resolvedTickets, loading} = useClientTickets();
  return (
    <>
      <BreadCrumbs
        from={"Client Dashboard"}
        fromPath={"/client-dashboard"}
        to={"Resolved Tickets"}
        fromIcon={<IoHome className='bread-text' />}
        toIcon={<IoCreate className='bread-text-active' />}
      />
      <Card title={"Resolved Tickets"} className='mt-3'>
        <List
          itemLayout='horizontal'
          dataSource={resolvedTickets}
          loading={loading}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  />
                }
                title=<Link to={`single-ticket/${item?._id}`}>{item.title}</Link>
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default ClientResolvedTickets;
