import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { TbDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Axios/useAxiosPublic";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";

const categories = [
  {
    name: "Milks & Dairies",
    count: 30,
    icon: "https://i.ibb.co.com/LTcNd90/category-2-svg.png",
  },

  {
    name: "Pet Foods",
    count: 42,
    icon: "https://i.ibb.co.com/4g2XB5pB/category-4-svg.png",
  },
  {
    name: "Baking material",
    count: 68,
    icon: "https://i.ibb.co.com/8nnp9fDT/category-5-svg.png",
  },
  {
    name: "Fresh Fruit",
    count: 24,
    icon: "https://i.ibb.co.com/BKy4Xc1v/category-1-svg.png",
  },
];

// Corrected Product List (Flattened Structure)

const Products = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  console.log(user);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const { data: allProduct = [] } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const data = await axiosSecure.get("/product");
      return data.data;
    },
  });
  console.log(allProduct);

  const handleWish = async (item) => {
    const wishedProduct = { userEmail: user?.email, ...item };

    const wishRes = await axiosSecure.post("/wishlist", wishedProduct);

    if (wishRes.data.insertedId) {
      toast.success("Added to WishList");
    }
  };

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItem = allProduct?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allProduct?.length / postsPerPage);

  return (
    <div className="mt-8 md:mt-20 quick">
      <div className="flex flex-col md:flex-row gap-6 md:gap-2 lg:gap-3 mx-auto">
        {/* Sidebar */}
<div className="w-full md:w-72 space-y-8">

  {/* Product Category */}
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h2 className="text-xl font-bold text-gray-800 border-b-2 border-primary-green inline-block pb-1">
      Product Category
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
        <label key={index} className="flex items-center gap-3 cursor-pointer group">
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

  {/* Price Filter */}
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h2 className="text-xl font-bold text-gray-800 border-b-2 border-primary-green inline-block pb-1">
      Price Filter
    </h2>

    <div className="mt-5 space-y-3 text-secondary-text">
      {[
        "$0 - $100",
        "$101 - $200",
        "$201 - $300",
        "$301 - $500",
      ].map((price, index) => (
        <label key={index} className="flex items-center gap-3 cursor-pointer group">
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


        {/* Product List */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-1 lg:gap-2 px-3 md:px-0">
            {currentItem?.slice(0, 12).map((item, index) => (
              <div
                key={index}
                className="group relative border border-border rounded-lg shadow mx-auto w-[95%] small:w-[90%] tab:w-full overflow-hidden transition-all duration-300"
              >
                {/* Tag Label */}
                {item?.tag && (
                  <span className="absolute top-0 right-0 bg-orange text-white px-4 py-1 rounded-bl-lg text-lg z-10">
                    {item.tag}
                  </span>
                )}

                {/* Image Wrapper */}
                <div className="relative flex justify-center items-center overflow-hidden ">
                  <img
                    src={item?.photo}
                    alt={item?.title}
                    className="w-72 h-52 small:h-60 md:h-52 xl:h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
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
                          className="bg-white text-2xl p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green"
                        >
                          <CiHeart />
                        </button>
                      </div>

                      {/* Cart */}
                      <div className="relative tooltip" data-tip="Add To Cart">
                        <button className="bg-white text-2xl p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green">
                          <IoCartOutline />
                        </button>
                      </div>

                      {/* Details */}
                      <div
                        className="relative  tooltip"
                        data-tip="Show Details"
                      >
                        <button className="bg-white text-2xl p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green">
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
                <div className="space-y-1 md:space-y-1.5 pt-3 px-3 bg-softGreen">
                  <p className="text-secondary-gray text-xs md:text-base">
                    {item?.category}
                  </p>
                  <h1 className="quick text-lg md:text-xl font-bold text-primary-text">
                    {item?.title}
                  </h1>
                  <div className="flex justify-between ">
                    <p className="text-sm md:text-base">
                      By{" "}
                      <span className="text-primary-green">{item?.vendor}</span>
                    </p>

                    {/* Rating */}
                    <div className="rating ">
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-orange w-4 h-4"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star bg-orange w-4 h-4"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star w-4 h-4"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star w-4 h-4"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className="mask mask-star w-4 h-4"
                      />
                    </div>
                  </div>

                  {/* Price + Button */}
                  <div className="flex justify-between pt-1 md:pt-2 pb-4 items-center ">
                    <h1 className="text-primary-green text-lg font-semibold">
                      $ {item?.price}
                    </h1>
                    <button className="flex items-center gap-2 px-4 py-[5px] rounded bg-primary-green text-white hover:bg-primary-green hover:text-white transition">
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
