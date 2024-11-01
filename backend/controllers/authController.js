const Partner = require('../models/Partner');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.loginPartner = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verifica se o usuário existe
    const partner = await Partner.findOne({ email });
    if (!partner) return res.status(400).json({ msg: 'Usuário não encontrado' });

    // Valida a senha
    const isMatch = await bcrypt.compare(senha, partner.senha);
    if (!isMatch) return res.status(400).json({ msg: 'Senha incorreta' });

    // Gera o token JWT
    const token = jwt.sign(
      { id: partner._id, nomeResponsavel: partner.nomeResponsavel, email: partner.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};
