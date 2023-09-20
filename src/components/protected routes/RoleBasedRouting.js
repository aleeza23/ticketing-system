import React, {useContext, useEffect} from "react";
import {AuthContext} from "../../context/authContext";
import {useNavigate} from "react-router-dom";

const RoleBasedRouting = () => {
  const {auth} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) {
      if (auth.user?.role === "admin") {
        navigate("/admin-dashboard");
      }
      if (auth.user?.role === "agent") {
        navigate("/agent-dashboard");
      }
      if (auth.user?.role === "client") {
        navigate("/client-dashboard");
      }
      if (auth.user?.role === "manager") {
        navigate("/manager-dashboard");
      }
    }else{
      navigate('/')
    }
  }, [auth, navigate]);

  
};

export default RoleBasedRouting;
