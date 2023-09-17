import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import BookCard from "../components/Card";
import { DELETE_ALL_CARTITEM, GET_ALL_CART_BOOKS } from "../Api/cart-api";

const CartBooks = () => {
  const [cartBooks, setCartBooks] = useState([]);

  const { id } = JSON.parse(localStorage.getItem("User")) || "";
  const getCartBooks = async () => {
    const result = await GET_ALL_CART_BOOKS(id);
    console.log(result);
    const res = result?.data?.cartBooks;
    const error = result?.response?.data?.message;
    return result?.status === 200 ? setCartBooks(res) : alert(error);
  };

  useEffect(() => {
    getCartBooks();
  }, []);

  const deleteAllItem = async () => {
    const result = await DELETE_ALL_CARTITEM(id);
    console.log(result);
    const error = result?.response?.data?.message;
    return result?.status === 200
      ? alert("Delete all item", getCartBooks())
      : alert();
  };

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
      {cartBooks?.length > 0 && (
        <>
          {cartBooks?.length > 0 && <h1>Total Price : ₹ {totalPrice}</h1>}
          <Button
            onClick={deleteAllItem}
            variant="contained"
            color="error"
            size="small"
            sx={{ width: "30%", margin: "10px", fontWeight: "bold" }}
          >
            REMOVE ALL ITEM
          </Button>
        </>
      )}
    </Box>
  );
};

export default CartBooks;
