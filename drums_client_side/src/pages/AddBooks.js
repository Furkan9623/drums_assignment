import {
  Box,
  TextField,
  Typography,
  Button,
  TextareaAutosize,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADD_BOOKS } from "../Api/books-api";

const AddBooks = () => {
  const { id } = JSON.parse(localStorage.getItem("User")) || { id: "" };
  const initValue = {
    title: "",
    author: "",
    description: "",
    genres: "",
    price: "",
    user: id,
  };
  const [formInput, setFormInput] = useState(initValue);
  const [file, setFiles] = useState("");
  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  // form craate
  const formData = new FormData();
  formData.append("bookImage", file);
  formData.append("Books", JSON.stringify(formInput));
  const navigate = useNavigate();
  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(Object.fromEntries(formData));
    const result = await ADD_BOOKS(formData);
    const error = result?.response?.data?.message;
    return result?.status === 200
      ? (alert("Books Added"), navigate("/my-books"))
      : alert(error);
  };

  return (
    <form onSubmit={formSubmit}>
      <Box
        sx={{
          width: "40vmax",
          display: "flex",
          boxShadow: "0 0 10px grey",
          padding: "2rem",
          flexDirection: "column",
          gap: "1rem",
          borderRadius: "5px",
          margin: "6rem auto",
        }}
      >
        <Typography
          sx={{
            fontSize: "2.2vw",
            fontWeight: "600",
            color: "purple",
          }}
        >
          ADD BOOKS
        </Typography>
        <TextField
          label="Enter Title"
          name="title"
          size="small"
          onChange={handleChange}
        />
        <TextField
          label="Enter Author name"
          name="author"
          size="small"
          onChange={handleChange}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Genere</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Generes"
            style={{ textAlign: "left" }}
            name="genres"
            onChange={handleChange}
          >
            <MenuItem value="abc">Ten</MenuItem>
            <MenuItem value="abc">Twenty</MenuItem>
            <MenuItem value="abc">Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Enter Price"
          name="price"
          size="small"
          onChange={handleChange}
        />
        <TextareaAutosize
          placeholder="Type Description"
          minRows={4}
          name="description"
          onChange={handleChange}
          style={{ padding: "15px", resize: "vertical" }}
        />
        <Box
          style={{
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            height: "2rem",
            gap: "0.5vw",
          }}
        >
          <label htmlFor="input-file">
            <AddCircleOutlineIcon color="success" sx={{ fontSize: "2.5rem" }} />
            <input
              type="file"
              size="small"
              id="input-file"
              onChange={(e) => setFiles(e.target.files[0])}
              style={{ display: "none" }}
            />
          </label>
          <span>{file?.name || "Choose Files"}</span>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "50%", margin: "auto", fontWeight: "600" }}
          type="submit"
        >
          ADD BOOKS
        </Button>
      </Box>
    </form>
  );
};
export default AddBooks;
