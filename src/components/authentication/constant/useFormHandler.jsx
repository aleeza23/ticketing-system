import axios from "axios";
import React, {useState} from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export const useFormHandler = (FORMS_SATATE, apiUrl, navigatePath) => {  
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
    console.log(togglePassword);
  };

  //handle validation
  const handleValidation = () => {
    let errors = {};

    if (inputsData["userName"] === "") {
      errors.userName = "Name is required*";
    }

    if (inputsData["email"] === "") {
      errors.email = "Email is required*";
    }
    // } else{
    //   const emailRegex =  /^[A-Za-z0-9+_.-]+@(.+)$/;
    //   if (!emailRegex.test(inputsData["email"])) {
    //     errors.email = "Invalid email*";
    //   }
    //   errors.email = "Invalid email*";
    // }

    if (inputsData["password"] === "") {
      errors.password = "Password is required*";
    } else if (inputsData["password"].length < 6) {
      errors.password = "Password must be 6 character long*";
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
  

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = handleValidation();

    if (isValid) {
      console.log(inputsData);
      setsubmitting(true);

      setTimeout(() => {
        //api call to post data
        axios
          .post(apiUrl, inputsData)
          .then((response) => {
            console.log(response.data);
            if (response.data.error) {
              toast.error(response.data.error);
            } else {
              localStorage.setItem("loginData", JSON.stringify(response.data));
              toast.success("User login successfully");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        setsubmitting(false);
        setinputsData(FORMS_SATATE);
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
