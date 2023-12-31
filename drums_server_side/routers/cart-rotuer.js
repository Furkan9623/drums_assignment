const express = require("express");
const {
  ADD_CART_CONTROLLER,
  GET_CART_BOOKS_CONTROLLER,
  DELETE_CART_BOOKS_CONTROL,
  DELETE_ALL_CART_CONTROLLER,
} = require("../controllers/cart-books-controller");

const cart_router = express.Router();
cart_router.post("/add-cartbooks", ADD_CART_CONTROLLER);
cart_router.get("/get-cartbooks/:id", GET_CART_BOOKS_CONTROLLER);
cart_router.delete("/del-cartbooks/:id", DELETE_CART_BOOKS_CONTROL);
cart_router.patch("/del-all-cartbooks/:id", DELETE_ALL_CART_CONTROLLER);
module.exports = cart_router;
