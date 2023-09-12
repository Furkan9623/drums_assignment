import { Box, CircularProgress } from "@mui/material";
const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "60vh",
        gap: "2rem",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Box>
  );
};
export default Spinner;
