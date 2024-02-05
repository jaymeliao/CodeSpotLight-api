const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const userRoutes = require('./routes/users-routes');
const authRoutes = require('./routes/auth-routes');

app.use(express.json());
app.use(cors());
app.use('/', authRoutes);
app.use('/users', userRoutes);


const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
