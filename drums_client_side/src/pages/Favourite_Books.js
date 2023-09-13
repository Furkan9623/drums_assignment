import { GET_ALL_FAV_BOOKS } from "../Api/favbooks.api";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import BookCard from "../components/Card";

const FavouriteBooks = ({ loadingStatus }) => {
  const [favBooks, setFavBooks] = useState([]);

  const getFavBooks = async () => {
    const { id } = JSON.parse(localStorage.getItem("User")) || "";
    const result = await GET_ALL_FAV_BOOKS(id);
    console.log(result);
    const res = result?.data?.favBooks;
    const error = result?.response?.data?.message;
    return result?.status === 200 ? setFavBooks(res) : alert(error);
  };
  useEffect(() => {
    getFavBooks();
  }, []);
  return (
    <Box>
      <Typography variant="h5" sx={{ marginBottom: "2rem", fontWeight: "600" }}>
        MY FAVOURITE BOOKS
      </Typography>
      <Box>
        {favBooks?.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "3vmax",
              justifyContent: "center",
            }}
          >
            {favBooks?.map((elem) => {
              return (
                <BookCard
                  book={elem}
                  getFavBooks={getFavBooks}
                  loadingStatus={loadingStatus}
                  key={elem?._id}
                />
              );
            })}
          </Box>
        ) : (
          <h1>Books Not found</h1>
        )}
      </Box>
    </Box>
  );
};
export default FavouriteBooks;
