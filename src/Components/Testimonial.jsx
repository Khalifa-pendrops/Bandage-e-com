import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import user1 from "../images/user1.svg";
import star1 from "../images/start1.svg";
import star2 from "../images/star2.svg";
import splash1 from "../images/splash1.svg";
import splash2 from "../images/splash2.svg";
import splash3 from "../images/splash3.svg";
import splash4 from "../images/splash4.svg";
import splash5 from "../images/splash5.svg";
import splash6 from "../images/splash6.svg";
import splash7 from "../images/splash7.svg";
import splash8 from "../images/splash8.svg";
import splash9 from "../images/spalsh9.svg";

export default function Testimonial() {
  return (
    <div>
      <div className="testimonial-container">
        <div className="testimonial-left">
          <h3>What they say about us</h3>
          {/* <FontAwesomeIcon icon={faUser} size="2xl" /> */}
          {/* SOMETHING IS WRONG HERE!!! */}
          <img src={user1} alt="user" width="100px" />
          <div className="stars">
            <img src={star1} alt="star" />
            <img src={star1} alt="star" />
            <img src={star1} alt="star" />
            <img src={star1} alt="star" />
            <img src={star2} alt="star" />
          </div>
          <p className="testimonial-text">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <div className="name">
            <h5>Regina Miles</h5>
            <p>Designer</p>
          </div>
        </div>
        <div className="testimonial-right">
          <div className="right-row">
            <img src={splash1} alt="random" />
            <img src={splash2} alt="random" />
            <img src={splash3} alt="random" />
          </div>

          <div className="right-row">
            <img src={splash4} alt="random" />
            <img src={splash5} alt="random" />
            <img src={splash6} alt="random" />
          </div>

          <div className="right-row">
            <img src={splash7} alt="random" />
            <img src={splash8} alt="random" />
            <img src={splash9} alt="random" />
          </div>
        </div>
      </div>
    </div>
  );
}
