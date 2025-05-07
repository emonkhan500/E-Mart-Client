import React from "react";

const Message = () => {
  return (
   
    <div className=" mt-16">
   <div>
     <h1 className="text-4xl text-center font-bold mt-3 text-[#3BB77E]"> Contact Here ..</h1>
    
    <div className="flex justify-center mt-3 pr-7">
    <img className="" src="https://i.ibb.co.com/1JBhBjNq/underheading.png " alt="" />
    </div>
   </div>
    <section className="w-full mb-8 lg:flex-row flex items-center gap-3 flex-col  lg:p-[40px] rounded-xl">
       
      {/* form area */}
      <form className="lg:w-[60%] w-full">
        <div className="lg:w-[80%] w-full mx-auto">
          <div className="text-[#253D4E] text-center md:text-start">
            <h1 className="text-xl md:text-3xl font-bold ">
            Drop Us a Line
            </h1>
            <p className="text-[#B6B6B6] text-[0.9rem] mt-2 mb-2">
            Your email address will not be published. Required fields are marked *
            </p>
          </div>

          <div className="flex sm:flex-row flex-col items-center gap-2 md:gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <input
                type="text"
                placeholder="Your Name"
                className="peer border-[#383844] border rounded-md outline-none px-4 py-2 lg:py-4 w-full  text-black transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <input
                type="email"
                placeholder="Your Email"
                className="peer border-[#383844] border rounded-md outline-none px-4 py-2 lg:py-4 w-full text-black transition-colors duration-300"
              />
            </div>
          </div>
          <div className="flex mt-3 sm:flex-row flex-col items-center gap-2 md:gap-[20px]">
            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <input
                type="number"
                placeholder="Phone"
                className="peer border-[#383844] border rounded-md outline-none px-4 py-2 lg:py-4 w-full  text-black transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
              <input
                type="text"
                placeholder="Subject"
                className="peer border-[#383844] border rounded-md outline-none px-4 py-2 lg:py-4 w-full text-black transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[5px] w-full mt-[20px]">
            <textarea
              placeholder="Write message"
              className="peer min-h-28 md:min-h-[200px] border-[#383844] border rounded-md outline-none px-4 py-3 w-full text-black transition-colors duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-2.5 px-6 bg-[#253D4E] text-white rounded-md text-[1rem] mt-[10px] w-full"
          >
            Send Message
          </button>
        </div>
      </form>

      {/*  image  */}
      <div className="">
        <img
          src="https://i.ibb.co.com/JW8TGVwS/contact.png"
          alt="image"
          className="rounded lg:w-4/5 "
        />
      </div>
    </section>
    </div>
  );
};

export default Message;
