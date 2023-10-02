import axios from "axios";
import React, {useContext, useState} from "react";
import {AuthContext} from "../../../context/authContext";
import toast from "react-hot-toast";
import {logDOM} from "@testing-library/react";

const useUpdateProfile = (updateData) => {
  const [loading, setloading] = useState(false);
  const {auth, setAuth} = useContext(AuthContext);

  //handle update user profile
  const handleUpdateProfile = () => {
    axios
      .put("http://localhost:9000/api/update-user", updateData, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          toast.error(res.data.error);
        } else if (auth?.user._id === res.data._id) {
          setloading(true);          
          setAuth({...auth, user: res.data});
          let updateLocalStorage = localStorage.getItem("loginData");
          if (updateLocalStorage) {
            updateLocalStorage = JSON.parse(updateLocalStorage);
            updateLocalStorage.user = res.data;
            localStorage.setItem(
              "loginData",
              JSON.stringify(updateLocalStorage)             
            );
          }
          toast.success('Profile updated successfully! ')
        }
        setloading(false)
      })
      .catch((error) => {
        console.log(error);
        toast.error("Faild to upadte profile!");
        setloading(false);
      });
  };

  return {
    handleUpdateProfile,
    loading
  };
};

export default useUpdateProfile;
