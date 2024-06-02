import React, { useState } from "react";
// import "./App.css";




const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={`menu-content ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Shop</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#services">Pages</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
