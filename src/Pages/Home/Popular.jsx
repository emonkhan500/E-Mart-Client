import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Popular = () => {
  return (
    <div className="lato">
      <div className="md:my-7 my-4 pt-24 text-center">
        <h1 className="text-[#253D4E] text-2xl md:text-4xl font-bold">Popular Product</h1>
        <div className="flex justify-center mt-3 pr-7 mb-8">
          <img
            className=""
            src="https://i.ibb.co.com/1JBhBjNq/underheading.png "
            alt=""
          />
        </div>
      </div>
      {/* product div */}
      <div className="grid gap-4 md:gap-2 lg:gap-2 xl:gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center">
        {/* 1 */}
  <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto">
    <div className="flex justify-center">
      <img src="https://i.ibb.co.com/Pv8THjRB/Link-product-1-1-jpg.png" alt="Product" />
    </div>
    <div>
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
        Seeds of Change Organic Quinoa, Brown, & Red Rice
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
      </div>
      <div className="flex justify-between items-center px-6 mt-2 mb-5">
        <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
        <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
          <FaShoppingCart /> Add
        </button>
      </div>
    </div>
  </div>
        {/* 2 */}
        <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto">
    <div className="flex justify-center">
      <img src="https://i.ibb.co.com/FbmYkT4h/Link-product-2-1-jpg.png" alt="Product" />
    </div>
    <div>
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
        Seeds of Change Organic Quinoa, Brown, & Red Rice
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
      </div>
      <div className="flex justify-between items-center  px-6 mt-2 mb-5">
        <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
        <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
          <FaShoppingCart /> Add
        </button>
      </div>
    </div>
  </div>
        {/* 3 */}
        <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto">
    <div className="flex justify-center">
      <img src="https://i.ibb.co.com/LXM7jQh1/Link-product-3-1-jpg.png" alt="Product" />
    </div>
    <div>
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
        Seeds of Change Organic Quinoa, Brown, & Red Rice
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <div className="flex justify-between items-center  px-6 mt-2 mb-5">
        <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
        <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
          <FaShoppingCart /> Add
        </button>
      </div>
    </div>
  </div>
        {/* 4 */}
        <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto">
    <div className="flex justify-center">
      <img src="https://i.ibb.co.com/QjJKgt40/Link-product-4-1-jpg.png" alt="Product" />
    </div>
    <div>
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
        Seeds of Change Organic Quinoa, Brown, & Red Rice
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <div className="flex justify-between items-center  px-6 mt-2 mb-5">
        <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
        <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
          <FaShoppingCart /> Add
        </button>
      </div>
    </div>
  </div>
        {/* 5 */}
        <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto">
    <div className="flex justify-center">
      <img src="https://i.ibb.co.com/gFj6ng40/Link-product-5-1-jpg.png" alt="Product" />
    </div>
    <div>
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
        Seeds of Change Organic Quinoa, Brown, & Red Rice
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <div className="flex justify-between items-center  px-6 mt-2 mb-5">
        <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
        <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
          <FaShoppingCart /> Add
        </button>
      </div>
    </div>
  </div>
        {/* 6 */}
        <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto"> 
    <div className="flex justify-center">
      <img src="https://i.ibb.co.com/Pv8THjRB/Link-product-1-1-jpg.png" alt="Product" />
    </div>
    <div>
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
        Seeds of Change Organic Quinoa, Brown, & Red Rice
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <div className="flex justify-between items-center  px-6 mt-2 mb-5">
        <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
        <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
          <FaShoppingCart /> Add
        </button>
      </div>
    </div>
  </div>
  {/* 7 */}
  <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto">
    <div className="flex justify-center">
      <img src="https://i.ibb.co.com/QjJKgt40/Link-product-4-1-jpg.png" alt="Product" />
    </div>
    <div>
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
        Seeds of Change Organic Quinoa, Brown, & Red Rice
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <div className="flex justify-between items-center  px-6 mt-2 mb-5">
        <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
        <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
          <FaShoppingCart /> Add
        </button>
      </div>
    </div>
  </div>
        {/* 8 */}
        <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto">
    <div className="flex justify-center">
      <img src="https://i.ibb.co.com/Pv8THjRB/Link-product-1-1-jpg.png" alt="Product" />
    </div>
    <div>
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
        Seeds of Change Organic Quinoa, Brown, & Red Rice
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <div className="flex justify-between items-center  px-6 mt-2 mb-5">
        <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
        <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
          <FaShoppingCart /> Add
        </button>
      </div>
    </div>
  </div>
  {/* 9 */}
  <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto">
    <div className="flex justify-center">
      <img src="https://i.ibb.co.com/FbmYkT4h/Link-product-2-1-jpg.png" alt="Product" />
    </div>
    <div>
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
        Seeds of Change Organic Quinoa, Brown, & Red Rice
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <div className="flex justify-between items-center  px-6 mt-2 mb-5">
        <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
        <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
          <FaShoppingCart /> Add
        </button>
      </div>
    </div>
  </div>
        {/* 10 */}
        <div className="md:w-[245px] lg:w-[236px] xl:w-[265px] border border-[#ECECEC] rounded-lg px-3 shadow mx-auto">
    <div className="flex justify-center">
      <img src="https://i.ibb.co.com/Pv8THjRB/Link-product-1-1-jpg.png" alt="Product" />
    </div>
    <div>
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
        Seeds of Change Organic Quinoa, Brown, & Red Rice
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <div className="flex justify-between items-center  px-6 mt-2 mb-5">
        <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
        <button className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#DEF9EC] text-[#3BB77E]">
          <FaShoppingCart /> Add
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Popular;
