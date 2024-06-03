import React, {useState} from "react";
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

export default function SubNav() {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
      setIsActive(!isActive);
    };
  return (
    <div>
      <div className="nav-items">
        <Link className="linked-logo" to="/">
          <h2 className="subnav-header">Bandage</h2>
        </Link>
        <nav className="sub-nav-links">
          <Link className="no-decoration-links" to="/">
            <li>Home</li>
          </Link>
          <Link className="no-decoration-links" to="/shopPage">
            <li className="nav-arrow">
              Shop
              <FontAwesomeIcon icon={faAngleDown} />
            </li>
          </Link>
          <Link className="no-decoration-links" to="/about">
            <li>About</li>
          </Link>
          <Link className="no-decoration-links" to="/blog">
            <li>Blog</li>
          </Link>
          <Link className="no-decoration-links" to="/contact">
            <li>Contact</li>
          </Link>
          <Link className="no-decoration-links" to="/pages">
            <li>Pages</li>
          </Link>
        </nav>
        <div className="right-nav-items">
          <div className="subnav-login">
            <FontAwesomeIcon icon={faUser} />
            <Link className="no-decoration-links" to="login">
              <p className="subnav-login-link">Login / Register</p>
            </Link>
          </div>

          <FontAwesomeIcon className="subnav-search" icon={faMagnifyingGlass} />

          <div className="cart-favourite">
            <Link to="/shopCart">
              <FontAwesomeIcon className="subnav-cart" icon={faCartShopping} />
            </Link>
            <p className="subnav-item-number">1</p>
          </div>

          <div className="cart-favourite">
            <FontAwesomeIcon className="subnav-heart" icon={faHeart} />
            <p className="subnav-item-number">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
