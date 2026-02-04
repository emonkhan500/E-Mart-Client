import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../Home/Style.css";
import { FreeMode, Autoplay } from "swiper/modules";
import SharedHeading from "../../Shared/ui/SharedHeading";

const Featured = () => {
  return (
    <div className="mb-0 md:mb-10 lg:mb-16 xl:mb-20 ">
      <SharedHeading title="Featured Categories" />
      <Swiper
        slidesPerView={7}
        freeMode={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[FreeMode, Autoplay]}
        loop={true}
        className=" w-full lg:max-w-[1600px] mx-auto mt-5 lg:mt-16"
        breakpoints={{
          320: { slidesPerView: 1.7 },
          375: { slidesPerView: 2 },
          405: { slidesPerView: 2.3 },
          470: { slidesPerView: 2.6 },
          530: { slidesPerView: 2.9 },
          620: { slidesPerView: 3.7 },
          740: { slidesPerView: 3.9 },
          765: { slidesPerView: 3 },
          820: { slidesPerView: 3.2},
          860: { slidesPerView: 3.5},
          932: { slidesPerView: 3.8 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4.5 },
          1500: { slidesPerView: 5 },
          1700: { slidesPerView: 6 },
        }}
      >
        <SwiperSlide>
          <div className="py-6 px-8 md:px-12 lg:px-6 xl:h-full bg-bg-honeydew flex flex-col  rounded-lg ">
            <div className="w-42 xl:w-48 h-20 md:h-28 lg:h-48">
              <img
                className="w-full h-full object-contain"
                src="https://i.ibb.co/r2ZJTpgk/removebg-download-7.png"
                alt="Fruits & Vegetables"
              />
            </div>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-text font-semibold md:px-3 lg:px-4">
             Fruit & Vegetable
            </h1>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-6 px-8 md:px-12 lg:px-6 xl:px-8 xl:h-full bg-pinks flex flex-col  rounded-lg ">
            <div className="w-42 xl:w-48 h-20 md:h-28 lg:h-48">
              <img
                className="w-full h-full object-contain"
                src="https://i.ibb.co/QvGkSQvq/Link-cat-13-png.png"
                alt="Meat & Fish"
              />
            </div>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-text font-semibold md:px-3 lg:px-4">
              Meat & Fish
            </h1>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-6 px-8 md:px-12 lg:px-6 xl:px-8 xl:h-full bg-orangee flex flex-col  rounded-lg ">
            <div className="w-42 xl:w-48 h-20 md:h-28 lg:h-48">
              <img
                className="w-full h-full object-contain"
                src="https://i.ibb.co/QvGkSQvq/Link-cat-13-png.png"
                alt="Snacks & Drinks"
              />
            </div>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-text font-semibold md:px-3 lg:px-4">
              Snacks & Drinks
            </h1>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-6 px-8 md:px-12 lg:px-6 xl:px-8 xl:h-full bg-cream flex flex-col  rounded-lg ">
            <div className="w-42 xl:w-48 h-20 md:h-28 lg:h-48">
              <img
                className="w-full h-full object-contain"
                src="https://i.ibb.co/QvGkSQvq/Link-cat-13-png.png"
                alt="Home & Kitchen"
              />
            </div>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-text font-semibold md:px-3 lg:px-4">
              Home & Kitchen
            </h1>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-6 px-8 md:px-12 lg:px-6 xl:px-8 xl:h-full bg-bg-honeydew flex flex-col  rounded-lg ">
            <div className="w-42 xl:w-48 h-20 md:h-28 lg:h-48">
              <img
                className="w-full h-full object-contain"
                src="https://i.ibb.co/QvGkSQvq/Link-cat-13-png.png"
                alt="Fashion & Beauty"
              />
            </div>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-text font-semibold md:px-3 lg:px-4">
              Fashions
            </h1>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-6 px-8 md:px-12 lg:px-6 xl:px-8 xl:h-full bg-pinks flex flex-col  rounded-lg ">
            <div className="w-42 xl:w-48 h-20 md:h-28 lg:h-48">
              <img
                className="w-full h-full object-contain"
                src="https://i.ibb.co.com/nMGdN0qs/gadget-vendor-removebg-preview.png"
                alt="Gadgets"
              />
            </div>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-text font-semibold md:px-3 lg:px-4">
              Gadgets
            </h1>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-6 px-8 md:px-12 lg:px-6 xl:px-8 xl:h-full bg-cream flex flex-col  rounded-lg ">
            <div className="w-42 xl:w-48 h-20 md:h-28 lg:h-48">
              <img
                className="w-full h-full object-contain"
                src="https://i.ibb.co/wrbvHNcw/removebg-imagess.png"
                alt="Sports"
              />
            </div>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-text font-semibold md:px-3 lg:px-4">
              Sports
            </h1>
            <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Featured;
