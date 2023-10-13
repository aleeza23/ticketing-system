import React, {useState} from "react";
import {IoCreate, IoHome} from "react-icons/io5";
import SingleTicketHeader from "./SingleTicketHeader";
import SingleTicketDescription from "./SingleTicketDescription";
import SingleTicketComment from "./SingleTicketComment";
import Button from "../../../../../partials/Button";
import AppModal from "../../../reuseable components/AppModal";
import {useParams} from "react-router-dom";
import Steps from "../../../reuseable components/ThreeSteps";
import useSingleTicket from "../../../../Hook/custom hook/useSingleTicket";

const SingleTicket = () => {
  const [modal, setmodal] = useState(false);
  const {id} = useParams();
  const {
    addComment,
    setcomment,
    comment,
    allComments,
    loading,
    commentsLoading,
    deleteComment
  } = useSingleTicket(id);
  return (
    <>
      <Steps
        from={"Agent Dashboard"}
        fromPath={"/agent-dashboard"}
        center={"Picked Ticket"}
        centerPath={"/agent-dashboard/picked-ticket"}
        to={id}
        fromIcon={<IoHome className='bread-text' />}
        centerIcon={<IoHome className='bread-text' />}
        toIcon={<IoCreate className='bread-text-active' />}
      />
      <SingleTicketHeader setmodal={setmodal} modal={modal} id={id} />
      <SingleTicketDescription />
      <SingleTicketComment allComments={allComments} loading={commentsLoading} deleteComment={deleteComment}>
        <div className='input-group my-4'>
          <textarea
            type='text'
            rows={2}
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
            className='form-control focused me-4 '
            placeholder="I have recieved your ticket, i'm working onit. If you have any query please do comment here."
          />
          <Button className='purple__btn px-4  fw-bold' onClick={addComment}>
            Add Comment
          </Button>
        </div>
      </SingleTicketComment>
    </>
  );
};

export default SingleTicket;
