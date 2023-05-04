import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("key");
  const checkAuthentication =
    isAuthenticated === process.env.REACT_APP_USER_KEY;
  return checkAuthentication ? <Outlet /> : <Navigate to="/admin" />;
};

export default PrivateRoute;
