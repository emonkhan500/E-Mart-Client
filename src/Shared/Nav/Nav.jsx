import { useContext, useState } from "react";
import logo from "../../assets/logo.svg";

// React icons
import { IoIosSearch } from "react-icons/io";

import { useQuery } from "@tanstack/react-query";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdClose, MdMenu, MdOutlineDashboard } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import SabNav from "./SabNav";

const Nav = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const axiosSecure = useAxiosSecure();

  const { refetch, data: wishedProduct = [] } = useQuery({
    queryKey: ["wishedProduct", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlists/${user.email}`);
      return res.data;
    },
  });

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire("Sign Out");
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "quick font-extrabold text-primary-green"
              : "quick font-bold text-secondary-text"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "quick font-extrabold text-primary-green"
              : "quick font-bold text-secondary-text"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "quick font-extrabold text-primary-green"
              : "quick font-bold text-secondary-text"
          }
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/vendors"
          className={({ isActive }) =>
            isActive
              ? "quick font-extrabold text-primary-green"
              : "quick font-bold text-secondary-text"
          }
        >
          Vendors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "quick font-extrabold text-primary-green"
              : "quick font-bold text-secondary-text"
          }
        >
          Blogs
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "quick font-extrabold text-primary-green"
              : "quick font-bold text-secondary-text"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-col sticky top-0 z-50 bg-white shadow-">
      <nav className="w-full  px-2 lato flex justify-between items-center gap-3 md:px-2 xl:px-20 mx-auto h-auto mt-10 mb-6">
        {/* Small menu */}
        <button
          className="md:hidden text-3xl text-primary-green"
          onClick={toggleMenu}
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>

        <div className="flex  justify-center items-center gap-12 md:gap-1 lg:gap-12">
          {/* Logo */}
          <div className="w-20 md:w-[130px] lg:w-[160px] xl:w-[180px]">
            <img src={logo} alt="logo" />
          </div>

          {/* Search bar */}
          <div className="relative hidden md:flex items-center justify-center md:ml-2  xl:ml-8">
            <input
              className="md:w-[270px] lg:w-[300px] xl:w-[600px] py-3 pl-2 lg:pl-10 xl:pl-20  border-2 border-primary-green  outline-none"
              placeholder="Search For Items..."
            />
            <IoIosSearch className="hidden lg:flex absolute top-[14px] lg:left-[250px] xl:left-[480px] text-secondary-text text-[1.3rem]" />
          </div>
        </div>

        {/* Location div */}
        <div className=" border-2 border-primary-green  outline-none rounded px-7 xl:px-9 py-3 shadow hidden 2xl:flex gap-2 items-center justify-center">
          <CiLocationOn className="text-2xl text-primary-green" />
          <h1 className="text-primary-green">Your Location</h1>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-1 md:gap-1 lg:gap-3">
          {/* Wishlist icon */}
          <Link to="/wish">
            <div className="flex gap-2  bg-bg-honeydew   px-3 md:px-2 lg:px-3 py-1 md:py-2 rounded-md  lg:gap-2 items-center shadow-md">
              <div className="indicator">
                <span className="indicator-item rounded-full bg-primary-green text-xs px-1 text-white">
                  {wishedProduct?.length || 0}
                </span>
                <button>
                  <CiHeart className="text-2xl font-extrabold text-primary-text hover:text-primary-green transition-all duration-500" />
                </button>
              </div>
              <h1 className="mt-1 text-sm text-primary-gray hidden lg:flex">
                Wishlist
              </h1>
            </div>
          </Link>

          {/* Cart icon */}
          <Link to="/cart">
            <div className="flex gap-2  bg-bg-honeydew   px-3 md:px-2 lg:px-3 py-1 md:py-2 rounded-md  lg:gap-2 items-center shadow-md">
              <div className="indicator">
                <span className="indicator-item rounded-full bg-primary-green text-xs px-1 text-white">
                  6
                </span>
                <button>
                  <IoCartOutline className="text-2xl font-extrabold text-primary-text hover:text-primary-green transition-all duration-500" />
                </button>
              </div>
              <h1 className="mt-1 text-sm text-primary-gray hidden lg:flex">
                Cart
              </h1>
            </div>
          </Link>

          {/* Dashboard */}
          <Link to="/dashboard">
            <div className="flex gap-2  bg-bg-honeydew   px-3 md:px-2 lg:px-3 py-1 md:py-2 rounded-md  lg:gap-2 items-center shadow-md">
              <div className="indicator">
                <button>
                  <MdOutlineDashboard className="text-2xl font-extrabold text-primary-text hover:text-primary-green transition-all duration-500" />
                </button>
              </div>
              <h1 className="mt-1 text-sm text-primary-gray hidden md:flex">
                DashBoard
              </h1>
            </div>
          </Link>

          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="bg-bg-honeydew   flex gap-1 items-center px-3 md:px-2 lg:px-3 py-1 md:py-2 rounded-md relative shadow-md before:absolute before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[4px] before:border-t-[4px] before:border-transparent hover:before:w-full hover:before:h-full hover:before:border-primary-green hover:before:transition-all hover:before:duration-500 after:border-r-[4px] after:border-b-[4px] after:border-transparent hover:after:border-primary-green after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 hover:after:w-full hover:after:h-full hover:after:transition-all hover:after:duration-500"
              >
                <VscAccount className="  text-2xl font-extrabold text-primary-text  transition-all duration-500" />
                <h1 className="mt-1 text-sm text-primary-gray hidden md:flex">
                  SignOut
                </h1>
              </button>
            </>
          ) : (
            <>
              {/* Account icon */}
              <Link to="/signin">
                <button className="bg-bg-honeydew flex gap-1 items-center px-3 md:px-2 lg:px-3 py-1 md:py-2 rounded-md relative shadow-md before:absolute before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[4px] before:border-t-[4px] before:border-transparent hover:before:w-full hover:before:h-full hover:before:border-primary-green hover:before:transition-all hover:before:duration-500 after:border-r-[4px] after:border-b-[4px] after:border-transparent hover:after:border-primary-green after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 hover:after:w-full hover:after:h-full hover:after:transition-all hover:after:duration-500">
                  <VscAccount className=" text-2xl font-extrabold text-primary-text " />
                  <h1 className="mt-1 text-sm text-primary-gray hidden md:flex">
                    SignIn
                  </h1>
                </button>
              </Link>
            </>
          )}
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
