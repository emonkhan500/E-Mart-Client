import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../Home/Style.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Featured = () => {
  return (
    <div className="mb-80 container">
      <div className="w-full lg:w-[1586px]">
        <h1 className="text-center mt-12 mb-6 font-bold text-4xl">
          Featured Categories
        </h1>
      </div>
      <Swiper
        slidesPerView={10}
        spaceBetween={1}
        freeMode={true}
        pagination={{
          clickable: true,
        
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-full lg:w-[1586px] mx-auto"
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 2 },   // Mobile (sm)
          550: { slidesPerView: 4, spaceBetween: 2 },   // Small tablets
          640: { slidesPerView: 5, spaceBetween: 3 },   // Tablets
          770: { slidesPerView: 6, spaceBetween: 5 },   // Small laptops
          1024: { slidesPerView: 10, spaceBetween:24 },  // Standard laptops (adjusted)
          1280: { slidesPerView: 10, spaceBetween: 12 }, // Large laptops
          1440: { slidesPerView: 11, spaceBetween: 15 }, // Widescreen monitors
        }}
        
      >
        <SwiperSlide>
          <div className=" lg:w-96  bg-[#F2FCE4] flex flex-col items-center rounded-lg py-2">
            <img
              className=""
              src="https://i.ibb.co.com/QvGkSQvq/Link-cat-13-png.png"
              alt=""
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" lg:w-96  bg-[#F2FCE4] flex flex-col items-center rounded-lg py-2">
            <img
              className=""
              src="https://i.ibb.co.com/QvGkSQvq/Link-cat-13-png.png"
              alt=""
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" lg:w-96  bg-[#F2FCE4] flex flex-col items-center rounded-lg py-2">
            <img
              className=""
              src="https://i.ibb.co.com/QvGkSQvq/Link-cat-13-png.png"
              alt=""
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" lg:w-96  bg-[#F2FCE4] flex flex-col items-center rounded-lg py-2">
            <img
              className=""
              src="https://i.ibb.co.com/QvGkSQvq/Link-cat-13-png.png"
              alt=""
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" lg:w-96  bg-[#F2FCE4] flex flex-col items-center rounded-lg py-2">
            <img
              className=""
              src="https://i.ibb.co.com/QvGkSQvq/Link-cat-13-png.png"
              alt=""
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" lg:w-96  bg-[#F2FCE4] flex flex-col items-center rounded-lg py-2">
            <img
              className=""
              src="https://i.ibb.co.com/QvGkSQvq/Link-cat-13-png.png"
              alt=""
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" lg:w-96  bg-[#F2FCE4] flex flex-col items-center rounded-lg py-2">
            <img
              className=""
              src="https://i.ibb.co.com/QvGkSQvq/Link-cat-13-png.png"
              alt=""
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" lg:w-96  bg-[#F2FCE4] flex flex-col items-center rounded-lg py-2">
            <img
              className=""
              src="https://i.ibb.co.com/QvGkSQvq/Link-cat-13-png.png"
              alt=""
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" lg:w-96  bg-[#F2FCE4] flex flex-col items-center rounded-lg py-2">
            <img
              className=""
              src="https://i.ibb.co.com/QvGkSQvq/Link-cat-13-png.png"
              alt=""
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" lg:w-96  bg-[#F2FCE4] flex flex-col items-center rounded-lg py-2">
            <img
              className=""
              src="https://i.ibb.co.com/QvGkSQvq/Link-cat-13-png.png"
              alt=""
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" lg:w-96  bg-[#F2FCE4] flex flex-col items-center rounded-lg py-2">
            <img
              className=""
              src="https://i.ibb.co.com/QvGkSQvq/Link-cat-13-png.png"
              alt=""
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" lg:w-96  bg-[#F2FCE4] flex flex-col items-center rounded-lg py-2">
            <img
              className=""
              src="https://i.ibb.co.com/QvGkSQvq/Link-cat-13-png.png"
              alt=""
            />
            <h1 className="text-base text-[#253D4E] font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-[#7E7E7E]">26 items</h1>
          </div>
        </SwiperSlide>
       
        
      </Swiper>
    </div>
  );
};

export default Featured;
