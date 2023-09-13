import React from "react";
import FeatureBanner from "../../../../partials/FeatureBanner";
import bgImg from "../../../../assets/imgs/Search engines-bro.png";

const DiscoverAgents = () => {
  
  return (
    <>
      <section className='bg-light py-5 my-xxl-5'>
        <div className='container pb-5'>
          <FeatureBanner className=' ' title='Discover Solution Agents   ' />

          <div className='row '>
            <div className='col-12 col-lg-8 offset-lg-2 '>
              <div className='discover-agents-card__wrapper shadow rounded mt-3'>
                <img src={bgImg} alt='bg-img' />
                <div className='testimonial-section '>
                  <p className='constant__text'>
                    Meet our team of dedicated expert agents who specialize in
                    providing tailored solutions. Our priority-driven support
                    approach guarantees that urgent issues receive immediate
                    attention, while others are handled efficiently, ensuring a
                    smooth and responsive support experience. We are committed
                    to resolving your concerns promptly and delivering the
                    highest level of satisfaction, making your needs our top
                    priority in every interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscoverAgents;
