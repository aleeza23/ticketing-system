import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/authContext";
import toast from "react-hot-toast";

const useAgentTickets = () => {
  const [pickedTicketsList, setpickedTicketsList] = useState([]);
  const [loading, setloading] = useState(false);
  const [ticketsList, setticketsList] = useState([]);
  const [allResolved, setallResolved] = useState([]);
  const [handoverTickets, sethandoverTickets] = useState([]);  
  const [assignTickets, setassignTickets] = useState([]);
  const {auth} = useContext(AuthContext);

  //api call to get ticket list for agent
  const handleGetTicketsList = () => {
    setloading(true);
    axios
      .get("http://localhost:9000/api/by/agent/category/list", {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        setticketsList(res.data.tickets);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Faild to  pick ticket");
        setloading(false);
      });
  };

  useEffect(() => {
    handleGetTicketsList();

//calling function after every 2 mint
    const interval = setInterval(() => {
      handleGetTicketsList();
    }, 60 * 2 * 1000);

    return () => clearInterval(interval);
  }, [auth && auth?.token]);

  //api call to get picket tickets list for agent
  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:9000/api/by/agent/picks", {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setpickedTicketsList(res.data.tickets);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to get tickets list");
        setloading(false);
      });
  }, [auth && auth.token]);

  //put request to pick ticket
  const handlePickTicket = (id) => {
    setloading(true);
    axios
      .put(
        "http://localhost:9000/api/by/agent/pick",
        {ticketId: id},
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failded to put");
        setloading(false);
      });
  };
  //get request to get all assign  tickets
  useEffect(() => {
    setloading(true);

    axios
      .get("http://localhost:9000/api/assign-to-me", {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        // console.log(res, "assign tickets");
        setassignTickets(res.data.tickets);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to get all assign tickets");
        setloading(false);
      });
  }, [auth && auth.token]);

   //get request to get all handover  tickets
  useEffect(() => {
    setloading(true);

    axios
      .get("http://localhost:9000/api/handover-to-me", {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        // console.log(res, "handover tickets");
        sethandoverTickets(res.data.tickets);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to get all handover tickets");
        setloading(false);
      });
  }, [auth && auth.token]);

    //get request to get all resolved tickets
  useEffect(() => {
    setloading(true);

    axios
      .get("http://localhost:9000/api/my-resolved", {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        // console.log(res);
        setallResolved(res.data.tickets);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to get all resolved");
        setloading(false);
      });
  }, [auth && auth.token]);
  return {
    handlePickTicket,
    pickedTicketsList,
    loading,
    ticketsList,
    allResolved,    
    handoverTickets,    
    assignTickets
  };
};

export default useAgentTickets;
