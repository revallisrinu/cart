import React from 'react';
import { products } from '../AppData'; 
import ProductCard from './ProductCard'; 
import "../App.css"

const ProductList = ({ addToCart }) => {
  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
