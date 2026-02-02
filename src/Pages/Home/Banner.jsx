import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img1 from "../../assets/slider-1.png";
import img2 from "../../assets/slider-2.png";

const Banner = () => {
  return (
    <div className="w-full   mx-auto  pt-2 h-[200px] md:h-[380px] lg:h-[580px]  flex justify-center">
      <div className="carousel  relative">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-b-xl" />
          <div className="absolute inset-0 flex items-center ">
            <div className="text-white  md:space-y-5 lg:space-y-7 pl-2 md:pl-12 w-3/5 md:w-1/2">
              <h2 className="quick text-xl md:text-4xl lg:text-7xl  font-bold text-primary-text mb-1">
                Don't miss amazing grocery deals
              </h2>
              <p className="lato text-primary-gray font-light text-xs md:text-2xl mb-2">
                Save up to 50% on your first order
              </p>
              <div>
                <Link to="/shop" className="inline-block">
                  <button className="px-2 md:px-3 py-1 md:py-2 text-xs md:text-xl lato mr-5 bg-primary-green rounded flex justify-center items-center gap-2">
                    Shop Now
                    <FaArrowRightLong />{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 -bottom-2  md:bottom-0">
            <a
              href="#slide2"
              className=" px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-4 rounded-full bg-primary-green text-white md:text-xl mr-5"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-4 rounded-full bg-primary-green text-white  md:text-xl"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-b-xl" />
          <div className="absolute inset-0 flex items-center ">
            <div className="text-white  md:space-y-5 lg:space-y-7 pl-2 md:pl-12 w-3/5 md:w-1/2">
              <h2 className="quick text-xl md:text-4xl lg:text-7xl  font-bold text-primary-text mb-1">
                Fresh Vegetables Big discount
              </h2>
              <p className="lato text-primary-gray font-light text-xs md:text-2xl mb-2">
                Save up to 50% on your first order
              </p>
              <div className="">
                <Link to="/shop" className="inline-block">
                  <button
                    t
                    className="px-2 md:px-3 py-1 md:py-2 text-xs md:text-xl lato mr-5 bg-primary-green rounded flex justify-center items-center gap-2"
                  >
                    Shop Now
                    <FaArrowRightLong />{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 -bottom-2  md:bottom-0">
            <a
              href="#slide1"
              className=" px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-4 rounded-full bg-primary-green text-white md:text-xl mr-5"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-4 rounded-full bg-primary-green text-white  md:text-xl"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
