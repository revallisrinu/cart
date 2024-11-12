import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Header = ( {cartCount} ) => {
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <NavLink to="/" className="nav-link">
            <h2>MyShop</h2>
          </NavLink>
        </div>
        <div className="navbar-cart">
          <NavLink to="/CartList" className="nav-link">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-count">{cartCount}</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
