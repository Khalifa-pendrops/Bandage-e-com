import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link className="hamburger-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="hamburger-link" to="/shopPage">
            <li>Shop Page</li>
          </Link>
          <Link className="hamburger-link" to="/shopCart">
            <li>Cart Page</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
