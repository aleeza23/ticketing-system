import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const useFormHandler = (FORMS_SATATE, navigatePath) => {
  const [inputsData, setinputsData] = useState(FORMS_SATATE);
  const [submitting, setsubmitting] = useState(false);
  const [error, setError] = useState({});
  const [togglePassword, settogglePassword] = useState({});
  const navigate = useNavigate();

  //handle input change
  const handleChange = (e) => {
    const {name, value} = e.target;
    setinputsData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //  handle password toggle
  const handletogglePassword = (name) => {
    settogglePassword((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  //handle validation
  const handleValidation = () => {
    let errors = {};

    if (inputsData["email"] === "") {
      errors.email = "Email is required*";
    } else{
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!emailRegex.test(inputsData["email"])) {
        errors.email = "Invalid email*";
      }
      errors.email = "Invalid email*";
    }

    if (inputsData["password"] === "") {
      errors.password = "Password is required*";
    } else if (inputsData["password"].length < 8) {
      errors.password = "Password should be 8 character longer*";
    }

    if (inputsData["confirmPassword"] === "") {
      errors.confirmPassword = "Confirm password is required*";
    } else if (inputsData["password"] !== inputsData["confirmPassword"]) {
      errors.confirmPassword = "Password did not match*";
    }

    console.log(errors);
    setError({...errors});
    return Object.keys(errors).length <= 1;
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = handleValidation();    
    console.log(isValid);

   if (isValid) {
    console.log(inputsData);
    setsubmitting(true);

    setTimeout(() => {
      setinputsData(FORMS_SATATE);
      setsubmitting(false);
      alert("Form submitted successfully");
      navigate(navigatePath);
    }, 5000);
   }
     
   
  
  };

  return {
    handleChange,
    handletogglePassword,
    togglePassword,
    handleSubmit,
    inputsData,
    submitting,
    error,
  };
};
