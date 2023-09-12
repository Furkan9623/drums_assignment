const express = require("express");
const {
  GET_ALL_BOOKS_CONTROLLER,
} = require("../controllers/all-books-controller");
const {
  ADD_BOOK_CONTROLLER,
  GET_USER_BOOKS,
  DELETE_BOOKS_CONTROLLER,
} = require("../controllers/add-books-controller");
const books_router = express.Router();
// get books
books_router.get("/get-books", GET_ALL_BOOKS_CONTROLLER);
// add new books
books_router.post("/add-books", ADD_BOOK_CONTROLLER);
// user books get
books_router.get("/user-books/:id", GET_USER_BOOKS);
// delete books
books_router.delete("/delete-books/:id", DELETE_BOOKS_CONTROLLER);
module.exports = books_router;
