import { useContext } from "react";
import { TbDetails } from "react-icons/tb";

import { useQuery } from "@tanstack/react-query";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Axios/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";

const Popular = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { refetch, data: product = [] } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const data = await axiosSecure.get("/product");
      return data.data;
    },
  });

  const handleWish = async (item) => {
    const wishedProduct = { userEmail: user?.email, ...item };
    const wishRes = await axiosSecure.post("/wishlist", wishedProduct);
    if (wishRes.data.insertedId) {
      toast.success("Added to WishList");
    }
  };

  return (
    <div className="lato">
      <div className="md:my-7 my-4 pt-8 lg:pt-24 text-center">
        <h1 className="text-primary-text text-2xl md:text-4xl font-bold">
          Popular Product
        </h1>
        <div className="flex justify-center mt-3 pr-7 mb-8">
          <img
            className=""
            src="https://i.ibb.co.com/1JBhBjNq/underheading.png "
            alt=""
          />
        </div>
      </div>
      {/* product div */}
      <div className="grid gap-4 md:gap-2 lg:gap-2 xl:gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center items-center 2xl:px-16">
        {product?.slice(0, 12).map((item, index) => (
          <div
            key={index}
            className="group relative border border-border rounded-lg shadow mx-auto w-full md:w-auto overflow-hidden transition-all duration-300"
          >
            {/* Tag Label */}
            {item?.tag && (
              <span className="absolute top-0 right-0 bg-offPurple text-white px-4 py-1 rounded-bl-lg text-lg z-10">
                {item.tag}
              </span>
            )}

            {/* Image Wrapper */}
            <div className="relative flex justify-center items-center overflow-hidden px-3">
              <img
                src={item?.photo}
                alt={item?.title}
                className="w-72 h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Icons */}
              <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                <div className="bg-white flex justify-center items-center rounded-2xl">
                  {/* Wishlist */}
                  <div className="relative tooltip" data-tip="Add To Wishlist">
                    <button
                      onClick={() => handleWish(item)}
                      className="bg-white text-2xl p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green"
                    >
                      <CiHeart />
                    </button>
                  </div>

                  {/* Cart */}
                  <div className="relative tooltip" data-tip="Add To Cart">
                    <button className="bg-white text-2xl p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green">
                      <IoCartOutline />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="relative  tooltip" data-tip="Show Details">
                    <button className="bg-white text-2xl p-2 text-primary-green hover:bg-primary-green hover:text-white transition border border-primary-green">
                      {" "}
                      <Link to={`/details/${item?._id}`}>
                        <TbDetails />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-2 mt-3 px-3">
              <p className="text-secondary-gray">{item?.category}</p>
              <h1 className="quick text-xl font-bold text-primary-text">
                {item?.title}
              </h1>
              <p>
                By <span className="text-primary-green">{item?.vendor}</span>
              </p>

              {/* Rating */}
              <div className="rating mt-2">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>

              {/* Price + Button */}
              <div className="flex justify-between px-3 pb-4 items-center">
                <h1 className="text-primary-green text-lg font-semibold">
                  ${item?.price}
                </h1>
                <button className="flex items-center gap-2 px-3 py-2 rounded bg-primary-border text-primary-green hover:bg-primary-green hover:text-white transition">
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
