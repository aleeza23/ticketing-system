import React from "react";
import {useFormHandler} from "../../../../components/authentication/constant/useFormHandler";
import {Card, Select} from "antd";
import Button from "../../../../partials/Button";
import "../../../../components/authentication/constant/Form.css";

const CreateAccountForm = ({
  createAccountData,
  togglePassword,
  handletogglePassword,
  handleFocus,
  focusedInput,
  handleSubmit,
  values,
  handleChange,
  submitting,
  error,
}) => {
  
    // const { Option } = Select;

  return (
    <>
      <Card title='Create Account' className='mt-4 shadow-sm create-account__card'>
        <form className='px-lg-3' onSubmit={handleSubmit}>
          <div className='row create-account_form'>
            {createAccountData.map((currElm, index) => {
              const {
                label,
                placeholder,
                type,
                name,
                showPassIcon,
                hidePassIcon,
                options,
              } = currElm;

              return (
                <>
                  {type === "text" || type === "password" ? (
                    <div
                      className='col-12 col-lg-6 position-relative'
                      key={index}
                    >
                      <label className='form-label '>{label}</label>
                      <input
                        type={togglePassword[name] ? "text" : type}
                        name={name}
                        placeholder={placeholder}
                        className={`form-control ${
                          focusedInput === index ? "focused" : ""
                        }`}
                        onFocus={() => handleFocus(index)}
                        value={values[name]}
                        onChange={handleChange}
                      />
                      {type === "password" && (
                        <span
                          className='password-toggle__icon password-toggle__create-icons  pe-2'
                          onClick={() => handletogglePassword(name)}
                        >
                          {togglePassword[name] === true
                            ? showPassIcon
                            : hidePassIcon}
                        </span>
                      )}
                      <p className='text-danger ms-2'>{error[name]}</p>
                    </div>
                  ) : (
                    <div className='col-12 col-lg-6 ' key={index}>
                      <label className='form-label '>{label}</label>

                      <select
                        name={name}
                        className={`form-select ${
                          focusedInput === index ? "focused" : ""
                        }`}
                        onFocus={() => handleFocus(index)}
                        onChange={handleChange}
                        value={values[name]}
                      >
                        <option value="">Choose</option>
                        {options.map((currElm, ind) => {
                          return (
                            <option value={currElm} key={ind} >
                              {currElm}
                            </option>
                          );
                        })}
                      </select>
                      <p className='text-danger ms-2'>{error[name]}</p>
                    </div>
                  )}
                </>
              );
            })}
          </div>
          <Button className='create-account__btn px-4 py-2 fw-bold ms-2 mt-2'>
            {submitting ? "Creating account..." : "Create Account"}
          </Button>
        </form>
      </Card>
    </>
  );
};

export default CreateAccountForm;