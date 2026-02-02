import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../Axios/useAxiosSecure";

const ManageProduct = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const { data: allProduct = [], refetch } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const result = await axiosSecure.get("/product");
      return result.data;
    },
  });

  const totalPages = Math.ceil(allProduct.length / itemsPerPage);
  const currentProducts = allProduct.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/product/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Product has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-full">
      {/* Scrollable Table */}
      <div className="overflow-x-auto">
        <div className="lg:max-w-[750px] xl:max-w-[1100px] 2xl:max-w-[1300px] mx-auto overflow-x-auto">
          <table className="min-w-[1200px] w-full table-auto border border-slate-200 text-sm text-center">
            <thead className="bg-primary-green text-white uppercase text-[14px]">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Vendor</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Tag</th>
                <th className="py-3 px-4">Sold</th>
                <th className="py-3 px-4">Available</th>
                <th className="py-3 px-4">Discount</th>
                <th className="py-3 px-4">Edit</th>
                <th className="py-3 px-4">Remove</th>
              </tr>
            </thead>

            <tbody className="text-primary-text">
              {currentProducts.map((product, index) => (
                <tr
                  key={product._id || index}
                  className="border-b border-slate-200 hover:bg-slate-50 transition"
                >
                  <td className="py-3 px-4">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="py-3 px-4 font-semibold">
                    {product.title || "—"}
                  </td>
                  <td className="py-3 px-4">
                    <img
                      src={
                        product.photo ||
                        "https://img.daisyui.com/images/profile/demo/2@94.webp"
                      }
                      alt={product.title || "product"}
                      className="h-16 w-16 object-cover mx-auto rounded"
                    />
                  </td>
                  <td className="py-3 px-4">{product.vendor || "—"}</td>
                  <td className="py-3 px-4 font-bold text-primary-green">
                    {product.price || "—"}
                  </td>
                  <td className="py-3 px-4">{product.tag || "—"}</td>
                  <td className="py-3 px-4">{product.sold || 0}</td>
                  <td className="py-3 px-4">{product.available || "—"}</td>
                  <td className="py-3 px-4">{product.disPrice || "—"}</td>
                  <td className="py-3 px-4">
                    <button className="btn btn-ghost btn-sm text-blue-600">
                      <CiEdit size={18} />
                    </button>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn btn-ghost btn-sm text-red-500"
                    >
                      <FaRegTrashAlt size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination outside the scrollable table */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 flex-wrap gap-2">
          <button
            className="mx-1 px-4 py-2 rounded bg-primary-green text-white disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`mx-1 px-3 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-primary-green text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="mx-1 px-4 py-2 rounded bg-primary-green text-white disabled:opacity-50"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageProduct;
