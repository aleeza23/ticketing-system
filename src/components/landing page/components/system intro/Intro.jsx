import React, {useState} from "react";
import IntroCard from "./IntroCard";
import FeatureBanner from "../../../../partials/FeatureBanner";
import {IntroData} from "./IntroData";

const Intro = () => {
  const [data, setData] = useState(IntroData);

  return (
    <>
      <div className='container pb-3 '>
        {/* <FeatureBanner
          title='Efficient Problem '
          titleSpan = 'Resolution'
          text='Our ticketing system is built to ensure prompt and effective problem resolution. Clients can submit their issues with ease, and our dedicated team of agents is here to provide timely solutions'
        /> */}

        <div className='row g-3'>
          {data.map((currElm) => (
            <IntroCard key={currElm.id} {...currElm} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Intro;
