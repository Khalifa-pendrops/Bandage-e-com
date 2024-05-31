import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import productImage from "../images/dImage.svg"

export default function ProductDescription() {
  return (
    <div className="d-container">
      <div className="description-navigation">
        <Link className="d-link" to="/description">
          <p>Description</p>
        </Link>
        <Link className="d-link" to="/information">
          <p>Additional Information</p>
        </Link>
        <Link className="d-link" to="/review">
          <p>Review (0)</p>
        </Link>
      </div>

      <div className="description-body">
        <div className="d-body-left">
          <h3>the quick fox jumps over</h3>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="body-green-border-left">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <img src={productImage} alt="product" />
      </div>
    </div>
  );
}
