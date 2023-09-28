import React, { useEffect } from "react";
import Button from "../../../../partials/Button";
import { Link, useNavigate } from "react-router-dom";

const TopNav = () => {
    let navigate = useNavigate();



  return (
    <>
      <nav className='navbar navbar-light '>
        <div className='container'>
          <span className='navbar-brand mb-0 text-white fs-4 h1'>QuickResolve</span>
          {/* <button clasName='bg-white text-dark constant-btn ' onClick={navigate('/log-in')} >Sign in</button> */}
          <Button className='bg-white border-0 px-4 py-2 fw-bold rounded-pill' onClick={() => navigate('/log-in')}>
            Log in
          </Button>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
