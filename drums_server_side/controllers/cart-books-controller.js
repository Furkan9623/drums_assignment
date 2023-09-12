const { CreateError } = require("../middleware/ErrorHandle");
const CartModels = require("../models/cart-schema");
const FavModels = require("../models/favourite-schema");
const UserModel = require("../models/user-schema");
const mongoose = require("mongoose");
const ADD_CART_CONTROLLER = async (req, res, next) => {
  const { user, title } = req.body;

  try {
    const existUser = await UserModel.findOne({ _id: user });
    if (!existUser)
      return next(CreateError("User not exist"), 500, "add fav control");
    const existBooks = await CartModels.findOne({ title });
    if (existBooks)
      return next(
        CreateError("Books already in Cart list", 500, "cart controller")
      );
    const add_cart = new CartModels({ ...req.body });
    let session = await mongoose.startSession();
    session.startTransaction();
    existUser.CartBooks.push(add_cart);
    await existUser.save({ session });
    await add_cart.save({ session });
    await session.commitTransaction();
    return res.status(200).json({
      success: true,
      message: "successfull add to cart",
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "add cart controller"));
  }
};

const GET_CART_BOOKS_CONTROLLER = async (req, res, next) => {
  const { id } = req.params;
  try {
    const User = await UserModel.findOne({ _id: id }).populate("CartBooks");
    if (!User)
      return next(CreateError("not books available", 500, "get cart books"));
    return res.status(200).json({
      success: true,
      message: "all fav books",
      cartBooks: User?.CartBooks,
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "get cart books"));
  }
};

const DELETE_CART_BOOKS_CONTROL = async (req, res, next) => {
  const { id } = req.params;
  try {
    const DeletecartBook = await CartModels.findByIdAndDelete({
      _id: id,
    }).populate("user");
    await DeletecartBook?.user?.CartBooks?.pull(DeletecartBook);
    await DeletecartBook?.user.save();
    return res.status(200).json({
      success: true,
      message: "deleted success",
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "delete cart"));
  }
};
module.exports = {
  ADD_CART_CONTROLLER,
  GET_CART_BOOKS_CONTROLLER,
  DELETE_CART_BOOKS_CONTROL,
};
