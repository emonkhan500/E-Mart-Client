import React, { useState } from "react";
import logo from "../../assets/logo.svg";

// react icons
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { CiHeart, CiLocationOn, CiMenuFries } from "react-icons/ci";
import { MdDashboardCustomize } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import SabNav from "./SabNav";

const Nav = () => {
  const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <nav className=" flex items-center gap-8 lg:gap-20 lg:px-20 mx-auto  h-auto mt-10 mb-6">
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
            className="w-32 md:w-[150px] lg:w-[200px] lg:pr-16"
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
        <div className=" border rounded px-2 py-2 shadow hidden lg:flex gap-1 items-center justify-center ">
          <CiLocationOn className="text-xl" />
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
              <span className="indicator-item rounded-full bg-green-500 text-xs px-1 text-white">
                6
              </span>
              <button>
                <VscAccount className="text-2xl font-extrabold text-[#253D4E] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 " />
              </button>
            </div>
            <h1 className="mt-1 text-sm text-[#7E7E7E] hidden md:flex">
              Account
            </h1>
          </div>
        </div>
        {/* mobile menu */}
        <aside
          className={` ${
            mobileSidebarOpen
              ? "translate-x-0 opacity-100 z-20"
              : "translate-x-[200px] opacity-0 z-[-1]"
          } md:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
        >
          <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
            <li className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
              Home
            </li>

            <li
              onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
              className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
            >
              About Us
              <IoIosArrowDown
                className={`${
                  mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"
                } text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}
              />
            </li>

            {/* about us mega menu */}
            <div
              className={`${
                mobileAboutUsOpen ? "block" : "hidden"
              } group font-[500] ml-6`}
            >
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Company Details
                </li>
              </ul>
            </div>

            <li
              onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
              className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
            >
              Service
              <IoIosArrowDown
                className={`${
                  mobileServiceOpen ? "rotate-0" : "rotate-[180deg]"
                } text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}
              />
            </li>

            {/* service mega menu */}
            <div
              className={`${
                mobileServiceOpen ? "hidden" : "block"
              } font-[500] ml-6`}
            >
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Company Details
                </li>
              </ul>

              <div className="flex flex-col gap-[10px] mt-4">
                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                  Full Customize
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                  Modern Design
                </div>

                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                  <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                  Well Stacktured
                </div>
              </div>
            </div>
          </ul>
        </aside>
      </nav>
      <SabNav></SabNav>
    </div>
  );
};

export default Nav;

// {/* nav links */}
