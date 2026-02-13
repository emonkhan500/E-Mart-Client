

const ordersData = [
  {
    id: "1",
    date: "March 45, 2020",
    status: "Processing",
    total: "$125.00",
  },
  {
    id: "2",
    date: "June 29, 2020",
    status: "Completed",
    total: "$364.00",
  },
  {
    id: "3",
    date: "August 02, 2020",
    status: "Completed",
    total: "$280.00",
  },
];

const Orders = () => {
  return (
    <div className="quick mt-10">
      <h1 className="text-2xl md:text-4xl font-bold pb-5 text-primary-text">
        Your Orders
      </h1>

      <div className="overflow-x-auto w-full">
        <table className="table border-2 border-border p-3 w-full min-w-[450px]">
          <thead className="text-sm small:text-base md:text-base lg:text-lg xxl:text-xl bg-primary-green text-white">
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody className="">
            {ordersData.map((order, index) => (
              <tr
                key={index}
                className=" border-b-2 border-border"
              >
                <td className="text-sm xl:text-base font-medium text-primary-text">
                  {order.id}
                </td>

                <td className="text-sm xl:text-base font-medium text-primary-text">
                  {order.date}
                </td>

                <td
                  className={`text-sm xl:text-base font-medium ${
                    order.status === "Completed"
                      ? "text-primary-green"
                      : "text-orange"
                  }`}
                >
                  {order.status}
                </td>

                <td className="text-sm xl:text-base font-bold text-primary-green">
                  {order.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
