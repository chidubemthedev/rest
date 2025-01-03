exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First post",
        content: "This is the first post",
        imageUrl: "www.picsum/photos/200",
        creator: {
          name: "Abayomi",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPosts = (req, res, next) => {
  const { title, content, imageUrl } = req.body;
  // create in the db
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      _id: new Date().toISOString(),
      title,
      content,
      imageUrl,
      creator: {
        name: "Destiny",
      },
      createdAt: new Date(),
    },
  });
};
