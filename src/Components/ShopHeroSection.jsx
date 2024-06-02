import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import shopHeroLeft from "../images/shopHeroLeft.svg";
import star1 from "../images/start1.svg";
import star2 from "../images/star2.svg";

export default function ShopHeroSection() {
  return (
    <div>
      <div className="shop-hero-section">
        {/* THIS IMAGE OF THIS LEFT PART OF THIS DIV WAS IMPORTED AS A GROUP, YOU MIGHT WANT TO SEPARATE THE IMAGE FROM THE CHEVRON LEFT AND RIGHT ARROWS AND THE IMAGES BELOW IT FOR JS FUNCTIONALITY!  */}
        <img className="shop-hero-image" src={shopHeroLeft} alt="hero" />
        <div className="shop-hero-right">
          <div className="shop-hero-right-top">
            <p>Floating Phone</p>
            <div className="shop-review">
              <div className="stars">
                <img src={star1} alt="star" />
                <img src={star1} alt="star" />
                <img src={star1} alt="star" />
                <img src={star1} alt="star" />
                <img src={star2} alt="star" />
              </div>
              <p>10 Reviews</p>
            </div>
            <h3>$1,139.33</h3>
            <p className="available-stock">
              Availability : <span>In Stock</span>
            </p>
          </div>
          <hr className="shop-horizontal-line"></hr>
          <div className="shop-colors">
            <div className="blue"></div>
            <div className="green"></div>
            <div className="orange"></div>
            <div className="black"></div>
          </div>
          <div className="shop-options">
            <button className="shop-btn" type="button">
              Select Options
            </button>
            <FontAwesomeIcon className="white-bg" icon={faHeart} />
            <FontAwesomeIcon className="white-bg" icon={faCartShopping} />
            <FontAwesomeIcon className="white-bg" icon={faEye} />
          </div>
        </div>
      </div>
    </div>
  );
}
