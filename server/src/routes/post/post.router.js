const express = require("express");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const PostModel = require("../../mongodb/models/post");
const postRouter = express.Router();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const opts = { 
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

//const uploadPreset  = process.env.VITE_UPLOAD_PRESET  ;
postRouter.route("/").get(async (req, res, next) => {
  try {
    const posts = await PostModel.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res
      .status(500)
      .json({ 
        success: false,
        message: "Fetching posts failed, please try again",
      });
  }
  //next() ;
});

postRouter.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await PostModel.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res
      .status(500)
      .json({
        error: err,
        success: false,
        message: "Unable to create a post, please try again",
      });
  }
});

module.exports = postRouter;
