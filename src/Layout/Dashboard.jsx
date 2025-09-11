import React, { useContext, useState } from "react";
import Nav from "../Shared/Nav/Nav";
import Footer from "../Shared/Footer/Footer";
import ShareHead from "../Shared/ShareHead";
import Newsletter from "../Shared/SharedNewsletter";
import UpFooter from "../Pages/Home/UpFooter";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
   return  <div className="w-24 h-24 mx-auto mt-10 border-4 border-dashed  rounded-full animate-spin dark:border-violet-600"></div>;
  }

  const isAdmin =true;

  return (
    <div className="w-full  px-3 mx-auto">
      <Nav></Nav>
      <h1 className="text-4xl font-bold mt-16 text-[#3BB77E] text-center quick mb-7">
        DASHBOARD
      </h1>

      <div className=" border-t-4 border-b-4 border-[#3BB77E]">
        <div className=" mt-3  mb-7 flex flex-col lg:flex-row md:gap-4 lg:gap-4   px-2 md:px-5 lg:px-3  xl:px-20">
          <div className=" w-auto  lg:w-80 pt-4  md:pt-10">
            {isAdmin ? (
              <>
                <ul className="menu space-y-2 mx-1 ">
                  <li className="text-center">
                    <NavLink
                      to="/dashboard/adminprofile"
                      className={({ isActive }) =>
                        `text-lg  font-bold border rounded-md px-3 py-3 transition ${
                          isActive
                            ? "bg-[#3BB77E] text-white"
                            : "bg-white border-slate-300"
                        } hover:bg-[#3BB77E] hover:text-white`
                      }
                    >
                      <CgProfile /> Profile
                    </NavLink>
                  </li>

                  <li className="text-center">
                    <NavLink
                      to="/dashboard/addproducts"
                      className={({ isActive }) =>
                        `text-lg border font-bold rounded-md px-3 py-3 transition ${
                          isActive
                            ? "bg-[#3BB77E] text-white"
                            : "bg-white border-slate-300"
                        } hover:bg-[#3BB77E] hover:text-white`
                      }
                    >
                      <AiOutlineUnorderedList />
                      ADD PRODUCT
                    </NavLink>
                  </li>
                  <li className="text-center">
                    <NavLink
                      to="/dashboard/manageorders"
                      className={({ isActive }) =>
                        `text-lg border font-bold rounded-md px-3 py-3 transition ${
                          isActive
                            ? "bg-[#3BB77E] text-white"
                            : "bg-white border-slate-300"
                        } hover:bg-[#3BB77E] hover:text-white`
                      }
                    >
                      <AiOutlineUnorderedList />
                      MANAGE ORDERS
                    </NavLink>
                  </li>
                  <li className="text-center">
                    <NavLink
                      to="/dashboard/manageproducts"
                      className={({ isActive }) =>
                        `text-lg border font-bold rounded-md px-3 py-3 transition ${
                          isActive
                            ? "bg-[#3BB77E] text-white"
                            : "bg-white border-slate-300"
                        } hover:bg-[#3BB77E] hover:text-white`
                      }
                    >
                      <AiOutlineUnorderedList />
                      MANAGE PRODUCT
                    </NavLink>
                  </li>
                  <li className="text-center">
                    <NavLink
                      to="/dashboard/manageusers"
                      className={({ isActive }) =>
                        `text-lg border font-bold rounded-md px-3 py-3 transition ${
                          isActive
                            ? "bg-[#3BB77E] text-white"
                            : "bg-white border-slate-300"
                        } hover:bg-[#3BB77E] hover:text-white`
                      }
                    >
                      <AiOutlineUnorderedList />
                      MANAGE USER
                    </NavLink>
                  </li>
                  <li className="text-center">
                    <button className="text-lg border font-bold rounded-md px-3 py-3 transition bg-white border-slate-300 hover:bg-[#3BB77E] hover:text-white">
                      <IoIosLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="menu space-y-2 mx-5 ">
                  <li className="text-center">
                    <NavLink
                      to="/dashboard/userprofile"
                      className={({ isActive }) =>
                        `text-lg  font-bold border rounded-md px-3 py-3 transition ${
                          isActive
                            ? "bg-[#3BB77E] text-white"
                            : "bg-white border-slate-300"
                        } hover:bg-[#3BB77E] hover:text-white`
                      }
                    >
                      <CgProfile /> Profile
                    </NavLink>
                  </li>

                  <li className="text-center">
                    <NavLink
                      to="/dashboard/orders"
                      className={({ isActive }) =>
                        `text-lg border font-bold rounded-md px-3 py-3 transition ${
                          isActive
                            ? "bg-[#3BB77E] text-white"
                            : "bg-white border-slate-300"
                        } hover:bg-[#3BB77E] hover:text-white`
                      }
                    >
                      <AiOutlineUnorderedList />
                      Manage Orders
                    </NavLink>
                  </li>
                  <li className="text-center">
                    <button className="text-lg border font-bold rounded-md px-3 py-3 transition bg-white border-slate-300 hover:bg-[#3BB77E] hover:text-white">
                      <IoIosLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </>
            )}
          </div>

          <div className="flex-1 pt-6 md:pt-10">
            <Outlet></Outlet>
          </div>
        </div>
      </div>

      {/* <Footer></Footer> */}
    </div>
  );
};

export default Dashboard;
