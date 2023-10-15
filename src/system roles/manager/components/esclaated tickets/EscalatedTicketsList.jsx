import React from "react";
import UserButton from "../../../constant/dashboard content/admin content/all users/UserButton";
import { GoLinkExternal } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const EscalatedTicketsList = ({index , currElm}) => {
  const navigate = useNavigate()

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
            {currElm.secondSLABreach ? (
                <UserButton className={"btn-danger  text-white mb-0"}>
                  Yes
                </UserButton>
              ) : (
                "-"
              )}
            </td>
            <td>
              <GoLinkExternal onClick={() => navigate(`single-ticket/${currElm?._id}`)} style={{color: "#bf00ff", cursor: "pointer" ,}} />
            </td>
          </tr>
        </>
      );
};

export default EscalatedTicketsList;
