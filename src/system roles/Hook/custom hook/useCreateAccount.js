import axios from "axios";
import React, {useContext, useState} from "react";
import {AuthContext} from "../../../context/authContext";
import toast from "react-hot-toast";

const useCreateAccount = (data) => {
  const [loading, setloading] = useState(false);
  const {auth} = useContext(AuthContext);

  const handleCreateAccount = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/register/a/user", data, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        if (res.data.error) {
          toast.error(res.data.error);
        } else if (res.data.ok || !res.data.error) {
          setloading(true);
          setTimeout(() => {
            toast.success("Account Created Successfully");
            setloading(false);
          }, 5000);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Faild to create account!");
        setloading(false);
      });
  };

  return {
    handleCreateAccount,
    loading,
  };
};

export default useCreateAccount;
