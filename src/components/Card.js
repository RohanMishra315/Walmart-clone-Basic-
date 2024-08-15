import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Redux/Actions/Actions";
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ photo, title, price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  

  const handleAddToCart = () => {
    // Create the item object based on the props
    const item = {
      photo,
      title,
      price,
    };
    toast.success("Successfully added into Cart", {
      position: "bottom-right"
    });

    // Dispatch the action to add the item to the cart
    dispatch(addToCart(item));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
      <img src={photo} alt={title} className="w-52 h-56 rounded-[1rem]" />
      <div className="flex justify-between w-[13rem] mb-2">
        <p className="font-bold text-[13px]">{title}</p>
        <p className="font-bold">{price}</p>
      </div>
      <button
        onClick={handleAddToCart} // No need to pass 'item' directly here
        className="bg-[#ffc220] font-bold text-[16px] px-4 py-2 rounded-full hover:bg-amber-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
