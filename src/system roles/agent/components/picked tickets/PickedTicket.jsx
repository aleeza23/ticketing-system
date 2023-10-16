import React from "react";
import BreadCrumbs from "../../../constant/reuseable components/BreadCrumbs";
import Tabel from "../../../constant/reuseable components/Tabel";
import {FiLoader} from "react-icons/fi";
import PickedTicketsList from "./PickedTicketsList";
import {IoCreate, IoHome} from "react-icons/io5";
import useAgentTickets from "../../../Hook/custom hook/useAgentTickets";
import { Outlet } from "react-router-dom";

const PickedTicket = () => {
  const pickedTicketThead = [
    "Title",
    "  Picket At",
    "Priority",
    "CreatedAt",
    "1st SLA",
    "2nd SLA",
    "",
  ];
  const {pickedTicketsList, loading} = useAgentTickets();
  console.log(pickedTicketsList);

  return (
    <>
      <BreadCrumbs
        from={"Agent Dashboard"}
        fromPath={"/agent-dashboard"}
        to={"Picked Ticket"}
        fromIcon={<IoHome className='bread-text' />}
        toIcon={<IoCreate className='bread-text-active' />}
      />

      <Tabel tabelHead={pickedTicketThead}>
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

          {pickedTicketsList?.map((currElm, index) => (
            <PickedTicketsList key={index} currElm={currElm} index={index} />
          ))}
        </tbody>
      </Tabel>

    </>
  );
};

export default PickedTicket;
