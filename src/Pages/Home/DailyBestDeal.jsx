import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "./DealStyle.css";
import SharedTitle from "../../Shared/ui/SharedTitle";

const products = [
  {
    id: 1,
    img: "https://i.ibb.co.com/LXM7jQh1/Link-product-3-1-jpg.png",
    category: "Snack",
    title: "Seeds of Change Organic Quinoa, Brown & Rice",
    brand: "NestFood",
    price: "$28.85",
    rating: 2,
  },
  {
    id: 2,
    img: "https://i.ibb.co.com/XGHHcq9/Link-product-6-1-jpg.png",
    category: "Snack",
    title: "Chobani Complete Vanilla Greek Yogurt",
    brand: "NestFood",
    price: "$28.85",
    rating: 3,
  },
  {
    id: 3,
    img: "https://i.ibb.co.com/wFYG567R/Link-product-7-1-jpg.png",
    category: "Snack",
    title: "Seeds of Change Organic Quinoa, Brown & Rice",
    brand: "NestFood",
    price: "$28.85",
    rating: 4,
  },
  {
    id: 4,
    img: "https://i.ibb.co.com/LdyQtCbZ/Link-product-8-1-jpg.png",
    category: "Snack",
    title: "Canada Dry Ginger Ale – 2 L Bottle",
    brand: "NestFood",
    price: "$28.85",
    rating: 5,
  },
  {
    id: 5,
    img: "https://i.ibb.co.com/F4BntgjP/Link-product-9-1-jpg.png",
    category: "Snack",
    title: "Gorton’s Beer Battered Fish Fillets",
    brand: "Old El Paso",
    price: "$28.85",
    rating: 3,
  },
];

const DailyBestDeal = () => {
  return (
    <div className="mt-10">
      <SharedTitle title="Daily Best Deals" />

      <div className="flex gap-4 mt-6 lg:mt-10">
        {/* Left Banner */}
        <div
          className="hidden md:flex relative md:w-[340px] lg:w-[350px] md:h-[400px] lg:h-[490px] bg-cover bg-center items-center p-6 rounded-lg"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/DHppj7Yn/leaf.png')",
          }}
        >
          <div>
            <h2 className="lato md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary-text">
              Bring nature into your home
            </h2>
            <Link to="/shop">
              <button className="mt-10 px-4 py-2 bg-primary-green text-white rounded">
                Shop Now →
              </button>
            </Link>
          </div>
        </div>
        {/* Swiper */}
        <Swiper
          freeMode
          modules={[FreeMode, Autoplay]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          className="w-full lg:pl-6 h-full"
          breakpoints={{
            320: { slidesPerView: 1 },
            425: { slidesPerView: 1.2 },
            500: { slidesPerView: 1.5 },
            500: { slidesPerView: 1.8 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2.6 },
            1280: { slidesPerView: 3 },
            1380: { slidesPerView: 3.5 },
            1600: { slidesPerView: 4 },
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id} className="">
              <div className="h-full rounded-lg flex flex-col bg-white shadow-sm w-[95%] border border-border">
                {/* Image */}
                <div className="h-32 small:h-36 md:h-42 lg:h-60 max-w-56 mx-auto p-2 ">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-full object-cover "
                  />
                </div>

                {/* Content */}
                <div className="px-4 py-2 flex flex-col flex-1">
                  <p className="text-pink text-sm text-start">
                    {item.category}
                  </p>

                  <h2 className="quick text-start text-sm md:text-base lg:text-lg font-bold text-primary-text mt-1 mb-2">
                    {item.title}
                  </h2>

                  <div className="flex justify-between items-center">
                    <p className="text-sm">
                      By <span> </span>
                      <span className="text-primary-green font-medium">
                        {item.brand}
                      </span>
                    </p>

                    {/* Rating */}
                    <div className="rating ">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <input
                          key={star}
                          type="radio"
                          name={`rating-${item.id}`}
                          className="mask mask-star bg-orange w-4 h-4"
                          defaultChecked={star === item.rating}
                        />
                      ))}
                    </div>
                  </div>

                  <div className=" flex gap-8 mt-3 md:mt-6">
                    <h3 className="text-primary-text text-sm md:text-base lg:text-lg font-semibold mt-2 line-through">
                      {item.price}
                    </h3>
                    <h3 className="text-primary-green text-base md:text-lg lg:text-2xl font-semibold mt-2">
                      {item.price}
                    </h3>
                  </div>
                </div>

                {/* Button */}
                <button className="text-sm md:text-base w-full flex items-center justify-center gap-2 px-3 py-2 rounded-b-lg bg-primary-green text-white">
                  <FaShoppingCart /> Add To Cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DailyBestDeal;
