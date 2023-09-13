import { Routes, Route } from "react-router-dom";
import Login_Signup from "../pages/Login_Signup";
import PrivateRoutes from "./PrivateRoutes";
import AllBooks from "../pages/All_Books";
import MyBooks from "../pages/My_Books";
import FavouriteBooks from "../pages/Favourite_Books";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Spinner from "../components/Spinner";
import AddBooks from "../pages/AddBooks";
import Cart from "../pages/Cart";
import CartBooks from "../pages/Cart";
import ForgotPassword from "../pages/forgot-password/ForgotPassword";
import ResetPassword from "../pages/forgot-password/ResetPassword";
const AllRoutes = () => {
  const [loading, setLoading] = useState(false);
  function loadingStatus() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  return (
    <>
      <Navbar loadingStatus={loadingStatus} />
      <Routes>
        <Route
          path="/login_signup"
          element={loading ? <Spinner /> : <Login_Signup />}
        />
        <Route path="/" element={<AllBooks />} />
        <Route element={<PrivateRoutes />}>
          <Route
            path="/my-books"
            element={loading ? <Spinner /> : <MyBooks />}
          />
          <Route
            path="/fav-books"
            element={loading ? <Spinner /> : <FavouriteBooks />}
          />
          <Route
            path="/add-books"
            element={loading ? <Spinner /> : <AddBooks />}
          />
          <Route
            path="/cart-books"
            element={loading ? <Spinner /> : <CartBooks />}
          />
        </Route>
        <Route
          path="/forgot"
          element={loading ? <Spinner /> : <ForgotPassword />}
        />
        <Route
          path="/reset/:email"
          element={loading ? <Spinner /> : <ResetPassword />}
        />
      </Routes>
    </>
  );
};
export default AllRoutes;
