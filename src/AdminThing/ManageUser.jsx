import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const ManageUser = () => {
  return (
    <div className="overflow-x-auto w-full  ">
      <table className="table border-2 border-slate-200 p-3">
        {/* head */}
        <thead className="text-2xl bg-[#3BB77E] text-white quick">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created Time</th>
            <th>Remove</th>

          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="border-b-2 border-slate-100">
            <td className="text-lg font-bold text-[#253D4E]">Emon Khan</td>
            <td className="text-xl font-bold text-[#253D4E]">khdilo47@gmail.com</td>
            <td className="text-xl font-bold text-[#253D4E]">5-7-2025; 12.35 PM</td>
            <th>
              <button className="btn btn-ghost btn-lg">
                <FaRegTrashAlt />
              </button>
            </th>
          </tr>
          {/* row 2 */}
          <tr className="border-b-2 border-slate-100">
            <td className="text-lg font-bold text-[#253D4E]">Emon Khan</td>
            <td className="text-xl font-bold text-[#253D4E]">khdilo47@gmail.com</td>
            <td className="text-xl font-bold text-[#253D4E]">5-7-2025; 12.35 PM</td>
            <th>
              <button className="btn btn-ghost btn-lg">
                <FaRegTrashAlt />
              </button>
            </th>
          </tr>
          {/* row 3 */}
          <tr className="border-b-2 border-slate-100">
            <td className="text-lg font-bold text-[#253D4E]">Emon Khan</td>
            <td className="text-xl font-bold text-[#253D4E]">khdilo47@gmail.com</td>
            <td className="text-xl font-bold text-[#253D4E]">5-7-2025; 12.35 PM</td>
            <th>
              <button className="btn btn-ghost btn-lg">
                <FaRegTrashAlt />
              </button>
            </th>
          </tr>
          {/* row 4 */}
          <tr className="border-b-2 border-slate-100">
            <td className="text-lg font-bold text-[#253D4E]">Emon Khan</td>
            <td className="text-xl font-bold text-[#253D4E]">khdilo47@gmail.com</td>
            <td className="text-xl font-bold text-[#253D4E]">5-7-2025; 12.35 PM</td>
            <th>
              <button className="btn btn-ghost btn-lg">
                <FaRegTrashAlt />
              </button>
            </th>
          </tr>
          {/* row 5 */}
          <tr className="border-b-2 border-slate-100">
            <td className="text-lg font-bold text-[#253D4E]">Emon Khan</td>
            <td className="text-xl font-bold text-[#253D4E]">khdilo47@gmail.com</td>
            <td className="text-xl font-bold text-[#253D4E]">5-7-2025; 12.35 PM</td>
            <th>
              <button className="btn btn-ghost btn-lg">
                <FaRegTrashAlt />
              </button>
            </th>
          </tr>
         
          
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
