const { SEND_OTP_MAIL } = require("../config/mail-config");
const { HashPassword } = require("../helpers/hash-password");
const { CreateError } = require("../middleware/ErrorHandle");
const UserModel = require("../models/user-schema");

const FORGOT_PASSWORD_CONTROLLER = async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  if (!email)
    return next(
      CreateError("Please fill the details", 400, "forgot controller")
    );
  try {
    const existUser = await UserModel.findOne({ email });
    if (!existUser)
      return next(CreateError("User not found", 500, "forgot controller"));
    let otp = Math.floor(Math.random() * 9000) + 1000;
    let createExpTime = Date.now() + 2 * 60 * 1000;
    let updateData = await UserModel.findOneAndUpdate(
      { email },
      { $set: { "Otp.otpCode": otp, "Otp.expiresTime": createExpTime } },
      { new: true }
    );
    let sendMail = await SEND_OTP_MAIL(email, otp);
    return res.status(200).json({
      success: true,
      message: "set otp",
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "forgot controller"));
  }
};

const RESET_PASSWORD_CONTROLLER = async (req, res, next) => {
  const { otp, newPassword, email } = req.body;
  if (!otp || !newPassword || !email)
    return next(
      CreateError("Please fill all the detauls..", 500, "reset controller")
    );

  try {
    const existUser = await UserModel.findOne({ email });
    if (!existUser)
      return next(CreateError("User not exist", 500, "reset controller"));
    if (otp !== existUser?.Otp?.otpCode)
      return next(CreateError("Wrong otp", 500, "reset controller"));
    let currentTime = Date.now();
    let diff = existUser?.Otp?.expiresTime - currentTime;
    if (diff < 0)
      return next(CreateError("Otp expired", 500, "reset controller"));
    const hash_password = await HashPassword(newPassword);
    const updateData = await UserModel.findOneAndUpdate(
      { email },
      { $set: { password: hash_password }, $unset: { Otp: 1 } },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "password change successfull",
    });
  } catch (error) {
    return next(CreateError(error.message, 500, "resetn controller"));
  }
};
module.exports = { FORGOT_PASSWORD_CONTROLLER, RESET_PASSWORD_CONTROLLER };
