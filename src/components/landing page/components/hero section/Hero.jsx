import React from "react";
import TopNav from "../navbar/TopNav";
import heroImg from "../../../../assets/imgs/Time management-cuate (1).png";
import Button from "../../../../partials/Button";

const Hero = () => {
  return (
    <>
      <section className='hero-section pb-4'>
        <TopNav />
        <div className='container py-5 pt-lg-0 '>
          <div className='row'>
            <div className='col-12 col-lg-6 col-md-6 text-white mt-lg-5 '>
              <h1 className='constant__heading fs-1 constant-white fs-5  h1'>
                Streamline Your Support Experience with Our Ticketing System
              </h1>
              <p className='constant__text fw-normal'>
                Welcome to our cutting-edge ticketing system, designed to
                simplify your support requests. Whether you're a client seeking
                assistance or an agent ready to tackle issues, we've got you
                covered.
              </p>
              <Button
                className='border-0 bg-white mt-2 mb-3 py-2 px-5 mb-lg-5 fs-xxl-5 fw-bold  rounded-pill mt-lg-4'
              >
                Explore More
              </Button>
            </div>

            <div className='col-12 col-lg-6 pt-lg-5 col-md-6'>
              <div className='hero-img__container'>
                <img src={heroImg} alt='hero-img' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          className='wave'
        >
          <path
            fill='#fff'
            fillOpacity='1'
            d='M0,160L80,170.7C160,181,320,203,480,181.3C640,160,800,96,960,64C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          ></path>
        </svg>
      </section>
    </>
  );
};

export default Hero;
