import React, {useState} from "react";
import BreadCrumbs from "../../../reuseable components/BreadCrumbs";
import {IoCreate, IoHome,} from "react-icons/io5";
import {useFormHandler} from "../../../../../components/authentication/constant/useFormHandler";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import CreateAccountForm from "./CreateAccountForm";
import CreateAccountChart from "./CreateAccountChart";
import useCreateAccount from "../../../../Hook/custom hook/useCreateAccount";


const CreateAccount = () => {
  const [createAccountData, setcreateAccountData] =
    useState(CREATE_ACCOUNT_DATA);

  const {handleChange, handleSubmit, submitting, handleFocus, inputsData, error , focusedInput , handletogglePassword, togglePassword} =
    useFormHandler({
      email: "",
      password: "",
      confirmPassword : "",
      name: "",
      category: "",
      role: "",
    });

    const {handleCreateAccount,loading} = useCreateAccount(inputsData)
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
        inputsData={createAccountData}
        handleChange={handleChange}
        handleSubmit={handleCreateAccount}
        error={error}
        loading={loading}
        values={inputsData}
        focusedInput={focusedInput}
        handletogglePassword={handletogglePassword}
        togglePassword={togglePassword}
        handleFocus={handleFocus}
        title={'Create Account'}
        buttonText={'Create Account'}
      />

      <CreateAccountChart />
    </>
  );
};

export default CreateAccount;

const CREATE_ACCOUNT_DATA = [
  {
    label: "Username",
    name: "name",
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
    options: [
      {name: "agent", _id: "agent"},
      {name: "admin", _id: "admin"},
      {name: "manager", _id: "manager"},
      {name: "Client", _id: "Client"},
    ],
  },
  {
    label: "Choose Category",
    name: "category",
    type: "select",
    options: [],

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
