import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import CartNavigation from "./Components/CartNavigation";
import MyShoppingCart from "./Components/MyShoppingCart";
import ShopCartList from "./Components/ShopCartList";


export default function ShopCart() {
    return <div>
        <NavBar />
        <CartNavigation />
        <MyShoppingCart />
        <ShopCartList />
        <Footer />
  </div>;
}
