import React from 'react';
import { useParams } from 'react-router-dom';
import ShareHead from '../../../Shared/ShareHead';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Axios/useAxiosSecure';
import { useState } from "react"
import { FaHeart, FaShare, FaSearch, FaShoppingCart } from "react-icons/fa"

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

      
      
      const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("60g")
  const [isWishlisted, setIsWishlisted] = useState(false)

  const sizes = ["50g", "60g", "80g", "100g", "150g"]
  const originalPrice = 52
  const salePrice = 38
  const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100)

  const handleAddToCart = () => {
    console.log(`Added ${quantity} x ${selectedSize} to cart`)
  }

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0) setQuantity(value)
  }




    const { id } = useParams();
    const axiosSecure=useAxiosSecure()

    const {data:SingleProduct}=useQuery({
      queryKey:['product', id],
      queryFn:async ()=>{
const data= await axiosSecure.get(`/product/${id}`)
return data.data;
      }
    })
    console.log(SingleProduct);
    return (
        <div >
          <ShareHead pageTitle='Product Details'></ShareHead>

          <div className='flex flex-col md:flex-row gap-4 mt-3 md:mt-8'>
            {/* details  */}
           <div className='md:w-3/4'>
           <div className=" ">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
          {/* Left Side - Product Image */}
          <div className="flex items-center justify-center  rounded-lg p-3 relative">
            <button className="absolute top-4 right-4 p-2   transition">
              <FaSearch  className="text-[#7E7E7E] text-2xl" />
            </button>
            <img
              src={SingleProduct?.photo}
              className="w-full md:w-96 h-full md:h-96 object-contain"
            />
          </div>

          {/* Right Side - Product Details */}
          <div className="flex flex-col justify-start">
            {/* Sale Badge */}
            <div className="inline-flex w-fit mb-4">
              <span className="bg-[#FDE0E9] text-[#F74B81] text-base font-semibold px-3 py-2 rounded-md">Sale Off</span>
            </div>

            {/* Product Title */}
            <h1 className="text-3xl font-bold text-[#253D4E] mb-2">Seeds of Change</h1>
            

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">(32 reviews)</span>
            </div>

            {/* Price Section */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-green-600">${salePrice}</span>
                <span className="text-xl text-gray-400 line-through">${originalPrice}</span>
              </div>
              <span className="text-orange-500 font-semibold">{discount}% off</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima
              nisi modi, quasi odio minus dolore impedit fuga eum eligendi.
            </p>

            {/* Size/Weight Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-3">Size / Weight</label>
              <div className="flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      selectedSize === size ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 items-center mb-6">
              <div className="flex items-center border border-green-600 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-green-600 hover:bg-gray-100"
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
                  className="px-3 py-2 text-green-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
              >
                <FaShoppingCart size={18} /> Add to cart
              </button>

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-3 rounded-lg border transition ${
                  isWishlisted ? "bg-red-50 border-red-300" : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <FaHeart size={20} className={isWishlisted ? "text-red-500" : "text-gray-600"} />
              </button>

              <button className="p-3 rounded-lg border border-gray-300 hover:border-gray-400 transition">
                <FaShare size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
           </div>
            {/* Sidebar */}
        <div className="w-full md:w-1/4 space-y-10">
          {/* Categories */}
          <div className="bg-white rounded-2xl shadow-lg p-2 w-full max-w-sm">
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
              <img src="../../../src/assets/category-2.svg.png" alt="Milks & Dairies" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors">
              Milks & Dairies
            </span>
          </div>
          <div className="bg-teal-100 text-teal-700 font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
            3
          </div>
        </div>

        {/* Clothing */}
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0">
              <img src="../../../src/assets/icon-1.svg.png" alt="Clothing" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors">Clothing</span>
          </div>
          <div className="bg-teal-100 text-teal-700 font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
            4
          </div>
        </div>

        {/* Pet Foods */}
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0">
              <img src="../../../src/assets/category-4.svg.png" alt="Pet Foods" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors">Pet Foods</span>
          </div>
          <div className="bg-teal-100 text-teal-700 font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
            5
          </div>
        </div>

        {/* Baking material */}
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0">
              <img src="../../../src/assets/category-5.svg.png" alt="Baking material" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors">
              Baking material
            </span>
          </div>
          <div className="bg-teal-100 text-teal-700 font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
            8
          </div>
        </div>

        {/* Fresh Fruit */}
        <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex-shrink-0">
              <img src="../../../src/assets/category-1.svg.png" alt="Fresh Fruit" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors">Fresh Fruit</span>
          </div>
          <div className="bg-teal-100 text-teal-700 font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
            10
          </div>
        </div>
      </div>
    </div>
          

          {/* New Products */}
          <div className="max-w-sm bg-white shadow-lg rounded-xl p-6 ">
            <h2 className="text-xl font-semibold text-[#253D4E]">
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
                    <h3 className="text-green-600 font-semibold">
                      {product.name}
                    </h3>
                    <p className="text-gray-700 font-medium">
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