const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Replace with your Cloudinary cloud name
    api_key: process.env.CLOUDINARY_API_KEY,       // Replace with your Cloudinary API key
    api_secret: process.env.CLOUDINARY_API_SECRET  // Replace with your Cloudinary API secret
});

// Configure Multer-Cloudinary Storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'profile_pics',    // Folder in Cloudinary to save images
        allowed_formats: ['jpg', 'png', 'jpeg'], // Supported formats
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
