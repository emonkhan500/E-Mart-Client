import price from "../../assets/icon-1.svg.png";
import delivery from "../../assets/icon-2.svg.png";
import deal from "../../assets/icon-3.svg.png";
import returns from "../../assets/icon-5.svg.png";
import wide from "../../assets/icon-2.svg.png";
import satisfaction from "../../assets/icon-6.svg.png";

const Provide = () => {
    return (
        <div className='mt-7 px-4 md:px-16 lato'>
            <div className="text-center ">
                <h1 className="font-bold text-[#253D4E] text-3xl ">What We Provide</h1>
                
            </div>
            {/* card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
                {/* 1 */}
                <div className="border shadow text-center px-6 py-6 rounded space-y-2">
                    <div className="flex  items-center justify-center">
                    <img className="" src={price} alt="" />
                    </div>
                    <h1 className="text-xl  text-[#253D4E] font-semibold">Best Prices & Offers</h1>
                    <p className="text-[#7E7E7E]">There are many variations of passages of Lorem
Ipsum available, but the majority have suffered
alteration in some form</p>
<button className="text-[#3BB77E] font-semibold">Read More</button>
                </div>
                {/* 2 */}
                <div className="border shadow text-center px-3 py-2 space-y-2">
                    <div className="flex  items-center justify-center">
                    <img className="" src={price} alt="" />
                    </div>
                    <h1 className="text-xl  text-[#253D4E]">Best Prices & Offers</h1>
                    <p className="text-[#7E7E7E]">There are many variations of passages of Lorem
Ipsum available, but the majority have suffered
alteration in some form</p>
<p className="text-[#3BB77E]">Read More</p>
                </div>
                {/* 3 */}
                <div className="border shadow text-center px-3 py-2 space-y-2">
                    <div className="flex  items-center justify-center">
                    <img className="" src={price} alt="" />
                    </div>
                    <h1 className="text-xl  text-[#253D4E]">Best Prices & Offers</h1>
                    <p className="text-[#7E7E7E]">There are many variations of passages of Lorem
Ipsum available, but the majority have suffered
alteration in some form</p>
<p className="text-[#3BB77E]">Read More</p>
                </div>
                {/* 4 */}
                <div className="border shadow text-center px-3 py-2 space-y-2">
                    <div className="flex  items-center justify-center">
                    <img className="" src={price} alt="" />
                    </div>
                    <h1 className="text-xl  text-[#253D4E]">Best Prices & Offers</h1>
                    <p className="text-[#7E7E7E]">There are many variations of passages of Lorem
Ipsum available, but the majority have suffered
alteration in some form</p>
<p className="text-[#3BB77E]">Read More</p>
                </div>
                {/* 5 */}
                <div className="border shadow text-center px-3 py-2 space-y-2">
                    <div className="flex  items-center justify-center">
                    <img className="" src={price} alt="" />
                    </div>
                    <h1 className="text-xl  text-[#253D4E]">Best Prices & Offers</h1>
                    <p className="text-[#7E7E7E]">There are many variations of passages of Lorem
Ipsum available, but the majority have suffered
alteration in some form</p>
<p className="text-[#3BB77E]">Read More</p>
                </div>
                {/* 6 */}
                <div className="border shadow text-center px-3 py-2 space-y-2">
                    <div className="flex  items-center justify-center">
                    <img className="" src={price} alt="" />
                    </div>
                    <h1 className="text-xl  text-[#253D4E]">Best Prices & Offers</h1>
                    <p className="text-[#7E7E7E]">There are many variations of passages of Lorem
Ipsum available, but the majority have suffered
alteration in some form</p>
<p className="text-[#3BB77E]">Read More</p>
                </div>
            </div>
        </div>
    );
};

export default Provide;