// src/components/CartLayout.js
import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import Footer from './Footer';

const CartLayout = () => {
  return (
    <div className="bg-[#e6f1fc]">
      <Navbar />
      <Cart />
      <Footer />
    </div>
  );
};

export default CartLayout;
