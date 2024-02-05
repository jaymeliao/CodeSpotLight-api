const knex = require('knex')(require('../knexfile'));
const getUsers = async (req, res) => {
  try {
    const users = await knex('users');
    res.status(200).json(users);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
};

const getUserDetails = async (req, res) => {
    try {
      const userId = req.user.userId;
      const user = await knex('users').where({ id: userId }).first();
      if (user) {
        const { password_hash, ...userData } = user; // Exclude the password hash from the response
        res.json({ user: userData });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Failed to retrieve user data" });
    }
  };
  
module.exports = {
  getUsers,
  getUserDetails
};
