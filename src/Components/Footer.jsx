import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-herder">
        <h2>Bandage</h2>
        <div className="footer-socials">
          <Link to="/www.facebook.com/">
            <img src={facebook} alt="facebook" />
          </Link>

          <Link to="/www.instagram.com/">
            <img src={instagram} alt="instagram" />
          </Link>

          <Link to="/www.twitter.com/">
            <img src={twitter} alt="twitter" />
          </Link>
        </div>
      </div>
      <div className="footer-body">
        <div className="footer-body-content">
          <h6>Company Info</h6>
          <div className="footer-links">
            <Link className="no-decoration-link" to="/about-us">
              <li>About Us</li>
            </Link>
            <Link className="no-decoration-link" to="/carrier">
              <li>Carrier</li>
            </Link>
            <Link className="no-decoration-link" to="/hiring">
              <li>We are hiring</li>
            </Link>
            <Link className="no-decoration-link" to="/blog">
              <li>Blog</li>
            </Link>
          </div>
        </div>

        <div className="footer-body-content">
          <h6>Legal</h6>
          <div className="footer-links">
            <Link className="no-decoration-link" to="/about-us">
              <li>About Us</li>
            </Link>
            <Link className="no-decoration-link" to="/carrier">
              <li>Carrier</li>
            </Link>
            <Link className="no-decoration-link" to="/hiring">
              <li>We are hiring</li>
            </Link>
            <Link className="no-decoration-link" to="/blog">
              <li>Blog</li>
            </Link>
          </div>
        </div>

        <div className="footer-body-content">
          <h6>Features</h6>
          <div className="footer-links">
            <Link className="no-decoration-link" to="/">
              <li>Business Marketing</li>
            </Link>
            <Link className="no-decoration-link" to="/">
              <li>Business Analytic</li>
            </Link>
            <Link className="no-decoration-link" to="/chat">
              <li>Live Chat</li>
            </Link>
            <Link className="no-decoration-link" to="/support">
              <li>Unlimited Support</li>
            </Link>
          </div>
        </div>

        <div className="footer-body-content">
          <h6>Resources</h6>
          <div className="footer-links">
            <Link className="no-decoration-link" to="/">
              <li>IOS & Android</li>
            </Link>
            <Link className="no-decoration-link" to="/">
              <li>Watch a Demo</li>
            </Link>
            <Link className="no-decoration-link" to="/">
              <li>Customers</li>
            </Link>
            <Link className="no-decoration-link" to="/">
              <li>API</li>
            </Link>
          </div>
        </div>

        <div className="footer-body-content">
          <h6>Get In Touch</h6>
          <div className="footer-links">
            <div className="footer-btn">
              <button className="f-btn-1" type="submit">
                Your Email
              </button>
              <button className="f-btn-2" type="submit">
                Subscribe
              </button>
            </div>
            <p>Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>
      <p className="footer-rights">
        Made With Love By Finland All Rights Reserved
      </p>
    </div>
  );
}
