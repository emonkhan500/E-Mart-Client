import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../Home/Style.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { FaShoppingCart } from "react-icons/fa";

const DailyBestDeal = () => {
  return (
    <div className="">
      <div className=" my-4 mt-10 text-center">
        <h1 className="text-[#253D4E] text-2xl md:text-4xl font-bold">
          Daily Best Sells
        </h1>
      </div>
      {/* main */}
      <div className="flex justify-center gap-4">
        <div
          className="  hidden md:flex relative  w-[450px] md:h-[500px] lg:h-[552px]  bg-cover bg-center items-center p-2  rounded-lg shadow-md"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/DHppj7Yn/leaf.png')",
          }}
        >
          <div className="bg-white bg-opacity-0 rounded-lg  ">
            <h2 className="lato md:text-4xl lg:text-5xl font-semibold text-[#253D4E] -mt-16">
              Bring nature into your home
            </h2>
            <Link to="/shop">
              <button className="mt-32 px-4 py-2 ml-6 bg-[#3BB77E]  text-white rounded hover:bg-green-600">
                Shop Now →
              </button>
            </Link>
          </div>
        </div>
        <Swiper
        slidesPerView={10}
        spaceBetween={1}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-full  mx-auto lg:pl-7"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 2 }, // Mobile (sm)
          550: { slidesPerView: 1, spaceBetween: 3 }, // Small tablets
          640: { slidesPerView: 2, spaceBetween: 4}, // Tablets
          770: { slidesPerView: 2, spaceBetween: 5 }, // Small laptops
          1024: { slidesPerView: 3, spaceBetween: 10 }, // Standard laptops (adjusted)
          1280: { slidesPerView: 4, spaceBetween: 12 }, // Large laptops
          1440: { slidesPerView: 4, spaceBetween: 10 }, // Widescreen monitors
        }}
      >
        <SwiperSlide>
        <div className="text-start w-full border border-[#ECECEC] rounded-lg  shadow mx-auto">
    <div className="flex ">
      <img src="https://i.ibb.co.com/LXM7jQh1/Link-product-3-1-jpg.png" alt="Product" />
    </div>
    <div>
      <div className="px-4">
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick md:text-lg lg:text-xl font-bold text-[#253D4E] mt-1 mb-2">
        Seeds of Change Organic Quinoa, Brown & Rice
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
      </div>
      <div className="  mt-2 ">
        
        
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#3BB77E] text-white">
          <FaShoppingCart /> Add To cart
        </button>
      </div>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-start w-full border border-[#ECECEC] rounded-lg  shadow mx-auto">
    <div className="flex ">
      <img src="https://i.ibb.co.com/XGHHcq9/Link-product-6-1-jpg.png" alt="Product" />
    </div>
    <div>
      <div className="px-4">
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
      Chobani Complete Vanilla Greek
Yogurt
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
      </div>
      <div className="  mt-2 ">
        
        
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#3BB77E] text-white">
          <FaShoppingCart /> Add To cart
        </button>
      </div>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-start w-full border border-[#ECECEC] rounded-lg  shadow mx-auto">
    <div className="flex ">
      <img src="https://i.ibb.co.com/wFYG567R/Link-product-7-1-jpg.png" alt="Product" />
    </div>
    <div>
      <div className="px-4">
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
        Seeds of Change Organic Quinoa, Brown & Rice
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
      </div>
      <div className="  mt-2 ">
        
        
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#3BB77E] text-white">
          <FaShoppingCart /> Add To cart
        </button>
      </div>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-start w-full border border-[#ECECEC] rounded-lg  shadow mx-auto">
    <div className="flex ">
      <img src="https://i.ibb.co.com/LdyQtCbZ/Link-product-8-1-jpg.png" alt="Product" />
    </div>
    <div>
      <div className="px-4">
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
      Canada Dry Ginger Ale – 2 L
Bottle - 200ml - 400g
      </h1>
      <p>By <span className="text-[#3BB77E]">NestFood</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
      </div>
      <div className="  mt-2 ">
        
        
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#3BB77E] text-white">
          <FaShoppingCart /> Add To cart
        </button>
      </div>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-start w-full border border-[#ECECEC] rounded-lg  shadow mx-auto">
    <div className="flex ">
      <img src="https://i.ibb.co.com/F4BntgjP/Link-product-9-1-jpg.png" alt="Product" />
    </div>
    <div>
      <div className="px-4">
      <p className="text-[#ADADAD]">Snack</p>
      <h1 className="quick text-xl font-bold text-[#253D4E] mt-1 mb-2">
      Gorton’s Beer Battered Fish
Fillets with soft paper
      </h1>
      <p>By <span className="text-[#3BB77E]">Old El Paso</span></p>
      <div className="rating mt-2">
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
        <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
      <h1 className="text-[#3BB77E] text-lg font-semibold">$28.85</h1>
      </div>
      <div className="  mt-2 ">
        
        
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#3BB77E] text-white">
          <FaShoppingCart /> Add To cart
        </button>
      </div>
    </div>
  </div>
        </SwiperSlide>
     
      </Swiper>
        
      </div>
      
    </div>
  );
};

export default DailyBestDeal;