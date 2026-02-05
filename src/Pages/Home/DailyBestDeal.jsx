import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, FreeMode} from "swiper/modules";
import { FaShoppingCart } from "react-icons/fa";

import "swiper/css";
import "swiper/css/free-mode";
import "./DealStyle.css";

import SharedHeading from "../../Shared/ui/SharedHeading";

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
      <SharedHeading title="Daily Best Deals" />

      <div className="flex gap-4">
        {/* Left Banner */}
        <div
          className="hidden md:flex relative w-[450px] md:h-[500px] lg:h-[502px] bg-cover bg-center items-center p-6 rounded-lg"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/DHppj7Yn/leaf.png')",
          }}
        >
          <div>
            <h2 className="lato md:text-4xl lg:text-5xl font-semibold text-primary-text">
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
          modules={[FreeMode,Autoplay]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          className="w-full lg:pl-6 h-full"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id} className="h-full flex">
              <div className="h-full w-full rounded-lg flex flex-col bg-white shadow-sm">

                {/* Image */}
                <div className="h-60 flex items-center justify-center p-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="px-4 py-2 flex flex-col flex-1">
                  <p className="text-secondary-gray text-sm">
                    {item.category}
                  </p>

                  <h2 className="quick text-lg font-bold text-primary-text mt-1 mb-2">
                    {item.title}
                  </h2>

                  <p className="text-sm">
                    By{" "}
                    <span className="text-primary-green font-medium">
                      {item.brand}
                    </span>
                  </p>

                  {/* Rating */}
                  <div className="rating mt-2">
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

                  <h3 className="text-primary-green text-lg font-semibold mt-2">
                    {item.price}
                  </h3>
                </div>

                {/* Button */}
                <button className="mt-auto w-full flex items-center justify-center gap-2 px-3 py-2 rounded-b-lg bg-primary-green text-white">
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
