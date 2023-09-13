const mongoose = require("mongoose");
const user_schema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: { type: String, required: [true, "Email is required"] },
    imageUrl: { type: String },
    password: { type: String, required: [true, "Pass is required"] },
    Books: [{ type: mongoose.Schema.Types.ObjectId, ref: "allbook" }],
    FavBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "favbook" }],
    CartBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "cart" }],
    Otp: { otpCode: String, expiresTime: Number },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", user_schema);
module.exports = UserModel;
