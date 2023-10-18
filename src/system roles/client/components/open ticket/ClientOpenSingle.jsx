import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import useClientTickets from "../../../Hook/custom hook/useClientTickets";
import {Card, Descriptions, Tag} from "antd";
import UserButton from "../../../admin/components/all users/UserButton";
import {FiLoader} from "react-icons/fi";
import axios from "axios";
import {AuthContext} from "../../../../context/authContext";
import toast from "react-hot-toast";

const ClientOpenSingle = () => {
  const {id} = useParams();
  //   const {singleOpenTicket, singleLoading} = useClientTickets(id);
  const [singleOpenTicket, setsingleOpenTicket] = useState([]);
  const [singleLoading, setsingleLoading] = useState(false);
  const {auth} = useContext(AuthContext);

  //   console.log(singleOpenTicket, "single ticket for client");

    //api call to get single tickets
  useEffect(() => {
    setsingleLoading(true);
    axios
      .get(`http://localhost:9000/api/_/single/${id}`, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        // console.log(res);
        setsingleOpenTicket(res.data.singleTicket);
        setsingleLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to get client single ticket");
        setsingleLoading(false);
      });
  }, [auth && auth.token]);

  return (
    <Card className=' mt-3 shadow-sm ' title='Ticket Details'>
      {singleLoading ? (
        <div className='text-center'>
          <FiLoader className='form-submitting my-3 tabel-spinner d-spinner ' />
        </div>
      ) : (
        <>
          <Descriptions
            title={singleOpenTicket?._id}
            layout='vertical'
            bordered
          >
            <Descriptions.Item label='CreatedAt'>
              {singleOpenTicket?.createdAt?.slice(0, 10)}
            </Descriptions.Item>
            <Descriptions.Item label='Priority'>
              {singleOpenTicket?.priority}
            </Descriptions.Item>
            <Descriptions.Item label='Category'>
              {singleOpenTicket?.category?.name}
            </Descriptions.Item>
            <Descriptions.Item label='Status'>
              <UserButton>{singleOpenTicket?.status}</UserButton>
            </Descriptions.Item>
            {singleOpenTicket?.pickedBy && (
              <Descriptions.Item label='Agent'>
                {singleOpenTicket?.pickedBy?.name}
              </Descriptions.Item>
            )}
            {/* <br /> */}
            <Descriptions.Item label='Title'>
              {singleOpenTicket?.title}
            </Descriptions.Item>
            <Descriptions.Item label='Description'>
              {singleOpenTicket?.description}
            </Descriptions.Item>
          </Descriptions>
        </>
      )}
    </Card>
  );
};

export default ClientOpenSingle;
