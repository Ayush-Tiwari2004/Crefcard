const router = require('express').Router();
const uploadProfilePic = require('../controllers/profilepiccontrollers');
const upload = require('../config/multerconfig');

router.post('/upload', upload.single('profilepic'), uploadProfilePic);

module.exports = router; 