import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import useAxiosSecure from "../Axios/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import ShareHead from "../Shared/ShareHead";

const Wish = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { refetch, data: wishedProduct = [] } = useQuery({
    queryKey: ["wishedProduct", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlists/${user.email}`);
      return res.data;
    },
  });
  console.log(wishedProduct);

  return (
    <div className="">
      <ShareHead pageTitle={"My Wishlist"}></ShareHead>
      <div className="overflow-x-auto w-full  mt-10">
        <div className="grid gap-4 md:gap-2 lg:gap-2 xl:gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center items-center 2xl:px-16">
          {wishedProduct?.map((item, index) => (
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
    </div>
  );
};

export default Wish;
