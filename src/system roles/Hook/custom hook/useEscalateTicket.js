import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/authContext";

const useEscalateTicket = () => {
    const [escalatedTickets, setescalatedTickets] = useState([]);
    const [loading, setloading] = useState(false);
  const {auth} = useContext(AuthContext);
    
     //api call to get tickets list for client
  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:9000/api/all-escalated-tc", {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        if (res.data?.ok) {
            setescalatedTickets(res.data.tickets)
        }
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to get tickets list");
        setloading(false);
      });
  }, [auth && auth.token]);
    
  return {
    loading,
    escalatedTickets
  }
};

export default useEscalateTicket;
