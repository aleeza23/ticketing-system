import React, {useState} from "react";
import AppModal from "../../../constant/reuseable components/AppModal";
import SingleTicket from "./SingleTicket";
import SingleTicketComment from "./SingleTicketComment";
import Button from "../../../../partials/Button";
import useSingleTicket from "../../../Hook/custom hook/useSingleTicket";

const SingleReply = ({
  setmodal,
  modal,
  loading,
  currentComment,
  allReplies,
  deleteReply,
  children
}) => {
  // console.log(allReplies , 'from single reply com');
  return (
    <>
      <AppModal
        title={currentComment?.content}
        setmodal={setmodal}
        modal={modal}
        footer={null}
        width={1000}
      >
        <SingleTicketComment
          dataSource={allReplies}
          loading={loading}
          deleteFun={deleteReply}
          secBtn='Delete'
        >
        {children}
        </SingleTicketComment>
      </AppModal>
    </>
  );
};

export default SingleReply;
