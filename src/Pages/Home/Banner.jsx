import { Link } from "react-router-dom";
import img1 from "../../assets/slider-1.png";
import img2 from "../../assets/slider-2.png";

const Banner = () => {
  return (
    <div className="w-full lg:w-[1586px] mx-2  lg:mx-4  flex justify-center">
      <div className="carousel  relative">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute inset-0 flex items-center ">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="quick md:text-5xl lg:text-7xl font-bold text-[#253D4E]">
                Don't miss amazing grocery deals
              </h2>
              <p className="lato text-[#7E7E7E] font-normal text-2xl">
                Save up to 50% on your first order
              </p>
              <div>
                <Link to="/shop">
                  <button className="px-3 py-2 text-xl lato mr-5 bg-[#3BB77E] rounded">Shop Now </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute inset-0 flex items-center ">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="quick text-7xl font-bold text-[#253D4E]">
                Fresh Vegetables Big discount
              </h2>
              <p className="text-[#7E7E7E] font-normal text-2xl">
                There are many variations of property available here, choose
                your dream property here!
              </p>
              <div>
                <Link to="/shop">
                  <button className="btn mr-5">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
          {/* Navigation */}
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
