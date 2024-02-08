const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/auth");
const upload = require("../utils/multer");

const {
  getPostsByUser,
  getPostByPostId,
  getPosts,
  addNewPost,
  getLikedPosts,
  getMyPosts
} = require("../controllers/postController");



router.route("/").get(getPosts);

router.post(
  "/new-post",
  authenticateUser,
  upload.array("media", 5),
  addNewPost
);
router.get("/liked-posts", authenticateUser, getLikedPosts);
router.get("/my-posts", authenticateUser, getMyPosts);


router.route("/:postId").get(getPostByPostId);
router.route("/:userId/posts").get(getPostsByUser);

module.exports = router;
