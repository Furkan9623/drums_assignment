import { Routes, Route } from "react-router-dom";
import Login_Signup from "../pages/Login_Signup";
import PrivateRoutes from "./PrivateRoutes";
import AllBooks from "../pages/All_Books";
import MyBooks from "../pages/My_Books";
import FavouriteBooks from "../pages/Favourite_Books";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Spinner from "../components/Spinner";
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
        </Route>
      </Routes>
    </>
  );
};
export default AllRoutes;
