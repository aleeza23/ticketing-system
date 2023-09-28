import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/authContext";
import axios from "axios";
import toast from "react-hot-toast";

const useHandleUsers = (API) => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setloading] = useState(false);
  const {auth} = useContext(AuthContext);

  //api call to get user
  useEffect(() => {
    if (auth && auth?.token) {
      setloading(true);
      axios
        .get(API, {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        })
        .then((res) => {
          const data = res.data;
          setUsersData(data);
          setloading(false);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
          setloading(false);
          toast.error("Failed try again");
        });
    }
  }, [auth]);

  //remove user function
  const removeUser = (id) => {
    setloading(true);
    axios
      .delete(`http://localhost:9000/api/by/auth/delete-users/${id}`, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.ok) {
          const updatedUsers = usersData.filter((elm) => elm._id !== id);
          setUsersData(updatedUsers);
        }
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something wents wrong!");
      });
  };

  
  return {
    usersData,
    loading,
    removeUser,
  };
};

export default useHandleUsers;
