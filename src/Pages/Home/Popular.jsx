import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Popular = () => {
  return (
    <div className="lato">
      <div className="my-7">
        <h1 className="text-[#253D4E] text-3xl font-bold">Popular Product</h1>
      </div>
      {/* product div */}
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center">
        {/* 1 */}
      <div className="w-[295px] lg:w-auto  border border-[#ECECEC] rounded-lg px-3 shadow">
        <div className="">
          <img src="https://i.ibb.co.com/Pv8THjRB/Link-product-1-1-jpg.png" alt="" />
          
        </div>
        <div>
            <p className="text-[#ADADAD]">Snack</p>
            <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">Seeds of Change Organic
Quinoa, Brown, & Red Rice</h1>
            <p>By <span className="text-[#3BB77E]">NestFood</span></p>
            <div className="rating mt-2">
  <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
  <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
            <div className="flex justify-between  items-center mb-5">
                <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
                <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]"><FaShoppingCart />  Add </button>
            </div>
        </div>
      </div>
       
      
      </div>
    </div>
  );
};

export default Popular;
