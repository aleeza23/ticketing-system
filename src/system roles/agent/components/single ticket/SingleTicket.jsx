import React, {useContext, useState} from "react";
import {IoCreate, IoHome} from "react-icons/io5";
import SingleTicketHeader from "./SingleTicketHeader";
import SingleTicketDescription from "./SingleTicketDescription";
import SingleTicketComment from "./SingleTicketComment";
import Button from "../../../../partials/Button";
import {useParams} from "react-router-dom";
import Steps from "../../../constant/reuseable components/ThreeSteps";
import useSingleTicket from "../../../Hook/custom hook/useSingleTicket";
import {AuthContext} from "../../../../context/authContext";
import SingleReply from "./SingleReply";

const SingleTicket = ({from}) => {
  const [replyModal, setreplyModal] = useState(false);  
  const [currentComment, setcurrentComment] = useState({});
  const {id} = useParams();
  const {auth} = useContext(AuthContext);
  const [handoverModal, sethandoverModal] = useState(false);


  const {
    addComment,
    setcomment,
    comment,
    allComments,
    commentsLoading,
    deleteComment,
    allReplies,
    replyLoading,
    deleteReply,
    addReply,
    reply,
    setreply,
    single
  } = useSingleTicket(id, currentComment?._id);
  // console.log(single);

  
  return (
    <>
      {auth && auth?.user?.role === "agent" && (
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
      )}
      {auth && auth?.user?.role === "manager" && (
        <Steps
          from={"Manager Dashboard"}
          fromPath={"/manager-dashboard"}
          center={"Esclate Tickets"}
          centerPath={"/manager-dashboard/escalated-ticket"}
          to={id}
          fromIcon={<IoHome className='bread-text' />}
          centerIcon={<IoHome className='bread-text' />}
          toIcon={<IoCreate className='bread-text-active' />}
        />
      )}

      <SingleTicketHeader        
        id={id}
        from={from}
        single={single}
        sethandoverModal={sethandoverModal}
        handoverModal={handoverModal}

      />
      <SingleTicketDescription single={single} />
      
      <SingleTicketComment
        dataSource={allComments}
        loading={commentsLoading}
        deleteFun={deleteComment}
        firstBtn='reply'
        secBtn='Delete'
        setmodal={setreplyModal}
        setcurrentComment={setcurrentComment}
      >
      {from === 'manager' ? 'All Comments' : (
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
      )}
        
      </SingleTicketComment>
      <SingleReply
        setmodal={setreplyModal}
        modal={replyModal}
        deleteReply={deleteReply}
        allReplies={allReplies}
        loading={replyLoading}
        currentComment={currentComment}
        addReply={addReply}
      >
        <div className='input-group my-3'>
          <textarea
            type='text'
            rows={1}
            value={reply}
            onChange={(e) => setreply(e.target.value)}
            className='form-control focused me-4 '
            placeholder='Reply...'
          />
          <Button
            className='purple__btn px-4 rounded-pill  fw-bold'
            onClick={addReply}
          >
            Add reply
          </Button>
        </div>
      </SingleReply>




    </>
  );
};

export default SingleTicket;
