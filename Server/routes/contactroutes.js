const router = require('express').Router();
const contactOnMail = require('../controllers/contactcontrollers')

router.post('/contact', contactOnMail);

module.exports = router;