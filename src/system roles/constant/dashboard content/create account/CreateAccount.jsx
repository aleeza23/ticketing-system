import React, {useState} from "react";
import BreadCrumbs from "../../BreadCrumbs";
import {IoCreate, IoHome,} from "react-icons/io5";
import {useFormHandler} from "../../../../components/authentication/constant/useFormHandler";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import CreateAccountForm from "./CreateAccountForm";


const CreateAccount = () => {
  const [createAccountData, setcreateAccountData] =
    useState(CREATE_ACCOUNT_DATA);

  const {handleChange, handleSubmit, submitting, handleFocus, inputsData, error , focusedInput , handletogglePassword, togglePassword} =
    useFormHandler({
      email: "",
      password: "",
      userName: "",
      category: "",
      role: "",
    });

  return (
    <>
      <BreadCrumbs
        from={"Admin Dashboard"}
        fromPath={"/admin-dashboard"}
        to={"Create Account"}
        fromIcon={<IoHome className='bread-text' />}
        toIcon={<IoCreate className='bread-text-active' />}
      />

      <CreateAccountForm
        createAccountData={createAccountData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        values={inputsData}
        focusedInput={focusedInput}
        submitting={submitting}
        handletogglePassword={handletogglePassword}
        togglePassword={togglePassword}
        handleFocus={handleFocus}
      />
    </>
  );
};

export default CreateAccount;

const CREATE_ACCOUNT_DATA = [
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
    label: "Choose Role",
    name: "role",
    type: "select",
    options: ["admin", "manager", "agent", " client"],
  },
  {
    label: "Choose Category",
    name: "category",
    type: "select",
    options: ["admin", "manager", "agent", " client"],
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter your password...",
    hidePassIcon: <AiFillEyeInvisible />,
    showPassIcon: <AiFillEye />,
  },
  {
    label: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    placeholder: "Enter your password...",
    hidePassIcon: <AiFillEyeInvisible />,
    showPassIcon: <AiFillEye />,
  },
];