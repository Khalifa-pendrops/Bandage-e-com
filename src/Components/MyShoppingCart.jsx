import React from "react";
// import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import cartImage from "../images/cartImage.svg";
import star1 from "../images/start1.svg";
import star2 from "../images/star2.svg";
import paystack from "../images/paystack.svg"
import mastercard from "../images/mastercard.svg";
import visa from "../images/visa.svg";

export default function MyShoppingCart() {
  return (
    <div className="general-cart-container">
      <div className="shopping-cart">
        <h2 className="cart-header-text">Shopping Cart</h2>
        <div className="shopping-cart-nav">
          <p className="item-details">Item Details</p>
          {/* <div className="shopping-cart-nav-right"> */}
          <p className="item-quantity">Quantity</p>
          <p className="item-price">Price</p>
          {/* </div> */}
        </div>
        <div className="cart-box">
          <div className="cart-box-delete">
            <div className="cart-row">
              <div className="row-left">
                <img src={cartImage} alt="product in cart" />
                <div className="row-left-side">
                  <h6>Graphic Design</h6>
                  <p className="cart-stock">In Stock</p>
                  <div className="shop-review">
                    <div className="cart-stars">
                      <img src={star1} alt="star" />
                      <img src={star1} alt="star" />
                      <img src={star1} alt="star" />
                      <img src={star1} alt="star" />
                      <img src={star1} alt="star" />
                    </div>
                    <p>28 Reviews</p>
                  </div>
                </div>
              </div>
              <div className="row-middle">
                <div className="minus">-</div>
                <div className="one">1</div>
                <div className="plus">+</div>
              </div>

              <div className="price">
                <h4>
                  &#8358;<span>3,000</span>
                </h4>
                <p>
                  &#8358;<span>3,000 x 1 item</span>
                </p>
              </div>
            </div>
            <div className="delete-box">
              <FontAwesomeIcon icon={faTrash} />
              <p>REMOVE</p>
            </div>
          </div>

          <div className="cart-box-delete">
            <div className="cart-row">
              <div className="row-left">
                <img src={cartImage} alt="product in cart" />
                <div className="row-left-side">
                  <h6>Graphic Design</h6>
                  <p className="cart-stock">In Stock</p>
                  <div className="shop-review">
                    <div className="cart-stars">
                      <img src={star1} alt="star" />
                      <img src={star1} alt="star" />
                      <img src={star1} alt="star" />
                      <img src={star1} alt="star" />
                      <img src={star2} alt="star" />
                    </div>
                    <p>28 Reviews</p>
                  </div>
                </div>
              </div>
              <div className="row-middle">
                <div className="minus">-</div>
                <div className="one">1</div>
                <div className="plus">+</div>
              </div>

              <div className="price">
                <h4>
                  &#8358;<span>3,000</span>
                </h4>
                <p>
                  &#8358;<span>3,000 x 1 item</span>
                </p>
              </div>
            </div>
            <div className="delete-box">
              <FontAwesomeIcon icon={faTrash} />
              <p>REMOVE</p>
            </div>
          </div>

          <div className="cart-box-delete">
            <div className="cart-row">
              <div className="row-left">
                <img src={cartImage} alt="product in cart" />
                <div className="row-left-side">
                  <h6>Graphic Design</h6>
                  <p className="cart-stock">In Stock</p>
                  <div className="shop-review">
                    <div className="cart-stars">
                      <img src={star1} alt="star" />
                      <img src={star1} alt="star" />
                      <img src={star1} alt="star" />
                      <img src={star1} alt="star" />
                      <img src={star2} alt="star" />
                    </div>
                    <p>28 Reviews</p>
                  </div>
                </div>
              </div>
              <div className="row-middle">
                <div className="minus">-</div>
                <div className="one">1</div>
                <div className="plus">+</div>
              </div>

              <div className="price">
                <h4>
                  &#8358;<span>3,000</span>
                </h4>
                <p>
                  &#8358;<span>3,000 x 1 item</span>
                </p>
              </div>
            </div>
            <div className="delete-box">
              <FontAwesomeIcon icon={faTrash} />
              <p>REMOVE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="small-screen-shopping-cart">
        <h2 className="small-screen-cart-header-text">Shopping Cart</h2>
        <div className="small-screen-cart-box">
          <div className="small-screen-cart-row ">
            <div className="small-screen-cart-box-delete">
              <div className="small-screen-row-left">
                <img src={cartImage} alt="product in cart" />
                <div className="small-screen-row-left-side">
                  <h6>Graphic Design</h6>
                  <div className="small-screen-price">
                    <h4>
                      &#8358;<span>4,000</span>
                    </h4>
                    <p>
                      &#8358;<span>2,000 x 2 item</span>
                    </p>
                  </div>
                  <p className="small-screen-cart-stock">In Stock</p>
                </div>
                <div className="small-screen-shop-review">
                  <div className="small-screen-cart-stars">
                    <img src={star1} alt="star" />
                    <img src={star1} alt="star" />
                    <img src={star1} alt="star" />
                    <img src={star1} alt="star" />
                    <img src={star1} alt="star" />
                  </div>
                  <p className="small-cart-review">28 Reviews</p>
                </div>
              </div>
            </div>
            <div className="sm-row-last">
              <div className="small-screen-delete-box">
                <FontAwesomeIcon className="sm-delete-icon" icon={faTrash} />
                <p>REMOVE</p>
              </div>
              <div className="small-screen-row-middle">
                <div className="small-screen-minus">-</div>
                <div className="small-screen-one">1</div>
                <div className="small-screen-plus">+</div>
              </div>
            </div>
          </div>

          <div className="small-screen-cart-row ">
            <div className="small-screen-cart-box-delete">
              <div className="small-screen-row-left">
                <img src={cartImage} alt="product in cart" />
                <div className="small-screen-row-left-side">
                  <h6>Graphic Design</h6>
                  <div className="small-screen-price">
                    <h4>
                      &#8358;<span>4,000</span>
                    </h4>
                    <p>
                      &#8358;<span>2,000 x 2 item</span>
                    </p>
                  </div>
                  <p className="small-screen-cart-stock">In Stock</p>
                </div>
                <div className="small-screen-shop-review">
                  <div className="small-screen-cart-stars">
                    <img src={star1} alt="star" />
                    <img src={star1} alt="star" />
                    <img src={star1} alt="star" />
                    <img src={star1} alt="star" />
                    <img src={star1} alt="star" />
                  </div>
                  <p className="small-cart-review">28 Reviews</p>
                </div>
              </div>
            </div>
            <div className="sm-row-last">
              <div className="small-screen-delete-box">
                <FontAwesomeIcon className="sm-delete-icon" icon={faTrash} />
                <p>REMOVE</p>
              </div>
              <div className="small-screen-row-middle">
                <div className="small-screen-minus">-</div>
                <div className="small-screen-one">1</div>
                <div className="small-screen-plus">+</div>
              </div>
            </div>
          </div>
          <div className="small-screen-cart-row ">
            <div className="small-screen-cart-box-delete">
              <div className="small-screen-row-left">
                <img src={cartImage} alt="product in cart" />
                <div className="small-screen-row-left-side">
                  <h6>Graphic Design</h6>
                  <div className="small-screen-price">
                    <h4>
                      &#8358;<span>4,000</span>
                    </h4>
                    <p>
                      &#8358;<span>2,000 x 2 item</span>
                    </p>
                  </div>
                  <p className="small-screen-cart-stock">In Stock</p>
                </div>
                <div className="small-screen-shop-review">
                  <div className="small-screen-cart-stars">
                    <img src={star1} alt="star" />
                    <img src={star1} alt="star" />
                    <img src={star1} alt="star" />
                    <img src={star1} alt="star" />
                    <img src={star1} alt="star" />
                  </div>
                  <p className="small-cart-review">28 Reviews</p>
                </div>
              </div>
            </div>
            <div className="sm-row-last">
              <div className="small-screen-delete-box">
                <FontAwesomeIcon className="sm-delete-icon" icon={faTrash} />
                <p>REMOVE</p>
              </div>
              <div className="small-screen-row-middle">
                <div className="small-screen-minus">-</div>
                <div className="small-screen-one">1</div>
                <div className="small-screen-plus">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="order-summary">
        <div className="summary-head">
          <h2>Order Summary</h2>
          <p className="number-of-items">4 Items</p>
        </div>

        <div className="summary-head">
          <h5>Delivery Charges</h5>
          <p className="order-mid-text">
            Add your delivery address to checkout to see delivery charges.
          </p>
        </div>

        <div className="summary-head">
          <h5>Subtotal</h5>
          <p className="subtotal">
            &#8358;<span>26,500</span>
          </p>
        </div>

        <div className="summary-head">
          <h5>Total</h5>

          <p className="total">
            &#8358;<span>26,500</span>
          </p>
        </div>

        <div className="summary-button">
          <p>Excluding Delivery Charges</p>
          <button className="summary-btn" type="submit">
            Proceed to Checkout
          </button>
        </div>
        <div className="payment-options">
          <img src={paystack} alt="paystack" width="60px" />
          <img src={mastercard} alt="mastercard" />
          <img src={visa} alt="visa" />
        </div>
      </div>
    </div>
  );
}
