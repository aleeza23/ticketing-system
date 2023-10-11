import React from "react";
import useCounter from "../../../../Hook/custom hook/useCounter";
import {GoLinkExternal} from "react-icons/go";
import UserButton from "../../admin content/all users/UserButton";

const PickedTicketsList = ({index, currElm}) => {
  console.log(currElm);
  const picketAtTime = currElm.pickedAt;
  const {min, sec} = useCounter(picketAtTime);


  return (
    <>
      <tr key={index} className='constant__text'>
        <th scope='row'>{++index}</th>
        <td>{currElm?.title}</td>
        <td>{currElm?.pickedAt?.slice(0, 10)}</td>
        <td>{currElm?.priority}</td>
        <td>{currElm?.createdAt?.slice(0, 10)}</td>
        <td>
          {currElm.firstSLABreach ? (
            <UserButton className={"btn-danger  text-white mb-0"}>
              Yes
            </UserButton>
          ) : (
            "-"
          )}
        </td>
        <td>
          <span className="timer_text">
            {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
          </span>
        </td>
        <td>
          <GoLinkExternal style={{color: "#bf00ff", cursor: "pointer" ,}} />
        </td>
      </tr>
    </>
  );
};

export default PickedTicketsList;
