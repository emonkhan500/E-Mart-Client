import { BiSupport } from "react-icons/bi";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdCall } from "react-icons/md";
import appstore from "../../assets/Link → app-store.jpg.png";
import google from "../../assets/Link → google-play.jpg.png";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className=" mt-10 md:mt-12 lg:mt-14  quick px-4 pt-2 md:border shadow md:shadow-md rounded ">
      <div className="grid pt-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-primary-text gap-10">
        {/* clo-1 */}
        <div className="space-y-4">
          <div className="mb-8">
            <img src={logo} alt="" />
          </div>
          <h1 className="text-base md:text-lg">
            <span className="text-lg md:text-xl">Buy Fresh - Eat Healthy!</span>{" "}
            <br />
            Buy Your grocery from us.{" "}
          </h1>
          <h1 className="flex flex-wrap  gap-2 items-center ">
            <CiLocationOn className="flex text-lg text-primary-green font-bold" />{" "}
            <span className="text-lg text-primary-green">Address:</span>
            Dhaka,Bangladesh
          </h1>
          <h1 className="flex flex-wrap gap-2 items-center ">
            <MdCall className="flex font-bold items-center text-primary-green" />{" "}
            <span className="text-lg text-primary-green">Call Us:</span>
            (+880)-1884932158
          </h1>
          <h1 className="flex flex-wrap gap-2 items-center ">
            <CiMail className="flex font-bold items-center text-primary-green text-base" />
            <span className="text-xs text-primary-green">Email:</span>
            emon562002@gamil.com
          </h1>
          <h1 className="flex gap-2 items-center ">
            <IoMdTime className="flex items-center font-bold text-primary-green" />{" "}
            <span className="text-lg text-primary-green">Hours:</span> 24/7
          </h1>
        </div>
        {/* clo-2 */}
        <div>
          <h1 className=" text-primary-gray">Company</h1>
          <div className="space-y-2 md:space-y-5 text-lg">
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
          <h1 className="mb-3 text-3xl font-bold">Account</h1>
          <div className="space-y-2 md:space-y-5 text-lg">
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
          <h1 className="mb-3 text-3xl font-bold">Corporate</h1>
          <div className="space-y-2 md:space-y-5 text-lg">
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
          <h1 className="mb-3 text-3xl font-bold">Popular</h1>
          <div className="space-y-2 md:space-y-5 text-lg">
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
          <h1 className="mb-6 text-3xl font-bold">Install App</h1>
          <h1 className=" font-semibold mt-20">
            From App Store or Google Play
          </h1>
          <div className="flex flex-col lg:w-3/6  shadow-md rounded lg:flex-row gap-2 mt-4">
            <img className="" src={google} alt="" />
            <img className="" src={appstore} alt="" />
          </div>
        </div>
      </div>

      {/* subFooter */}
      <div className="flex flex-col md:flex-row justify-between border-t-primary-border border-t-2 mt-16 mb-8 px-4 md:px-0 py-6 gap-6 md:gap-0 text-center md:text-left">
        <div className="font-semibold">
          <h1>
            © 2025,{" "}
            <span className="text-lg text-primary-green">E-Mart & Grocery</span>
          </h1>
          <h1 className="text-primary-gray">All rights reserved</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-1 lg:gap-4 font-semibold">
          <BiSupport className="text-primary-text text-4xl" />
          <div>
            <h1 className="text-primary-green text-lg font-bold">
              +8801884932158
            </h1>
            <h1 className="text-primary-gray text-sm">24/7 Support Center</h1>
          </div>
        </div>
        <div className="font-semibold">
          <div className="flex items-center justify-center gap-3 md:gap-1 lg:gap-3">
            <h1 className="text-lg font-bold">Follow Us :</h1>
            <div className="flex justify-center    space-x-2 ">
              {/* Icon 1  */}
              <a
                href="https://github.com/emonkhan500"
                className=" rounded-lg p-2 "
              >
                <FaGithub className="w-6 h-6 text-primary-green"></FaGithub>
              </a>

              {/* Icon 2  */}
              <a
                href="https://www.linkedin.com/in/md-emon-khan"
                className=" rounded-lg p-2 "
              >
                <FaLinkedin className="w-6 h-6 text-primary-green"></FaLinkedin>
              </a>

              {/* Icon 3  */}
              <a
                href="https://www.facebook.com/profile.php?id=100025282659899&mibextid=ZbWKwL"
                className=" rounded-lg p-2 "
              >
                <FaFacebookF className="w-6 h-6 text-primary-green" />
              </a>

              {/* Icon 4 */}
              <a
                href="https://www.instagram.com/em0_n/"
                className=" rounded-lg p-2 "
              >
                <FaInstagram className="w-6 h-6 text-primary-green" />
              </a>
            </div>
          </div>
          <h1 className="text-primary-gray">
            Up to 15% discount on your first subscribe
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
