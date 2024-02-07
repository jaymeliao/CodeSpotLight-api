const express = require('express');
const router = express.Router();
const authenticateUser  = require("../middleware/auth");
const upload = require("../utils/multer");

const { getUsers, updateUserProfile, getUserDetails} = require('../controllers/userController');

/* /user */
router.get('/users', getUsers);


router
  .route('/user')
  .get(authenticateUser, getUserDetails)
  .patch(authenticateUser, upload.single('profile_picture'), updateUserProfile); 
  //profile_picture :  your route expects a single file upload from a form field named 'profile_picture'
  // it meant to match the name attribute of the file input in your form or the key name in the multipart/form-data payload sent by the client. This name is used by Multer to identify which file to process in the incoming request.
  






module.exports = router;
