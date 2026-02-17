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
            w-72 tab:w-[70%] lg:w-52 xl:w-72 mt-8 lg:mt-0  bg-white z-50 lg:z-10  
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
          <div className="grid gap-x-1.5 tab:gap-x-2 md:gap-x-3 lg:gap-x-1.5 gap-y-4 md:gap-y-6 lg:gap-y-8 xl:gap-x-6 xxl:gap-x-4 2xl:gap-x-6 grid-cols-2 tab:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-5 2xl:grid-cols-5 justify-center items-center 2xl:px-16 mt-5">
            {currentItem?.slice(0, 12).map((item, index) => (
              <div
                key={index}
                className="group relative border border-border rounded-lg shadow mx-auto w-full overflow-hidden transition-all duration-300"
              >
                {/* Tag Label */}
                {item?.tag && (
                  <span className="absolute top-0 right-0 bg-orange text-white px-4 py-[2px] md:py-1 rounded-bl-lg text-base lg:text-lg z-10">
                    {item.tag}
                  </span>
                )}

                {/* Image Wrapper */}
                <div className="relative flex justify-center items-center overflow-hidden ">
                  <img
                    src={item?.photo}
                    alt={item?.title}
                    className="w-72 h-40 small:h-48 md:h-52 xl:h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Icons */}
                  <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                    <div className="bg-white flex justify-center items-center rounded-2xl">
                      {/* Wishlist */}
                      <div
                        className="relative tooltip"
                        data-tip="Add To Wishlist"
                      >
                        <button
                          onClick={() => handleWish(item)}
                          className="bg-white text-lg md:text-2xl p-1.5 md:p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green"
                        >
                          <CiHeart />
                        </button>
                      </div>

                      {/* Cart */}
                      <div className="relative tooltip" data-tip="Add To Cart">
                        <button className="bg-white text-lg md:text-2xl p-1.5 md:p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green">
                          <IoCartOutline />
                        </button>
                      </div>

                      {/* Details */}
                      <div
                        className="relative  tooltip"
                        data-tip="Show Details"
                      >
                        <button className="bg-white text-lg md:text-2xl p-1.5 md:p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green">
                          {" "}
                          <Link to={`/details/${item?._id}`}>
                            <TbDetails />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="quick  pt-[2px] px-1 tab:px-1.5 md:px-3 bg-softGreen">
                  <p className="text-secondary-gray text-xs md:text-base mt-1.5 lg:mt-2 leading-[70%]">
                    {item?.category}
                  </p>
                  <h1 className="text-lg md:text-xl font-bold text-primary-text mt-1 small:mt-[5px] tab:mt-1.5 lg:mt-2">
                    {item?.title}
                  </h1>
                  <div className="flex justify-between items-center mt-1 tab:mt-1.5 lg:mt-2">
                    <p className="text-[11px] small:text-xs tab:text-sm md:text-base">
                      By{" "}
                      <span className="text-primary-green">{item?.vendor}</span>
                    </p>

                    {/* Rating */}
                    <div className="rating ">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-orange w-[11px] small:w-3.5 md:w-4 h-3 md:h-4"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-orange w-[11px] small:w-3.5 md:w-4 h-3 md:h-4"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star w-[11px] small:w-3.5 md:w-4 h-3 md:h-4"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star w-[11px] small:w-3.5 md:w-4 h-3 md:h-4"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star w-[11px] small:w-3.5 md:w-4 h-3 md:h-4"
                      />
                    </div>
                  </div>

                  {/* Price + Button */}
                  <div className="flex justify-between mt-1.5 small:mt-2.5 md:mt-2 pb-1.5 md:pb-4 items-center ">
                    <h1 className="text-primary-green text-base lg:text-lg font-semibold">
                      $ {item?.price}
                    </h1>
                    <button className="flex items-center gap-2 px-3 md:px-4 py-1 md:py-[5px] text-xs md:text-base rounded bg-primary-green text-white hover:bg-primary-green hover:text-white transition">
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
