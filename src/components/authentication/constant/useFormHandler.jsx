import axios from "axios";
import React, {useContext, useState} from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../context/authContext";

export const useFormHandler = (FORMS_SATATE, apiUrl, navigatePath) => {
  const [inputsData, setinputsData] = useState(FORMS_SATATE);
  const [focusedInput, setFocusedInput] = useState(null);
  const [submitting, setsubmitting] = useState(false);
  const [error, setError] = useState({});
  const [togglePassword, settogglePassword] = useState({});
  const {auth, setAuth} = useContext(AuthContext);
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


  // handle input focus
  const handleFocus = (index) => {
    setFocusedInput(index);
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

    //validate usename
    if (inputsData["userName"] === "") {
      errors.userName = "Name is required*";
    }

    //validate email
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

    //validate password
    if (inputsData["password"] === "") {
      errors.password = "Password is required*";
    } else if (inputsData["password"].length < 6) {
      errors.password = "Password must be 6 character long*";
      errors.confirmPassword = "Password must be 6 character long*";
    }

    //validate confirm password
    if (inputsData["confirmPassword"] === "") {
      errors.confirmPassword = "Confirm password is required*";
    } else if (inputsData["password"] !== inputsData["confirmPassword"]) {
      errors.confirmPassword = "Password did not match*";
    }

    //validate role and catagory
    if (inputsData["role"] === "") {
      errors.role = "Role is required*";
    }
    if (inputsData["category"] === "") {
      errors.category = "Category is required*";
    }

    console.log(errors);
    setError({...errors});
    return Object.keys(errors).length <= 1;
  };

  // handle form submit
  const handleSubmit = (e) => {
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
            console.log(response);
            if (response.data.error) {
              toast.error(response.data.error);
            } else {
              setAuth({user: response.data.user, token: response.data.token});
              localStorage.setItem("loginData", JSON.stringify(response.data));
              toast.success("User login successfully");
              //routing
              navigate("/protected-routes");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        setsubmitting(false);
        setinputsData(FORMS_SATATE);
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
    focusedInput,
    handleFocus,
    setinputsData
  };
};
