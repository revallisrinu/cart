import React, { useEffect } from 'react';

const ProductCard = ({ product, addToCart }) => {
    
    useEffect(() => {
        // console.log(product.id); 
    }, [product]);
  
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
