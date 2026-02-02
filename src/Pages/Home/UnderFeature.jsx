import { Link } from "react-router-dom";

const UnderFeature = () => {
  return (
    <div>
      <div className="quick grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 mt-2">
        <div
          className="relative w-full  h-[250px]  bg-cover bg-center flex items-center p-2  rounded-lg shadow-md"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/WvNkDjHd/banner-1-png.png')",
          }}
        >
          <div className="bg-white bg-opacity-5 p-4 rounded-lg w-1/2 ">
            <h2 className="text-lg font-semibold text-gray-800">
              Everyday Fresh & Clean with Our Products
            </h2>
            <Link to="/shop">
              <button className="mt-4 px-4 py-2 bg-primary-green  text-white rounded hover:bg-primary-green">
                Shop Now →
              </button>
            </Link>
          </div>
        </div>
        <div
          className="relative w-full h-[250px]  bg-cover bg-center flex items-center p-2 rounded-lg shadow-md"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/jvvLydBd/banner-2-png.png')",
          }}
        >
          <div className="bg-white bg-opacity-5 p-4 rounded-lg w-1/2">
            <h2 className="text-lg font-semibold text-gray-800">
              Make your Breakfast Healthy and Easy
            </h2>
            <Link to="/shop">
              <button className="mt-4  px-4 py-2 bg-primary-green  text-white rounded hover:bg-primary-green">
                Shop Now →
              </button>
            </Link>
          </div>
        </div>
        <div
          className="relative w-full h-[250px]  bg-cover bg-center flex items-center p-2  rounded-lg shadow-md"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/pjCwt3KD/banner-3-png.png')",
          }}
        >
          <div className="bg-white bg-opacity-5 p-4 rounded-lg w-1/2">
            <h2 className="text-lg font-semibold text-gray-800">
              The best Organic Products Online
            </h2>
            <Link to="/shop">
              <button className="mt-4  px-4 py-2 bg-primary-green  text-white rounded hover:bg-primary-green">
                Shop Now →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderFeature;
