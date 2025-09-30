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
        <h1 className="text-6xl  md:text-7xl text-[#253D4E] font-bold">
          Vendors List
        </h1>
        <div className="flex items-center justify-center mt-8 ">
          <input
            className="w-full md:w-3/6 py-5 pl-8 md:pl-12 border-2 outline-none rounded-full shadow-lg"
            placeholder="Search For Vendors..."
          />
          <IoIosSearch className="relative top-[1px] -left-[50px] md:-left-[65px] lg:-left-[90px] text-[#424242] text-2xl" />
        </div>
      </div>
      {/* list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5 xl:gap-6 space-y-3 lg:space-y-10 mt-10">
        {/* 1 */}
        <div className=" lg:mt-10 relative border rounded-lg px-2 py-6 hover:shadow-xl hover:border-[#3BB77E]">
          <span className="absolute top-0 right-0 bg-pink-500 text-white  px-9 py-1 rounded-bl-lg text-lg">
            Mall
          </span>
          <div className="py-6">
            <img className="h-56 w-56"
              src="https://i.ibb.co.com/nMGdN0qs/gadget-vendor-removebg-preview.png"
              alt=""
            />
          </div>
          <h1 className="text-[#ADADAD]">Since 2010</h1>
          <div className="px-1 flex my-4 items-center justify-between gap-3 md:gap-8 lg:gap-4">
            <div>
              <h1 className="text-[#253D4E] text-xl md:text-2xl lg:text-2xl">
                Tech World BD
              </h1>
            </div>
            <div className="px-1 py-1 text-sm lg:text-base bg-[#DEF9EC] text-[#3BB77E] rounded">
              {" "}
              380 products
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-[#ADADAD] flex items-center gap-1">
              <CiLocationOn className="text-[#3BB77E] text-xl font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Address:</span>{" "}
              Savar Bazar, Savar, Dhaka Division
            </div>
            <div className="text-[#ADADAD] flex items-center gap-3">
              <TfiHeadphoneAlt className="text-[#3BB77E] text-lg font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Call Us:</span>{" "}
              (+880) - 1300-778899
            </div>
          </div>
          <div className="mt-7">
            <Link className="inline-block">
              <button
                t
                className="px-4 text-white py-1 text-base md:text-lg lato  bg-[#3BB77E] rounded flex justify-center items-center gap-2"
              >
                Visit
                <FaArrowRightLong />{" "}
              </button>
            </Link>
          </div>
        </div>
        {/* 2 */}
        <div className="relative border rounded-lg px-2 py-6 hover:shadow-xl hover:border-[#3BB77E]">
          <span className="absolute top-0 right-0 bg-pink-500 text-white  px-9 py-1 rounded-bl-lg text-lg">
            Preferred
          </span>
          <div className="py-6">
            <img className="h-56 w-56" src="https://i.ibb.co.com/8n5mXmgW/vendor-2.png" alt="" />
          </div>
          <h1 className="text-[#ADADAD]">Since 2014</h1>
          <div className="px-1 flex my-4 items-center justify-between gap-3 md:gap-8 lg:gap-4">
            <div>
              <h1 className="text-[#253D4E] text-xl md:text-2xl lg:text-2xl">
                Fresh Fruits BD
              </h1>
            </div>
            <div className="px-1 py-1 text-sm lg:text-base bg-[#DEF9EC] text-[#3BB77E] rounded">
              {" "}
              63 products
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-[#ADADAD] flex items-center gap-1">
              <CiLocationOn className="text-[#3BB77E] text-xl font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Address:</span>{" "}
              Kazi Nazrul Ave, Dhaka
            </div>
            <div className="text-[#ADADAD] flex items-center gap-3">
              <TfiHeadphoneAlt className="text-[#3BB77E] text-lg font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Call Us:</span>{" "}
              (+880) - 1712-456789
            </div>
          </div>
          <div className="mt-7">
            <Link className="inline-block">
              <button
                t
                className="px-4 text-white py-1 text-base md:text-lg lato  bg-[#3BB77E] rounded flex justify-center items-center gap-2"
              >
                Visit
                <FaArrowRightLong />{" "}
              </button>
            </Link>
          </div>
        </div>
        {/* 3 */}
        <div className="relative border rounded-lg px-2 py-6 hover:shadow-xl hover:border-[#3BB77E]">
          <span className="absolute top-0 right-0 bg-pink-500 text-white  px-9 py-1 rounded-bl-lg text-lg">
            Mall
          </span>
          <div className="py-6">
            <img className="h-56 w-56" src="https://i.ibb.co.com/G6wNv9J/fish.jpg" alt="" />
          </div>
          <h1 className="text-[#ADADAD]">Since 2013</h1>
          <div className="px-1 flex my-4 items-center justify-between gap-3 md:gap-8 lg:gap-4">
            <div>
              <h1 className="text-[#253D4E] text-xl md:text-2xl lg:text-2xl">
                Shonar Bangla Meat
              </h1>
            </div>
            <div className="px-1 py-1 text-sm lg:text-base bg-[#DEF9EC] text-[#3BB77E] rounded">
              {" "}
              310 products
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-[#ADADAD] flex items-center gap-1">
              <CiLocationOn className="text-[#3BB77E] text-xl font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Address:</span>{" "}
              Agrani Road, Narayanganj, Dhaka Division
            </div>
            <div className="text-[#ADADAD] flex items-center gap-3">
              <TfiHeadphoneAlt className="text-[#3BB77E] text-lg font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Call Us:</span>{" "}
              (+880) - 1911-223344
            </div>
          </div>
          <div className="mt-7">
            <Link className="inline-block">
              <button
                t
                className="px-4 text-white py-1 text-base md:text-lg lato  bg-[#3BB77E] rounded flex justify-center items-center gap-2"
              >
                Visit
                <FaArrowRightLong />{" "}
              </button>
            </Link>
          </div>
        </div>
        {/* 4 */}
        <div className="relative border rounded-lg px-2 py-6 hover:shadow-xl hover:border-[#3BB77E]">
          <span className="absolute top-0 right-0 bg-pink-500 text-white  px-9 py-1 rounded-bl-lg text-lg">
            Mall
          </span>
          <div className="py-6">
            <img className="h-56 w-56" src="https://i.ibb.co.com/CKNYRqCj/vendor-8.png" alt="" />
          </div>
          <h1 className="text-[#ADADAD]">Since 2017</h1>
          <div className="px-1 flex my-4 items-center justify-between gap-3 md:gap-8 lg:gap-4">
            <div>
              <h1 className="text-[#253D4E] text-xl md:text-2xl lg:text-2xl">
                Bangla Bites
              </h1>
            </div>
            <div className="px-1 py-1 text-sm lg:text-base bg-[#DEF9EC] text-[#3BB77E] rounded">
              {" "}
              120 products
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-[#ADADAD] flex items-center gap-1">
              <CiLocationOn className="text-[#3BB77E] text-xl font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Address:</span>{" "}
              Block C, Bashundhara R/A, Dhaka
            </div>
            <div className="text-[#ADADAD] flex items-center gap-3">
              <TfiHeadphoneAlt className="text-[#3BB77E] text-lg font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Call Us:</span>{" "}
              (+880) - 1611-889977
            </div>
          </div>
          <div className="mt-7">
            <Link className="inline-block">
              <button
                t
                className="px-4 text-white py-1 text-base md:text-lg lato  bg-[#3BB77E] rounded flex justify-center items-center gap-2"
              >
                Visit
                <FaArrowRightLong />{" "}
              </button>
            </Link>
          </div>
        </div>
        {/* 5 */}
        <div className="relative border rounded-lg px-2 py-6 hover:shadow-xl hover:border-[#3BB77E]">
          <span className="absolute top-0 right-0 bg-pink-500 text-white  px-9 py-1 rounded-bl-lg text-lg">
            Mall
          </span>
          <div className="py-6">
            <img className="h-56 w-56" src="https://i.ibb.co.com/yBSNLzQf/fashion.png" alt="" />
          </div>
          <h1 className="text-[#ADADAD]">Since 2018</h1>
          <div className="px-1 flex my-4 items-center justify-between gap-3 md:gap-8 lg:gap-4">
            <div>
              <h1 className="text-[#253D4E] text-xl md:text-2xl lg:text-2xl">
                Trendy Touch BD
              </h1>
            </div>
            <div className="px-1 py-1 text-sm lg:text-base bg-[#DEF9EC] text-[#3BB77E] rounded">
              {" "}
              380 products
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-[#ADADAD] flex items-center gap-1">
              <CiLocationOn className="text-[#3BB77E] text-xl font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Address:</span>{" "}
              Zila Sadar, Manikganj, Dhaka Division
            </div>
            <div className="text-[#ADADAD] flex items-center gap-3">
              <TfiHeadphoneAlt className="text-[#3BB77E] text-lg font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Call Us:</span>{" "}
              (+880) - 1700-112233
            </div>
          </div>
          <div className="mt-7">
            <Link className="inline-block">
              <button
                t
                className="px-4 text-white py-1 text-base md:text-lg lato  bg-[#3BB77E] rounded flex justify-center items-center gap-2"
              >
                Visit
                <FaArrowRightLong />{" "}
              </button>
            </Link>
          </div>
        </div>
        {/* 6 */}
        <div className="relative border rounded-lg px-2 py-6 hover:shadow-xl hover:border-[#3BB77E]">
          <span className="absolute top-0 right-0 bg-pink-500 text-white  px-9 py-1 rounded-bl-lg text-lg">
            Preferred
          </span>
          <div className="py-6">
            <img className="h-56 w-56" src="https://i.ibb.co.com/4ndVDcHm/kitchen.png" alt="" />
          </div>
          <h1 className="text-[#ADADAD]">Since 2014</h1>
          <div className="px-1 flex my-4 items-center justify-between gap-3 md:gap-8 lg:gap-4">
            <div>
              <h1 className="text-[#253D4E] text-xl md:text-2xl lg:text-2xl">
                Home & Kitchen Mart
              </h1>
            </div>
            <div className="px-1 py-1 text-sm lg:text-base bg-[#DEF9EC] text-[#3BB77E] rounded">
              {" "}
              63 products
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-[#ADADAD] flex items-center gap-1">
              <CiLocationOn className="text-[#3BB77E] text-xl font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Address:</span>{" "}
              Station Road, Gazipur, Dhaka Division
            </div>
            <div className="text-[#ADADAD] flex items-center gap-3">
              <TfiHeadphoneAlt className="text-[#3BB77E] text-lg font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Call Us:</span>{" "}
              (+880) - 1555-443322
            </div>
          </div>
          <div className="mt-7">
            <Link className="inline-block">
              <button
                t
                className="px-4 text-white py-1 text-base md:text-lg lato  bg-[#3BB77E] rounded flex justify-center items-center gap-2"
              >
                Visit
                <FaArrowRightLong />{" "}
              </button>
            </Link>
          </div>
        </div>
        {/* 7 */}
        <div className="relative border rounded-lg px-2 py-6 hover:shadow-xl hover:border-[#3BB77E]">
          <span className="absolute top-0 right-0 bg-pink-500 text-white  px-9 py-1 rounded-bl-lg text-lg">
            Mall
          </span>
          <div className="py-6">
            <img className="h-56 w-56" src="https://i.ibb.co.com/CKNYRqCj/vendor-8.png" alt="" />
          </div>
          <h1 className="text-[#ADADAD]">Since 2018</h1>
          <div className="px-1 flex my-4 items-center justify-between gap-3 md:gap-8 lg:gap-4">
            <div>
              <h1 className="text-[#253D4E] text-xl md:text-2xl lg:text-2xl">
                Bangla Bites
              </h1>
            </div>
            <div className="px-1 py-1 text-sm lg:text-base bg-[#DEF9EC] text-[#3BB77E] rounded">
              {" "}
              120 products
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-[#ADADAD] flex items-center gap-1">
              <CiLocationOn className="text-[#3BB77E] text-xl font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Address:</span>{" "}
              Block C, Bashundhara R/A, Dhaka
            </div>
            <div className="text-[#ADADAD] flex items-center gap-3">
              <TfiHeadphoneAlt className="text-[#3BB77E] text-lg font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Call Us:</span>{" "}
              (+880) - 1611-889977
            </div>
          </div>
          <div className="mt-7">
            <Link className="inline-block">
              <button
                t
                className="px-4 text-white py-1 text-base md:text-lg lato  bg-[#3BB77E] rounded flex justify-center items-center gap-2"
              >
                Visit
                <FaArrowRightLong />{" "}
              </button>
            </Link>
          </div>
        </div>

        {/* 8 */}
        <div className="relative border rounded-lg px-2 py-6 hover:shadow-xl hover:border-[#3BB77E]">
          <span className="absolute top-0 right-0 bg-pink-500 text-white  px-9 py-1 rounded-bl-lg text-lg">
            Mall
          </span>
          <div className="py-6">
            <img
              className="h-56 w-56"
              src="https://i.ibb.co.com/KcFD4wCY/sports-logo.png"
              alt=""
            />
          </div>
          <h1 className="text-[#ADADAD]">Since 2013</h1>
          <div className="px-1 flex my-4 items-center justify-between gap-3 md:gap-8 lg:gap-4">
            <div>
              <h1 className="text-[#253D4E] text-xl md:text-2xl lg:text-2xl">
                Champion Sports House
              </h1>
            </div>
            <div className="px-1 py-1 text-sm lg:text-base bg-[#DEF9EC] text-[#3BB77E] rounded">
              {" "}
              310 products
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-[#ADADAD] flex items-center gap-1">
              <CiLocationOn className="text-[#3BB77E] text-xl font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Address:</span>{" "}
              Court Road, Narsingdi, Dhaka Division
            </div>
            <div className="text-[#ADADAD] flex items-center gap-3">
              <TfiHeadphoneAlt className="text-[#3BB77E] text-lg font-bold" />{" "}
              <span className="text-sm font-bold text-[#253D4E]">Call Us:</span>{" "}
              (+880) - 1400-334455
            </div>
          </div>
          <div className="mt-7">
            <Link className="inline-block">
              <button
                t
                className="px-4 text-white py-1 text-base md:text-lg lato  bg-[#3BB77E] rounded flex justify-center items-center gap-2"
              >
                Visit
                <FaArrowRightLong />{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorList;

// w-[250px] md:w-[250px] lg:w-[380px]
