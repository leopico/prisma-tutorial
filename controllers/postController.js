const prisma = require("../prisma/index");

//create a new post
exports.createPost = async (req, res, next) => {
  try {
    const { slug, title, body, authorId } = req.body;

    //validation on you
    const createdPost = await prisma.post.create({
      data: {
        slug,
        title,
        body,
        author: { connect: { id: authorId } }, //this is for authorId value
      },
    });
    res.json(createdPost);
  } catch (error) {
    throw new Error(error);
  }
};

//update post
exports.updatePost = async (req, res, next) => {
  const { id } = req.params;
  const { title, body } = req.body;

  try {
    const updatedPost = await prisma.post.update({
      where: { id: id },
      data: {
        title: title,
        body: body,
      },
    });
    res.json(updatedPost);
  } catch (error) {
    res.json({ error: `Post with ${id} does not exits.` });
  }
};

//delete post
exports.deletePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedPost = await prisma.post.delete({
      where: { id: id },
    });
    res.json(deletedPost);
  } catch (error) {
    res.json({ error: `Post with ${id} does not exits.` });
  }
};

//get all post
exports.getPosts = async (req, res, next) => {
  try {
    const getAllPosts = await prisma.post.findMany();
    res.json(getAllPosts);
  } catch (error) {
    res.json({ error: `No posts have found` });
  }
};
