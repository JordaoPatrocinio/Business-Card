const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extrair token do cabeçalho

  if (!token) {
    return res.status(401).json({ msg: 'Acesso negado. Token não encontrado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Define o ID do usuário na requisição
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token inválido' });
  }
};

module.exports = authMiddleware;