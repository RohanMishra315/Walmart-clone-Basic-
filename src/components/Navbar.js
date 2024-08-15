import React from "react";
import logo from '../assets/logo1.png';
import { FaLayerGroup } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { MdLogin ,MdLogout} from "react-icons/md";
import { AiOutlineShoppingCart} from "react-icons/ai";
import { BiWorld} from "react-icons/bi";
import { BsPhone} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";



const Navbar = () => {

  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="">
      <div className="bg-[#0071dc] px-3 py-2 text-white flex justify-between items-center">
      <div className="flex items-center gap-x-7 ">
        <div className="hover:bg-[#06529a] p-2 rounded-full ">
        <img src={logo} alt="" className=" h-10" />

        </div>
        
        <div className="md:flex items-center gap-2 hidden hover:bg-[#06529a] p-2 rounded-full ">
          <FaLayerGroup className="text-[10px]"/>
          <p className="text-[15px] font-semibold">Sections
          </p>
        </div>
        <div className="md:flex items-center gap-2 hidden hover:bg-[#06529a] p-2 rounded-full ">
          <HiUserGroup className="text-[14px]"/>
          <p className="text-[16px] font-semibold">Partners</p>
        </div>
      </div>
     
      <div className=" hidden relative lg:flex items-center flex-1 mx-6 ">
        <input type="search dollarstore" className="rounded-full py-1.5 outline-0 flex-1" />
        <div className="absolute bg-[#ffc220] p-1.5 rounded-full left-1.5">
        <GoSearch  className="text-black "/>
        </div>
       

      </div>

      <div className="flex items-center gap-x-7">
        <div className="flex items-center gap-2 hover:bg-[#06529a] p-2 rounded-full">
          <MdLogin className="text-[16px]"/>
          <p className="text-[15px] font-semibold">Register
          </p>
        </div>

        <div className="flex items-center gap-2 hover:bg-[#06529a] p-2 rounded-full whitespace-nowrap">
          <MdLogout className="text-[14px]"/>
          <p className="text-[16px] font-semibold">Sign in</p>
        </div>

        <Link to= {'/cart'} className="hover:bg-[#06529a] p-2 rounded-full">{cartItems.length}
          <AiOutlineShoppingCart className="w-6 h-6" />
           </Link>
      </div>
    </div>
    <div className="bg-[#0071dc] mt-[1px] text-white px-3 py-2 lg:px-8 flex items-center gap-6">
      <div className="flex items-center">
        <BsPhone />
        <p className="text-[15px] font-bold">Place an order on the App</p>
      </div>
      <div className="flex items-center">
        <BiWorld />
        <p className="text-[15px]">Texas Adress 8787</p>
      </div>
      <p className=" hidden md:flex hover-underline">
        Deals on phone
      </p>
      <p className=" hidden md:flex text-[15px] font-bold">$499 OFF on Laptops</p>

    </div>

    </div>
    
  )

}

export default Navbar;