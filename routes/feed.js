const express = require("express");
const { body } = require("express-validator");

const { getPosts, createPosts, getPost } = require("../controllers/feed");

const router = express.Router();

//GET /feed/posts
router.get("/posts", getPosts);

router.get("/post/:postId", getPost);

router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
    body("imageUrl").trim().isURL(),
  ],
  createPosts
);

module.exports = router;
