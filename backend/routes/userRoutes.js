const express = require('express');
const router = express.Router();
const { getUserData } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/user', authMiddleware, getUserData); // Protegendo a rota com o middleware

module.exports = router;
