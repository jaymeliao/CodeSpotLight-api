const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");
const knex = require("knex")(require("../knexfile"));

// Route to get all posts with user's name and username
router.get('/', async (req, res) => {
  try {
    const posts = await knex('posts')
      .select('posts.*', 'users.name', 'users.username')
      .leftJoin('users', 'posts.user_id', 'users.id');
    
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

