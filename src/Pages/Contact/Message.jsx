import SharedTitle from "../../Shared/ui/SharedTitle";

const Message = () => {
  return (
    <div className="lg:mt-16">
      <SharedTitle title={"Contact Here "}></SharedTitle>
      <section className="w-full lg:mb-8 lg:flex-row flex items-center gap-3 flex-col lg:p-[40px] rounded-xl">
        {/* form area */}
        <form className=" w-full lg:w-1/2">
          <div className=" w-full mx-auto">
            <div className="text-primary-text text-center md:text-start">
              <h1 className="text-xl md:text-3xl font-bold mt-3">Drop Us a Line</h1>
              <p className="text-primary-gray text-[0.9rem] mt-2 mb-2">
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>

            <div className="flex sm:flex-row flex-col items-center gap-2 md:gap-[20px]">
              <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="peer border-border-gray border rounded-md outline-none px-4 py-2 lg:py-4 w-full  text-black transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="peer border-border-gray border rounded-md outline-none px-4 py-2 lg:py-4 w-full text-black transition-colors duration-300"
                />
              </div>
            </div>
            <div className="flex mt-3 sm:flex-row flex-col items-center gap-2 md:gap-[20px]">
              <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                <input
                  type="number"
                  placeholder="Phone"
                  className="peer border-border-gray border rounded-md outline-none px-4 py-2 lg:py-4 w-full  text-black transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                <input
                  type="text"
                  placeholder="Subject"
                  className="peer border-border-gray border rounded-md outline-none px-4 py-2 lg:py-4 w-full text-black transition-colors duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[5px] w-full mt-[20px]">
              <textarea
                placeholder="Write message"
                className="peer min-h-28 md:min-h-[200px] border-border-gray border rounded-md outline-none px-4 py-3 w-full text-black transition-colors duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="py-2.5 px-6 bg-primary-text text-white rounded-md text-[1rem] mt-[10px] w-full"
            >
              Send Message
            </button>
          </div>
        </form>

        {/*  image  */}
        <div className="flex-1 ">
          <img
            src="https://i.ibb.co.com/JW8TGVwS/contact.png"
            alt="image"
            className="rounded w-full xl:max-h-[450px] xxl:max-h-[500px] object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Message;
