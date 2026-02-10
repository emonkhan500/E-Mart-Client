import { CiEdit } from "react-icons/ci";
import SharedTitle from "../Shared/ui/SharedTitle";

const ManageOrders = () => {
  return (
    <div className="">
      <SharedTitle title={"Manage Orders"} />
      <div className=" border-2 border-border flex justify-between mb-6 lg:mb-10 rounded-lg py-2 lg:py-3  px-2 md:px-12 ld:px-20  mt-6">
        <h1 className="text-base md:text-2xl font-bold text-primary-text">
          Total Order:
          <span className="text-primary-green text-lg md:text-2xl  font-bold">10</span>
        </h1>
        <h1 className="text-base md:text-2xl font-bold text-primary-text">
          Total:
          <span className="text-primary-green text-lg md:text-2xl  font-bold">
            10000 TK
          </span>
        </h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table border-2 border-border p-3 w-full">
          <thead className="text-sm small:text-base md:text-base lg:text-lg xxl:text-xl bg-primary-green text-white">
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Bought By</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody className="bg-border">
            <tr className="border-b-2 border-border ">
              {/* Product Image */}
              <td>
                <div className="avatar">
                  <div className="h-10 w-10 border-2 border-border">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="product"
                    />
                  </div>
                </div>
              </td>

              {/* Name */}
              <td className="text-xs small:text-sm lg:text-base font-medium text-primary-text max-w-[140px] truncate">
                Field Roast Chao Cheese Creamy Original
              </td>

              {/* Price */}
              <td className="text-sm xl:text-base font-bold text-primary-green">
                $2.5
              </td>

              {/* Buyer */}
              <td className="text-xs small:text-sm lg:text-base font-medium text-primary-text max-w-[165px] truncate">
                Md Emon Khan
              </td>

              {/* Edit */}
              <td>
                <button className="btn-md text-blue-600">
                  <CiEdit size={18} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
