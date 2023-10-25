/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
export const RequireAuth = ({ children }) => {
  const isUserLogin = true;
  return isUserLogin ? children : <Navigate to="/login" replace={true} />;
};
