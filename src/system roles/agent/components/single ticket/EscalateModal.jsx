import React from "react";
import AppModal from "../../../constant/reuseable components/AppModal";
import Button from "../../../../partials/Button";

const EscalateModal = ({setmodal, modal,escalateTicket, reason , setreason}) => {
  return (
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
      <Button
        className='purple__btn px-4 py-2 fw-bold mt-2'
        onClick={escalateTicket}
      >
        Submit
      </Button>
    </AppModal>
  );
};

export default EscalateModal;
