import React from 'react'
import { GiOfficeChair } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";
import { RiRefund2Fill } from "react-icons/ri";

function Services() {
  return (
    <section className='service-section'>
      <div className="row">
        <h2 className="section-heading">Our Services</h2>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-hammer">
                <GiOfficeChair/>
              </i>
            </div>
            <h3>Working space</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-brush">
              <GiTeacher />
              </i>
            </div>
            <h3>Mentorship</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-wrench">
                <RiRefund2Fill/>
              </i>
            </div>
            <h3>Equity Funding</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services