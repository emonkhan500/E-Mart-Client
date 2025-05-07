import React from "react";
import ShareHead from "../Shared/ShareHead";
import SharedNewsletter from "../Shared/SharedNewsletter";
import { FaRegTrashAlt } from "react-icons/fa";

const MyCart = () => {
  return (
    <div className="">
      <ShareHead pageTitle={"My Cart"}></ShareHead>
      <div className="flex flex-col lg:flex-row mt-10 lg:px-20 gap-16">
        {/* table */}
        <div className="overflow-x-auto w-full lg:w-2/3 ">
          <table className="table border-2 border-slate-200 p-3">
            {/* head */}
            <thead className="text-2xl bg-slate-100 quick">
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="border-b-2 border-slate-100">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className=" h-24 w-24 border-2 border-slate-100 p-3">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-lg font-bold text-[#253D4E]">
                  Field Roast Chao Cheese Creamy Original
                </td>
                <td className="text-xl font-bold text-[#3BB77E]">$2.5</td>
                <th>
                  <button className="btn btn-ghost btn-lg"><FaRegTrashAlt /></button>
                </th>
              </tr>
              {/* row 2 */}
              <tr className="border-b-2 border-slate-100">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className=" h-24 w-24 border-2 border-slate-100 p-3">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-lg font-bold text-[#253D4E]">
                  Field Roast Chao Cheese Creamy Original
                </td>
                <td className="text-xl font-bold text-[#3BB77E]">$2.5</td>
                <th>
                  <button className="btn btn-ghost btn-lg"><FaRegTrashAlt /></button>
                </th>
              </tr>
                 
            </tbody>
          </table>
        </div>

        {/* price box */}
        <div className="w-full lg:w-1/3 border-2 border-slate-200 p-3 px-6 rounded-xl">
          <div className="border-2 border-slate-100 mt-5">
          <div className="flex justify-between px-10 border-b-2  border-slate-100 p-3 text-lg font-bold  ">
            <h1 className="text-[#B6B6B6]">SubTotal</h1>
            <h1 className="text-[#3BB77E] text-xl">$10</h1>
          </div>
          {/* apply coupon */}
          <div className="border-b-2 border-slate-100 flex justify-between ">
            <input className="p-3 focus:outline-none text-black text-lg w-2/3 pl-10 font-bold" type="text" placeholder="Type Coupon?"/>
            <button className="text-white bg-[#3BB77E] w-1/3 text-2xl">Apply</button>
          </div>
          <div className="flex justify-between px-10   border-slate-100 p-3 text-lg font-bold  ">
            <h1 className="text-[#B6B6B6]">Total</h1>
            <h1 className="text-[#3BB77E] text-xl">$10</h1>
          </div>
          
          </div>
          <button className="text-white bg-[#3BB77E] w-full mt-3 p-3 text-lg font-semibold">CHECKOUT & PAY</button>
          
        </div>
      </div>
      <SharedNewsletter></SharedNewsletter>
    </div>
  );
};

export default MyCart;
