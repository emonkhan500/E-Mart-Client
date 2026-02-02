import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="px-5">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Hello <span className="text-primary-green">{user?.displayName}</span> !
      </h1>
      <p className="font-medium text-lg">
        Welcome as one the Admin. This is Your dashboard . <br />
        <br />
        As an <span className="font-semibold text-primary-green">Admin</span>,
        you have full control over the system — you can{" "}
        <span className="font-semibold">add new products</span>,
        <span className="font-semibold text-primary-green"> manage users</span>,
        <span className="font-semibold text-primary-green"> manage orders</span>
        ,
        <span className="font-semibold text-primary-green">
          {" "}
          manage products
        </span>
        ,
        <span className="font-semibold text-primary-green">
          {" "}
          oversee product listings
        </span>{" "}
        to keep everything running smoothly.
      </p>
    </div>
  );
};

export default AdminProfile;
