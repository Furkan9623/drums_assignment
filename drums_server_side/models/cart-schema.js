const mongoose = require("mongoose");
const cart_schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title are required"],
    },
    author: { type: String, required: [true, "Author name required"] },
    description: { type: String, required: [true, "summary requied"] },
    image: { type: String, required: [true, "image is required"] },
    genres: { type: String, required: [true, "generes are required"] },
    price: { type: String, required: [true, "price are required"] },
    user: { type: mongoose.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);
const CartModels = mongoose.model("cart", cart_schema);
module.exports = CartModels;
