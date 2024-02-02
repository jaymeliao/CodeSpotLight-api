const express = require('express');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5050;

const userRoutes = require('./routes/users-routes');

// all users routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
  });
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});