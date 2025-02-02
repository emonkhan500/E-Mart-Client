import React, { useState } from "react";
import logo from "../../assets/logo.svg"

// react icons
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";

const ResponsiveNavbar = () => {
  const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative h-auto mt-10 mb-32">
      {/* logo */}
      <div className="flex gap-10">
      <img
    src={logo}
        alt="logo"
        className="w-[150px] "
      />
      <div className="relative md:flex hidden">
          <input
            className=" w-96 py-1.5 pr-4 border-2 border-[#3BB77E] pl-16 outline-none "
            placeholder="Search..."
          />
          <IoIosSearch className="absolute top-[14px] left-3 text-[#424242] text-[1.3rem]" />
        </div>
      </div>

      {/* nav links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">
          home
        </li>

        {/* about us mega menu */}
        <li className=" transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize flex items-center gap-[3px] group relative">
          about us
          <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
          <article className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
            <div className="grid grid-cols-2">
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Company Details
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                  Company Location
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                  Team Members
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Office Tour
                </li>
              </ul>

              <div className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
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

            
          </article>
        </li>

        {/* service mega menu */}
        <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize group relative flex items-center gap-[3px]">
          services
          <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
          <article className="p-6 bg-white rounded-md w-[500px] absolute top-[40px] z-[-1] left-[-150px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
            <div className="grid grid-cols-2">
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Company Details
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                  Company Location
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                  Team Members
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
                  Office Tour
                </li>
              </ul>

              <div className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
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

            
          </article>
        </li>
      </ul>

      <div className="flex items-center gap-[10px]">
        <FaDiscord className="text-[1.6rem] text-[#424242] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 " />
        <TbBrandGithubFilled className="text-[1.6rem] text-[#424242] cursor-pointer hover:text-[#3B9DF8] transition-all duration-500" />

        <CiMenuFries
          className="text-[1.6rem] text-[#424242]c cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* mobile sidebar */}
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
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                Company Location
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                Team Members
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" /> Office
                Tour
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
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                Company Location
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" />
                Team Members
              </li>
              <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                <BsArrowRight className="text-[#424242] text-[0.9rem]" /> Office
                Tour
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
  );
};

export default ResponsiveNavbar;
