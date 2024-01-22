// Footer.jsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="text-white py-4 md:py-8 mb-0">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">

        <div>
            <h1>E-combinator</h1>
            <h1>ACCELERATE</h1>
            <h1>INNOVATE</h1>
            <h1>SUCCEED</h1>
        </div>

        <div className="flex flex-col mb-4 md:mb-0 md:mr-8">
          <FooterLink text="Home" link="#" />
          <FooterLink text="About Us" link="#" />
          <FooterLink text="Privacy Policy" link="#" />
        </div>

        <div className="text-right">
          <p>Email: info@ecombinators.com</p>
          <p className="location">
            {<FaLocationDot />} Bole, Wolo sefer
          </p>
        </div>

        <div className="flex flex-col mb-4 md:mb-0 social-icons">
          <div className="text-2xl">Socials</div>
          <SocialIcon link="#" icon={<FaFacebook />} />
          <SocialIcon link="#" icon={<FaTwitter />} />
          <SocialIcon link="#" icon={<FaInstagram />} />
          <SocialIcon link="#" icon={<FaLinkedin />} />
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ link, icon }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="text-white text-xl mx-2 mb-2 md:mb-0 social-links">
    {icon}
  </a>
);

const FooterLink = ({ text, link }) => (
  <a href={link} className="text-white mb-2" target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

export default Footer;
