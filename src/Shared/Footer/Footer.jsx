import { BiSupport } from "react-icons/bi";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="mt-40 mb-36 lato ">
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-[#253D4E]">
        {/* clo-1 */}
        <div className="space-y-4">
          <div>
            <img src={logo} alt="" />
          </div>
          <h1 className="my-2 text-lg"><span className="text-xl">Buy Fresh - Eat Healthy!</span> <br />
           Buy Your grocery from us. </h1>
          <h1>Address: Tangail 1900, Dhaka,Bangladesh</h1>
          <h1>Call Us:(+880) - 1884932158</h1>
          <h1>Email:emon562002@gamil.com</h1>
          <h1>Hours: 24H ,Sat - Fri</h1>

        </div>
        {/* clo-2 */}
        <div>
          <h1 className="mb-3">Company</h1>
          <div className="space-y-5 text-lg">
            <h1>About Us</h1>
            <h1>Delivery Information</h1>
            <h1>Privacy Policy</h1>
            <h1>Terms & Conditions</h1>
            <h1>Contact Us</h1>
            <h1>Support Center</h1>
          </div>
        </div>
        {/* clo-3 */}
        <div>
          <h1 className="mb-3">Account</h1>
          <div className="space-y-5 text-lg">
            
            <h1>View Cart</h1>
            <h1>My Wishlist</h1>
            <h1>Track My Order</h1>
            <h1>Help Ticket</h1>
            <h1>Shipping Details</h1>
            <h1>Compare products</h1>
          </div>
        </div>
        {/* clo-4 */}
        <div>
          <h1 className="mb-3">Corporate</h1>
          <div className="space-y-5 text-lg">
            
            <h1>Become a Vendor</h1>
            <h1>Affiliate Program</h1>
            <h1>Farm Business</h1>
            <h1>Help Ticket</h1>
            <h1>Farm Careers</h1>
            <h1>Our Suppliers</h1>
          </div>
        </div>
        {/* clo-5 */}
        <div>
          <h1 className="mb-3">Popular</h1>
          <div className="space-y-5 text-lg">
            
            <h1>Milk & Flavoured Milk</h1>
            <h1>Butter and Margarine</h1>
            <h1>Eggs Substitutes</h1>
            <h1>Sour Cream and Dips</h1>
            <h1>Tea & Kombucha</h1>
            <h1>Cheese</h1>
          </div>
        </div>
        {/* clo-6 */}
        <div>
          <h1 className="mb-3">Install App</h1>
          <h1>From App Store or Google Play</h1>
          <div className="flex ">
            
            <img  src="" alt="" />
            <img className=""  src="" alt="" />
            <img className="" src="" alt="" />
            
          </div>

        </div>
      </div>
      <div className="flex justify-between ">
      <div>
          <h1>© 2022, Nest - HTML Ecommerce Template
</h1>
          <h1>All rights reserved</h1>
        </div>
        <div className="hidden lg:flex gap-4 items-center">
          <BiSupport className="text-[#253D4E] text-4xl" />
          <div>
            <h1 className="text-[#3BB77E] text-lg font-bold quick">
              +8801884932158
            </h1>
            <h1 className="text-[#7E7E7E] text-sm lato">24/7 Support Center</h1>
          </div>
        </div>
        <div></div>
        
      </div>
    </div>
  );
};

export default Footer;
