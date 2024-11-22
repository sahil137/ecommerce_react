import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const user = useSelector((store) => store?.user?.currentUser);

  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoutes;
