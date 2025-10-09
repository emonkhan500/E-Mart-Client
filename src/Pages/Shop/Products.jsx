import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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
const product = [
  {
    name: "Seeds of Change Organic Quinoa",
    category: "Snack",
    brand: "NestFood",
    rating: 4.0,
    price: 28.85,
    original_price: 33.2,
    label: "Hot",
    image_url: "https://i.ibb.co.com/F4BntgjP/Link-product-9-1-jpg.png",
  },
  {
    name: "All Natural Italian-Style Chicken Meatballs",
    category: "Snack",
    brand: "Stouffer",
    rating: 3.5,
    price: 52.85,
    original_price: 58.2,
    label: "Sale",
    image_url: "https://i.ibb.co.com/xqhXcMGT/Link-cat-14-png.png",
  },
  {
    name: "Angie’s Boomchickapop Sweet & Salty",
    category: "Snack",
    brand: "StarKist",
    rating: 4.0,
    price: 48.85,
    original_price: 52.8,
    label: "New",
    image_url: "https://i.ibb.co.com/gFj6ng40/Link-product-5-1-jpg.png",
  },
  {
    name: "Foster Farms Takeout Crispy Classic",
    category: "Vegetables",
    brand: "NestFood",
    rating: 4.0,
    price: 17.85,
    original_price: 19.9,
    image_url: "https://i.ibb.co.com/LXM7jQh1/Link-product-3-1-jpg.png",
  },
  {
    name: "Blue Diamond Almonds Lightly",
    category: "Pet Foods",
    brand: "NestFood",
    rating: 4.0,
    price: 23.85,
    original_price: 28.2,
    discount: "-14%",
    image_url: "https://i.ibb.co.com/QjJKgt40/Link-product-4-1-jpg.png",
  },
  {
    name: "Chobani Complete Vanilla Greek",
    category: "Hodo Foods",
    brand: "NestFood",
    rating: 4.0,
    price: 54.85,
    original_price: 58.8,
    image_url: "https://i.ibb.co.com/FbmYkT4h/Link-product-2-1-jpg.png",
  },
  {
    name: "Canada Dry Ginger Ale - 2 L Bottle",
    category: "Meats",
    brand: "NestFood",
    rating: 4.0,
    price: 32.85,
    original_price: 35.8,
    image_url: "https://i.ibb.co.com/Pv8THjRB/Link-product-1-1-jpg.png",
  },
  {
    name: "Encore Seafoods Stuffed Alaskan",
    category: "Snack",
    brand: "NestFood",
    rating: 4.0,
    price: 35.85,
    original_price: 37.8,
    label: "Sale",
    image_url: "https://i.ibb.co.com/XGHHcq9/Link-product-6-1-jpg.png",
  },
  {
    name: "Gorton’s Beer Battered Fish Fillets",
    category: "Coffees",
    brand: "Old El Paso",
    rating: 4.0,
    price: 23.85,
    original_price: 25.8,
    label: "Hot",
    image_url: "https://i.ibb.co.com/LdyQtCbZ/Link-product-8-1-jpg.png",
  },
  {
    name: "Haagen-Dazs Caramel Cone Ice Cream",
    category: "Cream",
    brand: "Tyson",
    rating: 2.0,
    price: 22.85,
    original_price: 24.8,
    image_url: "https://i.ibb.co.com/QjJKgt40/Link-product-4-1-jpg.png",
  },
  {
    name: "Seeds of Change Organic Quinoa",
    category: "Snack",
    brand: "NestFood",
    rating: 4.0,
    price: 28.85,
    original_price: 33.2,
    label: "Hot",
    image_url: "https://i.ibb.co.com/F4BntgjP/Link-product-9-1-jpg.png",
  },
  {
    name: "All Natural Italian-Style Chicken Meatballs",
    category: "Snack",
    brand: "Stouffer",
    rating: 3.5,
    price: 52.85,
    original_price: 58.2,
    label: "Sale",
    image_url: "https://i.ibb.co.com/xqhXcMGT/Link-cat-14-png.png",
  },
  {
    name: "Angie’s Boomchickapop Sweet & Salty",
    category: "Snack",
    brand: "StarKist",
    rating: 4.0,
    price: 48.85,
    original_price: 52.8,
    label: "New",
    image_url: "https://i.ibb.co.com/gFj6ng40/Link-product-5-1-jpg.png",
  },
  {
    name: "Foster Farms Takeout Crispy Classic",
    category: "Vegetables",
    brand: "NestFood",
    rating: 4.0,
    price: 17.85,
    original_price: 19.9,
    image_url: "https://i.ibb.co.com/LXM7jQh1/Link-product-3-1-jpg.png",
  },
  {
    name: "Blue Diamond Almonds Lightly",
    category: "Pet Foods",
    brand: "NestFood",
    rating: 4.0,
    price: 23.85,
    original_price: 28.2,
    discount: "-14%",
    image_url: "https://i.ibb.co.com/QjJKgt40/Link-product-4-1-jpg.png",
  },
  {
    name: "Chobani Complete Vanilla Greek",
    category: "Hodo Foods",
    brand: "NestFood",
    rating: 4.0,
    price: 54.85,
    original_price: 58.8,
    image_url: "https://i.ibb.co.com/FbmYkT4h/Link-product-2-1-jpg.png",
  },
  {
    name: "Canada Dry Ginger Ale - 2 L Bottle",
    category: "Meats",
    brand: "NestFood",
    rating: 4.0,
    price: 32.85,
    original_price: 35.8,
    image_url: "https://i.ibb.co.com/Pv8THjRB/Link-product-1-1-jpg.png",
  },
  {
    name: "Encore Seafoods Stuffed Alaskan",
    category: "Snack",
    brand: "NestFood",
    rating: 4.0,
    price: 35.85,
    original_price: 37.8,
    label: "Sale",
    image_url: "https://i.ibb.co.com/XGHHcq9/Link-product-6-1-jpg.png",
  },
  {
    name: "Gorton’s Beer Battered Fish Fillets",
    category: "Coffees",
    brand: "Old El Paso",
    rating: 4.0,
    price: 23.85,
    original_price: 25.8,
    label: "Hot",
    image_url: "https://i.ibb.co.com/LdyQtCbZ/Link-product-8-1-jpg.png",
  },
  {
    name: "Haagen-Dazs Caramel Cone Ice Cream",
    category: "Cream",
    brand: "Tyson",
    rating: 2.0,
    price: 22.85,
    original_price: 24.8,
    image_url: "https://i.ibb.co.com/QjJKgt40/Link-product-4-1-jpg.png",
  },
];

const Products = () => {

const axiosSecure =useAxiosSecure()

const{data:allProduct}=useQuery({
  queryKey:['allProduct'],
  queryFn:async(req,res)=>{
    const result=await axiosSecure.get('/product')
    return result.data 
  }
})
console.log(allProduct);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItem = product.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(product.length / postsPerPage);

  return (
    <div className="mt-8 md:mt-20 quick">
      <div className="flex flex-col md:flex-row gap-6 md:gap-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 space-y-10">
          {/* Categories */}
          <div className="bg-white rounded-2xl shadow-sm p-6 w-full max-w-sm">
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
              <img src="/milk-dairy-icon.jpg" alt="Milks & Dairies" className="w-full h-full object-contain" />
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
              <img src="/clothing-shirt-icon.jpg" alt="Clothing" className="w-full h-full object-contain" />
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
              <img src="/pet-food-icon.jpg" alt="Pet Foods" className="w-full h-full object-contain" />
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
              <img src="/baking-flour-icon.jpg" alt="Baking material" className="w-full h-full object-contain" />
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
              <img src="/fresh-fruit-icon.jpg" alt="Fresh Fruit" className="w-full h-full object-contain" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors">Fresh Fruit</span>
          </div>
          <div className="bg-teal-100 text-teal-700 font-semibold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
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

          {/* New Products */}
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6">
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

        {/* Product List */}
        <div className="md:w-3/4">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {currentItem.map((item, index) => (
  <div
    key={index}
    className="relative border border-[#ECECEC] rounded-lg px-3 shadow mx-auto"
  >
    {/* Correctly rendering the label */}
    {item.label && (
      <span className="absolute top-0 right-0 bg-pink-500 text-white px-4  rounded-bl-lg text-lg">
        {item.label}
      </span>
    )}

    <div className="flex justify-center">
      <img src={item.image_url} alt={item.name} className="w-full" />
    </div>
    <div className="space-y-2">
      <p className="text-[#ADADAD]">{item.category}</p>
      <h1 className="quick text-xl font-bold text-[#253D4E]">{item.name}</h1>
      <p>
        By <span className="text-[#3BB77E]">{item.brand}</span>
      </p>
      <div className="flex justify-between px-3 pb-4">
        <h1 className="text-[#3BB77E] text-lg font-semibold">
          ${item.original_price}
        </h1>
        <button className="flex items-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
          <FaShoppingCart /> Add
        </button>
      </div>
    </div>
  </div>
))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <button
              className="mx-2 px-4 py-2 rounded bg-[#3BB77E] text-white"
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
                    ? "bg-[#3BB77E] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="mx-2 px-4 py-2 rounded bg-[#3BB77E] text-white"
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
