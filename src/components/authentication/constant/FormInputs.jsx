import React, {useState} from "react";
import {Link} from "react-router-dom";
import Button from "../../../partials/Button";
import {useFormHandler} from "./useFormHandler";
import {FiLoader} from "react-icons/fi";

const FormInputs = ({
  formsData,
  btnTitle,
  forgotPassPage,
  forgotPassPath,
  handleChange,
  values,
  handleSubmit,
  submitting,
  error,
}) => {
  const {handletogglePassword, togglePassword, handleFocus, focusedInput} =
    useFormHandler();

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formsData.map((currElm, index) => {
          const {label, placeholder, type, name, showPassIcon, hidePassIcon} =
            currElm;

          return (
            <div className='mb-3 position-relative' key={index}>
              <label className='form-label mt-2'>{label}</label>
              <input
                type={togglePassword[name] ? "text" : type}
                name={name}
                className={`form-control position-relative  ${
                  focusedInput === index ? "focused" : ""
                }`}
                placeholder={placeholder}
                onFocus={() => handleFocus(index)}
                autoComplete='off'
                autoSave='off'
                onChange={handleChange}
                value={values[name]}
              />
              {type === "password" && (
                <span
                  className='password-toggle__icon'
                  onClick={() => handletogglePassword(name)}
                >
                  {togglePassword[name] === true ? showPassIcon : hidePassIcon}
                </span>
              )}
              <p className='text-danger ms-2'>{error[name]}</p>
            </div>
          );
        })}

        <Link
          to={forgotPassPath}
          className='float-end text-decoration-none my-2'
        >
          {forgotPassPage}
        </Link>

        <Button
          onSubmit={handleSubmit}
          className='form-control fw-bold mt-5 py-2 contant-form-btn text-white rounded-pill '
        >
          {submitting === true ? (
            <FiLoader className='form-submitting' />
          ) : (
            btnTitle
          )}
        </Button>
      </form>
    </>
  );
};

export default FormInputs;
