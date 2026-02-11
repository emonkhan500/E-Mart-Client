import Swal from "sweetalert2";
import useAxiosPublic from "../Axios/useAxiosPublic";
import useAxiosSecure from "../Axios/useAxiosSecure";
import SharedTitle from "../Shared/ui/SharedTitle";
const img_hosting_key = import.meta.env.VITE_IMAGE;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddProduct = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const photofile = new FormData();
    const imageFile = e.target.img.files[0];
    photofile.append("image", imageFile);
    const res = await axiosPublic.post(img_hosting_api, photofile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const Product = {
        title: e.target.title.value,
        category: e.target.category.value,
        vendor: e.target.vendor.value,
        price: e.target.price.value,
        tag: e.target.tag.value,
        disPrice: e.target.disPrice.value,
        sold: e.target.sold.value,
        available: e.target.available.value,
        description: e.target.description.value,
        photo: res.data.data.display_url,
        rating: e.target.rating.value,
      };

      const productRes = await axiosSecure.post("/product", Product);
      console.log(productRes.data);
      if (productRes.data) {
        Swal.fire({
          title: "Product Added !",
          icon: "success",
          draggable: true,
        });
        e.target.reset();
      }
    }
  };
  return (
    <div className="quick">
      <SharedTitle title="Add Your Product" />
      <form
        onSubmit={handleSubmit}
        className="mx-auto grid grid-cols-2 justify-items-center gap-x-2 small:gap-x-6 gap-y-2 mt-8"
      >
        {/* Product Title */}
        <div className="form-control w-full ">
          <span className="label-text text-sm small:text-base">
            Product Title
          </span>
          <input
            name="title"
            type="text"
            placeholder="Enter Product Title"
            className="py-3 focus:outline-none rounded-md border select-bordered w-full text-xs px-1 text-primary-text placeholder:text-primary-text"
            required
          />
        </div>

        {/* Category */}
        <div className="form-control w-full">
          <span className="label-text text-sm small:text-base">Category</span>

          <select
            name="category"
            className=" py-3 focus:outline-none rounded-md border  select-bordered w-full text-xs px-1 text-primary-text"
            required
          >
            <option value="">Select category</option>
            <option value="Fruits & Vegetables"> Fruits & Vegetables</option>
            <option value="Meat & Fish"> Meat & Fish</option>
            <option value="Snacks & Drinks">Snacks & Drinks</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Fashion & Beauty">Fashion & Beauty</option>
            <option value="Gadgets">Gadgets</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        {/* Vendor */}
        <div className="form-control w-full">
          <span className="label-text text-sm small:text-base">Vendor</span>

          <select
            name="vendor"
            className=" py-3 focus:outline-none rounded-md border  select-bordered w-full text-xs px-1 text-primary-text"
            required
          >
            <option value="">Select Vendor</option>
            <option value="Tech World">Tech World</option>
            <option value="Fresh Fruits">Fresh Fruits</option>
            <option value="Shonar Bangla Meat">Shonar Bangla Meat</option>
            <option value="Bangla Bites">Bangla Bites</option>
            <option value="Trendy Touch">Trendy Touch</option>
            <option value="Home & Kitchen Mart">Home & Kitchen Mart</option>
            <option value="Sports House">Sports House</option>
          </select>
        </div>

        {/* Price */}
        <div className="form-control w-full">
          <span className="label-text text-sm small:text-base">Price</span>

          <input
            name="price"
            defaultValue=""
            type="number"
            placeholder="Enter Product Price"
            className="py-3 focus:outline-none rounded-md border select-bordered w-full text-xs px-1 text-primary-text placeholder:text-primary-text"
          />
        </div>
        {/* tag */}
        <div className="form-control w-full">
          <span className="label-text text-sm small:text-base">Tag</span>

          <input
            defaultValue=""
            name="tag"
            type="text"
            placeholder="Tag"
            className="py-3 focus:outline-none rounded-md border select-bordered w-full text-xs px-1 text-primary-text placeholder:text-primary-text"
          />
        </div>

        {/*dis  Price */}
        <div className="form-control w-full">
          <span className="label-text text-sm small:text-base">
            Discount Price
          </span>
          <input
            name="disPrice"
            defaultValue=""
            type="number"
            placeholder="Enter Discount Price"
            className="py-3 focus:outline-none rounded-md border select-bordered w-full text-xs px-1 text-primary-text placeholder:text-primary-text"
          />
        </div>
        {/* sold */}
        <div className="form-control w-full">
          <span className="label-text text-sm small:text-base">Sold</span>
          <input
            defaultValue=""
            name="sold"
            type="number"
            placeholder="Sold Out"
            className="py-3 focus:outline-none rounded-md border select-bordered w-full text-xs px-1 text-primary-text placeholder:text-primary-text"
          />
        </div>

        {/*available */}
        <div className="form-control w-full">
          <span className="label-text text-sm small:text-base">Available</span>
          <input
            name="available"
            defaultValue=""
            type="number"
            placeholder="Enter Product Price"
            className="py-3 focus:outline-none rounded-md border select-bordered w-full text-xs px-1 text-primary-text placeholder:text-primary-text"
          />
        </div>

        {/* Description */}
        <div className="form-control w-full col-span-2">
          <span className="label-text text-sm small:text-base">
            Description
          </span>
          <textarea
            rows={3}
            cols={30}
            name="description"
            placeholder="Description"
            className="py-3 focus:outline-none rounded-md border select-bordered w-full text-xs px-1 text-primary-text placeholder:text-primary-text"
          />
        </div>

        {/* Rating Dropdown */}
        <div className="form-control w-full">
          <span className="label-text text-sm small:text-base">Rating</span>
          <select
            name="rating"
            className=" py-3 focus:outline-none rounded-md border  select-bordered w-full text-xs px-1 text-primary-text"
            required
          >
            <option value="">Select Rating</option>
            <option value="1"> 1</option>
            <option value="2"> 2</option>
            <option value="3"> 3</option>
            <option value="4"> 4</option>
            <option value="5"> 5</option>
          </select>
        </div>

        {/* Image Upload */}
        <input
          required
          type="file"
          name="img"
          className="mt-5 w-full max-w-[280px] md:max-w-xs text-xs small:text-sm md:text-base text-white bg-primary-green rounded file:bg-secondary-text file:text-white file:border file:px-1 md:file:px-6 file:py-3"
        />

        {/* Submit Button */}
        <input
          type="submit"
          className="font-bold py-1.5 md:py-2.5 lg:py-3 text-base md:text-lg col-span-2 my-4 min-w-full text-white bg-primary-green"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
