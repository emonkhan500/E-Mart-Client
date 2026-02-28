import news from "../../assets/banner-9.png.png";
import { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    toast.success("Subscribed Successfully!");
    setEmail("");
  };

  return (
    <div className=" md:mt-3 lg:mt-8 rounded md:my-7 px-3  md:px-6 md:h-[400px] md:flex items-center lg:gap-14 justify-center quick bg-primary-border">
      <div className="lg:w-3/4 pt-3 md:pt-0 md:px-4 space-y-3">
        <h1 className="font-bold text-center md:text-start text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-text ">
          Stay home & get your daily needs from our shop
        </h1>
        <p className="text-primary-gray text-sm md:text-lg text-center md:text-start">
          Start You'r Daily Shopping with
          <span className="text-primary-green">E-Mart</span>
        </p>
        <div className=" text-center md:text-start pt-4 pb-4 md:pb-0 lg:pt-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-40 md:w-48 lg:w-64 px-2 md:px-2 lg:px-3 py-1  md:py-2 lg:py-4 focus:outline-none focus:ring-0 rounded-l-3xl text-base"
            type="text"
            placeholder=" Enter Your Email"
          />
          <button
            onClick={handleSubscribe}
            className="bg-primary-green text-white rounded-r-3xl py-1 md:py-2 lg:py-4 text-base px-2 lg:px-4"
          >
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