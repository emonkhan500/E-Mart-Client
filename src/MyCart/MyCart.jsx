import { FaRegTrashAlt } from "react-icons/fa";
import ShareHead from "../Shared/ShareHead";
import SharedNewsletter from "../Shared/SharedNewsletter";
import useHooks from "../hooks/useHooks";
import { useState } from "react";

const MyCart = () => {
  const { cartProducts, handleDeleteCart } = useHooks();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(cartProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = cartProducts.slice(indexOfFirstItem, indexOfLastItem);
  const subTotal = cartProducts.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = item.quantity || 1;
    return sum + price * quantity;
  }, 0);

  const formattedSubTotal = subTotal.toFixed(2);

  return (
    <div className="quick">
      <ShareHead pageTitle={"My Cart"} />

      <div className="flex flex-col lg:flex-row mt-10 gap-8 lg:gap-10">
        <div className="overflow-x-auto w-full lg:w-2/3">
          <table className="table border-2 border-border p-3 w-full">
            <thead className="text-sm small:text-base md:text-base lg:text-lg xxl:text-xl bg-primary-green text-white">
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {currentProducts.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-10 text-xl  md:text-2xl lg:text-4xl text-primary-text font-medium"
                  >
                    No items in cart
                  </td>
                </tr>
              ) : (
                currentProducts.map((item) => (
                  <tr key={item._id} className="border-b-2 border-border">
                    <td>
                      <div className="avatar">
                        <div className="h-10 w-10 border-2 border-border">
                          <img src={item.photo} alt={item.title} />
                        </div>
                      </div>
                    </td>

                    <td className="text-sm xl:text-base font-medium text-primary-text small:max-w-[150px] truncate">
                      {item.title}
                    </td>

                    <td className="text-sm xl:text-base font-bold text-primary-green">
                      ${item.price}
                    </td>

                    <td>
                      <button
                        onClick={() => handleDeleteCart(item._id)}
                        className="btn-md text-red"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 flex-wrap gap-2">
              <button
                className="px-4 py-2 rounded bg-primary-green text-white disabled:opacity-50"
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
                className="px-4 py-2 rounded bg-primary-green text-white disabled:opacity-50"
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

        {/* price */}
        <div className="w-full lg:w-1/3">
          <div className="border-2 border-border rounded-lg">
            <div className="flex justify-between px-6 py-3 border-b-2 border-border text-sm md:text-base font-medium">
              <h1 className="text-secondary-gray">SubTotal</h1>
              <h1 className="text-primary-green font-bold">${formattedSubTotal}</h1>
            </div>

            <div className="border-b-2 border-border flex">
              <input
                className="p-3 focus:outline-none text-black w-2/3 text-sm"
                type="text"
                placeholder="Type Coupon?"
              />
              <button className="text-white bg-primary-green w-1/3 text-sm font-medium">
                Apply
              </button>
            </div>

            <div className="flex justify-between px-6 py-3 text-sm md:text-base font-medium">
              <h1 className="text-secondary-gray">Total</h1>
              <h1 className="text-primary-green font-bold">${formattedSubTotal}</h1>
            </div>
          </div>

          <button className="mt-4 text-white bg-primary-green w-full py-3 rounded text-sm md:text-base font-medium">
            CHECKOUT & PAY
          </button>
        </div>
      </div>

      <SharedNewsletter />
    </div>
  );
};

export default MyCart;
