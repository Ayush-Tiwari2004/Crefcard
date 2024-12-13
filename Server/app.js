const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' 
    ? '.env.production'
    : '.env.development';

dotenv.config({ path: path.resolve(__dirname, `../${envFile}`) });

// Initialize express
const app = express();
const _dirname = path.resolve();

// Database connection
const connectDB = require('./config/db');
connectDB();

const cors = require('cors');

// Import routers
const authRouter = require('./routes/authroutes');
const postRouter = require('./routes/postrouts');
const adminRouter = require('./routes/adminroutes');
const profilePicRouter = require('./routes/profilepic');

// CORS options
const allowedOrigins = ['http://localhost:5173', 'https://crefcard.onrender.com'];
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Static file serving
app.use('/images', express.static(path.join(_dirname, 'public', 'images'))); 
app.use(express.static(path.join(_dirname, 'Client', 'dist'))); 

// API Routes
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);
app.use('/api/admin', adminRouter);
app.use('/api/profile', profilePicRouter);

// Health check route
app.get("/", (req, res) => {
    res.json({ message: "Server is running." });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'Client', 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
