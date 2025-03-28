import React, { useContext, useState } from "react";
import Nav from "../Shared/Nav/Nav";
import Footer from "../Shared/Footer/Footer";
import ShareHead from "../Shared/ShareHead";
import Newsletter from "../Shared/SharedNewsletter";
import UpFooter from "../Pages/Home/UpFooter";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";

const Dashboard = () => {
    const{logOut,user}=useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className=" w-full max-w-[1600px] px-3 md:px-8 lg:px-12 xl:px-16 mx-auto mb-9">
      <Nav></Nav>
      <ShareHead pageTitle={"DASHBOARD"}></ShareHead>
      {/* layout */}
      <div>
      <div className="flex min-h-screen bg-lightPurple">
            {/* Sidebar for large screens */}
            <div className="xl:w-64 lg:w-52 lg:flex sticky top-0 left-0 h-screen hidden bg-purple text-white flex-col justify-between">
                {/* Sidebar Header */}
                <div>
                    <div className="flex flex-col gap-2 px-2 mt-3">
                        <h3 className="lg:text-xl text-lg lato font-bold text-center text-white">
                            Dashboard
                        </h3>
                        <nav className="mt-6">
                            <ul className="flex flex-col gap-2">
                                {user?.role === "admin" ? (
                                    <>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manage-users"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Users
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manage-products"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Products
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manage-offer-products"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Offer Products
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manage-orders"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Orders
                                            </NavLink>
                                        </li>
                                        <div className="border"></div>
                                        <li>
                                            <NavLink
                                                to="/"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Home
                                            </NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <NavLink
                                                to="/dashboard/my-orders"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                My Orders
                                            </NavLink>
                                        </li>
                                        <div className="border"></div>
                                        <li>
                                            <NavLink
                                                to="/"
                                                className={({ isActive }) =>
                                                    `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                                    }`
                                                }>
                                                Home
                                            </NavLink>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Sidebar Footer */}
                <div className="px-2 py-4">
                    {user?.photo && (
                        <div className="max-w-36 mx-auto mb-5">
                            <img
                                className="border-4 border-white rounded-full"
                                src={user?.photo || "https://i.ibb.co.com/WWrPS5F/demo-user.png"}
                                alt="User Profile"
                            />
                        </div>
                    )}
                    <div className="flex items-center gap-3">
                        <div>
                            <p className="font-semibold uppercase">{user?.name || "User"}</p>
                            <p className="xl:text-sm lg:text-xs text-gray-300">{user?.email}</p>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <NavLink
                            to="/account"
                            className="block p-2 rounded bg-navyBlue text-center hover:bg-navyBlue-dark">
                            Account
                        </NavLink>
                        <button
                            onClick={logOut}
                            className="block p-2 rounded bg-red-600 text-center hover:bg-red-700">
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Drawer for small screens */}
            <div
                className={`fixed top-0 left-0 h-full z-40 bg-purple text-white flex flex-col justify-between transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:hidden w-64`}>
                <div className="mt-4 text-center">
                    <h4 className="font-bold">Dashboard</h4>
                </div>
                <nav className="mt-6 px-4">
                    <ul className="flex flex-col gap-2">
                        {user?.role === "admin" ? (
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/manage-users"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/manage-products"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/manage-offer-products"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        Offer Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/manage-orders"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        Orders
                                    </NavLink>
                                </li>
                                <div className="border"></div>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        Home
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink
                                        to="/dashboard/my-orders"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        My Orders
                                    </NavLink>
                                </li>
                                <div className="border"></div>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block p-2 rounded ${isActive ? "bg-navyBlue" : "hover:bg-navyBlue"
                                            }`
                                        }>
                                        Home
                                    </NavLink>
                                </li>
                            </>

                        )}
                    </ul>
                </nav>
                <div className="px-4 py-4">
                    <button onClick={logOut} className="w-full p-2 rounded bg-pink text-center hover:bg-red">
                        Logout
                    </button>
                </div>
            </div>

            {/* Hamburger Menu Button */}
            <button
                onClick={toggleSidebar}
                className="fixed top-4 right-7 z-50 bg-purple text-white p-3 rounded-full lg:hidden">
                {isOpen ? <FaTimes /> : <HiOutlineBars3 />}
            </button>

            {/* Main Content
            <div className="flex-1 lg:p-5 p-2 overflow-x-auto overflow-y-auto">
                
            </div> */}
        </div>
      </div>
      <Newsletter></Newsletter>
      <UpFooter></UpFooter>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
