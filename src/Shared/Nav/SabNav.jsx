import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

const SabNav = () => {
  return (
    <div className="border-[#ECECEC] border-t-2 border-b-2 ">
      <div className=" flex px-44 mx-auto mt-2 mb-2 gap-36 ">
        {/* all category div */}
        <div className="px-7 py-2 bg-[#3BB77E] text-white rounded quick ">
          <button>All Categories</button>
        </div>
        {/*navlink pages */}
        <ul className="quick font-bold items-center gap-16 text-[1rem] text-[#424242] md:flex hidden">
          <li className="">Home</li>
          <li className="">About</li>
          <li className="">Shop</li>

          <li>Vendors</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
        {/* contact div */}
        <div className="flex gap-6 justify-center items-center  ml-24">
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
