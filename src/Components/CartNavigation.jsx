import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function CartNavigation() {
  return (
    <div>
      <div>
        <div className="shop-navigation">
          <h4>Home</h4>
          <FontAwesomeIcon
            className="shop-chevron-right"
            icon={faChevronRight}
          />
          <h4>Shop</h4>
          <h4>
            <span>Shopping Cart</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
