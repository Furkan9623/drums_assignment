import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import BookCard from "../components/Card";
import { GET_ALL_CART_BOOKS } from "../Api/cart-api";

const CartBooks = () => {
  const [cartBooks, setCartBooks] = useState([]);

  const getCartBooks = async () => {
    const { id } = JSON.parse(localStorage.getItem("User")) || "";
    const result = await GET_ALL_CART_BOOKS(id);
    console.log(result);
    const res = result?.data?.cartBooks;
    const error = result?.response?.data?.message;
    return result?.status === 200 ? setCartBooks(res) : alert(error);
  };
  useEffect(() => {
    getCartBooks();
  }, []);

  const totalPrice = cartBooks.reduce((acc, current) => {
    return acc + parseInt(current.price);
  }, 0);
  return (
    <Box>
      <Typography variant="h5" sx={{ marginBottom: "2rem", fontWeight: "600" }}>
        MY CART BOOKS
      </Typography>
      <Box>
        {cartBooks?.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "3vmax",
              justifyContent: "center",
            }}
          >
            {cartBooks?.map((elem) => {
              return (
                <BookCard
                  book={elem}
                  getCartBooks={getCartBooks}
                  key={elem?._id}
                />
              );
            })}
          </Box>
        ) : (
          <h1>Books Not found</h1>
        )}
      </Box>
      {cartBooks?.length > 0 && <h1>Total Price : ₹ {totalPrice}</h1>}
    </Box>
  );
};

export default CartBooks;
