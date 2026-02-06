import { FaShoppingCart } from "react-icons/fa";
import SharedHeading from "../../Shared/ui/SharedTitle";

const dealsData = [
  {
    id: 1,
    banner: "https://i.ibb.co.com/fzsPYRrY/banner-5-png.png",
    title: "Seeds of Change Organic Quinoa, Brown & Rice",
    brand: "NestFood",
    price: "$28.85",
    rating: 2,
  },
  {
    id: 2,
    banner: "https://i.ibb.co.com/B5fR598G/banner-6-png.png",
    title: "Seeds of Change Organic Quinoa, Brown & Rice",
    brand: "NestFood",
    price: "$28.85",
    rating: 2,
  },
  {
    id: 3,
    banner: "https://i.ibb.co.com/fzsPYRrY/banner-5-png.png",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    brand: "NestFood",
    price: "$28.85",
    rating: 2,
  },
  {
    id: 4,
    banner: "https://i.ibb.co.com/wF3gMBGG/banner-8-png.png",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    brand: "NestFood",
    price: "$28.85",
    rating: 2,
  },
];

const DealsOfDay = () => {
  return (
    <div className="my-10 md:my-20 ">
      {/* Heading */}
      <SharedHeading title="Deals Of The Day" />

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-20 mt-6">
        {dealsData.map((item) => (
          <div className="relative" key={item.id}>
            <img src={item.banner} alt={item.title} className="w-full" />

            <div className="absolute bg-white rounded shadow px-3 py-1 -bottom-12 left-1/2 -translate-x-1/2 w-[90%]">
              <h1 className="quick text-base md:text-xl font-bold text-primary-text mt-1 mb-2">
                {item.title}
              </h1>

              <div className="flex justify-between items-center">
                <p className="text-sm md:text-base">
                  By <span className="text-primary-green">{item.brand}</span>
                </p>

                <div className="rating ">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <input
                      key={star}
                      type="radio"
                      name={`rating-${item.id}`}
                      className="mask mask-star bg-orange 
                 w-4 h-4 md:w-5 md:h-5"
                      defaultChecked={star === item.rating}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center px-6 mt-4 mb-2">
                <h1 className="text-primary-green text-lg font-semibold">
                  {item.price}
                </h1>

                <button className="flex items-center gap-2 px-3 py-2 rounded bg-primary-border text-primary-green">
                  <FaShoppingCart /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsOfDay;
