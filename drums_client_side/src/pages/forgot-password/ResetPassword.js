import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Reset_Password } from "../../Api/forgot-pass-api";

const ResetPassword = () => {
  const [formInput, setFormInput] = useState({ otp: "", newPassword: "" });
  const { email } = useParams();
  const navigate = useNavigate();
  const handleFormInput = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const resetFormSubmit = async (e) => {
    e.preventDefault();
    const cleanOtp = formInput?.otp?.replace(/\s/g, "");
    console.log({ ...formInput, email });
    const result = await Reset_Password({ ...formInput, otp: cleanOtp, email });
    console.log(result);
    const error = result?.response?.data?.message;
    return result?.status === 200
      ? (alert("Password changed"), navigate("/login_signup"))
      : alert(error);
  };
  return (
    <form onSubmit={resetFormSubmit}>
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
          SET NEW PASSWORD
        </Typography>

        <TextField
          variant="standard"
          name="otp"
          label="Enter otp"
          size="small"
          onChange={handleFormInput}
        />
        <TextField
          variant="standard"
          name="newPassword"
          label="Enter new password"
          size="small"
          onChange={handleFormInput}
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
          Back To Forgot{" "}
          <Button
            size="small"
            sx={{ fontWeight: "600" }}
            LinkComponent={Link}
            to="/forgot"
          >
            Click
          </Button>
        </Typography>
      </Box>
    </form>
  );
};

export default ResetPassword;
