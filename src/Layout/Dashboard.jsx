import React, { useState } from "react";
import Nav from "../Shared/Nav/Nav";
import Footer from "../Shared/Footer/Footer";
import ShareHead from "../Shared/ShareHead";
import Newsletter from "../Shared/SharedNewsletter";
import UpFooter from "../Pages/Home/UpFooter";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";






const Dashboard = () => {
 

  return (
    <div>
        <Nav></Nav>
   
    <div className="flex flex-col md:flex-row md:gap- lg:gap-36  h-[100vh] px-2 md:px-10 lg:px-32 xl:px-44">
    
    <div className=" w-auto md:w-64 lg:w-80 lg:min-h-screen  pt-20">
    <ul className="menu space-y-2 mx-5 ">
  <li className="text-center">
    <NavLink 
      to='/dashboard/userprofile' 
      className={({ isActive }) => 
        `text-lg  font-bold border rounded-md px-3 py-3 transition ${
          isActive ? 'bg-[#3BB77E] text-white' : 'bg-white border-slate-300'
        } hover:bg-[#3BB77E] hover:text-white`
      }
    >
      <CgProfile /> Profile
    </NavLink>
  </li>
  
  <li className="text-center">
    <NavLink 
      to='/dashboard/orders' 
      className={({ isActive }) => 
        `text-lg border font-bold rounded-md px-3 py-3 transition ${
          isActive ? 'bg-[#3BB77E] text-white' : 'bg-white border-slate-300'
        } hover:bg-[#3BB77E] hover:text-white`
      }
    >
      <AiOutlineUnorderedList /> Orders
    </NavLink>
  </li>
  <li className="text-center">
  <button 
    className="text-lg border font-bold rounded-md px-3 py-3 transition bg-white border-slate-300 hover:bg-[#3BB77E] hover:text-white"
  >
    <IoIosLogOut /> Logout
  </button>
</li>
</ul>

    </div>

    <div className="flex-1 pt-6 md:pt-20">
      <Outlet></Outlet>
    </div>
  </div>
  </div>
  );
};

export default Dashboard;
