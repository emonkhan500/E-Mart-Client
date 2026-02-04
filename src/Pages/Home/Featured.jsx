import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../Home/Style.css";
import { FreeMode, Pagination } from "swiper/modules";
import SharedHeading from "../../Shared/ui/SharedHeading";

const Featured = () => {
  return (
    <div className="mb-3 pl-">
      <SharedHeading title="Featured Categories" />
      <Swiper
        slidesPerView={7}
        
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className=" w-full lg:max-w-[1600px] mx-auto "
        breakpoints={{
          320: { slidesPerView: 1.5},
          550: { slidesPerView: 1.5}, 
          640: { slidesPerView: 2}, 
          770: { slidesPerView: 2.5}, 
          1024: { slidesPerView: 4 }, 
          1280: { slidesPerView: 4.5}, 
          1550: { slidesPerView: 5.5 }, 
        }}   
      >
        <SwiperSlide>
          <div className="py-8 px-8 bg-bg-honeydew flex flex-col  rounded-lg ">
            <div className="w-42 xl:w-48 h-36">
              <img
              className="w-full h-full object-contain"
              src="https://i.ibb.co/QvGkSQvq/Link-cat-13-png.png"
              alt="Cake & Milk"
            />
            </div>
            <h1 className="text-base text-primary-text font-semibold px-4">
              Cake & Milk
            </h1>
            <h1 className="text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide>
       
        

        {/* <SwiperSlide>
          <div className="  lg:py-3 bg-[#FFF3FF] flex flex-col items-center rounded-lg ">
            <img
              className="w-24 h-24 object-contain"
              src="https://i.ibb.co/XxNXLFTs/Link-cat-2-png.png"
              alt="Vegetables"
            />
            <h1 className="text-base text-primary-text font-semibold px-4">
              Vegetables
            </h1>
            <h1 className="text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="  lg:py-3 bg-bg-honeydew   flex flex-col items-center rounded-lg ">
            <img
              className="w-24 h-24 object-contain"
              src="https://i.ibb.co/xSVvX39n/Link-cat-3-png.png"
              alt="Strawberry"
            />
            <h1 className="text-base text-primary-text font-semibold px-4">
              Strawberry
            </h1>
            <h1 className="text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="  lg:py-3 bg-[#FFF3EB] flex flex-col items-center rounded-lg ">
            <img
              className="w-24 h-24 object-contain"
              src="https://i.ibb.co/hJksmk92/Link-cat-4-png.png"
              alt="Snack"
            />
            <h1 className="text-base text-primary-text font-semibold px-4">
              Snack
            </h1>
            <h1 className="text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="  lg:py-3 bg-[#FEEFEA] flex flex-col items-center rounded-lg ">
            <img
              className="w-24 h-24 object-contain"
              src="https://i.ibb.co/tMyBpB6y/Link-cat-9-png.png"
              alt="Black Plum"
            />
            <h1 className="text-base text-primary-text font-semibold px-4">
              Black Plum
            </h1>
            <h1 className="text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="  lg:py-3 bg-[#FFFCEB] flex flex-col items-center rounded-lg ">
            <img
              className="w-24 h-24 object-contain"
              src="https://i.ibb.co/MDcVTkCv/Link-cat-5-png.png"
              alt="Custard"
            />
            <h1 className="text-base text-primary-text font-semibold px-4">
              Custard
            </h1>
            <h1 className="text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="  lg:py-3 bg-[#ECFFEC] flex flex-col items-center rounded-lg ">
            <img
              className="w-24 h-24 object-contain"
              src="https://i.ibb.co/8FY0bdJ/Link-cat-11-png.png"
              alt="Peach"
            />
            <h1 className="text-base text-primary-text font-semibold px-4">
              Peach
            </h1>
            <h1 className="text-primary-gray">26 items</h1>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Featured;
