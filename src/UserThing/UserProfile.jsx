import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="px-0 lg:px-10  small:px-5 mt-10 md:mt-12">
      <h1 className="text-3xl small:text-3xl md:text-4xl font-bold mb-10 text-center">
        Hello <span className="text-primary-green">{user?.displayName}</span> !
      </h1>
      <p className="font-medium text-base small:text-lg">
        From your account dashboard. you can easily check & view your recent
        orders, manage your shipping and billing addresses and edit your
        password and account details.
      </p>
    </div>
  );
};

export default UserProfile;
