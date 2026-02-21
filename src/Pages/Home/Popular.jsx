import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { TbDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import SharedTitle from "../../Shared/ui/SharedTitle";
import useHooks from "../../hooks/useHooks";

const Popular = () => {

  const { handleWish, handleCart, allProduct } = useHooks();

  return (
    <div className="lato">
      <SharedTitle title="Popular Product" />
      {/* product div */}
      <div className="grid gap-x-1.5 tab:gap-x-2 md:gap-x-3 lg:gap-x-1.5 gap-y-4 md:gap-y-6 lg:gap-y-8 xl:gap-x-6 xxl:gap-x-4 2xl:gap-x-6 grid-cols-2 tab:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-5 2xl:grid-cols-5 justify-center items-center 2xl:px-16 mt-5">
        {allProduct?.slice(0, 12).map((item, index) => (
          <div
            key={index}
            className="group relative border border-border rounded-lg shadow mx-auto w-full overflow-hidden transition-all duration-300"
          >
            {/* Tag Label */}
            {item?.tag && (
              <span className="absolute top-0 right-0 bg-orange text-white px-4 py-[2px] md:py-1 rounded-bl-lg text-base lg:text-lg z-10">
                {item.tag}
              </span>
            )}

            {/* Image Wrapper */}
            <div className="relative flex justify-center items-center overflow-hidden ">
              <img
                src={item?.photo}
                alt={item?.title}
                className="w-72 h-40 small:h-48 md:h-52 xl:h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Icons */}
              <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                <div className="bg-white flex justify-center items-center rounded-2xl">
                  {/* Wishlist */}
                  <div className="relative tooltip" data-tip="Add To Wishlist">
                    <button
                      onClick={() => handleWish(item)}
                      className="bg-white text-lg md:text-2xl p-1.5 md:p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green"
                    >
                      <CiHeart />
                    </button>
                  </div>

                  {/* Cart */}
                  <div className="relative tooltip" data-tip="Add To Cart">
                    <button
                      onClick={() => handleCart(item)}
                      className="bg-white text-lg md:text-2xl p-1.5 md:p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green"
                    >
                      <IoCartOutline />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="relative  tooltip" data-tip="Show Details">
                    <button className="bg-white text-lg md:text-2xl p-1.5 md:p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green">
                      <Link to={`/details/${item?._id}`}>
                        <TbDetails />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="quick  pt-[2px] px-1 tab:px-1.5 md:px-3 bg-softGreen">
              <p className="text-secondary-gray text-xs md:text-base mt-1.5 lg:mt-2 leading-[70%]">
                {item?.category}
              </p>
              <h1 className="text-lg md:text-xl font-bold text-primary-text mt-1 small:mt-[5px] tab:mt-1.5 lg:mt-2">
                {item?.title}
              </h1>
              <div className="flex justify-between items-center mt-1 tab:mt-1.5 lg:mt-2">
                <p className="text-[11px] small:text-xs tab:text-sm md:text-base">
                  By <span className="text-primary-green">{item?.vendor}</span>
                </p>

                {/* Rating */}
                <div className="rating ">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange w-[11px] small:w-3.5 md:w-4 h-3 md:h-4"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange w-[11px] small:w-3.5 md:w-4 h-3 md:h-4"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star w-[11px] small:w-3.5 md:w-4 h-3 md:h-4"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star w-[11px] small:w-3.5 md:w-4 h-3 md:h-4"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star w-[11px] small:w-3.5 md:w-4 h-3 md:h-4"
                  />
                </div>
              </div>

              {/* Price + Button */}
              <div className="flex justify-between mt-1.5 small:mt-2.5 md:mt-2 pb-1.5 md:pb-4 items-center ">
                <h1 className="text-primary-green text-base lg:text-lg font-semibold">
                  $ {item?.price}
                </h1>
                <button
                  onClick={() => handleCart(item)}
                  className="flex items-center gap-2 px-3 md:px-4 py-1 md:py-[5px] text-xs md:text-base rounded bg-primary-green text-white hover:bg-primary-green hover:text-white transition"
                >
                  <IoCartOutline /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
