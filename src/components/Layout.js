/* eslint linebreak-style: ["error", "windows"] */
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Products from './products';
import './Layout.css';
import CartItems from './cartItems';

const Layout = () => {
  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
      </div>
    </>
  );
};

export default Layout;