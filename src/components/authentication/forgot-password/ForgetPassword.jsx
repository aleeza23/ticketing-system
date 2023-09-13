import React, {useState} from "react";
import Form from "../constant/Form";
import {useFormHandler} from "../constant/useFormHandler";
import {AiFillEyeInvisible , AiFillEye} from 'react-icons/ai'



const ForgetPassword = () => {
  const [forgotPasswordData, setforgotPasswordData] =useState(FORGOT_PASSWORD_DATA);

  const {handleChange, handleSubmit, submitting, inputsData ,error } = useFormHandler({
    password: "",
    confirmPassword: "",
  } , '/log-in');

  return (
    <>
      <Form
        formsData={forgotPasswordData}
        btnTitle='Reset Password'
        testimonialHeading='Welcome to your ticketing portal'
        formText='Reset your password to get back to your account.'
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={inputsData}
        submitting={submitting}
        error={error}
      />
    </>
  );
};

export default ForgetPassword;

const FORGOT_PASSWORD_DATA = [
  {
    label: "Enter new Password",
    type: "password",
    name: "password",
    placeholder: "Enter your password...",
    hidePassIcon : <AiFillEyeInvisible />,
    showPassIcon : <AiFillEye />

  },
  {
    label: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    placeholder: "Enter your password...",
    hidePassIcon : <AiFillEyeInvisible />,
    showPassIcon : <AiFillEye />

  },
];