import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

function PrivateRoute({ children }) {
  const { authIsReady } = useAuthContext();
  return authIsReady ? <Navigate to="/" /> : children;
}
export default PrivateRoute;
