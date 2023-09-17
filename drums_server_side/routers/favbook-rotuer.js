const express = require("express");
const {
  ADD_FAV_CONTROLLER,
  GET_FAV_BOOKS_CONTROLLER,
  DELETE_FAV_BOOKS_CONTROL,
  DELETE_ALL_FAV_BOOKS_CONTROLLER,
} = require("../controllers/fav-books-controller");

const fav_router = express.Router();
fav_router.post("/add-favbooks", ADD_FAV_CONTROLLER);
fav_router.get("/get-favbooks/:id", GET_FAV_BOOKS_CONTROLLER);
fav_router.delete("/del-favbooks/:id", DELETE_FAV_BOOKS_CONTROL);
fav_router.patch("/del-allfavbooks/:id", DELETE_ALL_FAV_BOOKS_CONTROLLER);
module.exports = fav_router;
