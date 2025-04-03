import React, { useState } from "react";
import Nav from "../Shared/Nav/Nav";
import Footer from "../Shared/Footer/Footer";
import ShareHead from "../Shared/ShareHead";
import Newsletter from "../Shared/SharedNewsletter";
import UpFooter from "../Pages/Home/UpFooter";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { HiOutlineHomeModern } from "react-icons/hi2";





const Dashboard = () => {
 

  return (
    <div>
        <Nav></Nav>
   
    <div className="flex flex-col md:flex-row  h-[100vh] px-2 md:px-10 lg:px-32 xl:px-44">
    
    <div className=" w-auto md:w-64 lg:w-80 lg:min-h-screen  pt-20">
    <ul className="menu space-y-2 mx-5">
  <li>
    <NavLink 
      to='/dashboard/userprofile' 
      className={({ isActive }) => 
        `text-lg  font-bold border rounded-md px-3 py-3 transition ${
          isActive ? 'bg-[#3BB77E] text-white' : 'bg-white border-gray-300'
        } hover:bg-[#3BB77E] hover:text-white`
      }
    >
      <IoMdHome /> Profile
    </NavLink>
  </li>
  
  <li>
    <NavLink 
      to='/dashboard/orders' 
      className={({ isActive }) => 
        `text-lg border font-bold rounded-md px-3 py-3 transition ${
          isActive ? 'bg-[#3BB77E] text-white' : 'bg-white border-gray-300'
        } hover:bg-[#3BB77E] hover:text-white`
      }
    >
      <HiOutlineHomeModern /> Orders
    </NavLink>
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
