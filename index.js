const knex = require('knex')(require('./knexfile'));


const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
require("dotenv").config();

const PORT = process.env.PORT || 5050;
const jwt = require("jsonwebtoken");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const userRoutes = require("./routes/users-routes");
app.use("/users", userRoutes);

// function getToken(req) {
//   if (!req.headers.authorization) {
//     return;
//   } else {
//     return req.headers.authorization.split(" ")[1];
//   }
// }







app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  //const hashedPassword = await bcrypt.hash(password, 10); //2^10(1024) rounds of hashing
  const hashedPassword = password;
  try {
    const insertedIds = await knex("users").insert({
      username,
      email,
      password_hash: hashedPassword,
    });

    res.status(201).json({ success: true, userId: insertedIds[0]});
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY"){
      //Database has UNIQUE constraints on username and email.
      return res
        .status(409)
        .json({ error: "Username or email already exist." });
    }
    console.log(error);
    res.status(500).json({ message: "Could not create user" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await knex("users").where({ username }).first();

    if (user && password === user.password_hash) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "24h",
      });
      res.json({ token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Login failed" });
  }
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
