import React from "react";

const FeatureBanner = ({titleSpan ,title , text , className}) => {
    const textClasses = `${className} constant__text , text-center`;
    const headingClasses = `${className} constant__heading , text-center`;



  return (
    <>
      <div className='row py-4'>
        <div className='col-12 col-lg-8 mx-auto'>
          <h1 className={headingClasses}>
            {title} <span>{titleSpan}</span>
          </h1>
          <p className={textClasses}>
           {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureBanner;
