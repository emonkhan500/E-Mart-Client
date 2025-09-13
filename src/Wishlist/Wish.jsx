import React from 'react';
import ShareHead from '../Shared/ShareHead';
import { FaRegTrashAlt } from 'react-icons/fa';

const Wish = () => {
    return (
        <div className=''>
             <ShareHead pageTitle={"My Wishlist"}></ShareHead>
         <div className="overflow-x-auto w-full  mt-10">
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
        </div>
    );
};

export default Wish;