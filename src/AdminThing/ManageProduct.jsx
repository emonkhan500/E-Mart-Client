import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import useAxiosSecure from "../Axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ManageProduct = () => {
const axiosSecure=useAxiosSecure()

const{data:allProduct}=useQuery({
  queryKey:['allProduct'],
  queryFn:async ()=>{
    const result = await axiosSecure.get('/product')
    return result.data
  }
})
console.log(allProduct);

  return (
    <div className="overflow-x-auto w-full lg:w-2/3 ">
      <table className="table border-2 border-slate-200 p-3">
        {/* head */}
        <thead className="text-2xl text-white bg-[#3BB77E] quick">
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>



        {
          allProduct?.map((product,index)=><tr className="border-b-2 border-slate-100">
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
          {/* edit */}
          <th>
            <button className="btn btn-ghost btn-xl">
            <CiEdit />
            </button>
          </th>
          <th>
            <button className="btn btn-ghost btn-lg">
              <FaRegTrashAlt />
            </button>
          </th>
        </tr>)
        }
          
          
        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
