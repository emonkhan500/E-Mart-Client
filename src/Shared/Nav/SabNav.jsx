import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const SabNav = () => {

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
  to='/pages'
  className={({isActive})=>isActive ?"quick font-extrabold text-[#3BB77E]":"quick font-bold text-[#424242]"}
  >
Pages

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
)

  return (
    <div className="border-[#ECECEC]  border-t-2 border-b-2 ">
      <div className=" flex md:px-10  mx-auto mt-2 mb-2 md:gap-10 lg:gap-36 ">
        {/* all category div */}
        <div className="px-7 py-2 bg-[#3BB77E] text-white rounded quick ">
          <button>All Categories</button>
        </div>
        {/*navlink pages */}
        <ul className=" items-center md:gap-10 lg:gap-16 text-[1rem]   md:flex hidden">
        {navlinks}
        </ul>
        {/* contact div */}
        <div className="lg:flex gap-6 justify-center items-center hidden  ml-28">
          <BiSupport className="text-[#253D4E] text-4xl" />
          <div className="">
            <h1 className="text-[#3BB77E] text-lg font-bold quick">
              +8801884932158
            </h1>
            <h1 className="text-[#7E7E7E] text-sm ml-5 lato">
              24/7 Support Center
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SabNav;
