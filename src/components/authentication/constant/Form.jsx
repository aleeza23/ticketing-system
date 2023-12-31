import "./Form.css";
import formImg from "../../../assets/imgs/Service 24_7-rafiki.png";
import Button from "../../../partials/Button";
import {Link} from "react-router-dom";
import {useState} from "react";
import {FiLoader} from "react-icons/fi";
import {useFormHandler} from "./useFormHandler";
import FormInputs from "./FormInputs";

const Form = ({
  formsData,
  btnTitle,
  testimonialHeading,
  forgotPassPage,
  forgotPassPath,
  formText,
  redirect,
  redirectPath,
  handleChange,
  values,
  handleSubmit,
  submitting,
  error,
}) => {
 

  return (
    <>
      <div className='container-fluid px-0 '>
        <div className='row '>
          <div className='col-xxl-4 p-0'>
            <div className='form-left-side text-white py-lg-5 px-5 d-none d-xxl-block'>
              <div className='form-left-side__testimonial  '>
                <h1 className='text-center testimonial__heading fs-3 mt-5 mb-3  '>
                  {testimonialHeading}
                </h1>
                <p className='testimonial__text my-xxl-3'>
                  From technical issues to account inquiries, our team of
                  experts is here to assist you. Sign in to resolve your
                  concerns quickly or explore our services to get started.
                </p>
                <div className='bar rounded-pill  '></div>
              </div>
              <img
                src={formImg}
                alt='form-img'
                className='form-img img-fluid '
              />
            </div>
          </div>

          <div className='col-xxl-8 col-lg-12 p-0'>
            <div className='form-right-side bg-light'>
              <div className='form-right-side__wrapper shadow rounded'>
                <h1 className='mb-3 fw-bold'>Hello, Ticket Support</h1>
                <p>
                  {formText}
                  <Link to={redirectPath} className='text-decoration-none ps-2'>
                    {redirect}
                  </Link>
                </p>

                {/* form inputs component */}
                <FormInputs
                  formsData={formsData}                 
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  values={values}
                  submitting={submitting}
                  error={error}
                  btnTitle={btnTitle}
                  forgotPassPage={forgotPassPage}
                  forgotPassPath={forgotPassPath}
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
