import React, { useEffect, useState } from 'react';
import Welcome from "../assets/welcome.png";
import Accelerate from "../assets/Accelerate.png";
import Transform from "../assets/Transform.png";
import Fuel from "../assets/Fuel.png";
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";

function Intro() {
  const slideContents = [
    {
      id: 1,
      title: "WELCOME TO E-COMBINATOR",
      description: "Our program helps early-stage startups bring their ideas to life. We provide mentorship, resources, and a supportive community to help your startup succeed.",
      image: Welcome,
    },
    {
      id: 2,
      title: "Transform Your Idea into Reality",
      description: "Get access to expert guidance, hands-on training, and a network of experienced entrepreneurs to help you turn your vision into a successful business.",
      image: Transform,
    },
    {
      id: 3,
      title: "Accelerate Your Growth",
      description: "Take advantage of our cutting-edge resources and customized support to fast-track your growth and achieve your goals faster.",
      image: Accelerate,
    },
    {
      id: 4,
      title: "Fuel Your Startup Dreams",
      description: "Accelerate your startup's growth with our tailored program, resources, and mentorship. Join our community of innovators.",
      image: Fuel,
    },
    // Add other slide contents...
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slideContents.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slideContents.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide">
          <div className="slide-content">
            <img src={slideContents[currentSlide].image} alt="Slide Image" className="gif" />
            <div className="slide-text">
              <h2 className="slide-title">{slideContents[currentSlide].title}</h2>
              <p className="slide-description">{slideContents[currentSlide].description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation">
        <span className="arrow prev" onClick={prevSlide}><SlArrowLeftCircle /></span>
        <span className="arrow next" onClick={nextSlide}><SlArrowRightCircle /></span>
      </div>
    </div>
  );
}

export default Intro;