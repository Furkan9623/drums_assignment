const express = require("express");
const {
  GET_ALL_BOOKS_CONTROLLER,
} = require("../controllers/all-books-controller");
const books_router = express.Router();
// get books
books_router.get("/get-books", GET_ALL_BOOKS_CONTROLLER);
module.exports = books_router;
