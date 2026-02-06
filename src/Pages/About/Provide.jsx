import price from "../../assets/icon-1.svg.png";
import wide from "../../assets/icon-2.svg.png";
import delivery from "../../assets/icon-3.svg.png";
import easy from "../../assets/icon-4.svg.png";
import satisfaction from "../../assets/icon-5.svg.png";
import deal from "../../assets/icon-6.svg.png";
import SharedTitle from "../../Shared/ui/SharedTitle";

const provideData = [
  {
    img: price,
    title: "Best Prices & Offers",
    desc:
      "Get the best value for your money with competitive pricing, exclusive discounts, and special offers updated regularly.",
  },
  {
    img: wide,
    title: "Wide Assortment",
    desc:
      "Choose from a wide range of quality products across multiple categories, carefully selected to meet your daily needs.",
  },
  {
    img: delivery,
    title: "Free Delivery",
    desc:
      "Enjoy fast and free delivery on eligible orders, ensuring your products reach you safely and on time.",
  },
  {
    img: easy,
    title: "Easy Returns",
    desc:
      "Not satisfied with your purchase? Our easy and hassle-free return process has you covered.",
  },
  {
    img: satisfaction,
    title: "100% Satisfaction",
    desc:
      "Customer satisfaction is our top priority. We guarantee quality products and reliable service every time.",
  },
  {
    img: deal,
    title: "Great Daily Deal",
    desc:
      "Discover exciting daily deals and limited-time offers to save more on your favorite products.",
  },
];

const Provide = () => {
  return (
    <div className="md:mt-7 px-1 md:px-10 lg:px-16 lato">
      <SharedTitle title={"What We Provide"} />

      {/* cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {provideData.map((item, index) => (
          <div
            key={index}
            className="border shadow text-center px-6 py-6 rounded space-y-3"
          >
            <div className="flex items-center justify-center">
              <img src={item.img} alt={item.title} />
            </div>

            <h1 className="text-xl md:text-2xl text-primary-text font-semibold">
              {item.title}
            </h1>

            <p className="text-primary-gray md:text-lg">
              {item.desc}
            </p>

            <button className="text-primary-green font-semibold text-lg">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Provide;
