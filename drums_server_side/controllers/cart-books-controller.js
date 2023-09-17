const { CreateError } = require("../middleware/ErrorHandle");
const CartModels = require("../models/cart-schema");
const FavModels = require("../models/favourite-schema");
const UserModel = require("../models/user-schema");
const mongoose = require("mongoose");
const ADD_CART_CONTROLLER = async (req, res, next) => {
  const { user, title } = req.body;
  console.log(req.body);
  const { _id, ...dataWithoutId } = req.body;
  console.log("withoutId", dataWithoutId);
  try {
    const existUser = await UserModel.findOne({ _id: user }).populate(
      "CartBooks"
    );

    if (!existUser)
      return next(CreateError("User not exist"), 500, "add fav control");
    const existBooks = existUser.CartBooks.find((elem) => elem.title === title);
    if (existBooks)
      return next(
        CreateError("Books already in Cart list", 500, "cart controller")
      );
    const add_cart = new CartModels(dataWithoutId);
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

const DELETE_ALL_CART_CONTROLLER = async (req, res, next) => {
  const { id } = req.params;
  try {
    const existUser = await UserModel.findOne({ _id: id }).populate(
      "CartBooks"
    );
    if (!existUser)
      return next(
        CreateError("User not exist", 500, "delete all cart controller")
      );
    const cartList = existUser?.CartBooks;
    existUser.CartBooks = [];
    let allCartBookId = cartList.map((elem) => elem._id);
    await CartModels.deleteMany({ _id: { $in: allCartBookId } });
    return res.status(200).json({
      success: true,
      message: "delete all cart item",
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "delete all"));
  }
};
module.exports = {
  ADD_CART_CONTROLLER,
  GET_CART_BOOKS_CONTROLLER,
  DELETE_CART_BOOKS_CONTROL,
  DELETE_ALL_CART_CONTROLLER,
};
