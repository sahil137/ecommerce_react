import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = useSelector((store) => store?.user?.currentUser);

  return user ? <Outlet /> : <Navigate to="/register" replace />;
};

export default ProtectedRoutes;
