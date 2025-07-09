import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";

const PrivateRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
