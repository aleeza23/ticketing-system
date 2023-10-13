import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/authContext";
import toast from "react-hot-toast";

const useSingleTicket = (id) => {
  const {auth} = useContext(AuthContext);
  const [comment, setcomment] = useState("Hello world");
  const [loading, setloading] = useState(false);
  const [allComments, setallComments] = useState([]);
  const [commentsLoading, setcommentsLoading] = useState(false);

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
    axios
      .get(`http://localhost:9000/api/by/agent/single/${id}`, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        console.log(res, "get request for comments");
        setallComments(res?.data?.comments);
        setcommentsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to get all commets");
        setcommentsLoading(false);
      });
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

  return {
    addComment,
    comment,
    setcomment,
    allComments,
    loading,
    commentsLoading,
    deleteComment,
  };
};

export default useSingleTicket;
