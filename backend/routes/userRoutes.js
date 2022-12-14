const router = require("express").Router();
const User = require("../models/User.model");
const Order = require("../models/Order.model");

/***** Sign Up ****/
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    res.json(user);
  } catch (e) {
    if (e.code === 11000)
      return res.status(400).send("Email has already existed");
    res.status(400).send(e.message);
  }
});

/****** Login *****/
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByCredentials(email, password);
    res.json(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

/****** Get users ******/
router.get("/", async (req, res) => {
  try {
    const users = User.find({ isAdmin: false }.populate("orders"));
    res.json(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

/***** Get user orders *****/
router.get("/:id/orders", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).populate("orders");
    res.json(user.orders);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
