import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import CartList from './Component/CartList';
import ProductList from './Component/ProductList';

const App = () => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/CartList" element={<CartList cart={cart} />} />
      </Routes>
    </>
  );
};

export default App;
