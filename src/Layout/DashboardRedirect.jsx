import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const DashboardRedirect = () => {
  const { role, loading } = useContext(AuthContext);

  if (loading) return null;

  if (role === "admin") {
    return <Navigate to="/dashboard/adminprofile" replace />;
  }

  return <Navigate to="/dashboard/userprofile" replace />;
};

export default DashboardRedirect;