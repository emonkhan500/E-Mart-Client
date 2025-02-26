import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../About/Style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Welcome = () => {
    return (
        <div className='quick flex items-center justify-center flex-col gap-9 md:flex-row lg:mt-10'>
           <div className='rounded  md::w-1/2'>
            <img  className=' md:h-[600px]' src="https://i.ibb.co.com/ch9pJ2fX/Section-about-1-png.png" alt="" />
           </div>
           {/* content and slider */}
           <div  className='  mt-7 md:w-1/2'>
           <div className='text-center px-2 lato md:space-y-6'>
            <h1 className='mt-6  text-2xl md:text-4xl font-bold text-[#253D4E]'>Welcome to <span className='  text-[#3BB77E]'>E-MART</span></h1>
            <p className='lg:text-lg mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate id est laborum.</p>


           </div>
           <div className='text-center w-[320px] md:w-full'>
           <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
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
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>   
           </div>
           </div>
        </div>
    );
};

export default Welcome;