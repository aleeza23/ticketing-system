import React from "react";
import BreadCrumbs from "../../../constant/reuseable components/BreadCrumbs";
import {IoCreate, IoHome} from "react-icons/io5";
import Tabel from "../../../constant/reuseable components/Tabel";
import { FiLoader } from "react-icons/fi";
import AllTicketsList from "./AllTicketsList";
import useAgentTickets from "../../../Hook/custom hook/useAgentTickets";


const AllTickets = () => {
    const AllTicketThead = ['Title' , '  Category' , 'Priority' , 'Created At' , 'Timer' , '' ]
    const { ticketsList,loading} = useAgentTickets()
    console.log(ticketsList);


  return (
    <>
      <BreadCrumbs
        from={"Agent Dashboard"}
        fromPath={"/agent-dashboard"}       
      />

      <Tabel tabelHead={AllTicketThead}>
      <tbody>          
          {loading  ? <tr>
            <td className="text-center" colSpan={8}><FiLoader className='form-submitting my-3 tabel-spinner' /></td>
          </tr> : ''}

            {ticketsList?.map((currElm, index) => <AllTicketsList key={index} currElm={currElm} index={index} /> )}
          </tbody>
      </Tabel> 
    </>
  );
};

export default AllTickets;
