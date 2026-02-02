import { BiSupport } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const SabNav = () => {
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
    <div className="border-border border-t-2 border-b-2 w-full  px-4">
      <div className="flex justify-between items-center py-3 md:px-6 lg:px-0 max-w-7xl mx-auto">
        {/* All Categories Button */}
        <div className="px-5 py-2 md:mr-4  bg-primary-green text-white rounded quick">
          <Link to="/shop">All Categories</Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:gap-6 lg:gap-8 text-[1rem]">
          {navlinks}
        </ul>

        {/* Mobile Menu Button */}

        {/* Contact Info - Hidden on Small Screens */}
        <div className="hidden lg:flex gap-4 items-center">
          <BiSupport className="text-primary-text text-4xl" />
          <div>
            <h1 className="text-primary-green text-lg font-bold quick">
              +8801884932158
            </h1>
            <h1 className="text-primary-gray text-sm lato">
              24/7 Support Center
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SabNav;
