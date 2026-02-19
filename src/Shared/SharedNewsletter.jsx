import news from "../assets/banner-13.png.png";

const Newsletter = () => {
  return (
    <div className="mt-5 md:mt-8 rounded px-3 md:px-6 h-[180px] small:h-[230px] md:h-[350px] lg:h-[400px] flex items-center lg:gap-14 justify-center quick bg-primary-border">
      <div className="lg:w-3/4  md:px-4 space-y-3">
        <h1 className="font-bold text-center md:text-start text-xl small:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-text">
          Stay home & get your daily needs from our shop
        </h1>

        <p className="text-primary-gray text-[12px] small:text-sm  md:text-lg text-center md:text-start">
          Start You&apos;r Daily Shopping with
          <span className="text-primary-green">E-Mart</span>
        </p>

        <div className="text-center md:text-start pt-2 md:pt-3">
          <input
            className="w-40 small:w-44 md:w-48 lg:w-64 px-8 small:px-4 lg:px-3 py-1 md:py-2 lg:py-4 focus:outline-none focus:ring-0 rounded-l-3xl text-base"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="bg-primary-green text-white rounded-r-3xl py-1 md:py-2 lg:py-4 text-base px-2 md:px-4">
            Subscribe
          </button>
        </div>
      </div>

      <div className="hidden md:flex h-full pt-4">
        <img src={news} alt="Newsletter banner" />
      </div>
    </div>
  );
};

export default Newsletter;
