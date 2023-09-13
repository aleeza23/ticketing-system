import React, {useState} from "react";
import priorityImg from "../../../../assets/imgs/Calendar-amico.png";
import {PriorityTicketingData} from "./PriorityTicketingData";

const PriorityTicketing = () => {
  const [data, setdata] = useState(PriorityTicketingData);

  return (
    <>
      <section>
        <div className='container  mt-md-5'>
          <div className='row g-4'>
            <div className='col-12  col-lg-6 col-xxl-6 col-md-6 '>
              <div className='circle  '>
                <img
                  src={priorityImg}
                  className='img-fluid my-0 mx-auto'
                  alt='img'
                />
              </div>
            </div>

            <div className=' col-lg-6 ps-0  mt-lg-5 pt-lg-5 pt-xxl-0 col-xxl-6 col-md-6  '>
              <h1 className='constant__heading '>
                Your Priority, Our Priority
              </h1>
              <p className='constant__text constant__text-justify'>
                We understand that not all issues are created equal. Our
                priority-based ticketing system ensures that urgent problems
                receive immediate attention.
              </p>
              <p className="constant__text constant__text-justify mb-md-5 mb-lg-0 d-none d-md-block d-xxl-none">
                We categorize issues into different priority levels, allowing us
                to address each concern appropriately. While urgent matters are
                handled immediately, ensuring that all clients receive the
                attention they deserve.
              </p>

              {/* mapping on data */}
              {data.map((currElm, index) => {
                return (
                  <div className='row  ps-lg-5  ' key={index}>
                    <div className='col-2 d-md-none d-xxl-block '>
                      <div className='priority-ticket-icon__wrapper'>
                        <i className='  rounded-circle '>{currElm.icon}</i>
                      </div>
                    </div>
                    <div className='col-10 ps-3 mt-3 d-md-none d-xxl-block'>
                      <h4 className='constant__heading priority-ticket-heading fs-5'>
                        {currElm.title}
                      </h4>
                      <p className='constant__text '>{currElm.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriorityTicketing;
