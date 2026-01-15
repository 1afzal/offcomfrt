import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Landing from "./pages/Landing";
import MiniProduct from "./pages/MiniProduct";
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Landing/>
              <MiniProduct/>
            </>
          } />
            <Route path="/products" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;