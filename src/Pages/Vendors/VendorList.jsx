import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const VendorList = () => {
  return (
    <div>
      <div className="text-center mt-8 ">
        <h1 className="text-6xl  md:text-7xl text-[#253D4E] font-bold">Vendors List</h1>
        <div className="flex items-center justify-center mt-8 ">
          <input
            className="w-full md:w-3/6 py-5 pl-8 md:pl-12 border-2 outline-none rounded-full shadow-lg"
            placeholder="Search For Vendors..."
          />
          <IoIosSearch className="relative top-[1px] -left-[50px] md:-left-[65px] lg:-left-[90px] text-[#424242] text-2xl" />
        </div>
      </div>
      {/* list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-10">
        {/* 1 */}
        <div className="relative border rounded-lg px-2 py-6">
          <span className="absolute top-0 right-0 bg-pink-500 text-white  px-9 py-1 rounded-bl-lg text-lg">
            Mall
          </span>
          <div className="py-6">
            <img src="https://i.ibb.co.com/WpcBsBfM/vendor-1.png" alt="" />
          </div>
          <h1 className="text-[#ADADAD]">Since 2012</h1>
          <div className="px-1 flex my-4 items-center justify-center gap-3 md:gap-8 lg:gap-4">
            <div>
              <h1 className="text-[#253D4E] text-xl md:text-2xl lg:text-2xl">Maruchan Ramen</h1>
            </div>
            <div className="px-1 py-1 text-sm lg:text-base bg-[#DEF9EC] text-[#3BB77E] rounded">
              {" "}
              380 products
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-[#ADADAD] flex items-center gap-1"><CiLocationOn  className="text-[#3BB77E] text-xl font-bold"/>    <span className="text-sm font-bold text-[#253D4E]">Address:</span> 5171 Campbell Ave Kent, United States</div>
            <div  className="text-[#ADADAD] flex items-center gap-3"><TfiHeadphoneAlt  className="text-[#3BB77E] text-lg font-bold"/> <span className="text-sm font-bold text-[#253D4E]">Call Us:</span> (+91) - 540-025-124553</div>
          </div>
          <div className="mt-7">
                <Link   className="inline-block">
                  <button t className="px-4 text-white py-1 text-base md:text-lg lato  bg-[#3BB77E] rounded flex justify-center items-center gap-2">Visit 
                  <FaArrowRightLong /> </button>
                
                </Link>
              </div>
        </div>
        {/* 2 */}
        <div className="relative border rounded-lg px-2 py-6">
          <span className="absolute top-0 right-0 bg-pink-500 text-white  px-9 py-1 rounded-bl-lg text-lg">
            Mall
          </span>
          <div className="py-6">
            <img src="https://i.ibb.co.com/WpcBsBfM/vendor-1.png" alt="" />
          </div>
          <h1 className="text-[#ADADAD]">Since 2012</h1>
          <div className="px-1 flex my-4 items-center justify-center gap-3 md:gap-8 lg:gap-4">
            <div>
              <h1 className="text-[#253D4E] text-xl md:text-2xl lg:text-2xl">Maruchan Ramen</h1>
            </div>
            <div className="px-1 py-1 text-sm lg:text-base bg-[#DEF9EC] text-[#3BB77E] rounded">
              {" "}
              380 products
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-[#ADADAD] flex items-center gap-1"><CiLocationOn  className="text-[#3BB77E] text-xl font-bold"/>    <span className="text-sm font-bold text-[#253D4E]">Address:</span> 5171 Campbell Ave Kent, United States</div>
            <div  className="text-[#ADADAD] flex items-center gap-3"><TfiHeadphoneAlt  className="text-[#3BB77E] text-lg font-bold"/> <span className="text-sm font-bold text-[#253D4E]">Call Us:</span> (+91) - 540-025-124553</div>
          </div>
          <div className="mt-7">
                <Link   className="inline-block">
                  <button t className="px-4 text-white py-1 text-base md:text-lg lato  bg-[#3BB77E] rounded flex justify-center items-center gap-2">Visit 
                  <FaArrowRightLong /> </button>
                
                </Link>
              </div>
        </div>
        {/* 3 */}
        <div className="relative border rounded-lg px-2 py-6">
          <span className="absolute top-0 right-0 bg-pink-500 text-white  px-9 py-1 rounded-bl-lg text-lg">
            Mall
          </span>
          <div className="py-6">
            <img src="https://i.ibb.co.com/WpcBsBfM/vendor-1.png" alt="" />
          </div>
          <h1 className="text-[#ADADAD]">Since 2012</h1>
          <div className="px-1 flex my-4 items-center justify-center gap-3 md:gap-8 lg:gap-4">
            <div>
              <h1 className="text-[#253D4E] text-xl md:text-2xl lg:text-2xl">Maruchan Ramen</h1>
            </div>
            <div className="px-1 py-1 text-sm lg:text-base bg-[#DEF9EC] text-[#3BB77E] rounded">
              {" "}
              380 products
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-[#ADADAD] flex items-center gap-1"><CiLocationOn  className="text-[#3BB77E] text-xl font-bold"/>    <span className="text-sm font-bold text-[#253D4E]">Address:</span> 5171 Campbell Ave Kent, United States</div>
            <div  className="text-[#ADADAD] flex items-center gap-3"><TfiHeadphoneAlt  className="text-[#3BB77E] text-lg font-bold"/> <span className="text-sm font-bold text-[#253D4E]">Call Us:</span> (+91) - 540-025-124553</div>
          </div>
          <div className="mt-7">
                <Link   className="inline-block">
                  <button t className="px-4 text-white py-1 text-base md:text-lg lato  bg-[#3BB77E] rounded flex justify-center items-center gap-2">Visit 
                  <FaArrowRightLong /> </button>
                
                </Link>
              </div>
        </div>
        {/* 4 */}
        <div className="relative border rounded-lg px-2 py-6">
          <span className="absolute top-0 right-0 bg-pink-500 text-white  px-9 py-1 rounded-bl-lg text-lg">
            Mall
          </span>
          <div className="py-6">
            <img src="https://i.ibb.co.com/WpcBsBfM/vendor-1.png" alt="" />
          </div>
          <h1 className="text-[#ADADAD]">Since 2012</h1>
          <div className="px-1 flex my-4 items-center justify-center gap-3 md:gap-8 lg:gap-4">
            <div>
              <h1 className="text-[#253D4E] text-xl md:text-2xl lg:text-2xl">Maruchan Ramen</h1>
            </div>
            <div className="px-1 py-1 text-sm lg:text-base bg-[#DEF9EC] text-[#3BB77E] rounded">
              {" "}
              380 products
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-[#ADADAD] flex items-center gap-1"><CiLocationOn  className="text-[#3BB77E] text-xl font-bold"/>    <span className="text-sm font-bold text-[#253D4E]">Address:</span> 5171 Campbell Ave Kent, United States</div>
            <div  className="text-[#ADADAD] flex items-center gap-3"><TfiHeadphoneAlt  className="text-[#3BB77E] text-lg font-bold"/> <span className="text-sm font-bold text-[#253D4E]">Call Us:</span> (+91) - 540-025-124553</div>
          </div>
          <div className="mt-7">
                <Link   className="inline-block">
                  <button t className="px-4 text-white py-1 text-base md:text-lg lato  bg-[#3BB77E] rounded flex justify-center items-center gap-2">Visit 
                  <FaArrowRightLong /> </button>
                
                </Link>
              </div>
        </div>
      
        
      </div>
    </div>
  );
};

export default VendorList;

// w-[250px] md:w-[250px] lg:w-[380px]
