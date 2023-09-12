const FileUploadOnCloudinary = require("../config/cloudinary-config");
const { HashPassword } = require("../helpers/hash-password");
const { CreateError } = require("../middleware/ErrorHandle");
const UserModel = require("../models/user-schema");

const REGISTER_USER_CONTROLLER = async (req, res, next) => {
  const body = JSON.parse(req.body.user);
  const { name, email, password } = body;
  const { image } = req.files || "";
  console.log(image);
  // if (image?.mimetype !== "image/jpeg")
  //   return next(CreateError("Please upload jpg format", 500, "reg controll"));
  if (!name || !email || !password)
    return next(
      CreateError("Please fill all the details.", 500, "register controller")
    );
  try {
    const existUser = await UserModel.findOne({ email });
    if (existUser)
      return next(CreateError("User already exist", 500, "reg controller"));
    const imageUplod =
      image && (await FileUploadOnCloudinary(image, "UserProfile"));
    const hashPassword = await HashPassword(password);
    const newUser = new UserModel({
      ...body,
      password: hashPassword,
      imageUrl: imageUplod?.url,
    });
    await newUser.save();
    return res.status(200).json({
      success: true,
      message: "user register successfull",
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "reg contro"));
  }
};
const LOGIN_USER_CONTROLLER = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existUser = await UserModel.findOne({ email });
    if (!existUser)
      return next(CreateError("User not exist", 500, "login cntroler"));
    const matchPassword = await HashPassword(existUser?.password);
    if (!matchPassword)
      return next(CreateError("Wrong credential", 400, "login controller"));
    return res.status(200).json({
      success: true,
      message: "User login successfull",
      User: { name: existUser?.name, image: existUser?.imageUrl },
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "login controller"));
  }
};
module.exports = { REGISTER_USER_CONTROLLER, LOGIN_USER_CONTROLLER };
