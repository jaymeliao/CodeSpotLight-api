const express = require('express');
const { signup, login } = require('../controllers/authController');
const { getUserDetails} = require('../controllers/userController');

const router = express.Router();
const authorize = require('../middleware/auth');

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', authorize, getUserDetails);

module.exports = router;
