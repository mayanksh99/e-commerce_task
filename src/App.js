import React from "react";
import "./App.css";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} exact />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
