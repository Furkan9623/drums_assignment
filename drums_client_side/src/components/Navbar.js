import {
  Box,
  Toolbar,
  AppBar,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginContext } from "../context/MyContext";
const Navbar = ({ loadingStatus }) => {
  const navigate = useNavigate();
  const { loginAuth, setLoginAuth } = useContext(loginContext);
  const LoginUser = () => {
    navigate("/login_signup");
    loadingStatus();
  };
  const LogoutUser = () => {
    localStorage.clear();
    setLoginAuth(false);
  };
  const User = JSON.parse(localStorage.getItem("User")) || "";

  // const { name, image } = User;
  return (
    <AppBar>
      <Box sx={{ padding: "0 4rem" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link className="link" to={"/"}>
            ALL BOOKS
          </Link>
          {loginAuth && (
            <Box sx={{ display: "flex", gap: "3vmax" }}>
              <Link
                className="link"
                onClick={() => loadingStatus()}
                to={"/my-books"}
              >
                MY BOOKS
              </Link>
              <Link
                className="link"
                onClick={() => loadingStatus()}
                to={"/fav-books"}
              >
                FAVOURITE BOOK
              </Link>
              <Link
                className="link"
                onClick={() => loadingStatus()}
                to={"/add-books"}
              >
                ADD OLD BOOKS
              </Link>
            </Box>
          )}
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {loginAuth && (
              <>
                <Typography>{User?.name}</Typography>
                <Avatar src={User?.image}>{User?.name?.[0]}</Avatar>
                <Link
                  className="link"
                  onClick={() => loadingStatus()}
                  to={"/cart-books"}
                >
                  CART
                </Link>
              </>
            )}
            <Button
              variant="contained"
              color={loginAuth ? "error" : "secondary"}
              size="small"
              onClick={loginAuth ? LogoutUser : LoginUser}
            >
              {loginAuth ? "LOGOUT" : "LOGIN / SIGNUP"}
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;
