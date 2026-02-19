// hooks/useHooks.js
import { useContext } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../Axios/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";

const useHooks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  // Wishlist
  const handleWish = async (item) => {
    if (!user?.email) {
      toast.error("Please login first");
      return;
    }

    try {
      const { _id, ...rest } = item;

      const wishedProduct = {
        userEmail: user.email,
        productId: _id,
        ...rest,
      };

      const { data } = await axiosSecure.post("/wishlist", wishedProduct);

      if (data.insertedId) {
        toast.success("Added to WishList");
      } else if (data.message === "Already added to wishlist") {
        toast.info("Already in WishList");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        toast.info("Already in WishList");
      } else {
        console.error("Wishlist Error:", error);
        toast.error("Something went wrong");
      }
    }
  };

  // Cart
  const handleCart = async (item) => {
    if (!user?.email) {
      toast.error("Please login first");
      return;
    }

    try {
      const { _id, ...rest } = item;

      const cartProduct = {
        userEmail: user.email,
        productId: _id,
        quantity: 1, // default 1
        ...rest,
      };

      const { data } = await axiosSecure.post("/cart", cartProduct);

      if (data.insertedId) {
        toast.success("Added to Cart");
      } else if (data.message === "Already added to cart") {
        toast.info("Already in Cart");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        toast.info("Already in Cart");
      } else {
        console.error("Cart Error:", error);
        toast.error("Something went wrong");
      }
    }
  };

  return { handleWish, handleCart };
};

export default useHooks;
