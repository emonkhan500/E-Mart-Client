import news from "../../assets/banner-9.png.png";


const Newsletter = () => {
    return (
        <div className="my-7 px-6 md:h-[400px]  md:flex items-center lg:gap-14 justify-center quick bg-[#DEF9EC]">
          <div className="lg:w-3/4 px-4 space-y-3"> 
            <h1 className="font-bold md:text-3xl lg:text-5xl text-[#253D4E]">Stay home & get your daily
needs  from our shop</h1>
            <p className="text-[#7E7E7E] lg:text-lg ">Start You'r Daily Shopping with <span className="text-[#3BB77E]">E-Mart</span></p>
            <div className="pt-4 lg:pt-6">
              <input className="px-2 lg:px-3 md:py-2 lg:py-4 focus:outline-none focus:ring-0 rounded-l-3xl text-base" type="text" />
   <button className="bg-[#3BB77E] text-white rounded-r-3xl md:py-2 lg:py-4 text-base md:px-1 lg:px-4">Subscribe</button>
            </div>
          </div>
          <div className="hidden md:flex  h-full pt-4"> 
            <img src={news} alt="" />
          </div>
            
        </div>
    );
};

export default Newsletter;