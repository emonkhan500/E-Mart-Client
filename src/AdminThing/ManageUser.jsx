import { useQuery } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../Axios/useAxiosSecure";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  //  console.log(users);

  // make admin
  const handleAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Congratulations!",
              text: `${user?.name} is now Admin`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  //User delete
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table border-2 border-border p-3 w-full">
        <thead className="text-sm small:text-base md:text-base lg:text-lg xxl:text-xl bg-primary-green text-white">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Make Admin</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody className="bg-border">
          {users?.map((user, index) => (
            <tr key={user._id} className="border-b-2 border-bg-honeydew">
              {/* Number */}
              <td className="text-sm xl:text-base font-medium text-primary-text">
                {index + 1}
              </td>

              {/* Name */}
              <td className="text-sm xl:text-base font-medium text-primary-text small:max-w-[160px] truncate">
                {user.name}
              </td>

              {/* Email */}
              <td className="text-sm xl:text-base font-medium text-primary-text small:max-w-[200px] truncate">
                {user.email}
              </td>

              {/* Make Admin */}
              <td className="text-sm xl:text-base font-medium">
                {user?.role === "admin" ? (
                  <span className="text-primary-text font-bold">Admin</span>
                ) : (
                  <button
                    onClick={() => handleAdmin(user)}
                    className="btn-md text-primary-green"
                  >
                    <RiAdminLine size={18} />
                  </button>
                )}
              </td>

              {/* Remove */}
              <td>
                <button
                  onClick={() => handleDelete(user?._id)}
                  className="btn-md text-red"
                >
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
