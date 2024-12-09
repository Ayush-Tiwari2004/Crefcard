const router = require('express').Router();
const { signup, login, resetPassword, forgotPassword, changePassword } = require('../controllers/authcontrollers'); // Include changeProfilePic here
const { signupValidation, loginValidation } = require('../middlewhere/authValidation');

// Routes for signup and login
router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);
router.post('/reset-password', resetPassword);
router.get('/forgot-password/:id/:token', forgotPassword);
router.post('/:id/:token', changePassword);

module.exports = router;

