require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr = `mongodb+srv://ecommerce:${process.env.MONGO_PASS}@cluster0.0mzhp6a.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(connectionStr, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connected to mongoDb"))
  .then((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
