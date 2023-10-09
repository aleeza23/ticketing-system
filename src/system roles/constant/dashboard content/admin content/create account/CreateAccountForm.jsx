import React from "react";
import {Card} from "antd";
import Button from "../../../../../partials/Button";
import "../../../../../components/authentication/constant/Form.css";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import useHandleCategory from "../../../../Hook/custom hook/useHandleCategory";

const CreateAccountForm = ({
  inputsData,
  togglePassword,
  handletogglePassword,
  handleFocus,
  focusedInput,
  handleSubmit,
  values,
  loading,
  handleChange,
  error,
  title,
  buttonText
}) => {
  const {categoriesData} = useHandleCategory();

  // const { Option } = Select;

  return (
    <>
      <Card
        title={title}
        className='mt-4 shadow-sm create-account__card'
      >
        <form className='px-lg-3' onSubmit={handleSubmit}>
          <div className='row create-account_form'>
            {inputsData.map((currElm, index) => {
              const {
                label,
                placeholder,
                type,
                name,
                showPassIcon,
                hidePassIcon,
                options,
              } = currElm;
              let mapONOptions = name === "category" ? categoriesData : options;
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
                      
                    </div> ) 
                    : (
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
                        <option value=''>Choose</option>
                        
                        {mapONOptions.map((currElm, ind) => {
                          return (
                            <option value={currElm._id} key={ind}>
                              {currElm.name}
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
          <Button className='purple__btn px-4 py-2 fw-bold ms-2 mt-2'>
            {loading ? (
              <>
                Processing....
                <AiOutlineLoading3Quarters className='form-submitting create-account__loading ms-1' />
              </>
            ) : (
              buttonText
            )}
          </Button>
        </form>
      </Card>
    </>
  );
};

export default CreateAccountForm;
