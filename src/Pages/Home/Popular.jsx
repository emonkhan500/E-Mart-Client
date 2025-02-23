import React from "react";
import { BiStar } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";

const Popular = () => {
  return (
    <div className="lato">
      <div className="my-7">
        <h1 className="text-[#253D4E] text-3xl font-bold">Popular Product</h1>
      </div>
      {/* product div */}
      <div>
        <div>
          <img src="https://i.ibb.co.com/Pv8THjRB/Link-product-1-1-jpg.png" alt="" />
        </div>
        <div>
            <p className="text-[#ADADAD]">Snack</p>
            <h1>Seeds of Change Organic
Quinoa, Brown, & Red Rice</h1>
            <p>By NestFood</p>
            <div>
                <h1>$28.85</h1>
                <button>  Add </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
