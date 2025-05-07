import React from "react";

const Address = () => {
  return (
    <div className=" border-b-4 border-[#3BB77E]">
      <div className=" quick grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 mb-14">
        
        {/* contact */}
        <div className="text-center">
          <h1 className="text-center text-[#3BB77E] font-bold text-3xl">Office</h1>
          <p className="mt-5 text-lg text-[#7E7E7E]">
            Tangail-Sadar 1900, Tangail,Dhaka</p>
          <p className="mt-5 text-lg text-[#7E7E7E]">
          Phone: +880-1884932158</p>
          <p className="mt-5 text-lg text-[#7E7E7E]">
          Email: emon562002@gmail.com</p>
        </div>
        <div className="text-center">
          <h1 className=" text-[#3BB77E] font-bold text-3xl">Studio</h1>
          <p className="mt-5 text-lg text-[#7E7E7E]">
            Tangail-Sadar 1900, Tangail,Dhaka</p>
          <p className="mt-5 text-lg text-[#7E7E7E]">
          Phone: +880-1884932158</p>
          <p className="mt-5 text-lg text-[#7E7E7E]">
          Email: emon562002@gmail.com</p>
        </div>
        <div className="text-center">
          <h1 className=" text-[#3BB77E] font-bold text-3xl">Shop</h1>
          <p className="mt-5 text-lg text-[#7E7E7E]">
            Tangail-Sadar 1900, Tangail,Dhaka</p>
          <p className="mt-5 text-lg text-[#7E7E7E]">
          Phone: +880-1884932158</p>
          <p className="mt-5 text-lg text-[#7E7E7E]">
          Email: emon562002@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
