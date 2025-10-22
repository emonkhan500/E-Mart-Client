import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import ShareHead from "../../../Shared/ShareHead";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Axios/useAxiosSecure";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Details = () => {
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

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("60g");
  const [isWishlisted, setIsWishlisted] = useState(false);
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

  const handleAddToCart = () => {
    console.log(`Added ${quantity} x ${selectedSize} to cart`);
  };

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value);
    if (value > 0) setQuantity(value);
  };

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
              {/* Left Side - Product Image */}
              <div
                className="flex items-center justify-center border border-[#F1F1F1] rounded-xl relative overflow-hidden"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <button className="absolute top-4 xl:top-14 right-4 xl:right-24 transition">
                  <FaSearch className="text-[#7E7E7E] text-2xl" />
                </button>
                <img
                  ref={imgRef}
                  src={SingleProduct?.photo}
                  className="w-full xl:w-96 h-full xl:h-96 object-contain transition-transform duration-300 ease-out"
                  style={zoomStyle}
                />
              </div>

              {/* Right Side - Product Details */}
              <div className="flex flex-col justify-start">
                <div className="inline-flex w-fit mb-4">
                  <span className="bg-[#FDE0E9] text-[#F74B81] text-base font-semibold px-3 py-2 rounded-md">
                    {SingleProduct?.tag}
                  </span>
                </div>

                <h1 className="lato text-3xl font-bold text-[#253D4E] mb-2">
                  {SingleProduct?.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">
                    {SingleProduct?.rating}
                  </span>
                </div>

                {/* Dynamic Price Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#3BB77E]">
                      ${(SingleProduct?.disPrice * quantity).toFixed(2)}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      ${(SingleProduct?.price * quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {SingleProduct?.description}
                </p>

                {/* Size/Weight Selection */}
                <div className="mb-6 lato">
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Size / Weight
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg font-medium transition ${
                          selectedSize === size
                            ? "bg-[#3BB77E] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex gap-4 items-center mb-6 lato">
                  <div className="flex items-center border border-[#3BB77E] rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-[#3BB77E] hover:bg-gray-100"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-12 text-center border-0 outline-none"
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-[#3BB77E] hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="bg-[#3BB77E] hover:bg-green-600 text-white font-semibold py-3 px-2 md:px-6 rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart size={18} /> Add to cart
                  </button>

                  <button className="border border-[#F1F1F1] p-2 rounded">
                    <CiHeart className="text-2xl text-[#3BB77E]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar remains unchanged */}
        {/* ... (rest of sidebar content) */}
      </div>
    </div>
  );
};

export default Details;
