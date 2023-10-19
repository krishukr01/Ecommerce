/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
const RequireAuth = ({ children }) => {
  let isUserLogin = true;
  return isUserLogin ? children : <Navigate to="/login" replace={true} />;
};

export default RequireAuth;
