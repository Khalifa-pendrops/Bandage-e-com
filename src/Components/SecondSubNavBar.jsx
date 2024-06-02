import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faUser,
  faMagnifyingGlass,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";
import "../App.css"



export default function SecondSubNavBar() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="second-sub-nav-container">
      <div className="second-nav-items">
        <h2 className="second-subnav-header">Bandage</h2>
        <HamburgerMenu />
      </div>
      <nav className="second-sub-nav-links">
        <Link className="second-no-decoration-links" to="/home">
          <li>Home</li>
        </Link>
        <Link className="second-no-decoration-links" to="/shop">
          <li className="second-nav-arrow">
            Shop
            <FontAwesomeIcon className="hide-down-arrow" icon={faAngleDown} />
          </li>
        </Link>
        <Link className="second-no-decoration-links" to="/about">
          <li>About</li>
        </Link>
        <Link className="second-no-decoration-links" to="/blog">
          <li>Blog</li>
        </Link>
        <Link className="second-no-decoration-links" to="/contact">
          <li>Contact</li>
        </Link>
        <Link className="second-no-decoration-links" to="/pages">
          <li>Pages</li>
        </Link>
      </nav>

      <div className="second-right-nav-items">
        <div className="second-subnav-login">
          <FontAwesomeIcon icon={faUser} />
          <Link className="second-no-decoration-links" to="login">
            <p className="second-subnav-login-link">Login / Register</p>
          </Link>
        </div>

        <FontAwesomeIcon
          className="second-subnav-search"
          icon={faMagnifyingGlass}
        />

        <div className="second-cart-favourite">
          <FontAwesomeIcon
            className="second-subnav-cart"
            icon={faCartShopping}
          />
          <p className="second-subnav-item-number">1</p>
        </div>

        <div className="second-cart-favourite">
          <FontAwesomeIcon className="second-subnav-heart" icon={faHeart} />
          <p className="second-subnav-item-number">1</p>
        </div>
      </div>
    </div>
  );
}
