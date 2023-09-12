const { CreateError } = require("../middleware/ErrorHandle");
const FavModels = require("../models/favourite-schema");
const UserModel = require("../models/user-schema");
const mongoose = require("mongoose");
const ADD_FAV_CONTROLLER = async (req, res, next) => {
  const { user, title } = req.body;

  try {
    const existUser = await UserModel.findOne({ _id: user });
    if (!existUser)
      return next(CreateError("User not exist"), 500, "add fav control");
    const existBooks = await FavModels.findOne({ title });
    if (existBooks)
      return next(
        CreateError("Books already in fav list", 500, "fav controller")
      );
    const add_fav = new FavModels({ ...req.body });
    let session = await mongoose.startSession();
    session.startTransaction();
    existUser.FavBooks.push(add_fav);
    await existUser.save({ session });
    await add_fav.save({ session });
    await session.commitTransaction();
    return res.status(200).json({
      success: true,
      message: "successfull add to fav",
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "add fav controller"));
  }
};

const GET_FAV_BOOKS_CONTROLLER = async (req, res, next) => {
  const { id } = req.params;
  console.log("fav", id);
  try {
    const User = await UserModel.findOne({ _id: id }).populate("FavBooks");
    console.log(User);
    // const favBooks = await FavModels.find({});
    if (!User)
      return next(CreateError("not books available", 500, "get fav books"));
    return res.status(200).json({
      success: true,
      message: "all fav books",
      favBooks: User?.FavBooks,
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "get fav books"));
  }
};

const DELETE_FAV_BOOKS_CONTROL = async (req, res, next) => {
  const { id } = req.params;
  try {
    const DeleteFavBook = await FavModels.findByIdAndDelete({
      _id: id,
    }).populate("user");
    await DeleteFavBook?.user?.FavBooks?.pull(DeleteFavBook);
    await DeleteFavBook?.user.save();
    return res.status(200).json({
      success: true,
      message: "deleted success",
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "delete fav"));
  }
};
module.exports = {
  ADD_FAV_CONTROLLER,
  GET_FAV_BOOKS_CONTROLLER,
  DELETE_FAV_BOOKS_CONTROL,
};
