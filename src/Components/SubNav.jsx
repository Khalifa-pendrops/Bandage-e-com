import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faUser,
  faMagnifyingGlass,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function SubNav() {
  return (
    <div>
      <div className="nav-items">
        <h2>Bandage</h2>
        <nav className="sub-nav-links">
          <Link className="no-decoration-links" to="/home">
            <li>Home</li>
          </Link>
          <Link className="no-decoration-links" to="/shop">
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
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <div className="cart-favourite">
            <FontAwesomeIcon icon={faCartShopping} />
            <p>1</p>
          </div>
          <div className="cart-favourite">
            <FontAwesomeIcon icon={faHeart} />
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
