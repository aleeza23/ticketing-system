import React from "react";
import BreadCrumbs from "../../../constant/reuseable components/BreadCrumbs";
import { IoCreate, IoHome } from "react-icons/io5";
import Tabel from "../../../constant/reuseable components/Tabel";
import { FiLoader } from "react-icons/fi";
import EscalatedTicketsList from "../../../manager/components/esclaated tickets/EscalatedTicketsList";
import useAgentTickets from "../../../Hook/custom hook/useAgentTickets";

const HandoverTickets = () => {
  const {handoverTickets,loading} = useAgentTickets()
  const handoverTicketThead = [
    "Title",
    "  Picket At",
    "Priority",
    "CreatedAt",
    "1st SLA",
    "2nd SLA",
    "",
  ];
  return <>
     <BreadCrumbs
        from={"Agent Dashboard"}
        fromPath={"/agent-dashboard"}
        to={"Handover Ticket"}
        fromIcon={<IoHome className='bread-text' />}
        toIcon={<IoCreate className='bread-text-active' />}
      />
      <Tabel tabelHead={handoverTicketThead}>
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

          {handoverTickets?.map((currElm, index) => (
            <EscalatedTicketsList key={index} currElm={currElm} index={index} />
          ))}
        </tbody>
      </Tabel>
  </>;
};

export default HandoverTickets;
