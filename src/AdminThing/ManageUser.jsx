import React, { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "../Axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users=[], refetch}=useQuery({
      queryKey:['users'],
      queryFn: async()=>{
        const res =await axiosSecure.get('/users')
        return res.data
      }
    })
//  console.log(users);

// make admin
const handleAdmin =(user)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Make Admin!"
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure.patch(`/users/admin/${user?._id}`)
      .then(res=>{
          if(res.data.modifiedCount>0){
              refetch()
              Swal.fire({
                  title: "Congratulations!",
                  text: `${user?.name
                  } is now Admin`,
                  icon: "success"
                });
          }
      })
  
  }
  });
  
}



//User delete
const handleDelete=id=>{
  console.log(id);
  Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
          axiosSecure.delete(`/users/${id}`)
          .then(res=>{
              if(res.data.deletedCount>0){
                  refetch()
                  Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
              }
          })
      
      }
    });
}

  return (
    <div className="overflow-x-auto w-full  ">
      <table className="table border-2 border-slate-200 p-3">
        {/* head */}
        <thead className="text-2xl bg-[#3BB77E] text-white quick">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Make Admin</th>
            
            <th>Remove</th>

          </tr>
        </thead>
        <tbody>

{
  users?.map((user,index) =><tr className="border-b-2 border-slate-100">
  <td className="text-lg font-bold text-[#253D4E]">{index+1}</td>
  <td className="text-lg font-bold text-[#253D4E]">{user.name}</td>
  <td className="text-xl font-bold text-[#253D4E]">{user.email}</td>
  <th className="text-lg font-bold">
  {user?.role === 'admin'? 'Admin':
    <button onClick={()=>handleAdmin(user)} className="btn text-center items-center btn-ghost btn-lg">
    <RiAdminLine />
    </button>
  }
  </th>
  <th>
    <button onClick={()=>handleDelete(user?._id)} className="btn btn-ghost btn-lg">
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
