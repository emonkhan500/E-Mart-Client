import React, { useContext, useState } from "react";
import logo from "../../assets/logo.svg";

// React icons
import { IoIosSearch } from "react-icons/io";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { MdClose, MdMenu } from "react-icons/md";
import SabNav from "./SabNav";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Nav = () => {
  const{logOut,user}=useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout=()=>{
    logOut()
    .then(()=>{
      Swal.fire('Sign Out');
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }

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
    to='/contact'
    className={({isActive})=>isActive ?"quick font-extrabold text-[#3BB77E]":"quick font-bold text-[#424242]"}
    >
  Contact
  
    </NavLink>
  </li>
  
  
  
  </>
  );

  return (
    <div className="flex flex-col sticky top-0 z-50 bg-white shadow-xl">
      <nav className="w-full  px-4 lato flex justify-between items-center gap-4  md:px-2 mx-auto h-auto mt-10 mb-6">
        {/* Small menu */}
        <button className="md:hidden text-3xl text-[#3BB77E]" onClick={toggleMenu}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>

       <div className="flex  justify-center items-center gap-4">
         {/* Logo */}
         <div className="w-20 md:w-[130px] lg:w-[180px] ">
          <img src={logo} alt="logo" />
        </div>

        {/* Search bar */}
        <div className="relative hidden md:flex items-center justify-center">
          <input
            className="md:w-[250px] lg:w-[300px] py-3 pl-2 border-2 border-[#3BB77E]  outline-none"
            placeholder="Search For Items..."
          />
          <IoIosSearch className="hidden lg:flex absolute top-[14px] lg:left-[250px] text-[#424242] text-[1.3rem]" />
        </div>
       </div>

        {/* Location div */}
        <div className="border rounded px-9 py-3 shadow hidden lg:flex gap-2 items-center justify-center">
          <CiLocationOn className="text-2xl" />
          <h1 className="text-[#3BB77E]">Your Location</h1>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-2 md:gap-6">
          {/* Wishlist icon */}
          <div className="flex gap-2 items-center">
            <div className="indicator">
              <span className="indicator-item rounded-full bg-green-500 text-xs px-1 text-white">
                6
              </span>
              <button>
                <CiHeart className="text-2xl font-extrabold text-[#253D4E] hover:text-[#3BB77E] transition-all duration-500" />
              </button>
            </div>
            <h1 className="mt-1 text-sm text-[#7E7E7E] hidden md:flex">
              Wishlist
            </h1>
          </div>

          {/* Cart icon */}
          <div className="flex gap-2 items-center">
            <div className="indicator">
              <span className="indicator-item rounded-full bg-green-500 text-xs px-1 text-white">
                6
              </span>
              <button>
                <IoCartOutline className="text-2xl font-extrabold text-[#253D4E] hover:text-[#3BB77E] transition-all duration-500" />
              </button>
            </div>
            <h1 className="mt-1 text-sm text-[#7E7E7E] hidden md:flex">Cart</h1>
          </div>

          {
          user?
          <>
           <button onClick={handleLogout} className="bg-[#F2FCE4] flex gap-1 items-center px-3 py-2 relative shadow before:absolute before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[4px] before:border-t-[4px] before:border-transparent hover:before:w-full hover:before:h-full hover:before:border-[#3BB77E] hover:before:transition-all hover:before:duration-500 after:border-r-[4px] after:border-b-[4px] after:border-transparent hover:after:border-[#3BB77E] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 hover:after:w-full hover:after:h-full hover:after:transition-all hover:after:duration-500">
              <VscAccount className="hidden md:flex  text-2xl font-extrabold text-[#253D4E]  transition-all duration-500" />
              <h1 className="mt-1 text-sm text-[#7E7E7E] ">
              SignOut
            </h1>
            </button>
          </> 
          :
           <>
            {/* Account icon */}
          <Link to='/signin' >
            <button className="bg-[#F2FCE4] flex gap-1 items-center px-2  md:px-3 py-1 md:py-2 relative shadow before:absolute before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[4px] before:border-t-[4px] before:border-transparent hover:before:w-full hover:before:h-full hover:before:border-[#3BB77E] hover:before:transition-all hover:before:duration-500 after:border-r-[4px] after:border-b-[4px] after:border-transparent hover:after:border-[#3BB77E] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 hover:after:w-full hover:after:h-full hover:after:transition-all hover:after:duration-500">
              <VscAccount className="hidden md:flex text-2xl font-extrabold text-[#253D4E] hover:text-[#3B9DF8] transition-all duration-500" />
              <h1 className="mt-1 text-sm text-[#7E7E7E] ">
              SignIn
            </h1>
            </button>
            
          </Link >
          </>
          }
        </div>

        {/* Mobile Sidebar Menu */}
        {isOpen && (
          <aside
            className={`quick fixed top-20 right-0 h-screen bg-white z-20 shadow-lg p-4 w-[70%] max-w-[300px] transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="gap-[20px] text-[1rem] flex flex-col mt-10">
              {navlinks}
            </ul>
          </aside>
        )}
      </nav>

      {/* Secondary Navigation */}
      <div className="w-full hidden md:block">
        <SabNav />
      </div>
    </div>
  );
};

export default Nav;
