const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    description: {
      type: String,
      required: [true, "description is required"],
    },

    price: {
      type: String,
      required: [true, "Price is required"],
    },

    category: [
      {
        type: String,
        required: [true, "Category is required"],
      },
    ],

    pictures: {
      type: Array,
      required: [true, "Picture is required"],
    },
  },
  { minimize: false }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
