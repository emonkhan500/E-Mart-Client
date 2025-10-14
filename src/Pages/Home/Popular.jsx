import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import useAxiosSecure from "../../Axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const Popular = () => {
const axiosSecure= useAxiosSecure()

const{data:product=[]}=useQuery({
  queryKey:['product'],
  queryFn:async ()=>{
    const data = await axiosSecure.get('/product')
    return data.data;

  }
})
console.log(product);

  return (
    <div className="lato">
      <div className="md:my-7 my-4 pt-8 lg:pt-24 text-center">
        <h1 className="text-[#253D4E] text-2xl md:text-4xl font-bold">Popular Product</h1>
        <div className="flex justify-center mt-3 pr-7 mb-8">
          <img
            className=""
            src="https://i.ibb.co.com/1JBhBjNq/underheading.png "
            alt=""
          />
        </div>
      </div>
      {/* product div */}
      <div className="grid gap-4 md:gap-2 lg:gap-2 xl:gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center items-center 2xl:px-16">
        {
          product?.slice(0,12).map((item,index)=>(
            <div
    key={index}
    className="relative border border-[#ECECEC] rounded-lg px-3 shadow mx-auto w-full md:w-auto"
  >
    {/* Correctly rendering the label */}
    {item?.tag && (
      <span className="absolute top-0 right-0 bg-pink-500 text-white px-4  rounded-bl-lg text-lg">
        {item.tag}
      </span>
    )}

    <div className="flex justify-center">
      <img src={item?.photo} alt={item?.title} className="w-60 h-60" />
    </div>
    <div className="space-y-2">
      <p className="text-[#ADADAD]">{item?.category}</p>
      <h1 className="quick text-xl font-bold text-[#253D4E]">{item?.title}</h1>
      <p>
        By <span className="text-[#3BB77E]">{item?.vendor}</span>
      </p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <div className="flex justify-between px-3 pb-4">
        <h1 className="text-[#3BB77E] text-lg font-semibold">
          ${item?.price}
        </h1>
        <button className="flex items-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
          <FaShoppingCart /> Add
        </button>
      </div>
    </div>
  </div>
          ))
        }
  
  </div>
</div>

    
  );
};

export default Popular;
