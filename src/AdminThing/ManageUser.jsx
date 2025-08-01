import React, { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../Axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users=[], refetch}=useQuery({
      queryKey:['users'],
      queryFn: async()=>{
        const res =await axiosSecure.get('/users')
        return res.data
      }
    })
 console.log(users);
  return (
    <div className="overflow-x-auto w-full  ">
      <table className="table border-2 border-slate-200 p-3">
        {/* head */}
        <thead className="text-2xl bg-[#3BB77E] text-white quick">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Make Admin</th>
            
            <th>Remove</th>

          </tr>
        </thead>
        <tbody>

{
  users?.map(user=><tr className="border-b-2 border-slate-100">
  <td className="text-lg font-bold text-[#253D4E]">{user.name}</td>
  <td className="text-xl font-bold text-[#253D4E]">{user.email}</td>
  
  <th>
    <button className="btn btn-ghost btn-lg">
    <RiAdminLine />
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

export default ManageUser;
