import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../../Axios/useAxiosSecure";
import ShareHead from "../../../Shared/ShareHead";
import Newsletter from "../../Home/Newsletter";
import useHooks from "../../../hooks/useHooks";

const Details = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { handleWish, handleCart, allProduct } = useHooks();
  const [selectedSize, setSelectedSize] = useState("50g");
  const sizes = ["50g", "60g", "80g", "100g", "150g"];
 
  const { data: SingleProduct = {} } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const data = await axiosSecure.get(`/product/${id}`);
      return data.data;
    },
  });
console.log(SingleProduct);
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
                  <button
                    onClick={() => handleCart(SingleProduct)}
                    className="bg-primary-green hover:bg-primary-green text-white font-semibold w-full py-2 rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart size={18} /> Add to cart
                  </button>
                  <button
                    onClick={() => handleWish(SingleProduct)}
                    className="bg-primary-green hover:bg-primary-green text-white font-semibold w-full py-2 rounded-lg transition flex items-center justify-center gap-2"
                  >
                    <FaHeart size={18} /> Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Newsletter></Newsletter>
        </div>

        {/* Sidebar remains unchanged */}
        <div className="w-full flex flex-col justify-center md:flex-row gap-5 xl:flex-col xl:w-1/4 ">
          {/* New Products */}
          <div className="w-full xl:max-w-sm bg-white shadow-lg rounded-xl px-6  mx-auto">
            <h2 className="text-xl font-semibold text-primary-text">
              New Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-4 space-y-4 mt-4">
              {allProduct
                ?.slice()
                .reverse()
                .slice(0, 8)
                .map((product) => (
                  <Link to={`/details/${product._id}`}>
                    <div
                      key={product.id}
                      className="flex items-center gap-5 border-b pb-3 border-border"
                    >
                      <img
                        src={product.photo}
                        alt={product.title}
                        className="w-14 h-14 rounded-md object-cover"
                      />
                      <div>
                        <h3 className="text-primary-green text-xl font-semibold">
                          {product.title}
                        </h3>
                        <p className="text-primary-gray font-medium">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
