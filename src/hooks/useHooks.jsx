// hooks/useHooks.js
import { useContext } from "react";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";

const useHooks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

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
        queryClient.invalidateQueries(["wishedProduct"]); 
      } else if (data.message === "Already added to wishlist") {
        toast.info("Already in WishList");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        toast.info("Already in WishList");
      } else {
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
        quantity: 1,
        ...rest,
      };

      const { data } = await axiosSecure.post("/cart", cartProduct);

      if (data.insertedId) {
        toast.success("Added to Cart");
        queryClient.invalidateQueries(["cart"]); 
      } else if (data.message === "Already added to cart") {
        toast.info("Already in Cart");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        toast.info("Already in Cart");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  // Delete Wishlist
  const handleDeleteWish = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/wishlist/${id}`);
      if (data.deletedCount > 0) {
        toast.success("Removed from WishList");
        queryClient.invalidateQueries(["wishedProduct"]); 
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // Delete Cart
  const handleDeleteCart = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/cart/${id}`);
      if (data.deletedCount > 0) {
        toast.success("Removed from Cart");
        queryClient.invalidateQueries(["cart"]); 
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return { handleWish, handleCart, handleDeleteWish, handleDeleteCart };
};

export default useHooks;
