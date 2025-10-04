import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import useAxiosSecure from "../Axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageProduct = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allProduct = [] } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const result = await axiosSecure.get("/product");
      return result.data;
    },
  });

  const handleDelete = (id)=>{
    console.log(id);

  }

  return (
    <div className="w-full overflow-x-auto">
      {/* 👇 this wrapper limits width so table overflows and scrollbar appears */}
      <div className="lg:max-w-[750px] xl:max-w-[1100px] 2xl:max-w-[1300px] mx-auto overflow-x-auto ">
        <table className="min-w-[1400px] table-auto border-2 border-slate-200 p-3 whitespace-nowrap">
          <thead className="text-lg text-white bg-[#3BB77E] quick">
            <tr>
              <th className="2">#</th>
              <th className="2">Title</th>
              <th className="2">Image</th>
              <th className="2">Vendor</th>
              <th className="2">Price</th>
              <th className="2">Tag</th>
              <th className="">Sold</th>
              <th className="2">Available</th>
              <th className="2">Discount</th>
              <th className="2">Edit</th>
              <th className="2">Remove</th>
            </tr>
          </thead>

          <tbody>
            {allProduct.map((product, index) => (
              <tr
                key={product._id ?? index}
                className="border-b-2 border-slate-100"
              >
                <td className="px-3 py-4">{index + 1}</td>

                <td className="px-3 py-4 text-lg font-bold text-[#253D4E]">
                  {product?.title ?? "—"}
                </td>

                <td className="px-3 py-4">
                  <img
                    src={
                      product?.image ||
                      "https://img.daisyui.com/images/profile/demo/2@94.webp"
                    }
                    alt={product?.title ?? "product"}
                    className="h-20 w-20 object-cover rounded"
                  />
                </td>

                <td className="px-3 py-4">{product?.vendor ?? "—"}</td>

                <td className="px-3 py-4 text-[#3BB77E] font-bold">
                  {product?.price ?? "—"}
                </td>

                <td className="px-3 py-4">{product?.tag ?? "—"}</td>

                <td className="px-3 py-4">{product?.sold ?? 0}</td>

                <td className="px-3 py-4">{product?.available ?? "—"}</td>

                <td className="px-3 py-4">{product?.discount ?? "—"}</td>

                <td className="px-3 py-4">
                  <button className="btn btn-ghost btn-sm">
                    <CiEdit />
                  </button>
                </td>

                <td className="px-3 py-4">
                  <button onClick={()=>handleDelete(product?._id)} className="btn btn-ghost btn-sm">
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
