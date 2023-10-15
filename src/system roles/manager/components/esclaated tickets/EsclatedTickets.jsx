import React from "react";
import BreadCrumbs from "../../../constant/reuseable components/BreadCrumbs";
import {IoCreate, IoHome} from "react-icons/io5";
import Tabel from "../../../constant/reuseable components/Tabel";
import { FiLoader } from "react-icons/fi";
import useEscalateTicket from "../../../Hook/custom hook/useEscalateTicket";
import EscalatedTicketsList from "./EscalatedTicketsList";

const EsclatedTickets = () => {
    const escalatedTicketThead = [
        "Title",
        "  Picket At",
        "Priority",
        "CreatedAt",
        "1st SLA",
        "2nd SLA",
        "",
      ];
      const {loading,escalatedTickets} = useEscalateTicket()
  return (
    <>
      <BreadCrumbs
        from={"Manager Dashboard"}
        fromPath={"/manager-dashboard"}
        to={"Escalate Tickets"}
        fromIcon={<IoHome className='bread-text' />}
        toIcon={<IoCreate className='bread-text-active' />}
      />

<Tabel tabelHead={escalatedTicketThead}>
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

          {escalatedTickets?.map((currElm, index) => (
            <EscalatedTicketsList key={index} currElm={currElm} index={index} />
          ))}
        </tbody>
      </Tabel>
    </>
  );
};

export default EsclatedTickets;
