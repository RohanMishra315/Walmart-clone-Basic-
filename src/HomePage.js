// src/HomePage.js
import React from 'react';
import Card from './components/Card'; // Adjust import if necessary
import Hero from './components/Hero';
import Deals from './components/Deals';
import Navbar from './components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Deals />
      <Card /> {/* Render the Cards component here */}
    </div>
  );
};

export default HomePage;
