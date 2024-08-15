// src/components/MainLayout.js
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Deals from './Deals';



const MainLayout = () => {
  return (
    <div className="bg-[#e6f1fc]">
      <Navbar />
      <Hero />
      <Deals />
      {/* The Outlet will render the main content (e.g., Cards) */}
      <main>
        
        
      </main>
    </div>
  );
};

export default MainLayout;
