import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";

export default function SmallScreenNavItems() {
  return (
    <div>
      <div>
        <nav className="second-sub-sm">
          <Link className="second-no-decoration-links" to="/home">
            <li>Home</li>
          </Link>
          <Link className="second-no-decoration-links" to="/shop">
            <li className="second-nav-arrow">Product</li>
          </Link>
          <Link className="second-no-decoration-links" to="/about">
            <li>Pricing</li>
          </Link>
          <Link className="second-no-decoration-links" to="/contact">
            <li>Contact</li>
          </Link>
        </nav>
      </div>
    </div>
  );
}
