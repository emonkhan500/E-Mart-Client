import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
    {
      id: 1,
      name: "Chen Cardigan",
      price: 99.5,
      image: "https://i.ibb.co.com/mCFXymfH/thumbnail-4-jpg.png", 
    },
    {
      id: 2,
      name: "Chen Sweater",
      price: 89.5,
      image: "https://i.ibb.co.com/4RJ5nQ0v/thumbnail-5-jpg.png",
    },
    {
      id: 3,
      name: "Colorful Jacket",
      price: 25,
      image: "https://i.ibb.co.com/ZR9JHp3b/thumbnail-6-jpg.png", 
    },
  ];

const categories = [
    { name: "Milks & Dairies", count: 30, icon: "https://i.ibb.co.com/LTcNd90/category-2-svg.png" },
    
    { name: "Pet Foods", count: 42, icon: "https://i.ibb.co.com/4g2XB5pB/category-4-svg.png" },
    { name: "Baking material", count: 68, icon: "https://i.ibb.co.com/8nnp9fDT/category-5-svg.png" },
    { name: "Fresh Fruit", count: 24, icon: "https://i.ibb.co.com/BKy4Xc1v/category-1-svg.png" },
  ];

const Products = () => {
    
  return (
    <div className="mt-20 quick">
      <div className="flex lg:gap-4 ">
        {/* side bar */}
        <div className="w-1/4 space-y-10">
            {/* category */}
        <div className="max-w-sm mx-auto border bg-white shadow-lg rounded-xl p-6">
      <h2 className=" text-xl font-semibold text-[#253D4E]  items-center">
        Category
        <div className=" w-16 h-[2px] bg-[#BCE3C9]  rounded mt-2"></div>
      </h2>
      <div className="mt-4 space-y-3">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-green-100 transition"
          >
            <div className="flex lg:gap-7 items-center space-x-3">
                <img src={cat.icon} alt="" />
              
              <span className="text-[#253D4E] font-medium">{cat.name}</span>
            </div>
            <span className="bg-[#BCE3C9] text-[#253D4E] text-sm px-2 py-1 rounded-full font-semibold">
              {cat.count}
            </span>
          </div>
        ))}
      </div>
    </div>
    {/* sort */}
    <div className="p-6 bg-white shadow-lg rounded-lg w-72">
      {/* Title */}
      <h3 className="text-lg font-semibold mb-4">Filter by price</h3>

      {/* Price Slider */}
      <div>
        <div className="relative w-full h-1 bg-gray-300 rounded-full">
          <div className="absolute left-1/4 right-1/2 h-1 bg-green-600 rounded-full"></div>
          <div className="absolute left-1/4 w-4 h-4 bg-white border-2 border-green-600 rounded-full -top-1"></div>
          <div className="absolute left-1/2 w-4 h-4 bg-white border-2 border-green-600 rounded-full -top-1"></div>
        </div>
        <div className="flex justify-between text-sm text-green-600 mt-2">
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
      <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg">
        Filter
      </button>
    </div>
    {/* trending */}
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6">
    <h2 className=" text-xl font-semibold text-[#253D4E]  items-center">
    New products
        <div className=" w-16 h-[2px] bg-[#BCE3C9]  rounded mt-2"></div>
      </h2>
      <div className="mt-4 space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center space-x-4 border-b pb-3 last:border-b-0">
            <img src={product.image} alt={product.name} className="w-14 h-14 rounded-md object-cover" />
            <div>
              <h3 className="text-green-600 font-semibold">{product.name}</h3>
              <p className="text-gray-700 font-medium">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
        {/* product  */}
        <div className="w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* 1 */}
            <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto">
              <div className="flex justify-center">
                <img
                  src="https://i.ibb.co.com/Pv8THjRB/Link-product-1-1-jpg.png"
                  alt="Product"
                />
              </div>
              <div>
                <p className="text-[#ADADAD]">Snack</p>
                <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
                  Seeds of Change Organic Quinoa, Brown, & Red Rice
                </h1>
                <p>
                  By <span className="text-[#3BB77E]">NestFood</span>
                </p>
                <div className="rating mt-2">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                </div>
                <div className="flex justify-between items-center px-6 mt-2 mb-5">
                  <h1 className="text-[#3BB77E] text-lg font-semibold">
                    $28.85
                  </h1>
                  <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
                    <FaShoppingCart /> Add
                  </button>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto">
              <div className="flex justify-center">
                <img
                  src="https://i.ibb.co.com/Pv8THjRB/Link-product-1-1-jpg.png"
                  alt="Product"
                />
              </div>
              <div>
                <p className="text-[#ADADAD]">Snack</p>
                <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
                  Seeds of Change Organic Quinoa, Brown, & Red Rice
                </h1>
                <p>
                  By <span className="text-[#3BB77E]">NestFood</span>
                </p>
                <div className="rating mt-2">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                </div>
                <div className="flex justify-between items-center px-6 mt-2 mb-5">
                  <h1 className="text-[#3BB77E] text-lg font-semibold">
                    $28.85
                  </h1>
                  <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
                    <FaShoppingCart /> Add
                  </button>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto">
              <div className="flex justify-center">
                <img
                  src="https://i.ibb.co.com/Pv8THjRB/Link-product-1-1-jpg.png"
                  alt="Product"
                />
              </div>
              <div>
                <p className="text-[#ADADAD]">Snack</p>
                <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
                  Seeds of Change Organic Quinoa, Brown, & Red Rice
                </h1>
                <p>
                  By <span className="text-[#3BB77E]">NestFood</span>
                </p>
                <div className="rating mt-2">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                </div>
                <div className="flex justify-between items-center px-6 mt-2 mb-5">
                  <h1 className="text-[#3BB77E] text-lg font-semibold">
                    $28.85
                  </h1>
                  <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
                    <FaShoppingCart /> Add
                  </button>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto">
              <div className="flex justify-center">
                <img
                  src="https://i.ibb.co.com/Pv8THjRB/Link-product-1-1-jpg.png"
                  alt="Product"
                />
              </div>
              <div>
                <p className="text-[#ADADAD]">Snack</p>
                <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
                  Seeds of Change Organic Quinoa, Brown, & Red Rice
                </h1>
                <p>
                  By <span className="text-[#3BB77E]">NestFood</span>
                </p>
                <div className="rating mt-2">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-400"
                  />
                </div>
                <div className="flex justify-between items-center px-6 mt-2 mb-5">
                  <h1 className="text-[#3BB77E] text-lg font-semibold">
                    $28.85
                  </h1>
                  <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
                    <FaShoppingCart /> Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
