const express = require("express");
const router = express.Router();

const {
  createPost,
  updatePost,
  deletePost,
  getPosts,
} = require("../controllers/postController");

router.route("/post/create").post(createPost);

router.route("/post/update/:id").put(updatePost);

router.route("/post/delete/:id").delete(deletePost);

router.route("/post/get").get(getPosts);

module.exports = router;
