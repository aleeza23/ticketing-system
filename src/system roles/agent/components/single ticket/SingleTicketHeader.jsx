import React, {useState} from "react";
import Button from "../../../../partials/Button";
import AppModal from "../../../constant/reuseable components/AppModal";
import useSingleTicket from "../../../Hook/custom hook/useSingleTicket";

const SingleTicketHeader = ({setmodal, modal, id}) => {
  const {reason , setreason,escalateTicket} = useSingleTicket(id)

  return (
    <>
      <div className='d-flex justify-content-between mt-5 '>
        <h4 className='constant__text fw-bold'>{id}</h4>
        <Button
          className='purple__btn px-4 py-2 fw-bold '
          onClick={() => setmodal(true)}
        >
          Escalate Ticket
        </Button>
      </div>

      <AppModal
        title='Reason, Why are you escalating ticket?'
        setmodal={setmodal}
        modal={modal}
        footer={null}
        width={1000}
      >
        <textarea
          type='text'
          rows={2}
          className='form-control focused'
          placeholder='Give reason...'
          value={reason}
          onChange={(e) => setreason(e.target.value)}
        />
        <Button className='purple__btn px-4 py-2 fw-bold mt-2' onClick={escalateTicket}>Submit</Button>
      </AppModal>
    </>
  );
};

export default SingleTicketHeader;
