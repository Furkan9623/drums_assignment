const mongoose = require("mongoose");
const all_books_schema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "Title are required"],
    },
    author: { type: String, required: [true, "Author name required"] },
    description: { type: String, required: [true, "summary requied"] },
    image: { type: String, required: [true, "image is required"] },
    genres: { type: String, required: [true, "generes are required"] },
    price: { type: String, required: [true, "price are required"] },
  },
  { timestamps: true }
);
const AllBooksModel = mongoose.model("allbook", all_books_schema);
module.exports = AllBooksModel;
