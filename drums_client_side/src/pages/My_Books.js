import { USER_BOOKS } from "../Api/books-api";
import { useContext, useEffect, useState } from "react";
import BookCard from "../components/Card";
import { Box, Typography } from "@mui/material";
import Spinner from "../components/Spinner";
import { loadingContext } from "../context/MyContext";
const MyBooks = () => {
  const [myBooks, setMyBooks] = useState([]);

  const { loading, setLoading } = useContext(loadingContext);
  const { id } = JSON.parse(localStorage.getItem("User")) || "";
  const getUserBooks = async () => {
    setLoading(true);
    const result = await USER_BOOKS(id);
    console.log(result);
    setLoading(false);
    const res = result?.data?.user_books?.Books;
    const error = result?.response?.data?.message;
    return result?.status === 200 ? setMyBooks(res) : alert(error);
  };
  useEffect(() => {
    getUserBooks();
  }, []);

  return (
    <Box>
      <Typography variant="h5" sx={{ marginBottom: "2rem", fontWeight: "600" }}>
        MY BOOKS
      </Typography>
      <>
        <Box>
          {loading ? (
            <Spinner />
          ) : (
            <>
              {myBooks?.length > 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "3vmax",
                    justifyContent: "center",
                  }}
                >
                  {myBooks?.map((elem) => {
                    return (
                      <BookCard
                        book={elem}
                        getUserBooks={getUserBooks}
                        key={elem?._id}
                      />
                    );
                  })}
                </Box>
              ) : (
                <h1>Books Not found</h1>
              )}
            </>
          )}
        </Box>
      </>
    </Box>
  );
};
export default MyBooks;
