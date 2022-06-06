const express = require("express");
const router = express.Router();

const Post = require("../models/post");

router.get("/", (req, res) => {
  res.send("We are on posts");
});

router.post("/create", async (req, res) => {
  const { title, description } = req.body;
  try {
    const post = new Post({
      title,
      description,
    });
    await post.save();
    res.status(201).send("New post Added");
  } catch (error) {
    res.json({ message: error });
  }
  // .catch((err) => {
  //   res.status(404).json({ message: "hiiii eror hai" });
  // });
});
router.get("/all", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.send(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/deletepost/:id", async (req, res) => {
  const post = req.params.id;
  try {
    await Post.findOneAndDelete({ _id: post });
    res.status(200).send("Pizza Deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = router;
