import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook for programmatic navigation
  
  // Fetch cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  
  // Sync local state with Redux state
  useEffect(() => {
    setCartItem(cartItems);
  }, [cartItems]);

  const handleCheckout = () => {
    // Handle any checkout logic here, e.g., clearing the cart
    // dispatch(clearCart());

    // Redirect to the main page after checkout
    navigate('/');
  };

  return (
    <div className="flex flex-col md:flex-row bg-white p-6 min-h-screen">
      
      {/* Left Section (75% width) */}
      <div className="w-full md:w-3/4 bg-[#0071dc] p-4 rounded-md text-white">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        
        {/* Render cart items here */}
        <div className="space-y-4">
          {cartItem.map((item, index) => (
            <div key={index} className="p-4 bg-[#004f9a] rounded-md flex justify-between items-center">
              <div className="flex flex-col">
                <p className="font-bold text-white">{item.title}</p>
                <p className="text-white">{item.price}</p>
              </div>
              <img src={item.photo} alt={item.title} className="w-24 h-24 rounded-md" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Section (25% width) */}
      <div className="w-full md:w-1/4 bg-[#ffc220] p-4 rounded-md mt-4 md:mt-0 md:ml-4">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        
        {/* Display summary details here */}
        <p className="text-black">Total Items: {cartItems.length}</p>
        <p className="text-black">Total Price: ${cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0).toFixed(2)}</p>
        
        <button 
          onClick={handleCheckout} // Handle the checkout button click
          className="w-full bg-[#004f9a] text-white py-2 mt-4 rounded-md hover:bg-[#0071dc]"
        >
          Checkout
        </button>
      </div>
      
    </div>
  );
};

export default Cart;
