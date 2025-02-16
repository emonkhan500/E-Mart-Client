import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../Home/Style.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Featured = () => {
    return (
        <div className='mb-80'>
            <div>
                <h1 className='text-center mt-7  font-bold text-4xl'>Featured Categories</h1>
            </div>
            <Swiper
        slidesPerView={7}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className='bg-[#F2FCE4] flex flex-col items-center rounded-lg pb-4 py-2'>
                    <img className='' src="https://i.ibb.co.com/QvGkSQvq/Link-cat-13-png.png" alt="" />
                    <h1 className='text-base text-[#253D4E] font-semibold'>Cake & Milk</h1>
                    <h1 className='text-[#7E7E7E]'>26 items</h1>
                </div></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
            
        </div>
    );
};

export default Featured;