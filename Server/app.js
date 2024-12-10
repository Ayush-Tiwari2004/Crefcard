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

// Environment specific configuration
const isDevelopment = process.env.NODE_ENV !== 'production';

// CORS options based on environment
const corsOptions = isDevelopment 
  ? {
      origin: ["http://localhost:5173", "http://localhost:3000"], // Development ports
      methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
      credentials: true,
    }
  : {
      origin: "https://crefcard.onrender.com",
      methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
      credentials: true,
    };

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Static file serving
if (isDevelopment) {
  console.log('Running in development mode');
  app.use('/images', express.static(path.join(_dirname, 'public', 'images')));
} else {
  console.log('Running in production mode');
  app.use('/images', express.static(path.join(_dirname, 'public', 'images')));
  app.use(express.static(path.join(_dirname, 'Client', 'dist')));
}

// API Routes
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);
app.use('/api/admin', adminRouter);
app.use('/api/profile', profilePicRouter);

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ 
    message: "Server is running.",
    environment: isDevelopment ? 'development' : 'production',
    timestamp: new Date().toISOString()
  });
});

// Serve React app for all other routes (only in production)
if (!isDevelopment) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, 'Client', 'dist', 'index.html'));
  });
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
    🚀 Server is running in ${isDevelopment ? 'development' : 'production'} mode
    🌐 Server port: ${PORT}
    ⌚ ${new Date().toLocaleString()}
  `);
});
