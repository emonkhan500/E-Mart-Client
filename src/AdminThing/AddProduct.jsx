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
        onSubmit=''
        className=" mx-auto md:m-6 md:p-2 grid grid-cols-2 justify-items-center gap-x-6 gap-y-2 "
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Property Name</span>
          </label>
          <input
            name="propertyname"
            type="text"
            placeholder="Enter Property Name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Property Location</span>
          </label>
          <input
            name="location"
            type="text"
            placeholder="Enter Property Location"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Agent Name</span>
          </label>
          <input
            defaultValue=''
            name="agentname"
            type="text"
            placeholder="Enter Craft Rating"
            className="input input-bordered w-full"
            readOnly
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Agent Email</span>
          </label>
          <input
            name="agentemail"
            defaultValue=''
            type="text"
            placeholder="Enter Craft Price"
            className="input input-bordered w-full"
            readOnly
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Minimum Price ($)</span>
          </label>
          <input
            
            name="minprice"
            type="number"
            placeholder="Minimum Price"
            className="input input-bordered w-full"
            
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Maximum Price ($)</span>
          </label>
          <input
            
            name="maxprice"
            type="number"
            placeholder="Maximum Price"
            className="input input-bordered w-full"
            
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea

            rows={3}
            cols={30}
            name="des"
            type="number"
            placeholder="Description"
            className="input input-bordered w-full"
            
          />
        </div>


           
        <input
          type="file"
          name="img"
          className=" mt-10 text-white bg-[#3BB77E] file-input border-l-0 w-full max-w-xs"
        />
        <input
          type="submit"
          className=" font-bold py-3 text-lg col-span-2 my-5 min-w-full text-white bg-[#3BB77E]"
          value="Add Property"
        />
      </form>
        </div>
    );
};

export default AddProduct;