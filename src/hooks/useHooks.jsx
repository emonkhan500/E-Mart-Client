import { useContext } from "react";
import { toast } from "react-toastify";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../Axios/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";

const useHooks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // All Product Fetch

  const {
    data: allProduct = [],
    refetch: refetchAllProduct,
    isLoading: productLoading,
  } = useQuery({
    queryKey: ["allProduct"],
    queryFn: async () => {
      const res = await axiosSecure.get("/product");
      return res.data;
    },
  });

  // Wishlist Fetch

  const {
    data: wishedProduct = [],
    refetch: refetchWish,
    isLoading: wishLoading,
  } = useQuery({
    queryKey: ["wishedProduct", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlists/${user.email}`);
      return res.data;
    },
  });

  // Cart Fetch

  const {
    data: cartProducts = [],
    refetch: refetchCart,
    isLoading: cartLoading,
  } = useQuery({
    queryKey: ["cartProduct", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts/${user.email}`);
      return res.data;
    },
  });

  // Add  Wishlist

  const handleWish = async (item) => {
    if (!user?.email) {
      toast.error("Please login first");
      return;
    }

    try {
      const { _id, ...rest } = item;

      const wishedData = {
        userEmail: user.email,
        productId: _id,
        ...rest,
      };

      const { data } = await axiosSecure.post("/wishlist", wishedData);

      if (data.insertedId) {
        toast.success("Added to WishList");
        queryClient.invalidateQueries(["wishedProduct", user?.email]);
      }
    } catch (error) {
      if (error.response?.status === 409) {
        toast.info("Already in WishList");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  // Add Cart

  const handleCart = async (item) => {
    if (!user?.email) {
      toast.error("Please login first");
      return;
    }

    try {
      const { _id, ...rest } = item;

      const cartData = {
        userEmail: user.email,
        productId: _id,
        quantity: 1,
        ...rest,
      };

      const { data } = await axiosSecure.post("/cart", cartData);

      if (data.insertedId) {
        toast.success("Added to Cart");
        queryClient.invalidateQueries(["cartProduct", user?.email]);
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
        queryClient.invalidateQueries(["wishedProduct", user?.email]);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  //  Delete Cart

  const handleDeleteCart = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/cart/${id}`);

      if (data.deletedCount > 0) {
        toast.success("Removed from Cart");
        queryClient.invalidateQueries(["cartProduct", user?.email]);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // Delete Product
  const handleDeleteProduct = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/product/${id}`);

      if (data.deletedCount > 0) {
        toast.success("Product Deleted");
        queryClient.invalidateQueries(["allProduct"]);
      }
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  return {
    allProduct,
    wishedProduct,
    cartProducts,
    productLoading,
    wishLoading,
    cartLoading,
    handleWish,
    handleCart,
    handleDeleteWish,
    handleDeleteCart,
    handleDeleteProduct,
    refetchAllProduct,
    refetchWish,
    refetchCart,
  };
};

export default useHooks;
