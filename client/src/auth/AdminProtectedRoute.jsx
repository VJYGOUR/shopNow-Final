import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function AdminProtectedRoute() {
  const { user, loading } = useAuth();
  if (loading) {
    return <p>LOADING.....</p>;
  }
  if (user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export default AdminProtectedRoute;
