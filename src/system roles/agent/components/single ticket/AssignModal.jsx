import React from "react";
import Button from "../../../../partials/Button";
import AppModal from "../../../constant/reuseable components/AppModal";
import useSingleTicket from "../../../Hook/custom hook/useSingleTicket";

const AssignModal = ({
  handoverReason,
  sethandoverReason,
  assignModal,
  setassignModal,
  selectAgent,
  setselectAgent,
  assignTicket,
  single,
  
}) => {
  const {availAbleAgents} = useSingleTicket();
  console.log(availAbleAgents);

  return (
    <>
      {/* <AppModal
        title='Reason, Why are you escalating ticket?'
        setmodal={setassignModal}
        modal={assignModal}
        footer={null}
        width={1000}
      >
        <textarea
          type='text'
          rows={2}
          className='form-control focused mb-3'
          placeholder='Give reason...'
          value={handoverReason}
          onChange={(e) => sethandoverReason(e.target.value)}
        />

        <label>Available Agents</label>
        <select
          className='form-select mb-2 focused'
          value={selectAgent}
          onChange={(e) => setselectAgent(e.target.value)}
        >
          <option value=''>Choose Agent</option>

          {availAbleAgents.map((currElm, index) => (           
            single?.pickedBy?._id !== currElm?._id && (
                  <option key={index} value={currElm?._id}>
                {currElm?.name}
              </option>
            )))}
        </select>
        <Button
          className='purple__btn px-4 py-2 fw-bold mt-2'
          onClick={assignTicket}
        >
          Submit
        </Button>
      </AppModal> */}
    </>
  );
};

export default AssignModal;
