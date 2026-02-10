import { FaRegTrashAlt } from "react-icons/fa";
import ShareHead from "../Shared/ShareHead";
import SharedNewsletter from "../Shared/SharedNewsletter";

const cartItems = [
  {
    id: 1,
    name: "Field Roast Chao Cheese Creamy Original",
    price: 2.5,
    img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
  {
    id: 2,
    name: "Field Roast Chao Cheese Creamy Original",
    price: 2.5,
    img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
];

const MyCart = () => {
  const subTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="quick">
      <ShareHead pageTitle={"My Cart"} />

      <div className="flex flex-col lg:flex-row mt-10 gap-8 md:gap-8 lg:gap-5 xxl:gap-10">
        {/* table */}
        <div className="overflow-x-auto w-full lg:w-2/3">
          <table className="table border-2 border-border p-3">
            <thead className="text-sm small:text-base md:text-base lg:text-lg xxl:text-xl bg-primary-green  text-white ">
              <tr className="!p-2">
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b-2 border-border">
                  <td>
                    <div className="avatar">
                      <div className="h-10 w-10 border-2 border-border ">
                        <img src={item.img} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td className="text-sm xl:text-base font-medium text-primary-text small:max-w-[120px] truncate">
                    {item.name}
                  </td>
                  <td className="text-sm xl:text-base font-bold text-primary-green">
                    ${item.price}
                  </td>
                  <td>
                    <button className=" btn-md text-red ">
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* price box */}
        <div className="w-full lg:w-1/3 rounded-xl">
          <div className="border-2 border-border ">
            <div className="flex justify-between px-10 border-b-2 border-border p-2  text-sm small:text-base md:text-base lg:text-lg font-medium xl:font-semi-bold">
              <h1 className="text-secondary-gray">SubTotal</h1>
              <h1 className="text-primary-green text-sm small:text-base md:text-base xl:text-lg">${subTotal}</h1>
            </div>

            {/* apply coupon */}
            <div className="border-b-2 border-border flex">
              <input
                className="p-2  focus:outline-none text-black w-2/3 pl-10 text-sm small:text-base md:text-base lg:text-lg font-medium xl:font-semi-bold"
                type="text"
                placeholder="Type Coupon?"
              />
              <button className="text-white bg-primary-green w-1/3 text-sm small:text-base md:text-base xl:text-lg font-medium xl:font-semi-bold">
                Apply
              </button>
            </div>

            <div className="flex justify-between px-10 p-2 text-sm small:text-base md:text-base lg:text-lg font-medium xl:font-semi-bold">
              <h1 className="text-secondary-gray">Total</h1>
              <h1 className="text-primary-green text-sm small:text-base md:text-base xl:text-lg">${subTotal}</h1>
            </div>
          </div>
          <button className="text-white bg-primary-green w-full p-2 text-sm small:text-base md:text-base xl:text-lg font-medium xl:font-semi-bold">
            CHECKOUT & PAY
          </button>

        </div>
      </div>

      <SharedNewsletter />
    </div>
  );
};

export default MyCart;
