import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function CartNavigation() {
  return (
    <div>
      <div>
        <div className="shop-navigation">
          <Link className="linked-cart-nav" to="/">
            <h4>Home</h4>
          </Link>
          <FontAwesomeIcon
            className="shop-chevron-right"
            icon={faChevronRight}
          />
          <Link className="linked-cart-nav" to="/shopPage">
            <h4>Shop</h4>
          </Link>
          <h4>
            <span>Shopping Cart</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
