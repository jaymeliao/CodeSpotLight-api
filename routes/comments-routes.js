const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/auth");
const { addNewComment } = require("../controllers/commentController");

router.post("/new-comment", authenticateUser, addNewComment);

module.exports = router;
