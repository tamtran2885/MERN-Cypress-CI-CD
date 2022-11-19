require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr = process.env.MONGO_URL;

mongoose
  .connect(connectionStr, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connected to mongoDb"))
  .then((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
