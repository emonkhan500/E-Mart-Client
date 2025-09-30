import useAxiosPublic from "../Axios/useAxiosPublic";

const img_hosting_key =import.meta.env.VITE_IMAGE;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddProduct = () => {
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();
   const photofile= new FormData()
    const imageFile = e.target.img.files[0];
    photofile.append('image',imageFile)
    const res = await axiosPublic.post(img_hosting_api, photofile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if(res.data.success){
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
        photo:res.data.data.display_url,
        rating: e.target.rating.value,
      };
      console.log(Product);
    }
    
    
  };
  return (
    <div>
      <div className="text-center ">
        <h1 className=" text-2xl md:text-4xl font-bold text-[#3BB77E]">
          Add Your Product
        </h1>
        <div className="flex justify-center  pr-7 mb-8">
          <img
            className=""
            src="https://i.ibb.co.com/1JBhBjNq/underheading.png "
            alt=""
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto md:m-6 md:p-2 grid grid-cols-2 justify-items-center gap-x-6 gap-y-2"
      >
        {/* Product Title */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Title</span>
          </label>
          <input
            name="title"
            type="text"
            placeholder="Enter Product Title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            name="category"
            className="select select-bordered w-full"
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
          <label className="label">
            <span className="label-text">Vendor</span>
          </label>
          <select
            name="vendor"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Vendor</option>
            <option value="1">Tech World BD </option>
            <option value="2">Fresh Fruits BD</option>
            <option value="3">Shonar Bangla Meat</option>
            <option value="4">Bangla Bites</option>
            <option value="4">Trendy Touch BD</option>
            <option value="4">Home & Kitchen Mart</option>
            <option value="4">Champion Sports House</option>
          </select>
        </div>

        {/* Price */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            name="price"
            defaultValue=""
            type="number"
            placeholder="Enter Product Price"
            className="input input-bordered w-full"
          />
        </div>
        {/* tag */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Tag</span>
          </label>
          <input
            defaultValue=""
            name="tag"
            type="text"
            placeholder="Tag"
            className="input input-bordered w-full"
          />
        </div>

        {/*dis  Price */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Discount Price</span>
          </label>
          <input
            name="disPrice"
            defaultValue=""
            type="number"
            placeholder="Enter Discount Price"
            className="input input-bordered w-full"
          />
        </div>
        {/* sold */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Sold</span>
          </label>
          <input
            defaultValue=""
            name="sold"
            type="number"
            placeholder="Sold Out"
            className="input input-bordered w-full"
          />
        </div>

        {/*available */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Available</span>
          </label>
          <input
            name="available"
            defaultValue=""
            type="number"
            placeholder="Enter Product Price"
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div className="form-control w-full col-span-2">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            rows={3}
            cols={30}
            name="description"
            placeholder="Description"
            className="input input-bordered w-full"
          />
        </div>

        {/* Rating Dropdown */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <select
            name="rating"
            className="select select-bordered w-full"
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
          className="mt-10 text-white bg-[#3BB77E] file-input border-l-0 w-full max-w-xs"
        />

        {/* Submit Button */}
        <input
          type="submit"
          className="font-bold py-3 text-lg col-span-2 my-5 min-w-full text-white bg-[#3BB77E]"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
