import price from "../../assets/icon-1.svg.png";
import wide from "../../assets/icon-2.svg.png";
import delivery from "../../assets/icon-3.svg.png";
import easy from "../../assets/icon-4.svg.png";
import deal from "../../assets/icon-6.svg.png";
import satisfaction from "../../assets/icon-5.svg.png";

const Provide = () => {
  return (
    <div className="md:mt-7 px-4 md:px-10 lg:px-16 lato">
      <div className="text-center ">
        <h1 className="font-bold text-[#253D4E] text-3xl ">What We Provide</h1>
        <div className="flex justify-center mt-3 pr-7">
    <img className="" src="https://i.ibb.co.com/1JBhBjNq/underheading.png " alt="" />
    </div>
      </div>
      {/* card */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {/* 1 */}
        <div className="border shadow text-center px-6 py-6 rounded space-y-3">
          <div className="flex  items-center justify-center">
            <img className="h-[100px] w-[100px]" src={price} alt="" />
          </div>
          <h1 className="text-xl md:text-2xl  text-[#253D4E] font-semibold">
            Best Prices & Offers
          </h1>
          <p className="text-[#7E7E7E]  md:text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
          <button className="text-[#3BB77E] font-semibold text-lg">
            Read More
          </button>
        </div>
        {/* 2 */}
        <div className="border shadow text-center px-6 py-6 rounded space-y-3">
          <div className="flex  items-center justify-center">
            <img className="" src={wide} alt="" />
          </div>
          <h1 className="text-xl md:text-2xl  text-[#253D4E] font-semibold">
          Wide Assortment
          </h1>
          <p className="text-[#7E7E7E]  md:text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
          <button className="text-[#3BB77E] font-semibold text-lg">
            Read More
          </button>
        </div>
        {/* 3 */}
        <div className="border shadow text-center px-6 py-6 rounded space-y-3">
          <div className="flex  items-center justify-center">
            <img className="h-[100px] w-[100px]" src={delivery} alt="" />
          </div>
          <h1 className="text-xl md:text-2xl  text-[#253D4E] font-semibold">
          Free Delivery
          </h1>
          <p className="text-[#7E7E7E]  md:text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
          <button className="text-[#3BB77E] font-semibold text-lg">
            Read More
          </button>
        </div>
        {/* 4 */}
        <div className="border shadow text-center px-6 py-6 rounded space-y-3">
          <div className="flex  items-center justify-center">
            <img className="" src={easy} alt="" />
          </div>
          <h1 className="text-xl md:text-2xl  text-[#253D4E] font-semibold">
          Easy Returns
          </h1>
          <p className="text-[#7E7E7E]  md:text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
          <button className="text-[#3BB77E] font-semibold text-lg">
            Read More
          </button>
        </div>
        {/* 5 */}
        <div className="border shadow text-center px-6 py-6 rounded space-y-3">
          <div className="flex  items-center justify-center">
            <img className="" src={satisfaction} alt="" />
          </div>
          <h1 className="text-xl md:text-2xl  text-[#253D4E] font-semibold">
          100% Satisfaction
          </h1>
          <p className="text-[#7E7E7E]  md:text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
          <button className="text-[#3BB77E] font-semibold text-lg">
            Read More
          </button>
        </div>
        {/* 6 */}
        <div className="border shadow text-center px-6 py-6 rounded space-y-3">
          <div className="flex  items-center justify-center">
            <img className="" src={deal} alt="" />
          </div>
          <h1 className="text-xl md:text-2xl  text-[#253D4E] font-semibold">
          Great Daily Deal
          </h1>
          <p className="text-[#7E7E7E]  md:text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
          <button className="text-[#3BB77E] font-semibold text-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Provide;
