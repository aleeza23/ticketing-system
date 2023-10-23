import React, {useState} from "react";
import AppModal from "../../../constant/reuseable components/AppModal";
import Button from "../../../../partials/Button";
import useSingleTicket from "../../../Hook/custom hook/useSingleTicket";

const HandOverModal = ({
  modal,
  setmodal,
  from,
  single,
  selectAgent,
  setselectAgent,
  setreason,
  reason,
  handoverTicket,
  assignTicket,
}) => {
  const {availAbleAgents} = useSingleTicket();

  // console.log(handoverReason, "reasin");
  // console.log(single, "Sagent");
  // console.log(id, "id");

  
  return (
    <>
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
          className='form-control focused mb-3'
          placeholder='Give reason...'
          value={reason}
          onChange={(e) => setreason(e.target.value)}
        />

        <label>Available Agents</label>

        {from === "manager" ? (
          <>
            <select
              className='form-select mb-2 focused'
              value={selectAgent}
              onChange={(e) => setselectAgent(e.target.value)}
            >
              <option value=''>Choose Agent</option>
              {availAbleAgents.map((currElm, index) => (
                <>
                  {single?.pickedBy?._id !== currElm._id && (
                    <option key={index} value={currElm._id}>
                      {currElm.name}
                    </option>
                  )}
                </>
              ))}
            </select>
            <Button
              className='purple__btn px-4 py-2 fw-bold mt-2'
              onClick={assignTicket}
            >
              Submit
            </Button>
          </>
        ) : (
          <>
            <select
              className='form-select mb-2 focused'
              value={selectAgent}
              onChange={(e) => setselectAgent(e.target.value)}
            >
              <option value=''>Choose Agent</option>

              {availAbleAgents.map((currElm, index) => {
                return (
                  <option key={index} value={currElm?._id}>
                    {currElm?.name}
                  </option>
                );
              })}
            </select>
            <Button
              className='purple__btn px-4 py-2 fw-bold mt-2'
              onClick={handoverTicket}
            >
              Submit
            </Button>
          </>
        )}
      </AppModal>
    </>
  );
};

export default HandOverModal;
