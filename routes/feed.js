const express = require("express");
const { getPosts, createPosts } = require("../controllers/feed");

const router = express.Router();

//GET /feed/posts
router.get("/posts", getPosts);

router.post("/post", createPosts);

module.exports = router;
