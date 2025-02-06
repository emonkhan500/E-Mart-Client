
import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";

const SabNav = () => {
    return (
        <div>
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
<li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">
  home
</li>

{/* about us mega menu */}
<li className=" transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize flex items-center gap-[3px] group relative">
  about us
  <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
  <article className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
    <div className="grid grid-cols-2">
      <ul className="flex flex-col gap-[7px] text-[#424242]">
        <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
          <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
          Company Details
        </li>
        <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
          <BsArrowRight className="text-[#424242] text-[0.9rem]" />
          Company Location
        </li>
        <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
          <BsArrowRight className="text-[#424242] text-[0.9rem]" />
          Team Members
        </li>
        <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
          <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
          Office Tour
        </li>
      </ul>

      <div className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
        <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
          <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
          Full Customize
        </div>

        <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
          <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
          Modern Design
        </div>

        <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
          <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
          Well Stacktured
        </div>
      </div>
    </div>

  </article>
</li>

{/* service mega menu */}
<li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize group relative flex items-center gap-[3px]">
  services
  <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
  <article className="p-6 bg-white rounded-md w-[500px] absolute top-[40px] z-[-1] left-[-150px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
    <div className="grid grid-cols-2">
      <ul className="flex flex-col gap-[7px] text-[#424242]">
        <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
          <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
          Company Details
        </li>
        <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
          <BsArrowRight className="text-[#424242] text-[0.9rem]" />
          Company Location
        </li>
        <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
          <BsArrowRight className="text-[#424242] text-[0.9rem]" />
          Team Members
        </li>
        <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
          <BsArrowRight className="text-[#424242] text-[0.9rem]" />{" "}
          Office Tour
        </li>
      </ul>

      <div className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
        <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
          <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
          Full Customize
        </div>

        <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
          <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
          Modern Design
        </div>

        <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
          <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
          Well Stacktured
        </div>
      </div>
    </div>

  </article>
</li>
</ul>
        </div>
    );
};

export default SabNav;