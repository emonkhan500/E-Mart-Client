// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../About/Style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
const Welcome = () => {
  return (
    <div className="quick flex items-center justify-center flex-col gap-9 md:flex-row ">
      <div className="rounded  md::w-1/2">
        <img
          className=" md:h-[600px]"
          src="https://i.ibb.co.com/ch9pJ2fX/Section-about-1-png.png"
          alt=""
        />
      </div>
      {/* content and slider */}
      <div className="  mt-7 md:w-1/2">
        <div className="text-center px-2 lato md:space-y-6">
          <h1 className="mt-6  text-2xl md:text-4xl font-bold text-primary-text">
            Welcome to <span className="  text-primary-green">E-MART</span>
          </h1>
          <p className="lg:text-lg mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
        </div>
        <div className="text-center w-[320px] md:w-full">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper lg:mt-4"
          >
            <SwiperSlide>
              <img src="https://i.ibb.co.com/LXM7jQh1/Link-product-3-1-jpg.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co.com/xqhXcMGT/Link-cat-14-png.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co.com/FbmYkT4h/Link-product-2-1-jpg.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co.com/Pv8THjRB/Link-product-1-1-jpg.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co.com/XGHHcq9/Link-product-6-1-jpg.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co.com/LdyQtCbZ/Link-product-8-1-jpg.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co.com/QjJKgt40/Link-product-4-1-jpg.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://i.ibb.co.com/F4BntgjP/Link-product-9-1-jpg.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
