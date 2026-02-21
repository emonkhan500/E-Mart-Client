import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Axios/useAxiosSecure";
import ShareHead from "../../../Shared/ShareHead";
import Newsletter from "../../Home/Newsletter";
import useHooks from "../../../hooks/useHooks";

const Details = () => {
  const { handleWish, handleCart } = useHooks();
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

  const [selectedSize, setSelectedSize] = useState("50g");
  const sizes = ["50g", "60g", "80g", "100g", "150g"];
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: SingleProduct = {} } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const data = await axiosSecure.get(`/product/${id}`);
      return data.data;
    },
  });

  //  Image Zoom Logic
  const [zoomStyle, setZoomStyle] = useState({});
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: "center center",
      transform: "scale(1)",
    });
  };

  return (
    <div>
      <ShareHead pageTitle="Product Details"></ShareHead>

      <div className="flex flex-col xl:flex-row gap-4 mt-3 md:mt-8">
        {/* details */}
        <div className="xl:w-3/4">
          <div className="mx-auto">
            <div className="grid grid-cols-1 tab:grid-cols-2 gap-2 md:gap-8">
              {/* Left Side - Product Image */}
              <div
                className="flex items-center justify-center border border-border rounded-xl relative overflow-hidden mb-3"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <button className="absolute top-4 xl:top-14 right-4 xl:right-24 transition">
                  <FaSearch className="text-primary-gray text-2xl" />
                </button>
                <img
                  ref={imgRef}
                  src={SingleProduct?.photo}
                  className="w-full xl:w-96 h-56 object-contain transition-transform duration-300 ease-out"
                  style={zoomStyle}
                />
              </div>

              {/* Right Side - Product Details */}
              <div className="flex flex-col justify-start">
                <div className="flex justify-between items-center pr-4 lg:pr-36 mb-2 md:mb-4">
                  <span className="bg-primary-border text-primary-green text-base font-semibold px-5 py-1 rounded">
                    {SingleProduct?.tag}
                  </span>
                  {/* Rating */}
                  <div className="flex items-center gap-2 ">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-orange text-2xl">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-primary-text text-sm">
                      ({SingleProduct?.rating})
                    </span>
                  </div>
                </div>

                <h1 className="lato text-3xl md:text-5xl font-bold text-primary-text mb-2 md:mb-4">
                  {SingleProduct?.title}
                </h1>

                {/* Dynamic Price Section */}
                <div className="flex items-center gap-4 mb-1 md:mb-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl md:text-2xl font-bold text-primary-green">
                      ${SingleProduct?.disPrice}
                    </span>
                    <span className="text-sm md:text-lg text-primary-text line-through">
                      ${SingleProduct?.price}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-primary-text text-sm md:text-base leading-relaxed mb-2 md:mb-6">
                  {SingleProduct?.description}
                </p>

                {/* Size/Weight Selection */}
                <div className="mb-3 lato">
                  <label className="block text-sm font-bold text-primary-text mb-1 md:mb-3">
                    Size / Weight
                  </label>
                  <div className="flex gap-1 md:gap-2 flex-wrap">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-1 md:py-2 rounded-lg font-medium transition ${
                          selectedSize === size
                            ? "bg-primary-green text-white"
                            : "bg-gray-100 text-primary-gray hover:bg-gray-200"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex gap-4 items-center mt-3 mb-6 lato w-full ">
                  <button onClick={()=>handleCart(id)} className="bg-primary-green hover:bg-primary-green text-white font-semibold w-full py-2 rounded-lg transition flex items-center justify-center gap-2">
                    <FaShoppingCart size={18} /> Add to cart
                  </button>
                  <button  onClick={()=>handleWish(id)} className="bg-primary-green hover:bg-primary-green text-white font-semibold w-full py-2 rounded-lg transition flex items-center justify-center gap-2">
                    <FaHeart size={18} /> Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Newsletter></Newsletter>
        </div>

        {/* Sidebar remains unchanged */}
        <div className="w-full flex flex-col justify-center md:flex-row gap-5 xl:flex-col xl:w-1/4 space-y-10">
          {/* Categories */}
          <div className="bg-white rounded-2xl shadow-lg p-2 w-full max-w-sm mx-auto">
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
                  <span className="text-primary-gray font-medium group-hover:text-primary-green transition-colors">
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
                  <span className="text-primary-gray font-medium group-hover:text-primary-green transition-colors">
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
                  <span className="text-primary-gray font-medium group-hover:text-primary-green transition-colors">
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
                  <span className="text-primary-gray font-medium group-hover:text-primary-green transition-colors">
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
                  <span className="text-primary-gray font-medium group-hover:text-primary-green transition-colors">
                    Fresh Fruit
                  </span>
                </div>
                <div className="bg-bg-honeydew text-primary-green font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  10
                </div>
              </div>
            </div>
          </div>
          {/* New Products */}
          <div className="w-full max-w-sm bg-white shadow-lg rounded-xl p-6  mx-auto">
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
                    <p className="text-primary-gray font-medium">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
