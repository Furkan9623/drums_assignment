import { Box, Typography, Button, TextField } from "@mui/material";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Forogt_Password } from "../../Api/forgot-pass-api";
const ForgotPassword = () => {
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const forgotFormSubmit = async (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    const result = await Forogt_Password(email);
    const error = result?.response?.data?.message;
    console.log(result);
    return result.status === 200
      ? (alert("Otp send on you mail Id"), navigate(`/reset/${email}`))
      : alert(error);
  };
  return (
    <form onSubmit={forgotFormSubmit}>
      <Box
        sx={{
          width: "25%",
          padding: "2rem",
          boxShadow: "0 10px 10px  grey",
          display: "flex",
          flexDirection: "column",
          margin: " auto",
          gap: "1.5rem",
        }}
      >
        <Typography
          sx={{
            background: "grey",
            color: "white",
            padding: ".5rem",
            fontSize: "2vmax",
          }}
        >
          FORGOT PASSWORD
        </Typography>
        <TextField
          variant="standard"
          name="email"
          label="Enter email"
          size="small"
          inputRef={emailRef}
          //   onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          size="small"
          color="secondary"
          type="submit"
          sx={{ fontWeight: "600", fontSize: ".9vmax" }}
        >
          SUBMIT
        </Button>

        <Typography>
          Back To Login{" "}
          <Button
            size="small"
            sx={{ fontWeight: "600" }}
            LinkComponent={Link}
            to="/login_signup"
          >
            Click
          </Button>
        </Typography>
      </Box>
    </form>
  );
};
export default ForgotPassword;
