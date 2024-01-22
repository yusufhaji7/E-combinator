// Footer.jsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <SocialIcon link="#" icon={<FaFacebook />} />
          <SocialIcon link="#" icon={<FaTwitter />} />
          <SocialIcon link="#" icon={<FaInstagram />} />
          <SocialIcon link="#" icon={<FaLinkedin />} />
        </div>
        <div className="flex space-x-4">
          <FooterLink text="Home" link="#" />
          <FooterLink text="About Us" link="#" />
          <FooterLink text="Contact" link="#" />
          <FooterLink text="Privacy Policy" link="#" />
        </div>
        <div className="text-right">
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ link, icon }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="text-white text-2xl mx-2">
    {icon}
  </a>
);

const FooterLink = ({ text, link }) => (
  <a href={link} className="text-white" target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

export default Footer;
