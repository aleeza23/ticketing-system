import React, {useState} from "react";
import FeatureBanner from "../../../../partials/FeatureBanner";
import {TicketManagmentData} from "./TicketManagmentData";


const TicketManagment = () => {
  const [data, setdata] = useState(TicketManagmentData);

  return (
    <>
      <div className='container pb-5'>
        <FeatureBanner
          title='Seamless Ticket  '
          titleSpan='Management'
          text="We've streamlined ticket management for agents, allowing them to focus on resolving issues. Agents can handle up to five tickets simultaneously"
        />

        <div className='row mt-lg-5 mt-2'>
          {data.map((currElm, index) => {
            return (
              <div className='col-12 col-lg-4 g-3 col-md-6' key={index}>
                <div className='ticket-managment__card-wrapper shadow mx-1 h-100  '>
                  <i style={{fontSize: "5rem", color: "#0074E4"}}>
                    {currElm.icon}
                  </i>
                  <h4 className='constant__heading mt-5 '>{currElm.title}</h4>
                  <p className='constant__text '>{currElm.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TicketManagment;
