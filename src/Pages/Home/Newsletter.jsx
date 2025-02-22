import { Link } from "react-router-dom";


const Newsletter = () => {
    return (
        <div>
           <div
          className="relative w-full  h-[250px]  bg-cover bg-center flex items-center p-2  rounded-lg shadow-md"
          style={{
            backgroundImage:
            
              "url('https://i.ibb.co.com/5Wm8NKZ3/banner-9-png.png')",
          }}
        >
          <div className="bg-white bg-opacity-5 p-4 rounded-lg w-1/2 ">
            <h2 className="text-lg font-semibold text-gray-800">
              Everyday Fresh & Clean with Our Products
            </h2>
            <Link to='/shop'>
            <button  className="mt-4 px-4 py-2 bg-[#3BB77E]  text-white rounded hover:bg-green-600">
              Shop Now →
            </button>
            </Link>
          </div>
        </div>  
        </div>
    );
};

export default Newsletter;