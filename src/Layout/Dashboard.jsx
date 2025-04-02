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
    <div className="flex flex-col md:flex-row  h-[100vh] ">
    <div className=" w-auto lg:w-64 lg:min-h-screen bg-[#8ba80941] pt-20">
      <ul className="menu space-y-2 mx-5">
        
          <li>
  <NavLink className='text-lg' to='/dashboard/userprofile'><IoMdHome />Profile</NavLink>
  </li>
  <li>
  <NavLink className='text-lg' to='/dashboard/orders'><HiOutlineHomeModern />Orders</NavLink>
  </li>
  <li>
  <NavLink className='text-lg' to='/dashboard/manageusersbyadmin'><FaUsers /> Manage Users</NavLink>
  </li>
  
  
        
        {/* divider */}
        <div className="divider"></div>

        <li>
          <NavLink className="text-lg" to="/">
            <IoMdHome /> HOME
          </NavLink>
        </li>
        <li>
          <NavLink className="text-lg" to="/allproperty">
            <IoMenu /> ALL PROPERTY
          </NavLink>
        </li>
        
        
      </ul>
    </div>

    <div className="flex-1 ">
      <Outlet></Outlet>
    </div>
  </div>
  );
};

export default Dashboard;
