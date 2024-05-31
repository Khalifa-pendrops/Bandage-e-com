import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <div>
      <div className="shop-navigation">
        <h4>Home</h4>
        <FontAwesomeIcon className='shop-chevron-right' icon={faChevronRight} />
        <h4>
          <span>Shop</span>
        </h4>
      </div>
    </div>
  );
}
