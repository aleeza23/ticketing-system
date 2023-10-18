import React from "react";
import BreadCrumbs from "../../../constant/reuseable components/BreadCrumbs";
import {IoCreate, IoHome} from "react-icons/io5";
import useSingleTicket from "../../../Hook/custom hook/useSingleTicket";
import Tabel from "../../../constant/reuseable components/Tabel";
import {FiLoader} from "react-icons/fi";
import useAgentTickets from "../../../Hook/custom hook/useAgentTickets";

const ResolvedTickets = () => {
  const {allResolved, loading} = useAgentTickets();
  const ResolvedTicketThead = [
    "Title",
    "Description",
    "Picked By",
    "Priority",
    "Resolved By",
    "Resolved At",
    "Status",
    
  ];
  return (
    <>
      <BreadCrumbs
        from={"Agent Dashboard"}
        fromPath={"/agent-dashboard"}
        to={"Resolved Ticket"}
        fromIcon={<IoHome className='bread-text' />}
        toIcon={<IoCreate className='bread-text-active' />}
      />
      <Tabel tabelHead={ResolvedTicketThead}>
        <tbody>
          {loading ? (
            <tr>
              <td className='text-center' colSpan={8}>
                <FiLoader className='form-submitting my-3 tabel-spinner' />
              </td>
            </tr>
          ) : (
            ""
          )}

          {allResolved?.map((currElm, index) => (
            <tr key={index} className='constant__text'>
              <th scope='row'>{++index}</th>
              <td>{currElm?.title}</td>
              <td>{currElm?.description}</td>
              <td>{currElm?.pickedBy}</td>
              <td>{currElm?.priority}</td>
              <td>{currElm?.resolvedBy}</td>
              <td>{currElm?.resolvedAt?.slice(0, 10)}</td>
              <td>{currElm?.status}</td>
            </tr>
          ))}
        </tbody>
      </Tabel>
    </>
  );
};

export default ResolvedTickets;
