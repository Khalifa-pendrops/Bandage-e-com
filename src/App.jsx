// import React from 'react'
// import './App.css'
// import { Routes, Route, Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import LandingPage from "./LandingPage";
// import ShopPage from './ShopPage';

// function App() {

//   return (
//     <>
//       <LandingPage />
//       <ShopPage />
//     </>
//   )
// }

// export default App

import React from "react";
import {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useSearchProductsQuery,
  useGetProductsWithPaginationQuery,
  useGetSortedProductsQuery,
  useGetProductCategoriesQuery,
  useGetProductsByCategoryQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "./features/products/productsApi";
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
import Navigation from "./Components/Navigation";
import ShopHeroSection from "./Components/ShopHeroSection";
import ProductDescription from "./Components/ProductDescription";
import Sponsors from "./Components/Sponsors";









function Products() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const { data: productById } = useGetProductByIdQuery(1);
  const { data: searchResults } = useSearchProductsQuery("phone");
  const { data: paginatedProducts } = useGetProductsWithPaginationQuery({
    limit: 10,
    skip: 10,
    select: "title,price",
  });
  const { data: sortedProducts } = useGetSortedProductsQuery({
    sortBy: "title",
    order: "asc",
  });
  const { data: categories } = useGetProductCategoriesQuery();
  const { data: productsByCategory } =
    useGetProductsByCategoryQuery("smartphones");
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleAddProduct = async () => {
    const newProduct = { title: "BMW Pencil" /* other product data */ };
    await addProduct(newProduct);
  };

  const handleUpdateProduct = async () => {
    const updatedProduct = { title: "iPhone Galaxy +1" };
    await updateProduct({ id: 1, updatedProduct });
  };

  const handleDeleteProduct = async () => {
    await deleteProduct(1);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {/* ADDED ALL COMPONENTS HERE, REMEBER TO ROUTE TO FIX U!!! */}
      <NavBar />
      <SubNav />
      {/* <HeroSection /> */}
      <Navigation />
      <ShopHeroSection />
      <ProductDescription />
      <div className="App">
        <h4>Featured Products</h4>
        <h1>BESTSELLER PRODUCTS</h1>
        <p>Problems trying to resolve the conflict between</p>
        <div className="products">
          {products?.products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        {/* ADD A FUNCTION TO THIS BUTTON! */}
        <button className="product-btn" type="button">
          LOAD MORE PRODUCTS
        </button>
        {/* Add more UI elements to display other data */}
      </div>
      {/* <ProductServices />
      <ProductBlog />
      <Testimonial />
      <CallToAction /> */}
      <Sponsors />
      <Footer />
    </>
  );
}

export default Products;

