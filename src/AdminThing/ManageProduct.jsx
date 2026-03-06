import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import useHooks from "../hooks/useHooks";
import useAxiosSecure from "../Axios/useAxiosSecure";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";

const ManageProduct = () => {

  const { allProduct, handleDeleteProduct, refetchAllProduct } = useHooks();
  const axiosSecure = useAxiosSecure();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(allProduct.length / itemsPerPage);

  const currentProducts = allProduct.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // update handler
  const handleUpdate = async (e) => {

    e.preventDefault();
    const form = e.target;

    const updatedData = {
      title: form.title.value,
      price: form.price.value,
      tag: form.tag.value,
      sold: form.sold.value,
      available: form.available.value,
      disPrice: form.discount.value,
    };

    try {

      const { data } = await axiosSecure.patch(
        `/product/${selectedProduct._id}`,
        updatedData
      );

      if (data.modifiedCount > 0) {

        toast.success("Product Updated Successfully");
        refetchAllProduct();
        setSelectedProduct(null);

      }

    } catch (error) {

      toast.error("Update Failed");

    }
  };

  return (

    <div className="w-full">

      {/* TABLE */}

      <div className="overflow-x-auto w-full">

        <table className="table border-2 border-border p-6 w-full min-w-[1200px]">

          <thead className="text-sm md:text-base lg:text-lg bg-primary-green text-white">

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
                key={product._id}
                className="border-b-2 border-bg-honeydew bg-border"
              >

                <td>
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>

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

                <td className="font-medium truncate max-w-[140px]">
                  {product.title || "—"}
                </td>

                <td>
                  {product.vendor || "—"}
                </td>

                <td className="font-medium text-primary-green">
                  ${product.price || "—"}
                </td>

                <td>
                  {product.tag || "—"}
                </td>

                <td>
                  {product.sold || 0}
                </td>

                <td>
                  {product.available || "—"}
                </td>

                <td>
                  {product.disPrice || "—"}
                </td>

                {/* EDIT */}

                <td>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-blue-600"
                  >

                    <CiEdit size={18} />

                  </button>

                </td>

                {/* DELETE */}

                <td>

                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="text-red-600"
                  >

                    <FaRegTrashAlt />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* PAGINATION */}

      {totalPages > 1 && (

        <div className="flex justify-center mt-10 flex-wrap gap-2">

          <button
            className="px-4 py-2 rounded bg-primary-green text-white"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (

            <button
              key={i}
              className={`px-3 py-2 rounded ${
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
            className="px-4 py-2 rounded bg-primary-green text-white"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>

        </div>

      )}

      {/* EDIT MODAL */}

      {selectedProduct && (

        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">

          <div className="bg-border w-[500px] rounded-xl shadow-xl">

            {/* HEADER */}

            <div className="bg-primary-green text-white px-6 py-4 rounded-t-xl flex justify-between">

              <h2 className="font-semibold text-lg">
                Edit Product
              </h2>

              <button onClick={() => setSelectedProduct(null)}>
                <RxCross2 />
              </button>

            </div>

            {/* FORM */}

            <form onSubmit={handleUpdate} className="p-6 space-y-4">

              {/* PRODUCT PREVIEW */}

              <div className="flex gap-4 items-center border-b border-primary-green pb-4">

                <img
                  src={selectedProduct.photo}
                  alt={selectedProduct.title}
                  className="w-20 h-20 rounded"
                />

                <div>

                  <p className="font-semibold">
                    {selectedProduct.title}
                  </p>

                  <p className="text-sm opacity-70">
                    Vendor: {selectedProduct.vendor}
                  </p>

                </div>

              </div>

              {/* EDITABLE INPUTS */}

              <div className="grid grid-cols-2 gap-4">

                <input
                  name="title"
                  defaultValue={selectedProduct.title}
                  className="border border-primary-green px-3 py-2 rounded col-span-2"
                  placeholder="Product Name"
                />

                <input
                  name="price"
                  defaultValue={selectedProduct.price}
                  className="border border-primary-green px-3 py-2 rounded"
                  placeholder="Price"
                />

                <input
                  name="tag"
                  defaultValue={selectedProduct.tag}
                  className="border border-primary-green px-3 py-2 rounded"
                  placeholder="Tag"
                />

                <input
                  name="sold"
                  defaultValue={selectedProduct.sold}
                  className="border border-primary-green px-3 py-2 rounded"
                  placeholder="Sold"
                />

                <input
                  name="available"
                  defaultValue={selectedProduct.available}
                  className="border border-primary-green px-3 py-2 rounded"
                  placeholder="Available"
                />

                <input
                  name="discount"
                  defaultValue={selectedProduct.disPrice}
                  className="border border-primary-green px-3 py-2 rounded col-span-2"
                  placeholder="Discount"
                />

              </div>

              {/* BUTTONS */}

              <div className="flex justify-end gap-3 pt-4 border-t border-primary-green">

                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 border border-primary-green rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 bg-primary-green text-white rounded"
                >
                  Update Product
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default ManageProduct;