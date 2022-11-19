require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http"); // for socket.io
const { Server } = require("socket.io");
const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
require("./connection");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: "*",
  methods: "*",
});

// const User = require("./models/User.model");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const imagesRoutes = require("./routes/imagesRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/images", imagesRoutes);
app.use("/orders", orderRoutes);

app.post("/create-payment", async (req, res) => {
  const { amount } = req.body;
  console.log(amount);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.status(200).json(paymentIntent);
  } catch (e) {
    console.log(e.message);
    res.status(400).json(e.message);
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

server.listen(process.env.PORT || 5000, () => {
  console.log("server running at port 5000");
});
