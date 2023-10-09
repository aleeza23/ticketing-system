import React from "react";
import BreadCrumbs from "../../../reuseable components/BreadCrumbs";
import {IoCreate, IoHome} from "react-icons/io5";
import Tabel from "../../../reuseable components/Tabel";
import useHandleTicket from "../../../../Hook/custom hook/useHandleTicket";
import { FiLoader } from "react-icons/fi";
import CounterTabel from "../../../reuseable components/CounterTabel";


const AllTickets = () => {
    const pickedTicketThead = ['Title' , '  Description' , 'Priority' , 'Created At' , '1st SLA' , '2st SLA' , '' ]
    const {ticketsList,loading} = useHandleTicket('http://localhost:9000/api/by/agent/category/list')
    console.log(ticketsList);


  return (
    <>
      <BreadCrumbs
        from={"Agent Dashboard"}
        fromPath={"/agent-dashboard"}
        to={"Picked Tickets"}
        fromIcon={<IoHome className='bread-text' />}
        toIcon={<IoCreate className='bread-text-active' />}
      />

      <Tabel tabelHead={pickedTicketThead}>
      <tbody>          
          {loading  ? <tr>
            <td className="text-center" colSpan={8}><FiLoader className='form-submitting my-3 tabel-spinner' /></td>
          </tr> : ''}

            {ticketsList?.map((currElm, index) => <CounterTabel key={index} currElm={currElm} index={index} /> )}
          </tbody>
      </Tabel> 
    </>
  );
};

export default AllTickets;
