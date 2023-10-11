import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/authContext";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {Toast} from "bootstrap";

const useClientTickets = (data) => {
  const [loading, setloading] = useState(false);
  const {auth} = useContext(AuthContext);
  const [ticketsList, setticketsList] = useState([]);

  const navigate = useNavigate();

  //post request to submit ticket
  const handleSubmitTicket = (e) => {
    e.preventDefault();

    setloading(true);
    axios
      .post("http://localhost:9000/api/add/ticket", data, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        if (res.data.ok) {
          toast.success(res.data.message);
          navigate("/client-dashboard/open-ticket");
          setloading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in posting ticket data");
        setloading(false);
      });
  };

  //api call to get tickets list for client
  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:9000/api/my/tickets", {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setticketsList(res.data.tickets);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to get tickets list");
        setloading(false);
      });
  }, [auth && auth.token]);

  


  return {
    handleSubmitTicket,
    ticketsList,
    loading,
  };
};

export default useClientTickets;
