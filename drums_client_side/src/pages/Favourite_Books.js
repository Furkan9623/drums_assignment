import { DELETE_ALL_FAVBOOKS, GET_ALL_FAV_BOOKS } from "../Api/favbooks.api";
import { useContext, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import BookCard from "../components/Card";
import { loadingContext } from "../context/MyContext";
import Spinner from "../components/Spinner";

const FavouriteBooks = () => {
  const [favBooks, setFavBooks] = useState([]);
  const { loading, setLoading, loadingStatus } = useContext(loadingContext);
  const getFavBooks = async () => {
    setLoading(true);
    const { id } = JSON.parse(localStorage.getItem("User")) || "";
    const result = await GET_ALL_FAV_BOOKS(id);
    setLoading(false);
    console.log(result);
    const res = result?.data?.favBooks;
    const error = result?.response?.data?.message;
    return result?.status === 200 ? setFavBooks(res) : alert(error);
  };
  useEffect(() => {
    getFavBooks();
  }, []);
  const { id } = JSON.parse(localStorage.getItem("User")) || "";
  const removeAllItem = async () => {
    setLoading(true);
    const result = await DELETE_ALL_FAVBOOKS(id);
    setLoading(false);
    const error = result?.response?.data?.message;
    return result?.status === 200
      ? (alert("delte all item"), getFavBooks())
      : alert(error);
  };
  return (
    <Box>
      <Typography variant="h5" sx={{ marginBottom: "2rem", fontWeight: "600" }}>
        MY FAVOURITE BOOKS
      </Typography>
      <Box>
        {loading ? (
          <Spinner />
        ) : (
          <>
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
              <>
                <h1>Books Not found</h1>
              </>
            )}
          </>
        )}
        {favBooks?.length > 0 && (
          <Button
            onClick={removeAllItem}
            variant="contained"
            color="error"
            size="small"
            sx={{ width: "30%", margin: "10px", fontWeight: "bold" }}
          >
            REMOVE ALL ITEM
          </Button>
        )}
      </Box>
    </Box>
  );
};
export default FavouriteBooks;
