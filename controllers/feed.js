exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First post", content: "This is the first post" }],
  });
};

exports.createPosts = (req, res, next) => {
  const { title, content } = req.body;
  // create in the db
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      id: new Date().toISOString(),
      title,
      content,
    },
  });
};
