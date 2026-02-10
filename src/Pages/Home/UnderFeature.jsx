import { Link } from "react-router-dom";

const underFeatureBanners = [
  {
    id: 1,
    title: "Everyday Fresh & Clean with Our Products",
    image: "https://i.ibb.co.com/WvNkDjHd/banner-1-png.png",
    link: "/shop",
  },
  {
    id: 2,
    title: "Make your Breakfast Healthy and Easy",
    image: "https://i.ibb.co.com/jvvLydBd/banner-2-png.png",
    link: "/shop",
  },
  {
    id: 3,
    title: "The best Organic Products Online",
    image: "https://i.ibb.co.com/pjCwt3KD/banner-3-png.png",
    link: "/shop",
  },
];

const UnderFeature = () => {
  return (
    <div className="mt-2">
      <div className="quick grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {underFeatureBanners.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-[150px] md:h-[250px] bg-cover bg-center flex items-center p-2 rounded-lg shadow-md"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="bg-white/5 xl:p-4 rounded-lg w-1/2">
              <h2 className="text-sm small:text-lg font-semibold text-gray-800">
                {item.title}
              </h2>

              <Link to={item.link}>
                <button className="mt-4 px-2 small:px-4 py-1 md:py-2 text-sm small:text-base bg-primary-green text-white rounded hover:bg-primary-green">
                  Shop Now →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnderFeature;
