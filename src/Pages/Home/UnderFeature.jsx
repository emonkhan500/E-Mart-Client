import React from "react";

const UnderFeature = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-3 mt-2">
        <div
          className="relative w-full   bg-cover bg-center flex items-center p-6 rounded-lg shadow-md"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/WvNkDjHd/banner-1-png.png')",
          }}
        >
          <div className="bg-white bg-opacity-5 p-4 rounded-lg w-1/2">
            <h2 className="text-lg font-semibold text-gray-800">
              Everyday Fresh & Clean with Our Products
            </h2>
            <button className="mt-2 px-4 py-2 bg-[#3BB77E]  text-white rounded hover:bg-green-600">
              Shop Now →
            </button>
          </div>
        </div>
        <div
          className="relative w-full   bg-cover bg-center flex items-center p-6 rounded-lg shadow-md"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/WvNkDjHd/banner-1-png.png')",
          }}
        >
          <div className="bg-white bg-opacity-5 p-4 rounded-lg w-1/2">
            <h2 className="text-lg font-semibold text-gray-800">
              Everyday Fresh & Clean with Our Products
            </h2>
            <button className="mt-2 px-4 py-2 bg-[#3BB77E]  text-white rounded hover:bg-green-600">
              Shop Now →
            </button>
          </div>
        </div>
        <div
          className="relative w-full   bg-cover bg-center flex items-center p-6 rounded-lg shadow-md"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/WvNkDjHd/banner-1-png.png')",
          }}
        >
          <div className="bg-white bg-opacity-5 p-4 rounded-lg w-1/2">
            <h2 className="text-lg font-semibold text-gray-800">
              Everyday Fresh & Clean with Our Products
            </h2>
            <button className="mt-2 px-4 py-2 bg-[#3BB77E]  text-white rounded hover:bg-green-600">
              Shop Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderFeature;
