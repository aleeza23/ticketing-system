import React from "react";
import BreadCrumbs from "../../../reuseable components/BreadCrumbs";
import { IoCreate, IoHome } from "react-icons/io5";
import Tabel from "../../../reuseable components/Tabel";
import useHandleTicket from "../../../../Hook/custom hook/useHandleTicket";
import {FiLoader} from "react-icons/fi";
import {GoLinkExternal} from "react-icons/go";
import { TbH2 } from "react-icons/tb";


const OpenTicket = () => {
  const openTicketThead = ['Title' , 'Description' , 'Category' , 'Priority' , 'Created At' , '']
const {ticketsList,loading} = useHandleTicket()
console.log(ticketsList);


  return <>
    <BreadCrumbs
        from={"Client Dashboard"}
        fromPath={"/client-dashboard"}
        to={"Open Ticket"}
        fromIcon={<IoHome className='bread-text' />}
        toIcon={<IoCreate className='bread-text-active' />}
      />

      <Tabel tabelHead={openTicketThead}>
      <tbody>          
          {loading  ? <tr>
            <td className="text-center" colSpan={7}><FiLoader className='form-submitting my-3 tabel-spinner' /></td>
          </tr> : ''}

            {ticketsList?.map((currElm, index) => (
              <tr key={index} className='constant__text'>
                <th scope='row'>{++index}</th>
                <td>{currElm.title}</td>
                <td>{currElm.description}</td>
                <td>{currElm.category?.name}</td>
                <td>{currElm.priority}</td>
                <td>{currElm.createdAt.slice(0, 10)}</td>
                <td>
                  <GoLinkExternal
                    style={{color: "#bf00ff", cursor: "pointer"}}
                  />
                </td>
              </tr>
            ))}
          </tbody>
      </Tabel>
  </>;
};

export default OpenTicket;
