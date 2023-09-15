import React, {useState} from "react";
import Form from "../constant/Form";
import {useFormHandler} from "../constant/useFormHandler";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";



const Signup = () => {
  const [signUpData, setsignUpData] = useState(SIGNUP_DATA);
  const {handleChange, handleSubmit, submitting, inputsData ,error} = useFormHandler({
    email: "",
    password: "",
    userName: "",
  });

  return (
    <>
      <Form
        formsData={signUpData}
        btnTitle='Sign Up'
        testimonialHeading='A few clicks away to getting help.'
        formText='Sign up to create your account , Or already have an account.'
        redirect='Login'
        redirectPath='/log-in'
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={inputsData}
        submitting={submitting}
        error={error}
      />
    </>
  );
};

export default Signup;

const SIGNUP_DATA = [
  {
    label: "Username",
    name: "userName",
    type: "text",
    placeholder: "Enter your name...",   
  },
  {
    label: "Email",
    type: "text",
    name: "email",
    placeholder: "Enter your email...",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter your password...",
    hidePassIcon: <AiFillEyeInvisible />,
    showPassIcon: <AiFillEye />,
  },
  
];
