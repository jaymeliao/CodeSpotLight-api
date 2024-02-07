const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const userRoutes = require('./routes/users-routes');
const authRoutes = require('./routes/auth-routes');

const postRoutes = require('./routes/posts-routes');
//app.use('/', express.static('uploads'));
app.use('/uploads', express.static('uploads'));

app.use(express.json());
app.use(cors());
app.use('/', userRoutes);
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);



const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
