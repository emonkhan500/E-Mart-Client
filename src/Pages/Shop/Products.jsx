import { useQuery } from "@tanstack/react-query";
import {  useEffect, useMemo, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import useHooks from "../../hooks/useHooks";

const Products = () => {
  const axiosSecure = useAxiosSecure();
  const { handleWish, handleCart } = useHooks();

  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const postsPerPage = 15;

  // STATES
  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showSidebar]);

  const { data: allProduct = [] } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const res = await axiosSecure.get("/product");
      return res.data;
    },
  });

  const handleCheckboxChange = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
    setCurrentPage(1);
  };

  // FILTER
  const filteredProducts = useMemo(() => {
    return allProduct.filter((item) => {
      const matchesSearch =
        searchText === "" ||
        item.title?.toLowerCase().includes(searchText.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category);

      const matchesVendor =
        selectedVendors.length === 0 || selectedVendors.includes(item.vendor);

      const matchesPrice =
        selectedPrices.length === 0 ||
        selectedPrices.some((range) => {
          const cleaned = range.replace(/\$/g, "").split("-");
          const min = parseInt(cleaned[0]);
          const max = parseInt(cleaned[1]);
          return item.price >= min && item.price <= max;
        });

      return matchesSearch && matchesCategory && matchesVendor && matchesPrice;
    });
  }, [
    allProduct,
    searchText,
    selectedCategories,
    selectedVendors,
    selectedPrices,
  ]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentItem = filteredProducts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredProducts.length / postsPerPage);

  return (
    <div className="mt-8 md:mt-10 quick relative">
      {/* Mobile Search */}
      <div className="flex items-center mx-auto gap-3 mb-4 md:mb-8 px-3 lg:hidden w-full tab:w-[70%]">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setCurrentPage(1);
          }}
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
        {showSidebar && (
          <div
            onClick={() => setShowSidebar(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed lg:static top-0 left-0 h-screen lg:h-auto
          w-72 tab:w-[70%] lg:w-52 xl:w-56 xxl:w-[208px]
          bg-white z-50 lg:z-10
          transform transition-transform duration-300 shadow-xl
          ${showSidebar ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:shadow-none flex flex-col`}
        >
          <div className="lg:hidden sticky top-0 p-4 z-50 flex justify-end">
            <button
              onClick={() => setShowSidebar(false)}
              className="text-3xl text-primary-green"
            >
              <RxCross2 />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 space-y-6 pb-10">
            {/* Desktop Search */}
            <div className="hidden lg:block bg-white rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-primary-text border-b-2 border-primary-green inline-block pb-1">
                Search
              </h2>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-2 border border-primary-green rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
              </div>
            </div>

            {/* Category */}
            <div className="bg-white rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-primary-text border-b-2 border-primary-green inline-block pb-1">
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
                      checked={selectedCategories.includes(category)}
                      onChange={() =>
                        handleCheckboxChange(
                          category,
                          selectedCategories,
                          setSelectedCategories,
                        )
                      }
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
            <div className="bg-white rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-primary-text border-b-2 border-primary-green inline-block pb-1">
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
                      checked={selectedVendors.includes(vendor)}
                      onChange={() =>
                        handleCheckboxChange(
                          vendor,
                          selectedVendors,
                          setSelectedVendors,
                        )
                      }
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
            <div className="bg-white rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-primary-text border-b-2 border-primary-green inline-block pb-1">
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
                      checked={selectedPrices.includes(price)}
                      onChange={() =>
                        handleCheckboxChange(
                          price,
                          selectedPrices,
                          setSelectedPrices,
                        )
                      }
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
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid gap-x-1.5 tab:gap-x-2 md:gap-x-3 lg:gap-x-1.5 xl:gap-x-1.5 xxl:gap-x-1.5 2xl:gap-x-6 gap-y-4 md:gap-y-6 lg:gap-y-8 grid-cols-2 tab:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 2xl:grid-cols-5 justify-center items-center 2xl:px-16 mt-5">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <h2 className="text-xl md:text-2xl text-primary-green font-semibold">
                  No matched product found ...
                </h2>
              </div>
            ) : (
              currentItem?.map((item) => (
                <div
                  key={item?._id}
                  className="group relative border border-border rounded-lg shadow mx-auto w-full overflow-hidden transition-all duration-300"
                >
                  {/* Tag Label */}
                  {item?.tag && (
                    <span className="absolute top-0 right-0 bg-orange text-white px-4 py-[2px] md:py-1 xxl:py-[3px] 2xl:py-1 rounded-bl-lg text-base lg:text-lg z-10">
                      {item.tag}
                    </span>
                  )}

                  {/* Image Wrapper */}
                  <div className="relative flex justify-center items-center overflow-hidden">
                    <img
                      src={item?.photo}
                      alt={item?.title}
                      className="w-72 h-40 small:h-48 md:h-52 2xl:h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Hover Icons */}
                    <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                      <div className="bg-white flex justify-center items-center rounded-2xl">
                        {/* Wishlist */}
                        <button
                          onClick={() => handleWish(item)}
                          className="bg-white text-lg md:text-2xl p-1.5 md:p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green"
                        >
                          <CiHeart />
                        </button>

                        {/* Cart */}
                        <button  onClick={() => handleCart(item)} className="bg-white text-lg md:text-2xl p-1.5 md:p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green">
                          <IoCartOutline />
                        </button>

                        {/* Details */}
                        <Link
                          to={`/details/${item?._id}`}
                          className="bg-white text-lg md:text-2xl p-1.5 md:p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green"
                        >
                          <TbDetails />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="pt-[2px] px-1 tab:px-1.5 md:px-3 bg-softGreen">
                    <p className="text-secondary-gray text-xs md:text-base xxl:text-xs 2xl:text-base mt-1.5 lg:mt-2 leading-[70%]">
                      {item?.category}
                    </p>

                    <h1 className="text-lg md:text-xl font-bold text-primary-text mt-1 small:mt-[5px] tab:mt-1.5 lg:mt-2">
                      {item?.title}
                    </h1>

                    <div className="flex justify-between items-center mt-1 tab:mt-1.5 lg:mt-2">
                      <p className="text-[11px] small:text-xs tab:text-sm md:text-base xxl:text-sm 2xl:text-base">
                        By
                        <span className="text-primary-green">
                          {item?.vendor}
                        </span>
                      </p>
                    </div>

                    {/* Price + Button */}
                    <div className="flex justify-between mt-1.5 small:mt-2.5 md:mt-2 pb-1.5 md:pb-2 items-center">
                      <h1 className="text-primary-green text-base lg:text-lg font-semibold">
                        $ {item?.price}
                      </h1>

                      <button  onClick={() => handleCart(item)} className="flex items-center gap-2 px-3 md:px-4 py-1 md:py-[5px] xxl:py-1 2xl:py-[5px] text-xs md:text-base rounded bg-primary-green text-white">
                        <IoCartOutline /> Add
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {filteredProducts.length > 0 && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
