import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Landing from "./pages/Landing";
import MiniProduct from "./pages/MiniProduct";
import { CartProvider } from './context/CartContext';
import  {products} from './data/product'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Landing/>
              <MiniProduct products={products}/>
            </>
          } />
            <Route path="/products" element={<Home />} />
            <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;