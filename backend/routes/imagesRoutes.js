const cloudinary = require("cloudinary");
const router = require("express").Router();
require("dotenv").config();

const cloudName = "duwlzhh5h";
const cloudApiKey = "667639487766453";
const cloudApiSecret = "rurP5wnCzmtcwjxOcjocwYpds-I";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || cloudName,
  api_key: process.env.CLOUD_API_KEY || cloudApiKey,
  api_secret: process.env.CLOUD_API_SECRET || cloudApiSecret,
});

router.delete("/:public_id", async (req, res) => {
  const { public_id } = req.params;
  try {
    await cloudinary.uploader.destroy(public_id);
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
