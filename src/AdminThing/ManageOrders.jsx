import { CiEdit } from "react-icons/ci";

const ManageOrders = () => {
  return (
    <div>
      <div className=" border-2 border-slate-200 flex justify-between mb-2 md:mb-14 rounded-xl py-4  px-2 md:px-20 mt-5">
        <h1 className="text-base md:text-3xl font-bold text-primary-text">
          Total Order:{" "}
          <span className="text-primary-green text-lg md:text-4xl">10</span>
        </h1>
        <h1 className="text-base md:text-3xl font-bold text-primary-text">
          Total:{" "}
          <span className="text-primary-green text-lg md:text-4xl">
            10000 TK
          </span>
        </h1>
      </div>
      <div className="overflow-x-auto w-full ">
        <table className="table border-2 border-slate-200 p-3">
          {/* head */}
          <thead className="text-2xl text-white bg-primary-green quick">
            <tr>
              <th>Product-Image</th>
              <th>Product-Name</th>
              <th>Price</th>
              <th>Bought-By</th>

              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="border-b-2 border-border">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className=" h-24 w-24 border-2 border-border p-3">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-lg font-bold text-primary-text">
                Field Roast Chao Cheese Creamy Original
              </td>
              <td className="text-xl font-bold text-primary-green">$2.5</td>
              <td className="text-xl font-bold text-primary-green">
                Md Emon Khan
              </td>
              {/* edit */}
              <th>
                <button className="btn btn-ghost btn-xl">
                  <CiEdit />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
