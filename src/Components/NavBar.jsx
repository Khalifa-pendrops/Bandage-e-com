import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import social1 from "../images/social1.svg";
import social2 from "../images/social2.svg";
import social3 from "../images/social3.svg";
import social4 from "../images/social4.svg";



export default function NavBar() {
  return (
    <div>
      <div className="nav-container">
        <nav>
          <div className="nav-phone">
            <FontAwesomeIcon icon={faPhone} />
            <p>(225) 555-0118</p>
          </div>
          <div className="nav-email">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>michelle.rivera@example.com</p>
          </div>
          <p className="nav-follow">
            Follow Us and get a chance to win 80% off
          </p>
          <div>
            <p className="nav-socials">
              Follow Us :
              <span>
                <Link to="/www.instagram.com/">
                  <img src={social1} alt="instagram" />
                </Link>
                <Link to="/www.youtube.com/">
                  <img src={social2} alt="instagram" />
                </Link>
                <Link to="/www.facebook.com/">
                  <img src={social3} alt="instagram" />
                </Link>
                <Link to="/www.twitter.com/">
                  <img src={social4} alt="instagram" />
                </Link>
              </span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}
