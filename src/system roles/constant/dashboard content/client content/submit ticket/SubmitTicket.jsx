import React, {useState} from "react";
import BreadCrumbs from "../../../reuseable components/BreadCrumbs";
import {IoCreate, IoHome} from "react-icons/io5";
import CreateAccountForm from "../../admin content/create account/CreateAccountForm";
import {useFormHandler} from "../../../../../components/authentication/constant/useFormHandler";
import useClientTickets from "../../../../Hook/custom hook/useClientTickets";

const SubmitTicket = () => {
  const [ticketSubmitData, setticketSubmitData] = useState(TICKET_SUBMIT_DATA);
  const {handleChange, handleFocus, inputsData, error, focusedInput, handletogglePassword, togglePassword,} = useFormHandler({
    description: "",    
    title: "",
    priority: "",
    category : ""
  });

  //custom hook for submit ticket
  const {handleSubmitTicket} = useClientTickets(inputsData)
  
  return (
    <>
      <BreadCrumbs
        from={"Client Dashboard"}
        fromPath={"/client-dashboard"}
        to={"Submit Ticket"}
        fromIcon={<IoHome className='bread-text' />}
        toIcon={<IoCreate className='bread-text-active' />}
      />

      <CreateAccountForm
        inputsData={ticketSubmitData}
        handleChange={handleChange}
        handleSubmit={handleSubmitTicket}
        error={error}
        values={inputsData}
        focusedInput={focusedInput}
        handletogglePassword={handletogglePassword}
        togglePassword={togglePassword}
        handleFocus={handleFocus}
        title={'Add Ticket'}
        buttonText={'Submit Ticket'}
      />
    </>
  );
};

export default SubmitTicket;
const TICKET_SUBMIT_DATA = [
  {
    label: "Title",
    name: "title",
    type: "text",
    placeholder: "Enter title...",
  },
  {
    label: "Description",
    type: "text",
    name: "description",
    placeholder: "Enter description...",
  },
  {
    label: "Choose Priority",
    name: "priority",
    type: "select",
    options: [
      {name: "Low", _id: "Low"},
      {name: "Medium", _id: "Medium"},
      {name: "High", _id: "High"},
      {name: "Critical", _id: "Critical"},
    ],
  },
  {
    label: "Choose Category",
    name: "category",
    type: "select",
    options: [],
  },
];
