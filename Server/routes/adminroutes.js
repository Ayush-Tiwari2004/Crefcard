const router = require('express').Router();
const {getAdmindata, deleteUserData, getUsersDataById, updateUsersDataById, adminLogin} = require('../controllers/admincontrollers');
const verifytoken = require('../middlewhere/tokenvalidation')
const adminmiddlewhere = require('../middlewhere/adminmiddlewhere')

router.get('/admin', verifytoken, adminmiddlewhere, getAdmindata); 
router.delete('/admin/delete/:id', verifytoken, adminmiddlewhere, deleteUserData);
router.get('/admin/:id', verifytoken, adminmiddlewhere, getUsersDataById);
router.patch('/admin/update/:id', verifytoken, adminmiddlewhere, updateUsersDataById);
router.post('/adminlogin', adminLogin )

module.exports = router;