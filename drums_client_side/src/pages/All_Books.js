import { useContext, useEffect, useState } from "react";
import { GET_ALL_BOOKS } from "../Api/books-api";
import {
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import BookCard from "../components/Card";
import { loadingContext } from "../context/MyContext";
import Spinner from "../components/Spinner";
const AllBooks = () => {
  const [Books, setBooks] = useState([]);
  const [priceInput, setPriceInput] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [genres, setGeneres] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, setLoading } = useContext(loadingContext);
  const getAllBooks = async () => {
    setLoading(true);
    const result = await GET_ALL_BOOKS(nameFilter, genres, searchQuery);
    setLoading(false);
    const res = result?.data?.all_books;
    const err = result?.response?.data?.message;
    return result?.status === 200 ? setBooks(res) : alert(err);
  };
  useEffect(() => {
    getAllBooks();
  }, [nameFilter, genres, searchQuery]);

  console.log(genres);
  // price sorting
  const handlePriceChange = (e) => {
    setPriceInput(e.target.value);
    console.log(e.target.value);
  };

  let copyArray = [...Books];
  copyArray = copyArray.sort((a, b) => {
    if (priceInput === "Default") return;
    if (priceInput === "LTH") return a.price - b.price;
    if (priceInput === "HTL") return b.price - a.price;
  });

  // debouncing
  const Debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const magicFunc = Debounce(handleChange, 1000);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          paddingBottom: "2rem",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          flexDirection: "column",
          width: "50%",

          margin: "auto",
        }}
      >
        <TextField
          onChange={magicFunc}
          label="Search By Title"
          size="small"
          fullWidth
        />
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <FormControl sx={{ width: "15vmax" }} size="small">
            <InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Sort By Price"
              size="small"
              onChange={handlePriceChange}
            >
              <MenuItem value="Default">Default</MenuItem>
              <MenuItem value="LTH">LOW TO HIGH</MenuItem>
              <MenuItem value="HTL">HIGH TO LOW</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "15vmax" }}>
            <InputLabel id="demo-simple-select-label" size="small">
              Filter By Author
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Filter By Author"
              size="small"
              onChange={(e) => setNameFilter(e.target.value)}
            >
              <MenuItem value="All">ALL</MenuItem>
              <MenuItem value="Charlotte Brontë">Charlotte Brontë</MenuItem>
              <MenuItem value="Orson Scott Card">Orson Scott Card</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "15vmax" }} size="small">
            <InputLabel id="demo-simple-select-label">
              Filter By Generes
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Filter By Author"
              size="small"
              onChange={(e) => setGeneres(e.target.value)}
            >
              <MenuItem value="All">ALL</MenuItem>
              <MenuItem value="Fiction">Fiction</MenuItem>
              <MenuItem value="Fiction, Fantasy, Young Adult">
                Fiction, Fantasy, Young Adult
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {loading ? (
        <Spinner />
      ) : (
        <>
          {copyArray?.length > 0 ? (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "3vmax",
                justifyContent: "center",
              }}
            >
              {copyArray?.map((elem) => {
                return <BookCard book={elem} key={elem._id} />;
              })}
            </Box>
          ) : (
            <h1>Books Not found</h1>
          )}
        </>
      )}
    </Box>
  );
};
export default AllBooks;
