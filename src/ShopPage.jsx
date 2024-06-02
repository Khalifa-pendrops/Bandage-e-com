import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import Footer from "./Components/Footer";
import SubNav from "./Components/SubNav";
import Navigation from "./Components/Navigation";
import ShopHeroSection from "./Components/ShopHeroSection";
import ProductDescription from "./Components/ProductDescription";
import Sponsors from "./Components/Sponsors";
import ShopProductsList from "./Components/ShopProductsList";
// import NavBar from "./Components/NavBar";
import SecondNavBar from "./Components/SecondNavBar";
import SecondSubNavBar from "./Components/SecondSubNavBar";



export default function ShopPage() {
  return (
    <div className="shoppage-container">
      <SecondNavBar />
      <SubNav />
      <SecondSubNavBar />
      <Navigation />
      <ShopHeroSection />
      <ProductDescription />
      {/* API LINK PAGE!!! */}
      <ShopProductsList />
      <Sponsors />
      <Footer />
    </div>
  );
}
