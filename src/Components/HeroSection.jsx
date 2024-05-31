import React from 'react'
import hero1 from '../images/hero-image1.png'
import hero2 from "../images/hero-image2.png";
import hero3 from "../images/hero-image3.png";
import hero4 from "../images/hero-image4.png";




export default function HeroSection() {
  return (
    <div className="hero-image-box">
      <div className="landing-hero-row1">
        <img className="wider-width1" src={hero1} alt="hero" />
        <div className="landing-hero-col">
          <img className="wider-width2" src={hero2} alt="hero" />
          <div className="landing-hero-row1">
            <img className="wider-width3" src={hero3} alt="hero" />
            <img className="wider-width3" src={hero4} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
}
