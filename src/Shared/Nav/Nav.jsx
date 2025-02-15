import React, { useState } from "react";
import logo from "../../assets/logo.svg";

// react icons
import {  IoIosSearch } from "react-icons/io";
import { CiHeart, CiLocationOn, CiMenuFries } from "react-icons/ci";


import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import SabNav from "./SabNav";
import { NavLink } from "react-router-dom";

const Nav = () => {
 
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const navlinks = (
    <>
  <li>
    <NavLink 
    to='/'
    className={({isActive})=>isActive ?"quick font-extrabold text-[#3BB77E]":"quick font-bold text-[#424242]"}
    >
  Home
  
    </NavLink>
  </li>
  <li>
    <NavLink 
    to='/about'
    className={({isActive})=>isActive ?"quick font-extrabold text-[#3BB77E]":"quick font-bold text-[#424242]"}
    >
  About
  
    </NavLink>
  </li>
  <li>
    <NavLink 
    to='/shop'
    className={({isActive})=>isActive ?"quick font-extrabold text-[#3BB77E]":"quick font-bold text-[#424242]"}
    >
  Shop
  
    </NavLink>
  </li>
  <li>
    <NavLink 
    to='/vendors'
    className={({isActive})=>isActive ?"quick font-extrabold text-[#3BB77E]":"quick font-bold text-[#424242]"}
    >
  Vendors
  
    </NavLink>
  </li>
  <li>
    <NavLink 
    to='/blogs'
    className={({isActive})=>isActive ?"quick font-extrabold text-[#3BB77E]":"quick font-bold text-[#424242]"}
    >
  Blogs
  
    </NavLink>
  </li>
  <li>
    <NavLink 
    to='/pages'
    className={({isActive})=>isActive ?"quick font-extrabold text-[#3BB77E]":"quick font-bold text-[#424242]"}
    >
  Pages
  
    </NavLink>
  </li>
  <li>
    <NavLink 
    to='/contact'
    className={({isActive})=>isActive ?"quick font-extrabold text-[#3BB77E]":"quick font-bold text-[#424242]"}
    >
  Contact
  
    </NavLink>
  </li>
  
  
  
  </>
  )

  return (
    <div className="w-screen flex flex-col ">
      <nav className=" lato flex items-center gap-8 lg:gap-20 md:px-4  mx-auto  h-auto mt-10 mb-6">
        {/* small menu */}
        <div>
          <CiMenuFries
            className="text-[1.6rem]  md:pl-0 text-[#424242]c cursor-pointer lg:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        </div>

        {/* logo */}

        <div className="w-32  md:w-[160px] lg:w-[200px] lg:pr-20">
          <img
            src={logo}
            alt="logo"
            className=""
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
        <div className=" border rounded px-9 py-3 shadow hidden lg:flex gap-2 items-center justify-center ">
          <CiLocationOn className="text-2xl" />
          <h1 className="text-[#3BB77E]">Your Location</h1>
        </div>
        {/* lcon div */}
        <div className="flex items-center  gap-2 md:gap-6">
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
  <ul className=" gap-[20px] text-[1rem] flex flex-col  mt-10">
    {navlinks}
  </ul>
</aside>

      </nav>
      <div className="w-fit hidden lg:block"> 
      <SabNav></SabNav>
      </div>
    </div>
  );
};

export default Nav;


