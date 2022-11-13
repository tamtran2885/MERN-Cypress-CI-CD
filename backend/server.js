const express = require("express");
const cors = require("cors");
const http = require("http"); // for socket.io
const { Server } = require("socket.io");
require("./connection");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: "*",
  methods: "*",
});

// const User = require("./models/User.model");
const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", userRoutes);

server.listen(5000, () => {
  console.log("server running at port 5000");
});
