import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 text-gray-700">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-600">Nest</h2>
          <p className="text-sm mt-2">Awesome grocery store website template</p>
          <ul className="mt-4 text-sm space-y-1">
            <li>📍 5171 W Campbell Ave, Utah 53127</li>
            <li>📞 +1 540-025-124553</li>
            <li>✉️ sale@Nest.com</li>
            <li>🕒 10:00 - 18:00, Mon - Sat</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="text-sm space-y-1">
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-2">Account</h3>
          <ul className="text-sm space-y-1">
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help Ticket</li>
            <li>Shipping Details</li>
          </ul>
        </div>

        {/* Popular */}
        <div>
          <h3 className="font-semibold mb-2">Popular</h3>
          <ul className="text-sm space-y-1">
            <li>Milk & Flavoured Milk</li>
            <li>Butter and Margarine</li>
            <li>Eggs Substitutes</li>
            <li>Marmalades</li>
            <li>Sour Cream and Dips</li>
            <li>Tea & Kombucha</li>
          </ul>
        </div>

        {/* Install App & Socials */}
        <div>
          <h3 className="font-semibold mb-2">Install App</h3>
          <p className="text-sm">From App Store or Google Play</p>
          <div className="flex gap-2 my-2">
            <img src="https://via.placeholder.com/120x40" alt="App Store" className="w-24" />
            <img src="https://via.placeholder.com/120x40" alt="Google Play" className="w-24" />
          </div>
          <p className="text-sm mt-4">Secured Payment Gateways</p>
          <div className="flex gap-2 mt-2">
            <img src="https://via.placeholder.com/40x25" alt="Visa" className="w-10" />
            <img src="https://via.placeholder.com/40x25" alt="MasterCard" className="w-10" />
            <img src="https://via.placeholder.com/40x25" alt="Maestro" className="w-10" />
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t mt-6 py-4 text-center text-sm text-gray-500">
        <p>© 2022, Nest - HTML Ecommerce Template. All rights reserved</p>
        <div className="flex justify-center gap-4 mt-2">
          <FaFacebookF className="text-lg" />
          <FaTwitter className="text-lg" />
          <FaInstagram className="text-lg" />
          <FaPinterestP className="text-lg" />
          <FaWhatsapp className="text-lg" />
        </div>
      </div>
    </footer>
  );
}
