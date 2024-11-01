const express = require('express');
const { registerPartner, loginPartner } = require('../controllers/partnerController');  // Import correto
const router = express.Router();

// Rota para registrar parceiros
router.post('/register', registerPartner);

// Rota para login de parceiros
router.post('/login', loginPartner);

module.exports = router;
