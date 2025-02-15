import { Link } from "react-router-dom";
import img1 from "../../assets/slider-1.png";
import img2 from "../../assets/slider-2.png";

const Banner = () => {
  return (
    <div className="w-full flex justify-center"> 
      <div className="carousel w-[1586px] relative"> 
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute inset-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-5xl font-bold text-gray-300">
                Affordable Price For Your Dream Property
              </h2>
              <p className="text-gray-300">
                There are many variations of property available here, choose your dream property here!
              </p>
              <div>
                <Link to="/allproperty">
                  <button className="btn mr-5">Discover More</button>
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
              <h2 className="text-5xl font-bold text-gray-300">
                Affordable Price For Your Dream Property
              </h2>
              <p className="text-gray-300">
                There are many variations of property available here, choose your dream property here!
              </p>
              <div>
                <Link to="/allproperty">
                  <button className="btn mr-5">Discover More</button>
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
