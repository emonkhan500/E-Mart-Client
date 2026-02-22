import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useHooks from "../hooks/useHooks";

const ManageProduct = () => {
  const { allProduct, handleDeleteProduct } = useHooks();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(allProduct.length / itemsPerPage);
  const currentProducts = allProduct.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="w-full">
      {/* Scrollable Table */}
      <div className="overflow-x-auto w-full">
        <table className="table border-2 border-border p-6 w-full min-w-[1200px] ">
          <thead className="text-sm small:text-base md:text-base lg:text-lg  bg-primary-green text-white ">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Title</th>
              <th>Vendor</th>
              <th>Price</th>
              <th>Tag</th>
              <th>Sold</th>
              <th>Available</th>
              <th>Discount</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody className="text-primary-text">
            {currentProducts.map((product, index) => (
              <tr
                key={product._id || index}
                className="border-b-2 border-bg-honeydew bg-border"
              >
                <td className="text-sm xl:text-base font-medium">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>

                {/* Image */}
                <td>
                  <div className="avatar">
                    <div className="h-10 w-10 border-2 border-border">
                      <img
                        src={
                          product.photo ||
                          "https://img.daisyui.com/images/profile/demo/2@94.webp"
                        }
                        alt={product.title}
                      />
                    </div>
                  </div>
                </td>

                {/* Title */}
                <td className="text-sm xl:text-base font-medium small:max-w-[140px] truncate">
                  {product.title || "—"}
                </td>

                <td className="text-sm xl:text-base">
                  {product.vendor || "—"}
                </td>

                <td className="text-sm xl:text-base font-medium text-primary-green">
                  ${product.price || "—"}
                </td>

                <td className="text-sm xl:text-base">{product.tag || "—"}</td>

                <td className="text-sm xl:text-base">{product.sold || 0}</td>

                <td className="text-sm xl:text-base">
                  {product.available || "—"}
                </td>

                <td className="text-sm xl:text-base">
                  {product.disPrice || "—"}
                </td>

                {/* Edit */}
                <td>
                  <button className="btn-md text-blue-600">
                    <CiEdit size={18} />
                  </button>
                </td>

                {/* Remove */}
                <td>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
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
