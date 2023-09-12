const BookArray = require("../BookArray");
const { CreateError } = require("../middleware/ErrorHandle");
// console.log(BookArray);
const AllBooksModel = require("../models/all-books-schema");
const ADD_ALL_BOOKS = async () => {
  try {
    let book = await AllBooksModel.insertMany(BookArray);
  } catch (error) {
    console.log("duplicate prevent");
  }
};

const GET_ALL_BOOKS_CONTROLLER = async (req, res, next) => {
  const { author, genres, title } = req?.query || "";
  console.log(genres);
  console.log(author);
  let filter = {};

  if (author && author !== "All") {
    filter.author = author;
  }

  if (genres && genres !== "All") {
    filter.genres = genres;
  }

  if (title) {
    filter.title = { $regex: title, $options: "i" };
  }

  try {
    const getAllBooks = await AllBooksModel.find(filter);
    console.log(getAllBooks);
    if (!getAllBooks)
      return next(CreateError("No Books found", 500, "all books cont"));
    return res.status(200).json({
      success: true,
      message: "fet all books",
      all_books: getAllBooks,
    });
  } catch (error) {
    return next(CreateError(error.messag, 500, "get books contr"));
  }
};
module.exports = { ADD_ALL_BOOKS, GET_ALL_BOOKS_CONTROLLER };
