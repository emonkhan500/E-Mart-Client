import { FaRegTrashAlt } from "react-icons/fa";
import ShareHead from "../Shared/ShareHead";
import SharedNewsletter from "../Shared/SharedNewsletter";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { refetch, data: cartProducts = [] } = useQuery({
    queryKey: ["cartProduct"],
    queryFn: async () => {
      const data = await axiosSecure.get(`/carts/${user?.email}`);
      return data.data;
    },
  });

  // ✅ Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(cartProducts.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProducts = cartProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const subTotal = cartProducts.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="quick">
      <ShareHead pageTitle={"My Cart"} />

      <div className="flex flex-col lg:flex-row mt-10 gap-8 md:gap-8 lg:gap-5 xxl:gap-10">
        
        {/* table */}
        <div className="overflow-x-auto w-full lg:w-2/3">
          <table className="table border-2 border-border p-3">
            <thead className="text-sm small:text-base md:text-base lg:text-lg xxl:text-xl bg-primary-green  text-white ">
              <tr className="!p-2">
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {currentProducts.map((item) => (
                <tr key={item._id} className="border-b-2 border-border">
                  <td>
                    <div className="avatar">
                      <div className="h-10 w-10 border-2 border-border ">
                        <img src={item.photo} alt={item.title} />
                      </div>
                    </div>
                  </td>
                  <td className="text-sm xl:text-base font-medium text-primary-text small:max-w-[120px] truncate">
                    {item.title}
                  </td>
                  <td className="text-sm xl:text-base font-bold text-primary-green">
                    ${item.price}
                  </td>
                  <td>
                    <button className=" btn-md text-red ">
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ✅ Pagination (Only under table) */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <button
                className="mx-2 px-4 py-2 rounded bg-primary-green text-white"
                onClick={() =>
                  setCurrentPage((prev) => Math.max(prev - 1, 1))
                }
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
                className="mx-2 px-4 py-2 rounded bg-primary-green text-white"
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* price box (unchanged) */}
        <div className="w-full lg:w-1/3 rounded-xl">
          <div className="border-2 border-border ">
            <div className="flex justify-between px-10 border-b-2 border-border p-2 text-sm small:text-base md:text-base lg:text-lg font-medium xl:font-semi-bold">
              <h1 className="text-secondary-gray">SubTotal</h1>
              <h1 className="text-primary-green">
                ${subTotal}
              </h1>
            </div>

            <div className="border-b-2 border-border flex">
              <input
                className="p-2 focus:outline-none text-black w-2/3 pl-10 text-sm"
                type="text"
                placeholder="Type Coupon?"
              />
              <button className="text-white bg-primary-green w-1/3 text-sm font-medium">
                Apply
              </button>
            </div>

            <div className="flex justify-between px-10 p-2 text-sm font-medium">
              <h1 className="text-secondary-gray">Total</h1>
              <h1 className="text-primary-green">
                ${subTotal}
              </h1>
            </div>
          </div>

          <button className="text-white bg-primary-green w-full p-2 text-sm font-medium">
            CHECKOUT & PAY
          </button>
        </div>
      </div>

      <SharedNewsletter />
    </div>
  );
};

export default MyCart;