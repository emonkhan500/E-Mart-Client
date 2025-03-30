import React, { useState } from "react";
import Nav from "../Shared/Nav/Nav";
import Footer from "../Shared/Footer/Footer";
import ShareHead from "../Shared/ShareHead";
import Newsletter from "../Shared/SharedNewsletter";
import UpFooter from "../Pages/Home/UpFooter";

const ordersData = [
  { id: 1357, date: "March 15, 2020", status: "Processing", total: "$125.00 for 2 items" },
  { id: 2468, date: "June 29, 2020", status: "Completed", total: "$364.00 for 5 items" },
  { id: 2366, date: "August 02, 2020", status: "Completed", total: "$280.00 for 3 items" },
];

const Sidebar = ({ setActiveSection, activeSection }) => {
  const menuItems = ["Dashboard", "Orders", "Track Your Order", "My Address", "Account details", "Logout"];

  return (
    <div className="w-64 p-4 bg-gray-100 min-h-screen">
      {menuItems.map((item) => (
        <button
          key={item}
          onClick={() => setActiveSection(item)}
          className={`block w-full text-left p-3 my-1 rounded-lg transition-all ${
            activeSection === item ? "bg-green-500 text-white" : "bg-white hover:bg-gray-200"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

const OrdersTable = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Order</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Total</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order) => (
              <tr key={order.id} className="text-center border">
                <td className="p-2 border">#{order.id}</td>
                <td className="p-2 border">{order.date}</td>
                <td className="p-2 border">{order.status}</td>
                <td className="p-2 border">{order.total}</td>
                <td className="p-2 border text-green-500 cursor-pointer">View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Orders");

  return (
    <div className="w-full max-w-[1600px] px-3 md:px-8 lg:px-12 xl:px-16 mx-auto mb-9">
      <ShareHead pageTitle={"DASHBOARD"} />
      <Nav />
      <div className="flex">
        <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
        <div className="flex-1 p-6">
          {activeSection === "Orders" && <OrdersTable />}
          {activeSection !== "Orders" && <h2 className="text-2xl">{activeSection}</h2>}
        </div>
      </div>
      <Newsletter />
      <UpFooter />
      <Footer />
    </div>
  );
};

export default Dashboard;
