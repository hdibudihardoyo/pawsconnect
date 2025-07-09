import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";

const PublicRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoutes;
