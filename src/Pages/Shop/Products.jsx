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

// Dummy product data
const products = [
  {
    id: 1,
    name: "Chen Cardigan",
    price: 99.5,
    image: "https://i.ibb.co/mCFXymfH/thumbnail-4-jpg.png",
  },
  {
    id: 2,
    name: "Chen Sweater",
    price: 89.5,
    image: "https://i.ibb.co/4RJ5nQ0v/thumbnail-5-jpg.png",
  },
  {
    id: 3,
    name: "Colorful Jacket",
    price: 25,
    image: "https://i.ibb.co/ZR9JHp3b/thumbnail-6-jpg.png",
  },
];

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
      <div className="flex flex-col md:flex-row gap-6 md:gap-2 lg:gap-3">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 space-y-10">
          {/* Categories */}
          <div className="bg-white rounded-2xl shadow-sm p-2 w-full max-w-sm">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Category</h2>
              <div className="w-16 h-1 bg-teal-500 mt-2 rounded-full"></div>
            </div>

            {/* Category List */}
            <div className="space-y-3">
              {/* Milks & Dairies */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex-shrink-0">
                    <img
                      src="../../../src/assets/category-2.svg.png"
                      alt="Milks & Dairies"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-secondary-text font-medium group-hover:text-primary-green transition-colors">
                    Milks & Dairies
                  </span>
                </div>
                <div className="bg-bg-honeydew text-primary-green font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
              </div>

              {/* Clothing */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex-shrink-0">
                    <img
                      src="../../../src/assets/icon-1.svg.png"
                      alt="Clothing"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-secondary-text font-medium group-hover:text-primary-green transition-colors">
                    Clothing
                  </span>
                </div>
                <div className="bg-bg-honeydew text-primary-green font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  4
                </div>
              </div>

              {/* Pet Foods */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex-shrink-0">
                    <img
                      src="../../../src/assets/category-4.svg.png"
                      alt="Pet Foods"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-secondary-text font-medium group-hover:text-primary-green transition-colors">
                    Pet Foods
                  </span>
                </div>
                <div className="bg-bg-honeydew text-primary-green font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  5
                </div>
              </div>

              {/* Baking material */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex-shrink-0">
                    <img
                      src="../../../src/assets/category-5.svg.png"
                      alt="Baking material"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-secondary-text font-medium group-hover:text-primary-green transition-colors">
                    Baking material
                  </span>
                </div>
                <div className="bg-bg-honeydew text-primary-green font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  8
                </div>
              </div>

              {/* Fresh Fruit */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex-shrink-0">
                    <img
                      src="../../../src/assets/category-1.svg.png"
                      alt="Fresh Fruit"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-secondary-text font-medium group-hover:text-primary-green transition-colors">
                    Fresh Fruit
                  </span>
                </div>
                <div className="bg-bg-honeydew text-primary-green font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  10
                </div>
              </div>
            </div>
          </div>
          {/* sort */}
          <div className="p-6 bg-white shadow-lg rounded-lg max-w-sm">
            {/* Title */}
            <h3 className="text-lg font-semibold mb-4">Filter by price</h3>

            {/* Price Slider */}
            <div>
              <div className="relative w-full h-1 bg-gray-300 rounded-full">
                <div className="absolute left-1/4 right-1/2 h-1 bg-primary-green rounded-full"></div>
                <div className="absolute left-1/4 w-4 h-4 bg-white border-2 border-primary-green rounded-full -top-1"></div>
                <div className="absolute left-1/2 w-4 h-4 bg-white border-2 border-primary-green rounded-full -top-1"></div>
              </div>
              <div className="flex justify-between text-sm text-primary-green mt-2">
                <span>From: $500</span>
                <span>To: $1,000</span>
              </div>
            </div>

            {/* Color Filters */}
            <h4 className="text-md font-medium mt-6">Color</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Red (56)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Green (78)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Blue (54)</span>
              </label>
            </div>

            {/* Item Condition Filters */}
            <h4 className="text-md font-medium mt-6">Item Condition</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>New (1506)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Refurbished (27)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Used (45)</span>
              </label>
            </div>

            {/* Filter Button */}
            <button className="mt-6 w-full bg-primary-green hover:bg-green-700 text-white font-semibold py-2 rounded-lg">
              Filter
            </button>
          </div>

          {/* New Products */}
          <div className="max-w-sm bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-semibold text-primary-text">
              New Products
            </h2>
            <div className="mt-4 space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center space-x-4 border-b pb-3 last:border-b-0"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 rounded-md"
                  />
                  <div>
                    <h3 className="text-primary-green font-semibold">
                      {product.name}
                    </h3>
                    <p className="text-secondary-text font-medium">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="md:w-3/4">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-1 lg:gap-2 px-3 md:px-0">
            {currentItem?.slice(0, 12).map((item, index) => (
              <div
                key={index}
                className="group relative border border-border rounded-lg shadow mx-auto w-full md:w-auto overflow-hidden transition-all duration-300"
              >
                {/* Tag Label */}
                {item?.tag && (
                  <span className="absolute top-0 right-0 bg-offPurple text-white px-4 py-1 rounded-bl-lg text-lg z-10">
                    {item.tag}
                  </span>
                )}

                {/* Image Wrapper */}
                <div className="relative flex justify-center items-center overflow-hidden px-3">
                  <img
                    src={item?.photo}
                    alt={item?.title}
                    className="w-72 h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
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
                <div className="space-y-2 mt-3 px-3">
                  <p className="text-secondary-gray">{item?.category}</p>
                  <h1 className="quick text-xl font-bold text-primary-text">
                    {item?.title}
                  </h1>
                  <p>
                    By{" "}
                    <span className="text-primary-green">{item?.vendor}</span>
                  </p>

                  {/* Rating */}
                  <div className="rating mt-2">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-orange"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-orange"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                  </div>

                  {/* Price + Button */}
                  <div className="flex justify-between px-3 pb-4 items-center">
                    <h1 className="text-primary-green text-lg font-semibold">
                      ${item?.price}
                    </h1>
                    <button className="flex items-center gap-2 px-3 py-2 rounded bg-primary-border text-primary-green hover:bg-primary-green hover:text-white transition">
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
