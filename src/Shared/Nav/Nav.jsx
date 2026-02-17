import { useContext, useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
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
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { data: wishedProduct = [] } = useQuery({
    queryKey: ["wishedProduct", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlists/${user.email}`);
      return res.data;
    },
  });

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Signed Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navlinks = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "quick font-extrabold text-primary-green" : "quick font-bold text-secondary-text"}>Home</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => isActive ? "quick font-extrabold text-primary-green" : "quick font-bold text-secondary-text"}>About</NavLink></li>
      <li><NavLink to="/shop" className={({ isActive }) => isActive ? "quick font-extrabold text-primary-green" : "quick font-bold text-secondary-text"}>Shop</NavLink></li>
      <li><NavLink to="/vendors" className={({ isActive }) => isActive ? "quick font-extrabold text-primary-green" : "quick font-bold text-secondary-text"}>Vendors</NavLink></li>
      <li><NavLink to="/blogs" className={({ isActive }) => isActive ? "quick font-extrabold text-primary-green" : "quick font-bold text-secondary-text"}>Blogs</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => isActive ? "quick font-extrabold text-primary-green" : "quick font-bold text-secondary-text"}>Contact</NavLink></li>
    </>
  );

  return (
    <div className="flex flex-col sticky top-0 z-50 bg-white">
      <nav className="w-full px-2 lato flex justify-between items-center gap-3 md:px-2 xl:px-20 mx-auto h-auto mt-10 mb-6">

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-primary-green"
          onClick={toggleMenu}
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>

        <div className="flex justify-center items-center gap-12 md:gap-1 lg:gap-12">
          <div className="w-20 md:w-[130px] lg:w-[160px] xl:w-[180px]">
            <img src={logo} alt="logo" />
          </div>

          <div className="relative hidden md:flex items-center justify-center md:ml-2 xl:ml-8">
            <input
              className="md:w-[270px] lg:w-[300px] xxl:w-[400px] 2xl:w-[600px] py-3 pl-2 lg:pl-10 xl:pl-20 border-2 border-primary-green outline-none"
              placeholder="Search For Items..."
            />
            <IoIosSearch className="hidden lg:flex absolute top-[14px] lg:left-[250px] xxl:left-[350px] text-secondary-text text-[1.3rem]" />
          </div>
        </div>

        <div className="border-2 border-primary-green rounded px-7 xl:px-9 py-2.5 shadow hidden xl:flex gap-2 items-center justify-center">
          <CiLocationOn className="text-2xl text-primary-green" />
          <h1 className="text-primary-green">Location</h1>
        </div>

        <div className="flex items-center gap-1 md:gap-1 lg:gap-3">

          {/* Wishlist */}
          <Link to="/wish">
            <div className="flex gap-2 bg-bg-honeydew px-2 md:px-2 lg:px-3 py-1 md:py-2 rounded-md items-center shadow-md">
              <div className="indicator">
                <span className="indicator-item rounded-full bg-primary-green text-xs px-1 text-white">
                  {wishedProduct?.length || 0}
                </span>
                <CiHeart className="text-xl font-extrabold text-primary-text hover:text-primary-green" />
              </div>
              <h1 className="mt-1 text-sm text-primary-gray hidden lg:flex">Wishlist</h1>
            </div>
          </Link>

          {/* Cart */}
          <Link to="/cart">
            <div className="flex gap-2 bg-bg-honeydew px-2 md:px-2 lg:px-3 py-1 md:py-2 rounded-md items-center shadow-md">
              <div className="indicator">
                <span className="indicator-item rounded-full bg-primary-green text-xs px-1 text-white">
                  6
                </span>
                <IoCartOutline className="text-xl font-extrabold text-primary-text hover:text-primary-green" />
              </div>
              <h1 className="mt-1 text-sm text-primary-gray hidden lg:flex">Cart</h1>
            </div>
          </Link>

          {/* Dashboard */}
          <Link to="/dashboard">
            <div className="flex gap-2 bg-bg-honeydew px-2 md:px-2 lg:px-3 py-1 md:py-2 rounded-md items-center shadow-md">
              <MdOutlineDashboard className="text-xl font-extrabold text-primary-text hover:text-primary-green" />
              <h1 className="mt-1 text-sm text-primary-gray hidden md:flex">DashBoard</h1>
            </div>
          </Link>

          {/* Auth */}
          {user ? (
            <button onClick={handleLogout} className="bg-bg-honeydew flex gap-1 items-center px-3 md:px-2 lg:px-3 py-1 md:py-2 rounded-md shadow-md">
              <VscAccount className="text-2xl text-primary-text" />
              <h1 className="mt-1 text-sm text-primary-gray hidden md:flex">SignOut</h1>
            </button>
          ) : (
            <Link to="/signin">
              <button className="bg-bg-honeydew flex gap-1 items-center px-3 md:px-2 lg:px-3 py-1 md:py-2 rounded-md shadow-md">
                <VscAccount className="text-2xl text-primary-text" />
                <h1 className="mt-1 text-sm text-primary-gray hidden md:flex">SignIn</h1>
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <aside
            className={`quick fixed top-0 right-0 h-screen bg-white z-20 shadow-lg p-8 w-[70%] max-w-[300px] transition-transform duration-300 overflow-y-auto ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="gap-[20px] text-[1rem] flex flex-col mt-3">
              {navlinks}
            </ul>
          </aside>
        )}
      </nav>

      <div className="w-full hidden md:block">
        <SabNav />
      </div>
    </div>
  );
};

export default Nav;
