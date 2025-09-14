import React from 'react';

const AddProduct = () => {
    return (
        <div>
           <div className='text-center '>
            <h1 className=' text-2xl md:text-4xl font-bold text-[#3BB77E]'>Add Your Product</h1>
            <div className="flex justify-center  pr-7 mb-8">
          <img
            className=""
            src="https://i.ibb.co.com/1JBhBjNq/underheading.png "
            alt=""
          />
        </div>
           </div>
           <form
  onSubmit=""
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
    <input
      name="category"
      type="text"
      placeholder="Enter Category"
      className="input input-bordered w-full"
      required
    />
  </div>

  {/* Vendor */}
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">Vendor</span>
    </label>
    <input
      defaultValue=""
      name="vendor"
      type="text"
      placeholder="Enter Vendor Name"
      className="input input-bordered w-full"
      readOnly
    />
  </div>

  {/* Price */}
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">Price</span>
    </label>
    <input
      name="price"
      defaultValue=""
      type="text"
      placeholder="Enter Product Price"
      className="input input-bordered w-full"
      readOnly
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
      placeholder="Enter Vendor Name"
      className="input input-bordered w-full"
      readOnly
    />
  </div>

  {/*dis  Price */}
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">Price</span>
    </label>
    <input
      name="price"
      defaultValue=""
      type="text"
      placeholder="Enter Product Price"
      className="input input-bordered w-full"
      readOnly
    />
  </div>
  {/* sold */}
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">Vendor</span>
    </label>
    <input
      defaultValue=""
      name="vendor"
      type="text"
      placeholder="Enter Vendor Name"
      className="input input-bordered w-full"
      readOnly
    />
  </div>

  {/*available */}
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">Price</span>
    </label>
    <input
      name="price"
      defaultValue=""
      type="text"
      placeholder="Enter Product Price"
      className="input input-bordered w-full"
      readOnly
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
      name="des"
      placeholder="Description"
      className="input input-bordered w-full"
    />
  </div>

  {/* Rating Dropdown */}
  <div className="form-control w-full">
    <label className="label">
      <span className="label-text">Rating</span>
    </label>
    <select name="rating" className="select select-bordered w-full" required>
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
    type="file"
    name="img"
    className="mt-10 text-white bg-[#3BB77E] file-input border-l-0 w-full max-w-xs"
  />

  {/* Submit Button */}
  <input
    type="submit"
    className="font-bold py-3 text-lg col-span-2 my-5 min-w-full text-white bg-[#3BB77E]"
    value="Add Property"
  />
</form>

        </div>
    );
};

export default AddProduct;