const FileUploadOnCloudinary = require("../config/cloudinary-config");
const { CreateError } = require("../middleware/ErrorHandle");
const AllBooksModel = require("../models/all-books-schema");
const UserModel = require("../models/user-schema");
const mongoose = require("mongoose");
const ADD_BOOK_CONTROLLER = async (req, res, next) => {
  const body = JSON.parse(req.body.Books);
  console.log(body);
  const { user } = body;
  console.log(body);
  const { bookImage } = req.files || "";
  try {
    const existUser = await UserModel.findById({ _id: user });
    const imageUrl = await FileUploadOnCloudinary(bookImage, "Books Image");
    const add_books = new AllBooksModel({
      ...body,
      image: imageUrl?.url,
    });
    let session = await mongoose.startSession();
    session.startTransaction();
    existUser.Books.push(add_books);
    await existUser.save({ session });
    await add_books.save({ session });
    await session.commitTransaction();
    return res.status(200).json({
      success: true,
      message: "blog created",
      Books: add_books,
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "add books controller"));
  }
};

const GET_USER_BOOKS = async (req, res, next) => {
  const { id } = req.params;
  if (!id)
    return next(CreateError("id not found", 400, "user books controller"));
  try {
    const user_books = await UserModel.findOne({ _id: id }).populate("Books");
    if (!user_books)
      return next(CreateError("blog not found", 500, "user books controller"));
    return res.status(200).json({
      success: true,
      message: "user books",
      user_books,
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "user books controller"));
  }
};

const DELETE_BOOKS_CONTROLLER = async (req, res, next) => {
  const { id } = req.params;
  try {
    const UserBooks = await AllBooksModel.findByIdAndDelete({
      _id: id,
    }).populate("user");
    await UserBooks?.user?.Books.pull(UserBooks);
    await UserBooks?.user?.save();
    return res.status(200).json({
      success: true,
      message: "delete books",
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "dlete books control"));
  }
};
module.exports = {
  ADD_BOOK_CONTROLLER,
  GET_USER_BOOKS,
  DELETE_BOOKS_CONTROLLER,
};
