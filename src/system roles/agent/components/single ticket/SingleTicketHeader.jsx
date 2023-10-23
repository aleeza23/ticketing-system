import React, {useState} from "react";
import Button from "../../../../partials/Button";
import AppModal from "../../../constant/reuseable components/AppModal";
import useSingleTicket from "../../../Hook/custom hook/useSingleTicket";
import {IoCheckmarkDoneOutline} from "react-icons/io5";
import HandOverModal from "./HandOverModal";
import EscalateModal from "./EscalateModal";
import { useParams } from "react-router-dom";

const SingleTicketHeader = ({id, from, single}) => {
  // const { id} = useParams()
  const {
    reason,
    setreason,
    escalateTicket,
    resolveTicket,
    handoverTicket,
    assignTicket,
    handoverReason,
    sethandoverReason,
    setselectAgent,
    selectAgent,
  } = useSingleTicket(id);
  const [escalatemodal, setescalatemodal] = useState(false);
  const [handoverModal, sethandoverModal] = useState(false);

  return (
    <>
    <div className="row">
      <div className="col-12 col-md-6">
        <div className=' mt-5 '>
        <h4 className='constant__text fw-bold'>{id}</h4>
        </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-end my-2  mt-md-5">
          {from === "manager" && (
            <Button
              className={"purple__btn px-4 py-2 fw-bold me-2"}
              onClick={() => sethandoverModal(true)}
            >
              Assign Ticket
            </Button>
          )}
          {single?.movements?.length === 0 && (
            <Button
              className='purple__btn px-4 py-2 fw-bold me-2'
              onClick={() => sethandoverModal(true)}
            >
              Handover
            </Button>
          )}

          {from !== "manager" && (
            <>
              <Button
                className='purple__btn px-4 py-2 fw-bold me-2 '
                onClick={() => setescalatemodal(true)}
              >
                Escalate Ticket
              </Button>
              <Button
                className='text_purple shadow px-4 py-2 fw-bold bg-white border-0'
                onClick={resolveTicket}
              >
                <IoCheckmarkDoneOutline className='fs-4' /> Resolved
              </Button>
            </>
          )}
        </div>
      
     
    </div>
      

      <EscalateModal
        reason={reason}
        setreason={setreason}
        modal={escalatemodal}
        setmodal={setescalatemodal}
        escalateTicket={escalateTicket}
      />
      <HandOverModal
        modal={handoverModal}
        setmodal={sethandoverModal}
        id={id}
        from={from}
        single={single}
        reason={handoverReason}
        setreason={sethandoverReason}
        handoverTicket={handoverTicket}
        assignTicket={assignTicket}
        selectAgent={selectAgent}
        setselectAgent={setselectAgent}
      />
    </>
  );
};

export default SingleTicketHeader;
