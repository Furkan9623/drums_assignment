import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import { DELETE_USER_BOOKS } from "../Api/books-api";
import { ADD_FAV_BOOKS, DELETE_FAV_BOOKS } from "../Api/favbooks.api";
import { ADD_CART_BOOKS, DELETE_CART_BOOKS } from "../Api/cart-api";
export default function BookCard({
  book,
  getUserBooks,
  getFavBooks,
  getCartBooks,
}) {
  const { _id, title, author, image, description, price } = book;
  const deleteMyBooks = async () => {
    const result = await DELETE_USER_BOOKS(_id);
    const error = result?.response?.data?.message;
    return result?.status === 200
      ? (alert("Books Deleted"), getUserBooks?.())
      : alert(error);
  };

  const { id } = JSON.parse(localStorage.getItem("User")) || "";
  // add fav list
  const addToFavList = async () => {
    const result = await ADD_FAV_BOOKS({ ...book, user: id });
    console.log(result);
    const error = result?.response?.data?.message;
    return result?.status === 200
      ? alert("Books Added to Favourite")
      : alert(error);
  };
  // delete fav books
  const deleteFavBooks = async () => {
    const result = await DELETE_FAV_BOOKS(_id);
    const error = result?.response?.data?.message;
    return result?.status === 200
      ? (alert("Books Deleted"), getFavBooks?.())
      : alert(error);
  };

  // cart pade
  const addToCart = async () => {
    const result = await ADD_CART_BOOKS({ ...book, user: id });
    console.log(result);
    const error = result?.response?.data?.message;
    return result?.status === 200 ? alert("Books Added to Cart") : alert(error);
  };

  const deleteCartBooks = async () => {
    const result = await DELETE_CART_BOOKS(_id);
    const error = result?.response?.data?.message;
    return result?.status === 200
      ? (alert("Books Deleted"), getCartBooks?.())
      : alert(error);
  };
  return (
    <Card sx={{ width: "20vmax", height: "25vmax", paddingBottom: "3vmax" }}>
      <img src={image} width="100%" height="50%" alt="" />

      <Typography>Title : {title}</Typography>
      <Typography> Author : {author}</Typography>
      <Typography>Price : ₹ {price}</Typography>
      <CardContent>
        <Typography sx={{ textAlign: "left" }}>
          {description.slice(0, 70)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1vmax",
          }}
        >
          {getUserBooks || getFavBooks || getCartBooks ? (
            <Button
              variant="contained"
              size="small"
              color="error"
              fullWidth
              onClick={
                (getUserBooks && deleteMyBooks) ||
                (getFavBooks && deleteFavBooks) ||
                (getCartBooks && deleteCartBooks)
              }
              sx={{ fontWeight: "600" }}
            >
              DELETE BOOKS
            </Button>
          ) : (
            <>
              <Button variant="contained" size="small" onClick={addToCart}>
                ADD TO CART
              </Button>
              <Button variant="contained" size="small" onClick={addToFavList}>
                ADD TO FAVOURITE
              </Button>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
