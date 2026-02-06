import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const vendors = [
  {
    id: 1,
    name: "Tech World BD",
    since: 2010,
    type: "Mall",
    products: 380,
    address: "Savar Bazar, Savar, Dhaka ",
    phone: "(+880) - 1300-778899",
    img: "https://i.ibb.co.com/nMGdN0qs/gadget-vendor-removebg-preview.png",
  },
  {
    id: 2,
    name: "Fresh Fruits BD",
    since: 2014,
    type: "Preferred",
    products: 63,
    address: "Kazi Nazrul Ave, Dhaka",
    phone: "(+880) - 1712-456789",
    img: "https://i.ibb.co.com/8n5mXmgW/vendor-2.png",
  },
  {
    id: 3,
    name: "Shonar Bangla Meat",
    since: 2013,
    type: "Mall",
    products: 310,
    address: "Agrani Road, Narayanganj, Dhaka ",
    phone: "(+880) - 1911-223344",
    img: "https://i.ibb.co.com/G6wNv9J/fish.jpg",
  },
  {
    id: 4,
    name: "Bangla Bites",
    since: 2017,
    type: "Mall",
    products: 120,
    address: "Block C, Bashundhara R/A, Dhaka",
    phone: "(+880) - 1611-889977",
    img: "https://i.ibb.co.com/CKNYRqCj/vendor-8.png",
  },
  {
    id: 5,
    name: "Trendy Touch BD",
    since: 2018,
    type: "Mall",
    products: 380,
    address: "Zila Sadar, Manikganj, Dhaka ",
    phone: "(+880) - 1700-112233",
    img: "https://i.ibb.co.com/yBSNLzQf/fashion.png",
  },
  {
    id: 6,
    name: "Home & Kitchen Mart",
    since: 2014,
    type: "Preferred",
    products: 63,
    address: "Station Road, Gazipur, Dhaka ",
    phone: "(+880) - 1555-443322",
    img: "https://i.ibb.co.com/4ndVDcHm/kitchen.png",
  },
  {
    id: 7,
    name: "Bangla Bites",
    since: 2018,
    type: "Mall",
    products: 120,
    address: "Block C, Bashundhara R/A, Dhaka",
    phone: "(+880) - 1611-889977",
    img: "https://i.ibb.co.com/CKNYRqCj/vendor-8.png",
  },
  {
    id: 8,
    name: "Sports House",
    since: 2013,
    type: "Mall",
    products: 310,
    address: "Court Road, Narsingdi, Dhaka ",
    phone: "(+880) - 1400-334455",
    img: "https://i.ibb.co.com/KcFD4wCY/sports-logo.png",
  },
];

const VendorList = () => {
  return (
    <div>
      <div className="text-center mt-8">
        <h1 className="text-4xl md:text-4xl lg:text-5xl text-primary-text font-bold">
          Vendors List
        </h1>
        <div className="flex items-center justify-center mt-3 md:mt-5 lg:mt-8">
          <input
            className="w-full md:w-3/6 py-3 xl:py-4  px-10 border border-border outline-none rounded-full shadow-lg"
            placeholder="Search For Vendors..."
          />
          <IoIosSearch className="relative top-[1px] -left-[50px] md:-left-[65px] lg:-left-[90px] text-secondary-text text-2xl" />
        </div>
      </div>

      {/* Vendor cards */}
      <div className="grid grid-cols-1 tab:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5 xl:gap-6 xxl:gap-4  mt-10">
        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="relative border rounded-lg px-2 py-2 md:py-3 hover:shadow-xl hover:border-primary-green"
          >
            <span className="absolute top-0 right-0 bg-pink-500 text-white px-9 py-1 rounded-bl-lg text-lg">
              {vendor.type}
            </span>
            
              <img className="h-48 w-[90%] small:w-auto " src={vendor.img} alt={vendor.name} />
          
            <h1 className="text-secondary-gray">Since {vendor.since}</h1>
            <div className="px-1 flex my-2 md:my-4 items-center justify-between ">
              <h1 className="text-primary-text text-lg md:text-2xl lg:text-xl xl:text-2xl">
                {vendor.name}
              </h1>
              <div className="px-1 py-1 text-[12px] lg:text-sm xl:text-base bg-primary-border text-primary-green rounded">
                {vendor.products} products
              </div>
            </div>
            <div className="space-y-3 mt-4">
              <div className="text-secondary-gray flex items-center gap-1 text-[12px] md:text-sm">
                <CiLocationOn className="text-primary-green text-xl font-bold" />
                <span className="text-sm font-bold text-primary-text">Address:</span>
                {vendor.address}
              </div>
              <div className="text-secondary-gray flex items-center gap-3 text-[12px] md:text-sm">
                <TfiHeadphoneAlt className="text-primary-green text-lg font-bold" />
                <span className="text-sm font-bold text-primary-text">Call Us:</span>
                {vendor.phone}
              </div>
            </div>
            <div className="mt-5 md:mt-7">
              <Link className="inline-block">
                <button className="px-4 text-white py-1 text-base md:text-lg lato bg-primary-green rounded flex justify-center items-center gap-2">
                  Visit
                  <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorList;
