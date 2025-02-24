import React from "react";
import { Link } from "react-router-dom";

const DailyBestDeal = () => {
  return (
    <div>
      <div className="md:my-7 my-4 mt-10 text-center">
        <h1 className="text-[#253D4E] text-2xl md:text-4xl font-bold">
          Daily Best Sells
        </h1>
      </div>
      {/* main */}
      <div>
        <div
          className="relative w-full  h-[250px]  bg-cover bg-center flex items-center p-2  rounded-lg shadow-md"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/DHppj7Yn/leaf.png')",
          }}
        >
          <div className="bg-white bg-opacity-5 p-4 rounded-lg w-1/2 ">
            <h2 className="text-lg font-semibold text-gray-800">
              Bring nature into your home
            </h2>
            <Link to="/shop">
              <button className="mt-4 px-4 py-2 bg-[#3BB77E]  text-white rounded hover:bg-green-600">
                Shop Now →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyBestDeal;
