import price from "../../assets/icon-1.svg.png";
import delivery from "../../assets/icon-2.svg.png";
import deal from "../../assets/icon-3.svg.png";
import returns from "../../assets/icon-5.svg.png";

const UpFooter = () => {
  return (
    <div className="lato grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 md:mt-12 lg:mt-16 gap-4">
      {/* 1 */}
      <div className="flex justify-center gap-4 items-center px-4 py-5 rounded bg-pinks">
        <div className="w-12">
          <img src={price} alt="" />
        </div>
        <div>
          <h1 className="text-lg font-bold">Best prices & offers</h1>
          <h1 className="text-secondary-gray">Orders $50 or more</h1>
        </div>
      </div>
      {/* 2 */}
      <div className="flex  items-center justify-center gap-4 px-4 py-5 rounded bg-light-gray">
        <div className="w-12">
          <img src={delivery} alt="" />
        </div>
        <div>
          <h1 className="text-lg font-bold">Free delivery</h1>
          <h1 className="text-secondary-gray">24/7 amazing services</h1>
        </div>
      </div>
      {/* 3 */}
      <div className="flex justify-center gap-4 items-center px-4 py-5 rounded bg-cream">
        <div className="w-12">
          <img src={deal} alt="" />
        </div>
        <div>
          <h1 className="text-lg font-bold">Great daily deal</h1>
          <h1 className="text-secondary-gray">When you sign up</h1>
        </div>
      </div>
      {/* 4 */}
      <div className="flex justify-center gap-4 items-center px-4 py-5 rounded bg-orangee">
        <div className="w-12">
          <img src={returns} alt="" />
        </div>
        <div>
          <h1 className="text-lg font-bold">Easy returns</h1>
          <h1 className="text-secondary-gray">Within 30 days</h1>
        </div>
      </div>
    </div>
  );
};

export default UpFooter;
