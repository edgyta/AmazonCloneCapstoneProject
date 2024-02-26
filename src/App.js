// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Resources/Components/Home";
import Footer from "./Resources/Components/Footer";
import Header from "./Resources/Components/Header";
import ShowProduct from "./Resources/Components/ShowProduct";
import ProductPage from "./Resources/Components/ProductPage"; // Import ProductPage
import ProductConfirmation from "./Resources/Components/ProductConfirm";
import Cart from "./Resources/Components/Cart/Cart";
import Login from "./Resources/Components/Login/Login";


function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home onShowProduct={handleShowProduct} />} />
        {selectedProduct && (
          <Route
            path="/show-product/:id"
            element={<ShowProduct product={selectedProduct} onClose={handleCloseProduct} />}
          />
        )}
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/product-confirmation/:id" element={<ProductConfirmation />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
