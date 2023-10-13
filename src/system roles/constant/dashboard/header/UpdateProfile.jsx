import React, {useContext, useEffect, useState} from "react";
import AppModal from "../../reuseable components/AppModal";
import Button from "../../../../partials/Button";
import {useFormHandler} from "../../../../components/authentication/constant/useFormHandler";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import useUpdateProfile from "../../../Hook/custom hook/useUpdateProfile";
import {AuthContext} from "../../../../context/authContext";

const UpdateProfile = ({modal, setmodal}) => {
  const {auth} = useContext(AuthContext);
  const {handleChange, inputsData} = useFormHandler({
    email: auth?.user?.email || "",
    name: auth?.user?.name || "",
    password: "",
    confirmPassword: "",
  });

  //data to update
  const updateData = {
    name: inputsData.name,
    password: inputsData.password,
  };

  //custom hook for update user profile
  const {handleUpdateProfile, loading} = useUpdateProfile(updateData);


  return (
    <>
      <AppModal
        title='Edit Profile'
        setmodal={setmodal}
        modal={modal}
        footer={null}
        width={600}
      >
        <div className='row '>
          <input type='file' accept='images/*' className='form-control mb-3 ' />
          <div className='col-12 col-md-6 p-0 m-0'>
            <div className='pe-md-1 mb-2'>
              <label className='constant__text'>Name</label>
              <input type='text' className='form-control focused' onChange={handleChange} name='name' value={inputsData.name}/>
            </div>
          </div>
          <div className='col-12 col-md-6 p-0 m-0'>
            <div className='ps-md-1'>
              <label className='constant__text'>Email</label>
              <input type='text' className='form-control focused' onChange={handleChange} name='email' value={inputsData.email}/>
            </div>
          </div>
          <div className='col-12 col-md-6 p-0 m-0'>
            <div className='pe-md-1'>
              <label className='constant__text'>Password</label>
              <input type='text' className='form-control focused' placeholder="Enter password..." onChange={handleChange} name='password' value={inputsData.password}/>
            </div>
          </div>
          <div className='col-12 col-md-6 p-0 m-0'>
            <div className='ps-md-1'>
              <label className='constant__text'>Confirm Password</label>
              <input type='text' className='form-control focused' placeholder="Enter password..." onChange={handleChange} name='confirmPassword' value={inputsData.confirmPassword}/>
            </div>
          </div>
        </div>

        <Button
          className='purple__btn px-4 py-1 fw-bold  mt-3 ms-auto'
          onClick={handleUpdateProfile}
        >
        Update         
        </Button>
      </AppModal>
    </>
  );
};

export default UpdateProfile;
