import { useQuery } from "@tanstack/react-query";
import { useContext, useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbDetails } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";

const Products = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const postsPerPage = 15;

  // ✅ Lock background scroll when sidebar open
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSidebar]);

  const { data: allProduct = [] } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const data = await axiosSecure.get("/product");
      return data.data;
    },
  });

  const handleWish = async (item) => {
    const wishedProduct = { userEmail: user?.email, ...item };
    const wishRes = await axiosSecure.post("/wishlist", wishedProduct);

    if (wishRes.data.insertedId) {
      toast.success("Added to WishList");
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItem = allProduct?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allProduct?.length / postsPerPage);

  return (
    <div className="mt-8 md:mt-10 quick relative">
      {/* Mobile Top Bar */}
      <div className="flex items-center mx-auto gap-3 mb-4 md:mb-8 px-3 lg:hidden w-full tab:w-[70%]">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 px-4 py-2 border border-primary-green rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-green focus:border-primary-green"
        />
        <button
          onClick={() => setShowSidebar(true)}
          className="p-2 border border-primary-green rounded-lg text-primary-green"
        >
          <FiFilter size={20} />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mx-auto">
        {/* Overlay */}
        {showSidebar && (
          <div
            onClick={() => setShowSidebar(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed lg:static top-0 left-0 h-screen lg:h-auto
            w-72 tab:w-[70%] lg:w-72 mt-8 lg:mt-0  bg-white z-50 lg:z-10  
            transform transition-transform duration-300 shadow-xl
            ${showSidebar ? "translate-x-0 " : "-translate-x-full"}
            lg:translate-x-0
            shadow-lg lg:shadow-none
            overflow-y-auto
          `}
        >
          {/* Close Button */}
          <div className="lg:hidden  absolute top-4 right-8">
            <button
              onClick={() => setShowSidebar(false)}
              className="text-3xl text-primary-green"
            >
              <RxCross2 />
            </button>
          </div>

          {/* Search */}
          <div className="hidden lg:block bg-white p-4 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-primary-green inline-block pb-1">
              Search
            </h2>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-primary-green rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
              />
            </div>
          </div>

          {/* Category */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-primary-green inline-block pb-1">
              Product Category
            </h2>

            <div className="mt-5 space-y-3 text-secondary-text">
              {[
                "Fruits & Vegetables",
                "Meat & Fish",
                "Snacks & Drinks",
                "Home & Kitchen",
                "Fashion & Beauty",
                "Gadgets",
                "Sports",
              ].map((category, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    value={category}
                    className="w-4 h-4 accent-primary-green"
                  />
                  <span className="group-hover:text-primary-green transition">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Vendor */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-primary-green inline-block pb-1">
              Product by Vendor
            </h2>

            <div className="mt-5 space-y-3 text-secondary-text">
              {[
                "Tech World",
                "Fresh Fruits",
                "Shonar Bangla Meat",
                "Bangla Bites",
                "Trendy Touch",
                "Home & Kitchen Mart",
                "Sports House",
              ].map((vendor, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    value={vendor}
                    className="w-4 h-4 accent-primary-green"
                  />
                  <span className="group-hover:text-primary-green transition">
                    {vendor}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="bg-white p-4 rounded-xl shadow-sm mb-10">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-primary-green inline-block pb-1">
              Price Filter
            </h2>

            <div className="mt-5 space-y-3 text-secondary-text">
              {[
                "$0 - $20",
                "$21 - $40",
                "$41 - $60",
                "$61 - $80",
                "$81 - $100",
                "$101 - $120",
              ].map((price, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    value={price}
                    className="w-4 h-4 accent-primary-green"
                  />
                  <span className="group-hover:text-primary-green transition">
                    {price}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 tab:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-3 lg:px-0">
            {currentItem?.map((item, index) => (
              <div
                key={index}
                className="group relative border border-border rounded-lg shadow overflow-hidden transition"
              >
                {item?.tag && (
                  <span className="absolute top-0 right-0 bg-orange text-white px-4 py-1 rounded-bl-lg text-lg z-10">
                    {item.tag}
                  </span>
                )}

                <div className="relative flex justify-center items-center overflow-hidden">
                  <img
                    src={item?.photo}
                    alt={item?.title}
                    className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition bg-black/30">
                    <button
                      onClick={() => handleWish(item)}
                      className="bg-white text-2xl p-2 text-primary-green hover:bg-primary-green hover:text-white border border-primary-green"
                    >
                      <CiHeart />
                    </button>

                    <button className="bg-white text-2xl p-2 text-primary-green hover:bg-primary-green hover:text-white border border-primary-green">
                      <IoCartOutline />
                    </button>

                    <Link
                      to={`/details/${item?._id}`}
                      className="bg-white text-2xl p-2 text-primary-green hover:bg-primary-green hover:text-white border border-primary-green"
                    >
                      <TbDetails />
                    </Link>
                  </div>
                </div>

                <div className="space-y-2 pt-3 px-3 bg-softGreen">
                  <p className="text-secondary-gray text-sm">
                    {item?.category}
                  </p>
                  <h1 className="text-lg font-bold text-primary-text">
                    {item?.title}
                  </h1>

                  <div className="flex justify-between items-center">
                    <p>
                      By{" "}
                      <span className="text-primary-green">
                        {item?.vendor}
                      </span>
                    </p>
                  </div>

                  <div className="flex justify-between pb-4 items-center">
                    <h1 className="text-primary-green text-lg font-semibold">
                      $ {item?.price}
                    </h1>
                    <button className="flex items-center gap-2 px-4 py-1 rounded bg-primary-green text-white">
                      <IoCartOutline /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <button
              className="mx-2 px-4 py-2 rounded bg-primary-green text-white"
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
              className="mx-2 px-4 py-2 rounded bg-primary-green text-white"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
