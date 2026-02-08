import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img1 from "../../assets/slider-1.png";
import img2 from "../../assets/slider-2.png";

const slides = [
  {
    id: "slide1",
    img: img1,
    title: "Don't miss amazing grocery deals",
    subtitle: "Save up to 50% on your first order",
    prev: "slide2",
    next: "slide2",
  },
  {
    id: "slide2",
    img: img2,
    title: "Fresh Vegetables Big discount",
    subtitle: "Save up to 50% on your first order",
    prev: "slide1",
    next: "slide1",
  },
];

const Banner = () => {
  return (
    <div className="w-full mx-auto pt-2 h-[200px] md:h-[380px] lg:h-[580px] flex justify-center">
      <div className="carousel relative w-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            id={slide.id}
            className="carousel-item relative w-full"
          >
            {/* Image */}
            <img src={slide.img} className="w-full rounded-b-xl" alt="" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="pl-2 md:pl-12 w-3/5 md:w-1/2 md:space-y-5 lg:space-y-7">
                <h2 className="quick text-xl md:text-4xl lg:text-7xl font-bold text-primary-text">
                  {slide.title}
                </h2>

                <p className="lato text-primary-gray font-light text-xs md:text-2xl">
                  {slide.subtitle}
                </p>

                <Link to="/shop" className="inline-block">
                  <button className="text-white px-2 md:px-3 py-1 md:py-2 text-xs md:text-xl lato bg-primary-green rounded flex items-center gap-2 mt-2">
                    Shop Now <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute flex justify-end -translate-y-1/2 left-5 right-5 -bottom-2 md:bottom-0">
              <a
                href={`#${slide.prev}`}
                className="px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-4 rounded-full bg-primary-green text-white md:text-xl mr-5"
              >
                ❮
              </a>
              <a
                href={`#${slide.next}`}
                className="px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-4 rounded-full bg-primary-green text-white md:text-xl"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
