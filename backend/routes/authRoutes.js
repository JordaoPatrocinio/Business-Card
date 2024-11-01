const express = require('express');
const router = express.Router();
const { registerPartner } = require('../controllers/partnerController');
const { registerAssociate } = require('../controllers/associateController');
const { getUser } = require('../controllers/userController'); // Adicione esta linha para importar o controlador

// Rota de cadastro de Partner
router.post('/partner/register', registerPartner);

// Rota de cadastro de Associate
router.post('/associate/register', registerAssociate);

// Rota para buscar dados do usuário
router.get('/user', getUser); // Adicione esta linha

module.exports = router;
