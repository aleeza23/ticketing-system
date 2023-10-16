import React, {useEffect, useState} from "react";
import {GoLinkExternal} from "react-icons/go";
import useCounter from "../../../Hook/custom hook/useCounter";
import UserButton from "../../../admin/components/all users/UserButton";
import useAgentTickets from "../../../Hook/custom hook/useAgentTickets";

const AllTicketsList = ({index, currElm}) => {
  console.log(currElm);
  const createdAtTime = currElm?.createdAt;
  const {min, sec} = useCounter(createdAtTime);
  const {handlePickTicket} = useAgentTickets();

  return (
    <>
      <tr key={index} className='constant__text'>
        <th scope='row'>{++index}</th>
        <td>{currElm?.title}</td>
        <td>{currElm?.category?.name}</td>
        <td>{currElm?.priority}</td>
        <td>{currElm?.createdAt?.slice(0, 10)}</td>
        <td>
          {/* {min > 10 ? (
            <UserButton className={"btn-danger text-white mb-0"}>
              Yes
            </UserButton>
          ) : (
            <>
            </>
          )} */}
          <UserButton
            className={min > 10 ? "btn-danger text-white" : "timer_text bg-white border-0"}
          >
            {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
          </UserButton>
        </td>
        <td>
          <UserButton className='purple__btn rounded-pill' onClick={() => handlePickTicket(currElm?._id)}>Pick</UserButton>
        </td>
      </tr>
    </>
  );
};

export default AllTicketsList;
