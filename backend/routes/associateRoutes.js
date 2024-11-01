const express = require('express');
const { registerAssociate, loginAssociate } = require('../controllers/associateController'); // Certifique-se do caminho correto
const router = express.Router();

// Rota para cadastro de associates
router.post('/register', registerAssociate);

// Rota para login de associates
router.post('/login', loginAssociate);

module.exports = router;
