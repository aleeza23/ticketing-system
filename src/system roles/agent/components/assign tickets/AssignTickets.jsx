import React from "react";
import BreadCrumbs from "../../../constant/reuseable components/BreadCrumbs";
import {IoCreate, IoHome} from "react-icons/io5";
import Tabel from "../../../constant/reuseable components/Tabel";
import {FiLoader} from "react-icons/fi";
import EscalatedTicketsList from "../../../manager/components/esclaated tickets/EscalatedTicketsList";
import useAgentTickets from "../../../Hook/custom hook/useAgentTickets";

const AssignTickets = () => {
  const {assignTickets, loading} = useAgentTickets();

  const assignTicketThead = [
    "Title",
    "  Picket At",
    "Priority",
    "CreatedAt",
    "1st SLA",
    "2nd SLA",
    "",
  ];
  return (
    <>
      <BreadCrumbs
        from={"Agent Dashboard"}
        fromPath={"/agent-dashboard"}
        to={"Assign Ticket"}
        fromIcon={<IoHome className='bread-text' />}
        toIcon={<IoCreate className='bread-text-active' />}
      />

      <Tabel tabelHead={assignTicketThead}>
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

          {assignTickets?.map((currElm, index) => (
            <EscalatedTicketsList key={index} currElm={currElm} index={index} />
          ))}
        </tbody>
      </Tabel>
    </>
  );
};

export default AssignTickets;
