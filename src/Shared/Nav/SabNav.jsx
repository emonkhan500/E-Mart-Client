
import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";

const SabNav = () => {
    return (
        <div>
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
<li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">
  Home
</li>

{/* about us mega menu */}
<li className=" transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize flex items-center gap-[3px] group relative">
About
  <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
  <article className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
    <div className="grid grid-cols-2">
      <ul className="flex flex-col gap-[7px] text-[#424242]">
        <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
          <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
          Company Details
        </li>
        
      </ul>

      
    </div>

  </article>
</li>

{/* service mega menu */}
<li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize group relative flex items-center gap-[3px]">
Shop 
  <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
  <article className="p-6 bg-white rounded-md w-[500px] absolute top-[40px] z-[-1] left-[-150px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
    <div className="grid grid-cols-2">
      <ul className="flex flex-col gap-[7px] text-[#424242]">
        <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
          <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
          Company Details
        </li>
        
      </ul>

     
    </div>

  </article>
</li>
<li>Vendors</li>
<li>Blog</li>
<li>Pages</li>
<li>Contact</li>
</ul>
        </div>
    );
};

export default SabNav;