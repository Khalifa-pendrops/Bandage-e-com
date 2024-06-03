import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HamburgerMenu";

export default function SmallScreenNavMenu() {
        const [isActive, setIsActive] = useState(false);

        const handleToggle = () => {
          setIsActive(!isActive);
        };
  return (
    <div>
      <div className="sm-header-subnav">
        <h2 className="subnav-header">Bandage</h2>
        <div className="sm-header-subnav-right">
          <FontAwesomeIcon className="subnav-search" icon={faMagnifyingGlass} />
          <Link className="linked-cart-small" to="/shopCart">
            <FontAwesomeIcon className="subnav-cart" icon={faCartShopping} />
          </Link>
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
