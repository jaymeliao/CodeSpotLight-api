const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/auth");
const { getAllTags } = require("../controllers/tagController");

router.get('/', getAllTags);

module.exports = router;
