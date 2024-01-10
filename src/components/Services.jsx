// Services.js

import React from 'react';
import { GiOfficeChair, GiTeacher, RiRefund2Fill } from "react-icons/all";

function Services() {
  return (
    <>
      <div className="section-divider" />
      <section className='service-section'>
        <div className="row">
          <h2 className="section-heading">Our Services</h2>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <GiOfficeChair />
              </div>
              <h3>Working space</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <GiTeacher />
              </div>
              <h3>Mentorship</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="icon-wrapper">
                <RiRefund2Fill />
              </div>
              <h3>Equity Funding</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
