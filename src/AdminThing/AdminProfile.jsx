import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="px-5">
      <h1 className="text-4xl font-bold mb-10 text-center">Hello <span className="text-[#3BB77E]">{user?.displayName}</span> !</h1>
      <p className="font-medium text-lg">
  From your account dashboard, you can quickly view recent orders, manage your shipping 
  and billing information, and update your account details. <br /><br />
  As an <span className="font-semibold text-[#3BB77E]">Admin</span>, you have full control over the system — 
  you can <span className="font-semibold">add new products</span>, 
  <span className="font-semibold"> manage users</span>, and 
  <span className="font-semibold"> oversee product listings</span> to keep everything running smoothly.
</p>
    </div>
  );
};

export default AdminProfile;
