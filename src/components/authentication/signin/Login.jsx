import React, {useState} from "react";
import Form from "../constant/Form";
import {useFormHandler} from "../constant/useFormHandler";
import {AiFillEyeInvisible , AiFillEye} from 'react-icons/ai'



const Login = () => {
  const [loginData, setloginData] = useState(LOGIN_DATA);
  const {handleChange, handleSubmit, submitting, inputsData ,error} = useFormHandler({
    email: "",
    password: "",
  } , );

  return (
    <>
      <Form
        formsData={loginData}
        btnTitle='Login'
        testimonialHeading='Welcome to your ticketing portal'
        forgotPassPage='Forgot Password'
        forgotPassPath='/forgot-password'
        formText='Login to your account to get back to your account, Or new user so sign up here'
        redirect='Sign up'
        redirectPath='/sign-up'
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={inputsData}
        submitting={submitting}
        error={error}
      />
    </>
  );
};

export default Login;

const LOGIN_DATA = [
  {
    label: "Username or email",
    type: "text",
    name: "email",
    placeholder: "Enter your email...",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter your password...",
    hidePassIcon : <AiFillEyeInvisible />,
    showPassIcon : <AiFillEye />

  },
];
