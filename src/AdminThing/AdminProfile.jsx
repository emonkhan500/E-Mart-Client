import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="px-2 lg:px-10  small:px-5 mt-10 md:mt-12">
      <h1 className="text-3xl small:text-3xl md:text-4xl font-bold mb-10 text-center">
        Hello <span className="text-primary-green">{user?.displayName}</span> !
      </h1>
      <p className="font-medium text-base small:text-lg">
        Welcome as one the Admin. This is Your dashboard . <br /> <br />
        As an <span className="font-semibold text-primary-green">Admin</span>,
        you have full control over the system — you can
        <span className="font-semibold text-primary-green ">
          add new products
        </span>
        ,<span className="font-semibold text-primary-green"> manage users</span>
        ,
        <span className="font-semibold text-primary-green"> manage orders</span>
        ,
        <span className="font-semibold text-primary-green">
          manage products
        </span>
        ,
        <span className="font-semibold text-primary-green">
          oversee product listings
        </span>
        to keep everything running smoothly.
      </p>
    </div>
  );
};

export default AdminProfile;
