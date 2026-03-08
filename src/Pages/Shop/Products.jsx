import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbDetails } from "react-icons/tb";

import useHooks from "../../hooks/useHooks";

const Products = () => {
  const { allProduct, handleWish, handleCart } = useHooks();

  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);

  const postsPerPage = 15;

  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  // URL category auto select
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
      setCurrentPage(1);
    }
  }, [categoryFromUrl]);

  // sidebar scroll lock
  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showSidebar]);

  const handleCheckboxChange = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
    setCurrentPage(1);
  };

  // FILTER PRODUCTS
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
      {/* MOBILE SEARCH */}
      <div className="flex items-center mx-auto gap-3 mb-4 md:mb-8 px-3 lg:hidden w-full">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setCurrentPage(1);
          }}
          className="flex-1 px-4 py-2 border border-primary-green rounded-lg"
        />

        <button
          onClick={() => setShowSidebar(true)}
          className="p-2 border border-primary-green rounded-lg text-primary-green"
        >
          <FiFilter size={20} />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mx-auto">
        {/* SIDEBAR */}
        {showSidebar && (
          <div
            onClick={() => setShowSidebar(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )}

        <div
          className={`fixed lg:static top-0 left-0 h-screen lg:h-auto
          w-72 lg:w-56 bg-white z-50 lg:z-10
          transform transition-transform duration-300 shadow-xl
          ${showSidebar ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:shadow-none flex flex-col`}
        >
          <div className="lg:hidden sticky top-0 p-4 flex justify-end">
            <button
              onClick={() => setShowSidebar(false)}
              className="text-3xl text-primary-green"
            >
              <RxCross2 />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 space-y-6 pb-10">
            {/* SEARCH */}
            <div>
              <h2 className="text-xl font-bold border-b border-primary-green pb-1">
                Search
              </h2>

              <input
                type="text"
                placeholder="Search products..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full mt-4 px-4 py-2 border border-primary-green rounded-lg"
              />
            </div>

            {/* CATEGORY */}
            <div>
              <h2 className="text-xl font-bold border-b border-primary-green pb-1">
                Product Category
              </h2>

              <div className="mt-4 space-y-2">
                {[
                  "Fruits & Vegetables",
                  "Meat & Fish",
                  "Snacks & Drinks",
                  "Home & Kitchen",
                  "Fashion & Beauty",
                  "Gadgets",
                  "Sports",
                ].map((category, index) => (
                  <label key={index} className="flex gap-2 items-center">
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
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            {/* VENDOR */}
            <div>
              <h2 className="text-xl font-bold border-b border-primary-green pb-1">
                Vendor
              </h2>

              <div className="mt-4 space-y-2">
                {[
                  "Tech World",
                  "Fresh Fruits",
                  "Shonar Bangla Meat",
                  "Bangla Bites",
                  "Trendy Touch",
                ].map((vendor, index) => (
                  <label key={index} className="flex gap-2 items-center">
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
                    />
                    {vendor}
                  </label>
                ))}
              </div>
            </div>

            {/* PRICE */}
            <div>
              <h2 className="text-xl font-bold border-b border-primary-green pb-1">
                Price Filter
              </h2>

              <div className="mt-4 space-y-2">
                {[
                  "$0 - $20",
                  "$21 - $40",
                  "$41 - $60",
                  "$61 - $80",
                  "$81 - $100",
                ].map((price, index) => (
                  <label key={index} className="flex gap-2 items-center">
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
                    />
                    {price}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <h2 className="text-xl text-primary-green font-semibold">
                  No matched product found ...
                </h2>
              </div>
            ) : (
              currentItem.map((item) => (
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
                        <button
                          onClick={() => handleCart(item)}
                          className="bg-white text-lg md:text-2xl p-1.5 md:p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green"
                        >
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
                        <span className="text-primary-green text-[11px] small:text-xs tab:text-sm md:text-base xxl:text-sm 2xl:text-base">
                          {item?.vendor}
                        </span>
                      </p>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`mask mask-star w-[11px] small:w-3.5 md:w-4 h-3 md:h-4 ${
                              star <= item?.rating ? "bg-orange" : "bg-black/5"
                            }`}
                          ></span>
                        ))}
                      </div>
                    </div>

                    {/* Price + Button */}
                    <div className="flex justify-between mt-1.5 small:mt-2.5 md:mt-2 pb-1.5 md:pb-2 items-center">
                      <h1 className="text-primary-green text-base lg:text-lg font-semibold">
                        $ {item?.price}
                      </h1>

                      <button
                        onClick={() => handleCart(item)}
                        className="flex items-center gap-2 px-3 md:px-4 py-1 md:py-[5px] xxl:py-1 2xl:py-[5px] text-xs md:text-base rounded bg-primary-green text-white"
                      >
                        <IoCartOutline /> Add
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* PAGINATION */}
          {filteredProducts.length > 0 && (
            <div className="flex justify-center mt-10">
              <button
                className="mx-2 px-4 py-2 rounded bg-primary-green text-white"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
