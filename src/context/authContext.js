import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  
  useEffect(() => {
    let data = localStorage.getItem("loginData");
    if (data) {
      setAuth(JSON.parse(data));
    }
  }, []);
  
  console.log(auth);



  return  <AuthContext.Provider  value={{auth , setAuth}}>{children}</AuthContext.Provider>
};

export {AuthProvider , AuthContext};

