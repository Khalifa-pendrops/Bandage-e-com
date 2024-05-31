import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faArrowTrendUp,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";


export default function ProductServices() {
  return (
    <div className="product-service">
      <div className="product-service-header">
        <h3>Featured Products</h3>
        <h2>THE BEST SERVICES</h2>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className="product-service-row">
        <div className="product-service-card">
          <FontAwesomeIcon
            className="f-icon-service"
            icon={faBookOpenReader}
            size="2xl"
          />
          <h3>Easy Wins</h3>
          <p>Get your best looking smile now!</p>
        </div>

        <div className="product-service-card">
          <FontAwesomeIcon
            className="f-icon-service"
            icon={faBookOpen}
            size="2xl"
          />
          <h3>Concrete</h3>
          <p>
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>

        <div className="product-service-card">
          <FontAwesomeIcon
            className="f-icon-service"
            icon={faArrowTrendUp}
            size="2xl"
          />
          <h3>Hack Growth</h3>
          <p>Overcame any hurdle or any other problem.</p>
        </div>
      </div>
    </div>
  );
}
