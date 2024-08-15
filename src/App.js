// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import CartLayout from './components/CartLayout';
import HomePage from './HomePage'; // This is where Cards will be shown
import Cart from './components/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} /> {/* Main page content */}
      </Route>
      <Route path="/cart" element={<CartLayout />} /> {/* Cart page content */}
    </Routes>
  );
}

export default App;
