const express = require('express');
const app = express();
require('dotenv').config();
require('./config/db');
const cors = require('cors');
const path = require('path');
const _dirname = path.resolve();
// Import routers
const authRouter = require('./routes/authroutes');
const postRouter = require('./routes/postrouts');
const adminRouter = require('./routes/adminroutes');
const profilePicRouter = require('./routes/profilepic');

// CORS options
const corsOptions = {
    origin: "https://crefcard.onrender.com",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Static file serving
app.use('/images', express.static(path.join(_dirname, 'public', 'images'))); // For images
app.use(express.static(path.join(_dirname, 'Client', 'dist'))); // For React build files

// API Routes
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter); // Unique route for posts
app.use('/api/admin', adminRouter); // Unique route for admin
app.use('/api/profile', profilePicRouter); // Unique route for profile picture

// Health check route
app.get("/", (req, res) => {
    res.json({ message: "Server is running." });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'Client', 'dist', 'index.html'));
});

// Start the servers
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
