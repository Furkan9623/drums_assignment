import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { loginContext } from "../context/MyContext";

const PrivateRoutes = () => {
  const { loginAuth } = useContext(loginContext);
  return loginAuth ? <Outlet /> : <Navigate to={"/login_signup"} />;
};

export default PrivateRoutes;
