import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";

const RoutesViews = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default RoutesViews;
