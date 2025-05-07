import news from "../assets/banner-13.png.png";

const Newsletter = () => {
  return (
    <div className="mt-3 rounded md:my-7 px-3  md:px-6 md:h-[400px]  md:flex items-center lg:gap-14 justify-center quick bg-[#DEF9EC]">
      <div className="lg:w-3/4 pt-3 md:pt-0 md:px-4 space-y-3">
        <h1 className="font-bold text-center md:text-start text-2xl md:text-3xl lg:text-5xl text-[#253D4E] ">
          Stay home & get your daily needs from our shop
        </h1>
        <p className="text-[#7E7E7E] lg:text-lg text-center md:text-start">
          Start You'r Daily Shopping with{" "}
          <span className="text-[#3BB77E]">E-Mart</span>
        </p>
        <div className=" text-center md:text-start pt-4 pb-4 md:pb-0 lg:pt-6">
          <input
            className="w-40 md:w-48 lg:w-64 px-2 md:px-2 lg:px-3 py-1  md:py-2 lg:py-4 focus:outline-none focus:ring-0 rounded-l-3xl text-base"
            type="text"
            placeholder=" Enter Your Email"
          />
          <button className="bg-[#3BB77E] text-white rounded-r-3xl py-1 md:py-2 lg:py-4 text-base px-1 lg:px-4">
            Subscribe
          </button>
        </div>
      </div>
      <div className="hidden md:flex  h-full pt-4">
        <img src={news} alt="" />
      </div>
    </div>
  );
};

export default Newsletter;
