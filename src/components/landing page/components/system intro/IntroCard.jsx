import React from "react";

const IntroCard = ({title , desc}) => {
  return (
    <>
      <div className='col-12 col-lg-6 col-xxl-3 col-md-6 position relative  '>
        <div className='intro-card__wrapper shadow h-100 position-relative '>
          <h2 className="text-dark fw-bold fs-5">{title}</h2>
          <p className="constant__text">
         {desc}
          </p>
        </div>
      </div>
      
      
    </>
  );
};

export default IntroCard;
