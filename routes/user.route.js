const express = require('express')
const router = express.Router();
const userController = require('../controllers/User.controller');
const verifyToken = require('../middleware/verifyToken');


router.post('/signUp', userController.signupUser)
router.post('/login', userController.loginUser)
router.get('/me', verifyToken, userController.getMe)

module.exports = router;