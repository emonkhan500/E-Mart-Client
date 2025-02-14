import React, { useState } from "react";
import logo from "../../assets/logo.svg";

// react icons
import {  IoIosSearch } from "react-icons/io";
import { CiHeart, CiLocationOn, CiMenuFries } from "react-icons/ci";


import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import SabNav from "./SabNav";

const Nav = () => {
 
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col ">
      <nav className="lato flex items-center gap-8 lg:gap-20 lg:px-20 mx-auto  h-auto mt-10 mb-6">
        {/* small menu */}
        <div>
          <CiMenuFries
            className="text-[1.6rem]  md:pl-0 text-[#424242]c cursor-pointer md:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        </div>

        {/* logo */}

        <div className="">
          <img
            src={logo}
            alt="logo"
            className="w-32 md:w-[160px] lg:w-[200px] lg:pr-20"
          />
        </div>

        <div className="">
          <div className="relative md:flex items-center justify-center hidden">
            <input
              className=" md:w-[450px] lg:w-[600px] py-3 pr-4 border-2 border-[#3BB77E] lg:pl-16 outline-none "
              placeholder="Search For Items..."
            />
            <IoIosSearch className="absolute top-[14px] md:left-[400px] lg:left-[550px] text-[#424242] text-[1.3rem]" />
          </div>
        </div>
        {/*  location div */}
        <div className=" border rounded px-10 py-3 shadow hidden lg:flex gap-2 items-center justify-center ">
          <CiLocationOn className="text-2xl" />
          <h1 className="text-[#3BB77E]">Your Location</h1>
        </div>
        {/* lcon div */}
        <div className="flex items-center pl-10 gap-2 md:gap-6">
          {/*wishlist icon */}
          <div className="flex gap-2 items-center justify-center">
            <div className="indicator">
              <span className="indicator-item rounded-full bg-green-500 text-xs px-1 text-white">
                6
              </span>
              <button>
                <CiHeart className="text-2xl font-extrabold text-[#253D4E] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 " />
              </button>
            </div>
            <h1 className="mt-1 text-sm text-[#7E7E7E] hidden md:flex">
              Wishlist
            </h1>
          </div>

          {/* cart icon */}
          <div className="flex gap-2 items-center justify-center">
            <div className="indicator">
              <span className="indicator-item rounded-full bg-green-500 text-xs px-1 text-white">
                6
              </span>
              <button>
                <IoCartOutline className="text-2xl font-extrabold text-[#253D4E] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 " />
              </button>
            </div>
            <h1 className="mt-1 text-sm text-[#7E7E7E] hidden md:flex">Cart</h1>
          </div>

          {/* account icon */}
          <div className="  md:flex gap-2 items-center justify-center">
            <div className="indicator">
             
              <button>
                <VscAccount className="text-2xl font-extrabold text-[#253D4E] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 " />
              </button>
            </div>
            <h1 className="mt-1 text-sm text-[#7E7E7E] hidden md:flex">
              Login
            </h1>
          </div>
        </div>
        
        {/* mobile menu */}
        <aside
  className={`quick fixed top-20 right-0 h-screen bg-white shadow-lg p-4 w-[70%] max-w-[300px] transition-transform duration-300 ${
    mobileSidebarOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <ul className="quick font-bold gap-[20px] text-[1rem] flex flex-col text-[#424242] mt-10">
    <li className="cursor-pointer">Home</li>
    <li className="cursor-pointer">About</li>
    <li className="cursor-pointer">Shop</li>
    <li className="cursor-pointer">Vendors</li>
    <li className="cursor-pointer">Blog</li>
    <li className="cursor-pointer">Pages</li>
    <li className="cursor-pointer">Contact</li>
  </ul>
</aside>

      </nav>
      <div className="hidden md:block"> 
      <SabNav></SabNav>
      </div>
    </div>
  );
};

export default Nav;

// {/* nav links */}
