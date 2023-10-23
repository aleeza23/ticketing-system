import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/authContext";
import toast from "react-hot-toast";

const useSingleTicket = (id, COMMENT_ID) => {
  const {auth} = useContext(AuthContext);
  const [comment, setcomment] = useState(
    "I have recieved your ticket, i'm working onit. If you have any query please do comment here."
  );
  const [reason, setreason] = useState("");
  const [handoverReason, sethandoverReason] = useState("");
  const [reply, setreply] = useState("");
  const [selectAgent, setselectAgent] = useState("");
  const [loading, setloading] = useState(false);
  const [allComments, setallComments] = useState([]);
  const [single, setsingle] = useState({});
  const [allReplies, setallReplies] = useState([]);
  const [availAbleAgents, setavailAbleAgents] = useState([]);
  const [commentsLoading, setcommentsLoading] = useState(false);
  const [replyLoading, setreplyLoading] = useState(false);

  //put request to add comment
  const addComment = () => {
    setloading(true);
    axios
      .put(
        "http://localhost:9000/api/by/agent/add/comment",
        {ticketId: id, content: comment},
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      )
      .then((res) => {
        if (res.data?.ok) {
          setallComments([...allComments, res?.data?.comments]);
          toast.success("Comment added");
        }
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erorrr....");
        setloading(false);
      });
  };

  //get request to get all comments data
  useEffect(() => {
    setcommentsLoading(true);
    if (id) {
      axios
        .get(`http://localhost:9000/api/by/agent/single/${id}`, {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        })
        .then((res) => {
          // console.log(res, "get request for comments");
          setsingle(res.data);
          setallComments(res?.data?.comments);
          setcommentsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed to get all commets");
          setcommentsLoading(false);
        });
    }
  }, [auth && auth.token]);

  //delete request to delete comment
  const deleteComment = (comment_id) => {
    setcommentsLoading(true);
    axios
      .delete(`http://localhost:9000/api/delete/comment/${comment_id}`, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        if (res.data?.ok) {
          setallComments(
            allComments.filter((currElm) => currElm._id !== comment_id)
          );
          setcommentsLoading(false);
          toast.success("Comment deleted");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to delete comment");
        setcommentsLoading(false);
      });
  };

  //put request to escalate ticket
  const escalateTicket = () => {
    setloading(true);
    axios
      .put(
        "http://localhost:9000/api/escalated-ticket",
        {ticketId: id, content: reason},
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      )
      .then((res) => {
        if (reason === "") {
          toast.error("Reason is required !");
        } else if (res.data?.ok) {
          console.log(res , 'es');
          toast.success(res.data.message);
          setreason("");
        }
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to put");
        setloading(false);
      });
  };

  //post request to post reply
  const addReply = () => {
    setreplyLoading(true);
    if (COMMENT_ID) {
      axios
        .post(
          "http://localhost:9000/api/add/reply",
          {commentId: COMMENT_ID, content: reply},
          {
            headers: {
              Authorization: `Bearer ${auth?.token}`,
            },
          }
        )
        .then((res) => {
          if (res.data?.ok) {
            toast.success("Reply added");
            setallReplies([...allReplies, res?.data?._reply]);
            // console.log(res.data , 'i am loging');
            setreply("");
            setreplyLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error("Your reply is required!");
          setreplyLoading(false);
        });
    }
  };
  //get request to get all comments data
  useEffect(() => {
    setreplyLoading(true);
    if (COMMENT_ID) {
      axios
        .get(`http://localhost:9000/api/replies/${COMMENT_ID}`, {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        })
        .then((res) => {
          // console.log(res, "get request for reply");
          setallReplies(res?.data?._replies);
          setreplyLoading(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed to get all replies");
          setreplyLoading(false);
        });
    }
  }, [auth && auth.token, COMMENT_ID]);

  //delete request to delete comment
  const deleteReply = (reply_id) => {
    setreplyLoading(true);
    axios
      .put(`http://localhost:9000/api/remove/reply/${reply_id}`, auth, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        if (res.data?.ok) {
          setallReplies(
            allReplies.filter((currElm) => currElm._id !== reply_id)
          );
          setreplyLoading(false);
          toast.success("Reply deleted");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to delete reply");
        setreplyLoading(false);
      });
  };

  //put request toresolve ticket
  const resolveTicket = () => {
    setloading(true);
    axios
      .put(
        `http://localhost:9000/api/resolved-tc/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      )
      .then((res) => {
        if (res.data?.ok) {
          toast.success(res.data.message);
        }
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to resolve");
        setloading(false);
      });
  };

  //get request to get all available  agents
  useEffect(() => {
    setloading(true);

    axios
      .get("http://localhost:9000/api/available-agents", {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        // console.log(res, "avail");
        setavailAbleAgents(res.data.agents);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to get all available agents");
        setloading(false);
      });
  }, [auth && auth.token]);

  //put resquest to handover ticket
  const handoverTicket = () => {
    setloading(true);
    axios
      .put(
        "http://localhost:9000/api/handover-ticket",
        {reason : handoverReason, ticketId: id, newAgentId : selectAgent},
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        // console.log(selectAgent , id , handoverReason);
        sethandoverReason("");
        setselectAgent("");
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to handover");
        setloading(false);
      });
  };

  //put resquest to assign ticket
  const assignTicket = () => {
    setloading(true);
    axios
      .put(
        "http://localhost:9000/api/assign-ticket",
        { reason : handoverReason, ticketId: id, selectAgent},
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        sethandoverReason("");
        setselectAgent("");
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to handover");
        setloading(false);
      });
  };

  return {
    addComment,
    comment,
    setcomment,
    allComments,
    loading,
    commentsLoading,
    deleteComment,
    reason,
    setreason,
    escalateTicket,
    reply,
    setreply,
    addReply,
    allReplies,
    deleteReply,
    replyLoading,
    resolveTicket,
    selectAgent,
    setselectAgent,
    availAbleAgents,
    handoverTicket,
    handoverReason,
    sethandoverReason,
    single,
    assignTicket,
  };
};

export default useSingleTicket;
