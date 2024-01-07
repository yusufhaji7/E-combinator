import React from 'react';
import Fuel from "../assets/Fuel.png";


function About() {
  return (
    <div className='about-section'>
      <h2 className='about-title'>About Us</h2>
      <div className='about-content'>
        
        <div className='about-text'>
          Our accelerator program is designed to provide early-stage startups with the tools and resources they need to 
          succeed. From mentorship and networking opportunities to resources and guidance, we offer a comprehensive support
          system to help startups navigate the challenges of starting and growing a business.
        </div>
        <img className='about-image' src={Fuel} alt="Fuel" />
      </div>
    </div>
  );
}

export default About;