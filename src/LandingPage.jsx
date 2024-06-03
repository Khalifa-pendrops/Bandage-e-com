import React from 'react'
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./Components/NavBar";
import SubNav from "./Components/SubNav";
import HeroSection from "./Components/HeroSection";
// import Products from ".src/Products"
import ProductServices from "./Components/ProductServices";
import ProductBlog from "./Components/ProductBlog";
import Testimonial from "./Components/Testimonial";
import CallToAction from "./Components/CallToAction";
import Footer from "./Components/Footer";
import LandingProductList from './Components/LandingProductList';
import SmallScreenNavItems from './Components/SmallScreenNavItems';
import SmallScreenNavMenu from './Components/SmallScreenNavMenu';



export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <SubNav />
      <SmallScreenNavMenu />
      <SmallScreenNavItems />
      <HeroSection />
      <LandingProductList />
      <ProductServices />
      <ProductBlog />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
}
