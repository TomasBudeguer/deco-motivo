import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import ProductsPage from "../pages/ProductsPage";
import OneProdPage from "../pages/OneProdPage";
import AdminPage from "../pages/AdminPage";
import Login from "../pages/Login";

const RoutesViews = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product" element={<OneProdPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
     
    </Routes>
  );
};

export default RoutesViews;
