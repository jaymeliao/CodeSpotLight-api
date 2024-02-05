const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const insertedIds = await knex("users").insert({
      name,
      username,
      email,
      password_hash: hashedPassword,
    });
    res.status(201).json({ success: true, userId: insertedIds[0] });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res
        .status(409)
        .json({ error: "Username or email already exist." });
    }
    console.log(error);
    res.status(500).json({ message: "Could not create user" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await knex("users").where({ username }).first();
    if (user && (await bcrypt.compare(password, user.password_hash))) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "24h",
      });
      res.json({ token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login failed" });
  }
};

module.exports = { signup, login };
