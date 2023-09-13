import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/authentication/signup/Signup";
import Login from "./components/authentication/signin/Login";
import ForgetPassword from "./components/authentication/forgot-password/ForgetPassword";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/forgot-password' element={<ForgetPassword />} />
      </Routes>
    </>
  );
};

export default App;
