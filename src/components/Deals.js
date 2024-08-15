import React from "react";
import costume from "../assets/costume.jpg";
import jacket from "../assets/jacket.jpg";
import jacket2 from "../assets/2.jpg";
import jacket3 from "../assets/3.jpg";



import Card from "./Card";

 const Deals = () => {
  const cards = [
    {photo: costume, title: "Costume", price: "$35"},
    {photo: jacket, title: "Men's Jacket", price: "$49"},
    {photo: jacket2, title: "Trendy Jacket", price: "$25"},
    {photo: jacket3, title: "Leather Jacket", price: "$49"},
    {photo: costume, title: "Costume", price: "$35"},
    {photo: jacket2, title: "Trendy Jacket", price: "$25"},
    {photo: jacket, title: "Men's Jacket", price: "$49"},
    {photo: costume, title: "Costume", price: "$49"},
    {photo: jacket3, title: "Leather Jacket", price: "$49"},
    {photo: jacket2, title: "Trendy Jacket", price: "$25"},
    {photo: jacket, title: "Men's Jacket", price: "$49"},
    {photo: costume, title: "Costume", price: "$35"},
    {photo: jacket, title: "Men's Jacket", price: "$49"},
    {photo: jacket3, title: "Leather Jacket", price: "$49"},
    {photo: jacket2, title: "Trendy Jacket", price: "$25"},
    {photo: costume, title: "Costume", price: "$35"},
    
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 md:w-max xl:w-[70vw] mx-auto gap-4 mt-4">
      {cards.map((card) => (
        <Card photo = {card.photo} title={card.title} price={card.price} />

      ))}

    </div>

    </div>
    
  )
 }

 export default Deals