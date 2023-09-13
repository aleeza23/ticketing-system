import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export const useFormHandler = (FORMS_SATATE, navigatePath) => {
  const [inputsData, setinputsData] = useState(FORMS_SATATE);
  const [submitting, setsubmitting] = useState(false);
  const [error, setError] = useState("");
  const [togglePassword, settogglePassword] = useState(false);
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
  

  // handle submit
  const handleSubmit = (e ) => {
    e.preventDefault();
           
       
        setsubmitting(true);

        setTimeout(() => {
          setinputsData(FORMS_SATATE);
          setsubmitting(false);
          alert("Form submitted successfully");
          navigate(navigatePath);
        }, 5000);      
    
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
