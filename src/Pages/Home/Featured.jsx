import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import SharedTitle from "../../Shared/ui/SharedTitle";
import "../Home/Style.css";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Featured = () => {
  const axiosSecure = useAxiosSecure();

  const { data: featuredCategorie = [] } = useQuery({
    queryKey: ["featuredCategories"],
    queryFn: async () => {
      const res = await axiosSecure.get("/category");
      return res.data;
    },
  });

  return (
    <div className="mb-5 md:mb-10 lg:mb-16 xl:mb-20">
      <SharedTitle title="Featured Categories" />

      <Swiper
        slidesPerView={7}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="w-full lg:max-w-[1700px] mx-auto mt-5 lg:mt-16"
        breakpoints={{
          320: { slidesPerView: 1.7 },
          375: { slidesPerView: 2 },
          405: { slidesPerView: 2.3 },
          470: { slidesPerView: 2.6 },
          530: { slidesPerView: 2.9 },
          620: { slidesPerView: 3.7 },
          740: { slidesPerView: 3.9 },
          765: { slidesPerView: 3 },
          820: { slidesPerView: 3.2 },
          860: { slidesPerView: 3.3 },
          932: { slidesPerView: 3.8 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4.5 },
          1500: { slidesPerView: 5 },
          1700: { slidesPerView: 6 },
        }}
      >
        {featuredCategorie.map((item) => (
          <SwiperSlide key={item._id}>
            <Link to={`/shop?category=${encodeURIComponent(item.title)}`}>
              <div
                className={`py-6 px-8 md:px-12 lg:px-6 xl:px-8 xl:h-full ${item.bg} flex flex-col rounded-lg w-[95%] cursor-pointer`}
              >
                <div className="w-42 xl:w-48 h-20 md:h-28 lg:h-48">
                  <img
                    className="w-full h-full object-contain"
                    src={item.img}
                    alt={item.alt}
                  />
                </div>

                <h1 className="text-[12px] md:text-[14px] lg:text-base text-primary-text font-semibold md:px-3 lg:px-4">
                  {item.title}
                </h1>

                <p className="text-[12px] md:text-[14px] lg:text-base text-primary-gray">
                  {item.items}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;